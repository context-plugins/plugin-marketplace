import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type ApiV2NumbersPurchaseRequest = {
  /** Array of DID IDs to purchase, from numbers_countries_cities_dids_index, numbers_search_show */
  idIn?: number[];
  /**
   * Array of DID numbers to purchase, from numbers_countries_cities_dids_index, numbers_search_show
   */
  didNumbers?: string[];
  /** Array of identity objects with document associations */
  identities?: Record<string, unknown>[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const apiV2NumbersPurchaseRequestSchema: Schema<ApiV2NumbersPurchaseRequest> =
  s.object<ApiV2NumbersPurchaseRequest>(
    {
      idIn: s.optional(s.array(s.int())),
      didNumbers: s.optional(s.array(s.string())),
      identities: s.optional(s.array(s.record(s.string(), s.unknown()))),
      _keysMap: {
        idIn: "id_in",
        didNumbers: "did_numbers",
      },
    },
    { additionalProperties: s.json() },
  );
