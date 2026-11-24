import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { taxHistoryEventSchema, type TaxHistoryEvent } from "./tax-history-event.js";

export type TaxHistoryOk = {
  data?: TaxHistoryEvent[];
  requestId?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const taxHistoryOkSchema: Schema<TaxHistoryOk> = s.object<TaxHistoryOk>(
  {
    data: s.optional(s.array(s.lazy(() => taxHistoryEventSchema))),
    requestId: s.optional(s.string()),
    _keysMap: {
      requestId: "request_id",
    },
  },
  { additionalProperties: s.json() },
);
