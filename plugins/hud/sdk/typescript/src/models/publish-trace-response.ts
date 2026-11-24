import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type PublishTraceResponse = {
  /** @default true */
  success?: boolean;
  message: string;
  publicUrl: string;
  traceId: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const publishTraceResponseSchema: Schema<PublishTraceResponse> = s.object<PublishTraceResponse>(
  {
    success: s.defaulted(s.boolean(), true),
    message: s.string(),
    publicUrl: s.string(),
    traceId: s.string(),
    _keysMap: {
      publicUrl: "public_url",
      traceId: "trace_id",
    },
  },
  { additionalProperties: s.json() },
);
