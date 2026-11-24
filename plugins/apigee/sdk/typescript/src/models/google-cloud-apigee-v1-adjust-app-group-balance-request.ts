import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { googleTypeMoney9Schema, type GoogleTypeMoney9 } from "./google-type-money9.js";

/** Request for AdjustAppGroupBalance. */
export type GoogleCloudApigeeV1AdjustAppGroupBalanceRequest = {
  /**
   * Required. * A positive value of `adjustment` means that that the API provider wants to adjust
   * the balance for an under-charged AppGroup i.e. the balance of the AppGroup will decrease. * A
   * negative value of `adjustment` is not supported. Use credit balance API instead.
   */
  adjustment?: GoogleTypeMoney9;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const googleCloudApigeeV1AdjustAppGroupBalanceRequestSchema: Schema<GoogleCloudApigeeV1AdjustAppGroupBalanceRequest> =
  s.object<GoogleCloudApigeeV1AdjustAppGroupBalanceRequest>(
    {
      adjustment: s.optional(s.lazy(() => googleTypeMoney9Schema)),
    },
    { additionalProperties: s.json() },
  );
