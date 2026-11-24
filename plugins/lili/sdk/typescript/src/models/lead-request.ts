import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { addressData2InternalSchema, addressData2Schema, type AddressData2 } from "./address-data2.js";
import { addressData3InternalSchema, addressData3Schema, type AddressData3 } from "./address-data3.js";
import { addressData4InternalSchema, addressData4Schema, type AddressData4 } from "./address-data4.js";
import { businessTypeSchema, type BusinessType } from "./business-type.js";
import { documentDataSchema, type DocumentData } from "./document-data.js";
import { eddQuestionDataSchema, type EddQuestionData } from "./edd-question-data.js";
import { uboDataInternalSchema, uboDataSchema, type UboData } from "./ubo-data.js";

/** Contains the information about an account partner wants to register */
export type LeadRequest = {
  /** The unique ID of the webhook */
  email: string;
  /** Customer phone number. E.164 format. */
  phoneNumber?: string;
  /** Customer SSN */
  ssn?: string;
  /** Customer birth date */
  birthDate?: string;
  /** Customer first name */
  firstName?: string;
  /** Customer last name */
  lastName?: string;
  /** Customer address line1 */
  line1?: string;
  /** Customer address line2 */
  line2?: string;
  /** Customer address city */
  city?: string;
  /** Customer address 2 letter state code */
  state?: string;
  /** Customer country of residence (Alpha 2, ISO 3166 format) */
  country?: string;
  /** Customer address postal code */
  postalCode?: string;
  /** Business EIN */
  ein?: string;
  /** Business name */
  businessName?: string;
  /**
   * The physical (operational) address where the business operates day-to-day. Must be a US
   * address. Used as the address in the Beneficial Ownership file.
   */
  businessAddress?: AddressData2;
  /**
   * The registered business address (the address the business provided to the state of formation to
   * accept legal process). Can be outside of the US, in case only a registered agent address is
   * available. Used as the billing address and presented on bank statements and invoices.
   */
  registeredBusinessAddress?: AddressData3;
  /**
   * Business mailing address. Optional. Must be in the US, can be a registered agent address. Used
   * as the card shipment address for Non-US applicants when selected.
   */
  mailingAddress?: AddressData4;
  /** Incorporation type of the business */
  businessType?: BusinessType;
  /** State the business was incorporated in */
  incorporationState?: string;
  /** Unique ID to be used by the partner to identify the customer */
  uniqueId?: string;
  /** Business DUNS number */
  duns?: string;
  /** Passport number */
  passportNumber?: string;
  /** Non US customer National ID number */
  idGovNumber?: string;
  /**
   * National ID country (Alpha 2, ISO 3166 format). Note that if a passport number is supplied,
   * this is the passport issuance country
   */
  idCountry?: string;
  /**
   * National ID expiration date. Note that if passport number is supplied, this is the passport
   * expiration date
   */
  idExpirationDate?: string;
  /** The ownership percentage of the customer */
  ownershipPercent?: number;
  /** A list of URLs containing the business documents of the customer */
  documentUrls?: (string | null)[];
  /** A list of Base64 encoded documents */
  documentDataList?: DocumentData[];
  /** A list of UBOs with >25% of the business ownership */
  uboList?: UboData[];
  /** NAICS code of the business */
  naicsCode?: string;
  /** Campaign code */
  campaign?: string;
  /** A map of key-value pairs to store additional partner-specific data on the customer */
  metadata?: Record<string, string>;
  /** A list of EDD questions and answers */
  eddQuestionData?: EddQuestionData[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const leadRequestProperties: s.Shape<LeadRequest> = {
  email: s.string(),
  phoneNumber: s.optional(s.string()),
  ssn: s.optional(s.string()),
  birthDate: s.optional(s.dateOnly()),
  firstName: s.optional(s.string()),
  lastName: s.optional(s.string()),
  line1: s.optional(s.string()),
  line2: s.optional(s.string()),
  city: s.optional(s.string()),
  state: s.optional(s.string()),
  country: s.optional(s.string()),
  postalCode: s.optional(s.string()),
  ein: s.optional(s.string()),
  businessName: s.optional(s.string()),
  businessAddress: s.optional(s.lazy(() => addressData2InternalSchema)),
  registeredBusinessAddress: s.optional(s.lazy(() => addressData3InternalSchema)),
  mailingAddress: s.optional(s.lazy(() => addressData4InternalSchema)),
  businessType: s.optional(s.lazy(() => businessTypeSchema)),
  incorporationState: s.optional(s.string()),
  uniqueId: s.optional(s.string()),
  duns: s.optional(s.string()),
  passportNumber: s.optional(s.string()),
  idGovNumber: s.optional(s.string()),
  idCountry: s.optional(s.string()),
  idExpirationDate: s.optional(s.string()),
  ownershipPercent: s.optional(s.float64()),
  documentUrls: s.optional(s.array(s.nullable(s.string()))),
  documentDataList: s.optional(s.array(s.lazy(() => documentDataSchema))),
  uboList: s.optional(s.array(s.lazy(() => uboDataInternalSchema))),
  naicsCode: s.optional(s.string()),
  campaign: s.optional(s.string()),
  metadata: s.optional(s.record(s.string(), s.string())),
  eddQuestionData: s.optional(s.array(s.lazy(() => eddQuestionDataSchema))),
};

export const leadRequestInternalSchema: Schema<LeadRequest> = s.object<LeadRequest>(leadRequestProperties, {
  additionalProperties: s.json(),
});

export const leadRequestSchema: Schema<LeadRequest> = s.lazySchema(() =>
  s.object<LeadRequest>(
    {
      ...leadRequestProperties,
      email: s.string().check(s.email()),
      ssn: s.optional(
        s
          .string()
          .check(
            s.pattern(
              "^(?!666|000|9\\d{2})\\d{3}-\\d{2}-(?!0{4})\\d{4}$|^(?!666|000|9\\d{2})\\d{3}\\d{2}(?!0{4})\\d{4}$",
            ),
          ),
      ),
      city: s.optional(s.string().check(s.minLength(1), s.maxLength(30))),
      postalCode: s.optional(s.string().check(s.pattern("^\\d{5}(-\\d{4})?$"))),
      ein: s.optional(
        s
          .string()
          .check(
            s.pattern(
              "^(0[1-6]|1[0-6]|2[0-7]|3[0-9]|4[0-8]|5[0-9]|6[0-8]|7[1-7]|8[0-8]|9[0-5]|9[8-9])[0-9]{7}$",
            ),
          ),
      ),
      businessAddress: s.optional(s.lazy(() => addressData2Schema)),
      registeredBusinessAddress: s.optional(s.lazy(() => addressData3Schema)),
      mailingAddress: s.optional(s.lazy(() => addressData4Schema)),
      ownershipPercent: s.optional(s.float64().check(s.gte(0), s.lte(100))),
      uboList: s.optional(s.array(s.lazy(() => uboDataSchema))),
    },
    { additionalProperties: s.json() },
  ),
);
