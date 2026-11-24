import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type TestPayload = {
  entityType?: string;
  signalType?: string;
  data?: Record<string, unknown>;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const testPayloadSchema: Schema<TestPayload> = s.object<TestPayload>(
  {
    entityType: s.optional(s.string()),
    signalType: s.optional(s.string()),
    data: s.optional(s.record(s.string(), s.unknown())),
  },
  { additionalProperties: s.json() },
);
