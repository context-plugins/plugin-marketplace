import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { quoteSchema, type Quote } from "../quote.js";
import { rawEnvelopeSchema, type RawEnvelope } from "../raw-envelope.js";
import { rawEventSchema, type RawEvent } from "../raw-event.js";

export type V2OddsRawResponse = RawEnvelope | RawEvent[] | Quote;

export const v2OddsRawResponseSchema: Schema<V2OddsRawResponse> = s.of<V2OddsRawResponse>(
  s.union([
    s.lazy(() => rawEnvelopeSchema),
    s.array(s.lazy(() => rawEventSchema)),
    s.lazy(() => quoteSchema),
  ]),
);
