import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { methodSchema, type Method } from "./method.js";
import { idSchema, type Id } from "./unions/id.js";

export type JsonRpcRequest = {
  /** @default "2.0" */
  jsonrpc?: "2.0";
  id: Id;
  method: Method;
  params?: Record<string, unknown>[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const jsonRpcRequestSchema: Schema<JsonRpcRequest> = s.object<JsonRpcRequest>(
  {
    jsonrpc: s.defaulted(s.literal("2.0"), "2.0"),
    id: idSchema,
    method: methodSchema,
    params: s.optional(s.array(s.record(s.string(), s.unknown()))),
  },
  { additionalProperties: s.json() },
);
