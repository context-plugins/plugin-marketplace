import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const PollResponsesExpandItems = {
  Post: "post",
} as const;
export type PollResponsesExpandItems =
  | (typeof PollResponsesExpandItems)[keyof typeof PollResponsesExpandItems]
  | (string & {});

export const pollResponsesExpandItemsSchema: EnumSchema<PollResponsesExpandItems> =
  s.enumOf<PollResponsesExpandItems>(PollResponsesExpandItems);
