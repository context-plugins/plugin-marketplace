import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { classificationSchema, type Classification } from "./classification.js";

/** A Boomi runtime environment where Atoms are assigned and processes are deployed. */
export type Environment = {
  /** Unique identifier of the environment. */
  id?: string;
  /** Display name of the environment. */
  name?: string;
  /** Environment classification. */
  classification?: Classification;
  /** Timestamp when the environment was created. */
  createdDate?: Date;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const environmentSchema: Schema<Environment> = s.object<Environment>(
  {
    id: s.optional(s.string()),
    name: s.optional(s.string()),
    classification: s.optional(s.lazy(() => classificationSchema)),
    createdDate: s.optional(s.dateTime()),
  },
  { additionalProperties: s.json() },
);
