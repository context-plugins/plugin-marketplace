import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Configuration for applying a specific classifier */
export type ClassifierOption = {
  /** Unique identifier of the classifier to apply */
  classifierId: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const classifierOptionSchema: Schema<ClassifierOption> = s.object<ClassifierOption>(
  {
    classifierId: s.string(),
  },
  { additionalProperties: s.json() },
);
