import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type Relationship = {
  /** Relationship type (e.g. `management`, `ownership`). */
  kind: string;
  /** Role label (e.g. `PREZES ZARZĄDU`), if available. */
  role: string | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const relationshipSchema: Schema<Relationship> = s.object<Relationship>(
  {
    kind: s.string(),
    role: s.nullable(s.string()),
  },
  { additionalProperties: s.json() },
);
