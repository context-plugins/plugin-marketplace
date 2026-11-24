import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { errorSchema, type Error } from "./error.js";
import { idSchema, type Id } from "./unions/id.js";

export type JsonRpcResponse = {
  jsonrpc: string;
  id: Id | null;
  result?: Record<string, unknown>;
  error?: Error;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const jsonRpcResponseSchema: Schema<JsonRpcResponse> = s.object<JsonRpcResponse>(
  {
    jsonrpc: s.string(),
    id: s.nullable(s.lazy(() => idSchema)),
    result: s.optional(s.record(s.string(), s.unknown())),
    error: s.optional(s.lazy(() => errorSchema)),
  },
  { additionalProperties: s.json() },
);
