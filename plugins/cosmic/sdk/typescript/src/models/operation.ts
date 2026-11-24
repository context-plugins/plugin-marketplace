import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { methodSchema, type Method } from "./method.js";
import { objectModelSchema, type ObjectModel } from "./object-model.js";
import { status3Schema, type Status3 } from "./status3.js";

export type Operation = {
  method?: Method;
  status?: Status3;
  /** A single piece of content. Which properties are present depends on `props`. */
  object?: ObjectModel;
  /** Present on deletes and on failures. */
  message?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const operationSchema: Schema<Operation> = s.object<Operation>(
  {
    method: s.optional(s.lazy(() => methodSchema)),
    status: s.optional(s.lazy(() => status3Schema)),
    object: s.optional(s.lazy(() => objectModelSchema)),
    message: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
