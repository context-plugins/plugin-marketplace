import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { priceHistoryEventSchema, type PriceHistoryEvent } from "./price-history-event.js";

export type PriceHistoryOk = {
  data?: PriceHistoryEvent[];
  requestId?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const priceHistoryOkSchema: Schema<PriceHistoryOk> = s.object<PriceHistoryOk>(
  {
    data: s.optional(s.array(s.lazy(() => priceHistoryEventSchema))),
    requestId: s.optional(s.string()),
    _keysMap: {
      requestId: "request_id",
    },
  },
  { additionalProperties: s.json() },
);
