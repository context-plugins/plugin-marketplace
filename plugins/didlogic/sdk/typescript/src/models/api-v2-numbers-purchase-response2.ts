import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { purchase4Schema, type Purchase4 } from "./purchase4.js";

export type ApiV2NumbersPurchaseResponse2 = {
  /** Updated purchase details */
  purchase: Purchase4;
  /** Document types that are invalid or missing */
  invalidDocTypes: Record<string, unknown>;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const apiV2NumbersPurchaseResponse2Schema: Schema<ApiV2NumbersPurchaseResponse2> =
  s.object<ApiV2NumbersPurchaseResponse2>(
    {
      purchase: purchase4Schema,
      invalidDocTypes: s.record(s.string(), s.unknown()),
      _keysMap: {
        invalidDocTypes: "invalid_doc_types",
      },
    },
    { additionalProperties: s.json() },
  );
