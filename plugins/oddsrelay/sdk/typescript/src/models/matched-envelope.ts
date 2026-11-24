import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { matchedEventSchema, type MatchedEvent } from "./matched-event.js";
import { matchedMetaSchema, type MatchedMeta } from "./matched-meta.js";

export type MatchedEnvelope = {
  meta: MatchedMeta;
  data: MatchedEvent[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const matchedEnvelopeSchema: Schema<MatchedEnvelope> = s.object<MatchedEnvelope>(
  {
    meta: matchedMetaSchema,
    data: s.array(s.lazy(() => matchedEventSchema)),
  },
  { additionalProperties: s.json() },
);
