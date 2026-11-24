import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const AutomationsGetRequestExpandItem = {
  Stats: "stats",
} as const;
export type AutomationsGetRequestExpandItem =
  | (typeof AutomationsGetRequestExpandItem)[keyof typeof AutomationsGetRequestExpandItem]
  | (string & {});

export const automationsGetRequestExpandItemSchema: EnumSchema<AutomationsGetRequestExpandItem> =
  s.enumOf<AutomationsGetRequestExpandItem>(AutomationsGetRequestExpandItem);
