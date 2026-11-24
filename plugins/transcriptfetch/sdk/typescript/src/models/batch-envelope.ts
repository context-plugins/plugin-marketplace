import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { dataSchema, type Data } from "./data.js";
import { usageSchema, type Usage } from "./usage.js";

export type BatchEnvelope = {
  /** @default "True" */
  ok?: "True";
  requestId: string;
  data: Data;
  usage: Usage;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const batchEnvelopeSchema: Schema<BatchEnvelope> = s.object<BatchEnvelope>(
  {
    ok: s.defaulted(s.literal("True"), "True"),
    requestId: s.string(),
    data: dataSchema,
    usage: usageSchema,
    _keysMap: {
      requestId: "request_id",
    },
  },
  { additionalProperties: s.json() },
);
