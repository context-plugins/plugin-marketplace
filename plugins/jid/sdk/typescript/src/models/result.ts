import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type Result = {
  id?: string;
  name?: string;
  kind?: string;
  status?: string;
  statusSummary?: string | null;
  matchedOn?: string;
  url?: string;
  verifyUrl?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const resultSchema: Schema<Result> = s.object<Result>(
  {
    id: s.optional(s.string()),
    name: s.optional(s.string()),
    kind: s.optional(s.string()),
    status: s.optional(s.string()),
    statusSummary: s.optionalNullable(s.string()),
    matchedOn: s.optional(s.string()),
    url: s.optional(s.string()),
    verifyUrl: s.optional(s.string()),
    _keysMap: {
      statusSummary: "status_summary",
      matchedOn: "matched_on",
      verifyUrl: "verify_url",
    },
  },
  { additionalProperties: s.json() },
);
