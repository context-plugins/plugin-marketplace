import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type ProtobufAny = {
  type?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, unknown>;
};

export const protobufAnySchema: Schema<ProtobufAny> = s.object<ProtobufAny>(
  {
    type: s.optional(s.string()),
    _keysMap: {
      type: "@type",
    },
  },
  { additionalProperties: s.unknown() },
);
