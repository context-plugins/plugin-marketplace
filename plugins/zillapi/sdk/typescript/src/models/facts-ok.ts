import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type FactsOk = {
  /**
   * resoFacts blob — the full MLS attribute set (appliances, flooring, parking, view, and hundreds
   * of other fields).
   */
  data?: Record<string, unknown>;
  requestId?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const factsOkSchema: Schema<FactsOk> = s.object<FactsOk>(
  {
    data: s.optional(s.record(s.string(), s.unknown())),
    requestId: s.optional(s.string()),
    _keysMap: {
      requestId: "request_id",
    },
  },
  { additionalProperties: s.json() },
);
