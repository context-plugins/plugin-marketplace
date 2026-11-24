import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { protobufAnySchema, type ProtobufAny } from "./protobuf-any.js";

export type RpcStatus = {
  code?: number;
  message?: string;
  details?: ProtobufAny[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const rpcStatusSchema: Schema<RpcStatus> = s.object<RpcStatus>(
  {
    code: s.optional(s.int()),
    message: s.optional(s.string()),
    details: s.optional(s.array(s.lazy(() => protobufAnySchema))),
  },
  { additionalProperties: s.json() },
);
