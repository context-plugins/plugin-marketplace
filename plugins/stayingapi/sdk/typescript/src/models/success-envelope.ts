import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { metaInternalSchema, metaSchema, type Meta } from "./meta.js";

export type SuccessEnvelope = {
  /** Endpoint-specific data payload. */
  data: Record<string, unknown>;
  /** Canonical response metadata present on every 200 (§6.3.3). */
  meta: Meta;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const successEnvelopeProperties: s.Shape<SuccessEnvelope> = {
  data: s.record(s.string(), s.unknown()),
  meta: metaInternalSchema,
};

export const successEnvelopeInternalSchema: Schema<SuccessEnvelope> = s.object<SuccessEnvelope>(
  successEnvelopeProperties,
  { additionalProperties: s.json() },
);

export const successEnvelopeSchema: Schema<SuccessEnvelope> = s.lazySchema(() =>
  s.object<SuccessEnvelope>(
    {
      ...successEnvelopeProperties,
      meta: metaSchema,
    },
    { additionalProperties: s.json() },
  ),
);
