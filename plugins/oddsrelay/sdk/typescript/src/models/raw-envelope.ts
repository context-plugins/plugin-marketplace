import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { rawEventSchema, type RawEvent } from "./raw-event.js";
import { rawMetaSchema, type RawMeta } from "./raw-meta.js";

export type RawEnvelope = {
  meta: RawMeta;
  data: RawEvent[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const rawEnvelopeSchema: Schema<RawEnvelope> = s.object<RawEnvelope>(
  {
    meta: rawMetaSchema,
    data: s.array(s.lazy(() => rawEventSchema)),
  },
  { additionalProperties: s.json() },
);
