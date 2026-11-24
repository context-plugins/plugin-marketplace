import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type ValidationResults = {
  accountStatus?: string;
  registeredName?: string;
  nameMatchScore?: number;
  details?: Record<string, unknown>;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const validationResultsSchema: Schema<ValidationResults> = s.object<ValidationResults>(
  {
    accountStatus: s.optional(s.string()),
    registeredName: s.optional(s.string()),
    nameMatchScore: s.optional(s.int()),
    details: s.optional(s.record(s.string(), s.unknown())),
    _keysMap: {
      accountStatus: "account_status",
      registeredName: "registered_name",
      nameMatchScore: "name_match_score",
    },
  },
  { additionalProperties: s.json() },
);
