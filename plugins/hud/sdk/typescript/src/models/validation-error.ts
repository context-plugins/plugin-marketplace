import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { locationSchema, type Location } from "./unions/location.js";

export type ValidationError = {
  type: string;
  loc: Location[];
  msg: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const validationErrorSchema: Schema<ValidationError> = s.object<ValidationError>(
  {
    type: s.string(),
    loc: s.array(s.lazy(() => locationSchema)),
    msg: s.string(),
  },
  { additionalProperties: s.json() },
);
