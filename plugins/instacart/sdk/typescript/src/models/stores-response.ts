import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { storeSchema, type Store } from "./store.js";

export type StoresResponse = {
  /**
   * An array of stores offering the requested fulfillment type, sorted by distance with the closest
   * store first.
   */
  stores?: Store[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const storesResponseSchema: Schema<StoresResponse> = s.object<StoresResponse>(
  {
    stores: s.optional(s.array(s.lazy(() => storeSchema))),
  },
  { additionalProperties: s.json() },
);
