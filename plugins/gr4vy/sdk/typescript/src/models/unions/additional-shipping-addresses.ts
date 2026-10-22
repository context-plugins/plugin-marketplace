import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import {
  riskifiedAntiFraudOptionsShippingAddressSchema,
  type RiskifiedAntiFraudOptionsShippingAddress,
} from "../riskified-anti-fraud-options-shipping-address.js";

/**
 * Additional destinations for orders shipped to more than one address. The address derived from the
 * transaction is always sent first; these are appended after it and may not use the reserved
 * `base-shipping-address` id.
 */
export type AdditionalShippingAddresses = RiskifiedAntiFraudOptionsShippingAddress[];

export const additionalShippingAddressesSchema: Schema<AdditionalShippingAddresses> =
  s.of<AdditionalShippingAddresses>(
    s.union([s.array(s.lazy(() => riskifiedAntiFraudOptionsShippingAddressSchema))]),
  );
