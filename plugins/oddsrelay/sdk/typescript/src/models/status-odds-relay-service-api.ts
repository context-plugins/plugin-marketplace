import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { productsSchema, type Products } from "./products.js";

export type StatusOddsRelayServiceApi = {
  region: string;
  /** ISO-8601 UTC, whole seconds. */
  generatedAt: string;
  /** The products served in the region, in canonical order. */
  products: Record<string, Products>;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const statusOddsRelayServiceApiSchema: Schema<StatusOddsRelayServiceApi> =
  s.object<StatusOddsRelayServiceApi>(
    {
      region: s.string(),
      generatedAt: s.string(),
      products: s.record(
        s.string(),
        s.lazy(() => productsSchema),
      ),
      _keysMap: {
        generatedAt: "generated_at",
      },
    },
    { additionalProperties: s.json() },
  );
