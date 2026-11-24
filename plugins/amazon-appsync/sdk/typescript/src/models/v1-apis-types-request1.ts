import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { format4Schema, type Format4 } from "./format4.js";

export type V1ApisTypesRequest1 = {
  /** The new definition. */
  definition?: string;
  /** The new type format: SDL or JSON. */
  format: Format4;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const v1ApisTypesRequest1Schema: Schema<V1ApisTypesRequest1> = s.object<V1ApisTypesRequest1>(
  {
    definition: s.optional(s.string()),
    format: format4Schema,
  },
  { additionalProperties: s.json() },
);
