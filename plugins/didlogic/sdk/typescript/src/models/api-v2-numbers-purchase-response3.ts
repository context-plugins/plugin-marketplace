import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { dids5Schema, type Dids5 } from "./dids5.js";
import { warningSchema, type Warning } from "./warning.js";

export type ApiV2NumbersPurchaseResponse3 = {
  /** List of cancelled DIDs returned to inventory */
  dids: Dids5[];
  /**
   * Non-fatal notices for requested numbers that were not cancelled — not in your cancelable
   * inventory (`not_in_inventory`), kept because the balance does not cover the early-return fee
   * (`insufficient_funds`), or cancelable but not cancelled (`cancellation_failed`). Present only
   * when non-empty.
   */
  warnings?: Warning[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const apiV2NumbersPurchaseResponse3Schema: Schema<ApiV2NumbersPurchaseResponse3> =
  s.object<ApiV2NumbersPurchaseResponse3>(
    {
      dids: s.array(s.lazy(() => dids5Schema)),
      warnings: s.optional(s.array(s.lazy(() => warningSchema))),
    },
    { additionalProperties: s.json() },
  );
