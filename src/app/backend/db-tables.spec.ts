import { Position } from "@prisma/client";
import prisma from "../frontend/lib/db/prisma";

it.skip("should cleanUp ", async () => {
  expect.assertions(0);
  await cleanUp();
});

it.skip("should populate tables", async () => {
  await cleanUp();

  const createdLiga = await liga("Fut Veteranos");
  expect(createdLiga.name).toBe("Fut Veteranos");

  const createdPlayer = await player(createdLiga.ligaId, "Celso", "Defender");
  expect(createdPlayer.name).toBe("Celso");
  expect(createdPlayer.position).toBe("Defender");

  const createdGreenTeam = await team(createdLiga.ligaId, "Green");
  expect(createdGreenTeam.name).toBe("Green");
  const createdRedTeam = await team(createdLiga.ligaId, "Red");
  expect(createdRedTeam.name).toBe("Red");

  const today = new Date();
  const createdGameDay = await gameDay(createdLiga.ligaId, today);
  expect(createdGameDay.gameDay).toStrictEqual(today);

  const createdGame = await game(
    createdGameDay.gameDayId,
    1,
    createdGreenTeam.teamId,
    createdRedTeam.teamId,
    0,
    0,
  );
  expect(createdGame.homeGols).toBe(0);
  expect(createdGame.awayGols).toBe(0);

  const createdAction = await action(
    "6539cb487bd5e1ec8cc7e161",
    createdGreenTeam.teamId,
    createdPlayer.playerId,
    0,
    0,
  );
  expect(createdAction.gols).toBe(0);
  expect(createdAction.assists).toBe(0);
});

async function cleanUp() {
  await prisma.ligaModel.deleteMany();
}

async function liga(name: string) {
  return await prisma.ligaModel.create({
    data: {
      name,
    },
  });
}

async function player(ligaId: string, name: string, position: Position) {
  return await prisma.playerModel.create({
    data: {
      ligaId,
      name,
      position,
    },
  });
}

async function team(ligaId: string, name: string) {
  return await prisma.teamModel.create({
    data: {
      ligaId,
      name,
    },
  });
}

async function gameDay(ligaId: string, gameDay: Date) {
  return await prisma.gameDayModel.create({
    data: {
      ligaId,
      gameDay,
    },
  });
}

async function game(
  gameDayId: string,
  gameNumber: number,
  homeId: string,
  awayId: string,
  homeGols: number,
  awayGols: number,
) {
  return await prisma.gameModel.create({
    data: {
      gameDayId,
      gameNumber,
      homeId,
      awayId,
      homeGols,
      awayGols,
    },
  });
}

async function action(
  gameId: string,
  teamId: string,
  playerId: string,
  gols: number,
  assists: number,
) {
  return await prisma.actionModel.create({
    data: {
      gameId,
      teamId,
      playerId,
      gols,
      assists,
    },
  });
}
