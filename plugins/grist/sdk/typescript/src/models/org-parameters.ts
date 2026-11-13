import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type OrgParameters = {
  name?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const orgParametersSchema: Schema<OrgParameters> = s.object<OrgParameters>(
  {
    name: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
