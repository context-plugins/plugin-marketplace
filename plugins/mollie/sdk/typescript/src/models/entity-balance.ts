import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { availableAmountSchema, type AvailableAmount } from "./available-amount.js";
import { balanceStatusSchema, type BalanceStatus } from "./balance-status.js";
import {
  balanceTransferFrequencySchema,
  type BalanceTransferFrequency,
} from "./balance-transfer-frequency.js";
import { currenciesSchema, type Currencies } from "./currencies.js";
import { linksSchema, type Links } from "./links.js";
import { modeSchema, type Mode } from "./mode.js";
import { pendingAmountSchema, type PendingAmount } from "./pending-amount.js";
import { transferDestinationSchema, type TransferDestination } from "./transfer-destination.js";
import { transferThresholdSchema, type TransferThreshold } from "./transfer-threshold.js";

export type EntityBalance = {
  /**
   * Indicates the response contains a balance object. Will always contain the string `balance` for
   * this endpoint.
   */
  resource: string;
  /** The identifier uniquely referring to this balance. */
  id: string;
  /** Whether this entity was created in live mode or in test mode. */
  mode: Mode;
  /**
   * The entity's date and time of creation, in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601)
   * format.
   */
  createdAt: string;
  /** The balance's ISO 4217 currency code. */
  currency: Currencies;
  /** The description or name of the balance. Can be used to denote the purpose of the balance. */
  description: string;
  status: BalanceStatus;
  transferFrequency?: BalanceTransferFrequency;
  transferThreshold?: TransferThreshold;
  /** The transfer reference set to be included in all the transfers for this balance. */
  transferReference?: string | null;
  /**
   * The destination where the available amount will be automatically transferred to according to
   * the configured transfer frequency.
   */
  transferDestination?: TransferDestination | null;
  availableAmount: AvailableAmount;
  pendingAmount: PendingAmount;
  /**
   * An object with several relevant URLs. Every URL object will contain an `href` and a `type`
   * field.
   */
  links: Links;
};

export const entityBalanceSchema: Schema<EntityBalance> = s.object<EntityBalance>({
  resource: s.string(),
  id: s.string(),
  mode: modeSchema,
  createdAt: s.string(),
  currency: currenciesSchema,
  description: s.string(),
  status: balanceStatusSchema,
  transferFrequency: s.optional(s.lazy(() => balanceTransferFrequencySchema)),
  transferThreshold: s.optional(s.lazy(() => transferThresholdSchema)),
  transferReference: s.optionalNullable(s.string()),
  transferDestination: s.optionalNullable(s.lazy(() => transferDestinationSchema)),
  availableAmount: availableAmountSchema,
  pendingAmount: pendingAmountSchema,
  links: linksSchema,
  _keysMap: {
    links: "_links",
  },
});
