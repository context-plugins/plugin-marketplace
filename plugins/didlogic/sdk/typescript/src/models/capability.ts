import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { methodSchema, type Method } from "./method.js";

export type Capability = {
  /** HTTP method of the operation */
  method: Method;
  /** Path of the operation as written in this reference, with path parameters */
  path: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const capabilitySchema: Schema<Capability> = s.object<Capability>(
  {
    method: methodSchema,
    path: s.string(),
  },
  { additionalProperties: s.json() },
);
