import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { googleTypeMoney10Schema, type GoogleTypeMoney10 } from "./google-type-money10.js";

/** Request for AdjustDeveloperBalance. */
export type GoogleCloudApigeeV1AdjustDeveloperBalanceRequest = {
  /**
   * * A positive value of `adjustment` means that that the API provider wants to adjust the balance
   *   for an under-charged developer i.e. the balance of the developer will decrease. * A negative
   *   value of `adjustment` means that that the API provider wants to adjust the balance for an
   *   over-charged developer i.e. the balance of the developer will increase. NOTE: An adjustment
   *   cannot increase the balance of the developer beyond the balance as of the most recent credit.
   *   For example, if a developer's balance is updated to be $100, and they spend $10, a negative
   *   adjustment can only increase the balance of the developer to $100.
   */
  adjustment?: GoogleTypeMoney10;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const googleCloudApigeeV1AdjustDeveloperBalanceRequestSchema: Schema<GoogleCloudApigeeV1AdjustDeveloperBalanceRequest> =
  s.object<GoogleCloudApigeeV1AdjustDeveloperBalanceRequest>(
    {
      adjustment: s.optional(s.lazy(() => googleTypeMoney10Schema)),
    },
    { additionalProperties: s.json() },
  );
