import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type Datum = {
  id: string;
  /** Answers typed so far, keyed by field id. */
  data: Record<string, unknown>;
  /** Zero-based page reached. */
  page: number;
  updatedAt: number;
  expiresAt: number;
  /** externalId, email, and name when identify() named the person. */
  respondent: Record<string, unknown> | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const datumSchema: Schema<Datum> = s.object<Datum>(
  {
    id: s.string(),
    data: s.record(s.string(), s.unknown()),
    page: s.int(),
    updatedAt: s.int(),
    expiresAt: s.int(),
    respondent: s.nullable(s.record(s.string(), s.unknown())),
  },
  { additionalProperties: s.json() },
);
