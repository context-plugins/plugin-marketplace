import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The status used to filter reports. You can filter using one status only. */
export const Status6 = {
  Generating: "GENERATING",
  Succeeded: "SUCCEEDED",
  Failed: "FAILED",
  Incomplete: "INCOMPLETE",
  Deleting: "DELETING",
} as const;
export type Status6 = (typeof Status6)[keyof typeof Status6] | (string & {});

export const status6Schema: EnumSchema<Status6> = s.enumOf<Status6>(Status6);
