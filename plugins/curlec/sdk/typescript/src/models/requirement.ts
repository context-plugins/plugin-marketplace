import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type Requirement = {
  fieldReference?: string;
  resolutionUrl?: string;
  status?: string;
  reasonCode?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const requirementSchema: Schema<Requirement> = s.object<Requirement>(
  {
    fieldReference: s.optional(s.string()),
    resolutionUrl: s.optional(s.string()),
    status: s.optional(s.string()),
    reasonCode: s.optional(s.string()),
    _keysMap: {
      fieldReference: "field_reference",
      resolutionUrl: "resolution_url",
      reasonCode: "reason_code",
    },
  },
  { additionalProperties: s.json() },
);
