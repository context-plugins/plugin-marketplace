import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  addressBillV3OrganizationsApiInternalSchema,
  addressBillV3OrganizationsApiSchema,
  type AddressBillV3OrganizationsApi,
} from "./address-bill-v3-organizations-api.js";
import {
  businessCategoryResponseSchema,
  type BusinessCategoryResponse,
} from "./business-category-response.js";
import { companyOwner2InternalSchema, companyOwner2Schema, type CompanyOwner2 } from "./company-owner2.js";
import {
  mailingAddressInternalSchema,
  mailingAddressSchema,
  type MailingAddress,
} from "./mailing-address.js";
import {
  organizationAccountTypeResponseSchema,
  type OrganizationAccountTypeResponse,
} from "./organization-account-type-response.js";
import {
  processingOptionsBillV3OrganizationsApiSchema,
  type ProcessingOptionsBillV3OrganizationsApi,
} from "./processing-options-bill-v3-organizations-api.js";
import { taxIdTypeResponseSchema, type TaxIdTypeResponse } from "./tax-id-type-response.js";

/** Organization response. */
export type OrganizationResponseDto = {
  /** BILL-generated ID of the organization. The value begins with `008`. */
  id?: string;
  /**
   * Set as `true` if the organization is archived. You cannot archive an organization with the API.
   */
  archived?: boolean;
  /** Organization name */
  name?: string;
  /** Organization display name (DBA trade name) */
  displayName?: string;
  address?: AddressBillV3OrganizationsApi;
  mailingAddress?: MailingAddress;
  /** Organization phone number */
  phone?: string;
  companyOwner?: CompanyOwner2;
  /** Organization tax ID. This value is required by the IRS for tax purposes. */
  taxId?: string;
  taxIdType?: TaxIdTypeResponse;
  /** Organization industry */
  industry?: string;
  businessCategory?: BusinessCategoryResponse;
  accountType?: OrganizationAccountTypeResponse;
  processingOptions?: ProcessingOptionsBillV3OrganizationsApi;
  /**
   * Partner name.
   *
   * This field is available only when select BILL partners create an organization. Partner name is
   * part of the information that BILL uses to identify partners.
   */
  partnerName?: string;
  /** Created date and time */
  createdTime?: Date;
  /** Updated date and time */
  updatedTime?: Date;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const organizationResponseDtoProperties: s.Shape<OrganizationResponseDto> = {
  id: s.optional(s.string()),
  archived: s.optional(s.boolean()),
  name: s.optional(s.string()),
  displayName: s.optional(s.string()),
  address: s.optional(s.lazy(() => addressBillV3OrganizationsApiInternalSchema)),
  mailingAddress: s.optional(s.lazy(() => mailingAddressInternalSchema)),
  phone: s.optional(s.string()),
  companyOwner: s.optional(s.lazy(() => companyOwner2InternalSchema)),
  taxId: s.optional(s.string()),
  taxIdType: s.optional(s.lazy(() => taxIdTypeResponseSchema)),
  industry: s.optional(s.string()),
  businessCategory: s.optional(s.lazy(() => businessCategoryResponseSchema)),
  accountType: s.optional(s.lazy(() => organizationAccountTypeResponseSchema)),
  processingOptions: s.optional(s.lazy(() => processingOptionsBillV3OrganizationsApiSchema)),
  partnerName: s.optional(s.string()),
  createdTime: s.optional(s.dateTime()),
  updatedTime: s.optional(s.dateTime()),
};

export const organizationResponseDtoInternalSchema: Schema<OrganizationResponseDto> =
  s.object<OrganizationResponseDto>(organizationResponseDtoProperties, { additionalProperties: s.json() });

export const organizationResponseDtoSchema: Schema<OrganizationResponseDto> = s.lazySchema(() =>
  s.object<OrganizationResponseDto>(
    {
      ...organizationResponseDtoProperties,
      address: s.optional(s.lazy(() => addressBillV3OrganizationsApiSchema)),
      mailingAddress: s.optional(s.lazy(() => mailingAddressSchema)),
      companyOwner: s.optional(s.lazy(() => companyOwner2Schema)),
    },
    { additionalProperties: s.json() },
  ),
);
