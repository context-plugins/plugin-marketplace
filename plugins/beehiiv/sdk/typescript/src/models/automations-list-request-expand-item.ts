import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const AutomationsListRequestExpandItem = {
  Stats: "stats",
} as const;
export type AutomationsListRequestExpandItem =
  | (typeof AutomationsListRequestExpandItem)[keyof typeof AutomationsListRequestExpandItem]
  | (string & {});

export const automationsListRequestExpandItemSchema: EnumSchema<AutomationsListRequestExpandItem> =
  s.enumOf<AutomationsListRequestExpandItem>(AutomationsListRequestExpandItem);
