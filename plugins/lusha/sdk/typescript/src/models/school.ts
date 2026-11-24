import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type School = {
  id?: string | null;
  logoUrl?: string | null;
  name?: string | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const schoolSchema: Schema<School> = s.object<School>(
  {
    id: s.optionalNullable(s.string()),
    logoUrl: s.optionalNullable(s.string()),
    name: s.optionalNullable(s.string()),
  },
  { additionalProperties: s.json() },
);
