import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** An object containing references to the source of the error. */
export type Source = {
  /** String indicating which URI query parameter caused the error. */
  parameter?: string;
  /** Location to the object or attribute that the error relates to. */
  pointer?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const sourceSchema: Schema<Source> = s.object<Source>(
  {
    parameter: s.optional(s.string()),
    pointer: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
