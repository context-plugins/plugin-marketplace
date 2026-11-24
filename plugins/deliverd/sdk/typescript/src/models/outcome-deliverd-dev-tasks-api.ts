import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const OutcomeDeliverdDevTasksApi = {
  Applied: "applied",
  Kept: "kept",
  Discarded: "discarded",
} as const;
export type OutcomeDeliverdDevTasksApi =
  | (typeof OutcomeDeliverdDevTasksApi)[keyof typeof OutcomeDeliverdDevTasksApi]
  | (string & {});

export const outcomeDeliverdDevTasksApiSchema: EnumSchema<OutcomeDeliverdDevTasksApi> =
  s.enumOf<OutcomeDeliverdDevTasksApi>(OutcomeDeliverdDevTasksApi);
