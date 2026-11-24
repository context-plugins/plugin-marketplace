import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { valueSchema, type Value } from "./unions/value.js";

export type DetailedError = {
  location: string;
  message: string;
  value?: Value;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const detailedErrorSchema: Schema<DetailedError> = s.object<DetailedError>(
  {
    location: s.string(),
    message: s.string(),
    value: s.optional(s.lazy(() => valueSchema)),
  },
  { additionalProperties: s.json() },
);
