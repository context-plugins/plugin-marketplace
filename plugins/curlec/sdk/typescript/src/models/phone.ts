import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { primarySchema, type Primary } from "./primary.js";
import { secondarySchema, type Secondary } from "./secondary.js";

export type Phone = {
  primary?: Primary;
  secondary?: Secondary;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const phoneSchema: Schema<Phone> = s.object<Phone>(
  {
    primary: s.optional(s.lazy(() => primarySchema)),
    secondary: s.optional(s.lazy(() => secondarySchema)),
  },
  { additionalProperties: s.json() },
);
