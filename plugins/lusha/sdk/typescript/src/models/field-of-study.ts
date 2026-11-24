import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type FieldOfStudy = {
  id?: string | null;
  name?: string | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const fieldOfStudySchema: Schema<FieldOfStudy> = s.object<FieldOfStudy>(
  {
    id: s.optionalNullable(s.string()),
    name: s.optionalNullable(s.string()),
  },
  { additionalProperties: s.json() },
);
