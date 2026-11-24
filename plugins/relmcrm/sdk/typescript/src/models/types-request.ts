import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type TypesRequest = {
  key: string;
  label?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const typesRequestSchema: Schema<TypesRequest> = s.object<TypesRequest>(
  {
    key: s.string(),
    label: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
