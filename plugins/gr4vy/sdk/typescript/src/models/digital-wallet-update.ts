import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { address13Schema, type Address13 } from "./unions/address13.js";
import { domainNamesSchema, type DomainNames } from "./unions/domain-names.js";
import { extraConfiguration1Schema, type ExtraConfiguration1 } from "./unions/extra-configuration1.js";
import { merchantCategoryCode1Schema, type MerchantCategoryCode1 } from "./unions/merchant-category-code1.js";
import { merchantCountryCode1Schema, type MerchantCountryCode1 } from "./unions/merchant-country-code1.js";
import { merchantDisplayName1Schema, type MerchantDisplayName1 } from "./unions/merchant-display-name1.js";
import { merchantNameSchema, type MerchantName } from "./unions/merchant-name.js";
import { merchantUrl1Schema, type MerchantUrl1 } from "./unions/merchant-url1.js";

/** Request body for editing a registered digital wallet */
export type DigitalWalletUpdate = {
  merchantName?: MerchantName;
  domainNames?: DomainNames;
  merchantDisplayName?: MerchantDisplayName1;
  merchantUrl?: MerchantUrl1;
  merchantCountryCode?: MerchantCountryCode1;
  merchantCategoryCode?: MerchantCategoryCode1;
  address?: Address13;
  extraConfiguration?: ExtraConfiguration1;
};

export const digitalWalletUpdateSchema: Schema<DigitalWalletUpdate> = s.object<DigitalWalletUpdate>({
  merchantName: s.optional(s.lazy(() => merchantNameSchema)),
  domainNames: s.optional(s.lazy(() => domainNamesSchema)),
  merchantDisplayName: s.optional(s.lazy(() => merchantDisplayName1Schema)),
  merchantUrl: s.optional(s.lazy(() => merchantUrl1Schema)),
  merchantCountryCode: s.optional(s.lazy(() => merchantCountryCode1Schema)),
  merchantCategoryCode: s.optional(s.lazy(() => merchantCategoryCode1Schema)),
  address: s.optional(s.lazy(() => address13Schema)),
  extraConfiguration: s.optional(s.lazy(() => extraConfiguration1Schema)),
  _keysMap: {
    merchantName: "merchant_name",
    domainNames: "domain_names",
    merchantDisplayName: "merchant_display_name",
    merchantUrl: "merchant_url",
    merchantCountryCode: "merchant_country_code",
    merchantCategoryCode: "merchant_category_code",
    extraConfiguration: "extra_configuration",
  },
});
