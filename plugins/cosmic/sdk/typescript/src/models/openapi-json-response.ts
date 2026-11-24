import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** An OpenAPI 3.1 document. */
export type OpenapiJsonResponse = {
  openapi: string;
  info: Record<string, unknown>;
  paths: Record<string, unknown>;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const openapiJsonResponseSchema: Schema<OpenapiJsonResponse> = s.object<OpenapiJsonResponse>(
  {
    openapi: s.string(),
    info: s.record(s.string(), s.unknown()),
    paths: s.record(s.string(), s.unknown()),
  },
  { additionalProperties: s.json() },
);
