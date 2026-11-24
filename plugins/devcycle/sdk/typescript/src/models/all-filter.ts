import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type AllFilter = {
  /** Filter type of this audience @default "all" */
  type?: "all";
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const allFilterSchema: Schema<AllFilter> = s.object<AllFilter>(
  {
    type: s.defaulted(s.literal("all"), "all"),
  },
  { additionalProperties: s.json() },
);
