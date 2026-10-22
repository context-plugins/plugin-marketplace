import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { address17Schema, type Address17 } from "./unions/address17.js";
import { address2Schema, type Address2 } from "./unions/address2.js";
import { city2Schema, type City2 } from "./unions/city2.js";
import { companySchema, type Company } from "./unions/company.js";
import { regionSchema, type Region } from "./unions/region.js";
import { zipSchema, type Zip } from "./unions/zip.js";

export type ForterAntiFraudOptionsCartItemBeneficiaryAddress = {
  /** The country code of the beneficiary's address. */
  country: string;
  /** First line of the beneficiary's address. */
  address1?: Address17;
  /** Second line of the beneficiary's address. */
  address2?: Address2;
  /** Zip or postal code of the beneficiary's address. */
  zip?: Zip;
  /** State or region of the beneficiary's address. */
  region?: Region;
  /** Company name associated with the beneficiary's address. */
  company?: Company;
  /** City of the beneficiary's address. */
  city?: City2;
};

export const forterAntiFraudOptionsCartItemBeneficiaryAddressSchema: Schema<ForterAntiFraudOptionsCartItemBeneficiaryAddress> =
  s.object<ForterAntiFraudOptionsCartItemBeneficiaryAddress>({
    country: s.string(),
    address1: s.optional(s.lazy(() => address17Schema)),
    address2: s.optional(s.lazy(() => address2Schema)),
    zip: s.optional(s.lazy(() => zipSchema)),
    region: s.optional(s.lazy(() => regionSchema)),
    company: s.optional(s.lazy(() => companySchema)),
    city: s.optional(s.lazy(() => city2Schema)),
  });
