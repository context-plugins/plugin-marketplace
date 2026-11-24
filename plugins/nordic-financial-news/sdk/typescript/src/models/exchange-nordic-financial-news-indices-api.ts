import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Exchange associated with this index */
export type ExchangeNordicFinancialNewsIndicesApi = {
  id?: string;
  name?: string;
  micCode?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const exchangeNordicFinancialNewsIndicesApiSchema: Schema<ExchangeNordicFinancialNewsIndicesApi> =
  s.object<ExchangeNordicFinancialNewsIndicesApi>(
    {
      id: s.optional(s.string()),
      name: s.optional(s.string()),
      micCode: s.optional(s.string()),
      _keysMap: {
        micCode: "mic_code",
      },
    },
    { additionalProperties: s.json() },
  );
