import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { quoteSchema, type Quote } from "../quote.js";
import { rawEventSchema, type RawEvent } from "../raw-event.js";

export type V2OddsEventResponse = RawEvent | Quote;

export const v2OddsEventResponseSchema: Schema<V2OddsEventResponse> = s.of<V2OddsEventResponse>(
  s.union([s.lazy(() => rawEventSchema), s.lazy(() => quoteSchema)]),
);
