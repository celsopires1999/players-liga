import { TCreatePlayerSchema } from "@/app/frontend/lib/types/create-player";
import { Button } from "@/app/frontend/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/app/frontend/components/ui/form";
import { Input } from "@/app/frontend/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/app/frontend/components/ui/select";
import { Loader2 } from "lucide-react";
import { UseFormReturn } from "react-hook-form";

type CreatePlayerFormProps = {
  form: UseFormReturn<TCreatePlayerSchema>;
  onSubmit: (input: TCreatePlayerSchema) => Promise<void>;
};

export function CreatePlayerForm({ form, onSubmit }: CreatePlayerFormProps) {
  const isLoading = form.formState.isLoading || form.formState.isSubmitting;

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input placeholder="name" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="imageUrl"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Imagem</FormLabel>
              <FormControl>
                <Input placeholder="https://image.com" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="position"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Position</FormLabel>
              <Select onValueChange={field.onChange} value={field.value}>
                {/* <Select onValueChange={field.onChange} defaultValue={field.value}> */}
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a position" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="Goalkeeper">Goalkeeper</SelectItem>
                  <SelectItem value="Defender">Defender</SelectItem>
                  <SelectItem value="Midfielder">Midfielder</SelectItem>
                  <SelectItem value="Forward">Forward</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
        {/* <FormField
          control={form.control}
          name="liga_id"
          render={({ field }) => (
            <FormItemHidden>
              <FormControl>
                <InputHidden {...field} />
              </FormControl>
              <FormMessage />
            </FormItemHidden>
          )}
        /> */}
        <Button type="submit">
          {isLoading && <Loader2 className="mr-2 h-5 w-5 animate-spin" />}
          Create Player
        </Button>
      </form>
    </Form>
  );
}
