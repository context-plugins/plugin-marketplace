import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { errorSchema, type Error } from "./error.js";

export type V1Campaigns409Error = {
  error: Error;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const v1Campaigns409ErrorSchema: Schema<V1Campaigns409Error> = s.object<V1Campaigns409Error>(
  {
    error: errorSchema,
  },
  { additionalProperties: s.json() },
);
