import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { digitalWalletProviderSchema, type DigitalWalletProvider } from "./digital-wallet-provider.js";
import { address13Schema, type Address13 } from "./unions/address13.js";
import { extraConfiguration1Schema, type ExtraConfiguration1 } from "./unions/extra-configuration1.js";
import { merchantCategoryCode1Schema, type MerchantCategoryCode1 } from "./unions/merchant-category-code1.js";
import { merchantCountryCode1Schema, type MerchantCountryCode1 } from "./unions/merchant-country-code1.js";
import { merchantDisplayName1Schema, type MerchantDisplayName1 } from "./unions/merchant-display-name1.js";
import { merchantUrl1Schema, type MerchantUrl1 } from "./unions/merchant-url1.js";

/** Request body for registering a new digital wallet */
export type DigitalWalletCreate = {
  provider: DigitalWalletProvider;
  merchantName: string;
  merchantDisplayName?: MerchantDisplayName1;
  merchantUrl?: MerchantUrl1;
  merchantCountryCode?: MerchantCountryCode1;
  merchantCategoryCode?: MerchantCategoryCode1;
  address?: Address13;
  extraConfiguration?: ExtraConfiguration1;
  domainNames?: string[];
  acceptTermsAndConditions: boolean;
};

export const digitalWalletCreateSchema: Schema<DigitalWalletCreate> = s.object<DigitalWalletCreate>({
  provider: digitalWalletProviderSchema,
  merchantName: s.string(),
  merchantDisplayName: s.optional(s.lazy(() => merchantDisplayName1Schema)),
  merchantUrl: s.optional(s.lazy(() => merchantUrl1Schema)),
  merchantCountryCode: s.optional(s.lazy(() => merchantCountryCode1Schema)),
  merchantCategoryCode: s.optional(s.lazy(() => merchantCategoryCode1Schema)),
  address: s.optional(s.lazy(() => address13Schema)),
  extraConfiguration: s.optional(s.lazy(() => extraConfiguration1Schema)),
  domainNames: s.optional(s.array(s.string())),
  acceptTermsAndConditions: s.boolean(),
  _keysMap: {
    merchantName: "merchant_name",
    merchantDisplayName: "merchant_display_name",
    merchantUrl: "merchant_url",
    merchantCountryCode: "merchant_country_code",
    merchantCategoryCode: "merchant_category_code",
    extraConfiguration: "extra_configuration",
    domainNames: "domain_names",
    acceptTermsAndConditions: "accept_terms_and_conditions",
  },
});
