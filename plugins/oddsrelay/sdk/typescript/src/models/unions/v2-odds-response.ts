import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { matchedEnvelopeSchema, type MatchedEnvelope } from "../matched-envelope.js";
import { matchedEventSchema, type MatchedEvent } from "../matched-event.js";
import { quoteSchema, type Quote } from "../quote.js";

export type V2OddsResponse = MatchedEnvelope | MatchedEvent[] | Quote;

export const v2OddsResponseSchema: Schema<V2OddsResponse> = s.of<V2OddsResponse>(
  s.union([
    s.lazy(() => matchedEnvelopeSchema),
    s.array(s.lazy(() => matchedEventSchema)),
    s.lazy(() => quoteSchema),
  ]),
);
