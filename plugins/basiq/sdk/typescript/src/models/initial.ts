import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { createdSchema, type Created } from "./created.js";

export type Initial = {
  created?: Created;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const initialSchema: Schema<Initial> = s.object<Initial>(
  {
    created: s.optional(s.lazy(() => createdSchema)),
  },
  { additionalProperties: s.json() },
);
