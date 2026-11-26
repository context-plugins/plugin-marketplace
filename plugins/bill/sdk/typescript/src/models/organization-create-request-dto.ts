import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  address1BillV3PartnerApiInternalSchema,
  address1BillV3PartnerApiSchema,
  type Address1BillV3PartnerApi,
} from "./address1-bill-v3-partner-api.js";
import { businessCategoryRequestSchema, type BusinessCategoryRequest } from "./business-category-request.js";
import { companyOwner2InternalSchema, companyOwner2Schema, type CompanyOwner2 } from "./company-owner2.js";
import {
  mailingAddress1BillV3PartnerApiInternalSchema,
  mailingAddress1BillV3PartnerApiSchema,
  type MailingAddress1BillV3PartnerApi,
} from "./mailing-address1-bill-v3-partner-api.js";
import {
  organizationAccountTypeRequestSchema,
  type OrganizationAccountTypeRequest,
} from "./organization-account-type-request.js";
import {
  processingOptionsBillV3OrganizationsApiSchema,
  type ProcessingOptionsBillV3OrganizationsApi,
} from "./processing-options-bill-v3-organizations-api.js";
import { taxIdTypeRequestSchema, type TaxIdTypeRequest } from "./tax-id-type-request.js";

/** Create an organization */
export type OrganizationCreateRequestDto = {
  /** Organization name */
  name: string;
  /** Organization display name (DBA trade name) */
  displayName?: string;
  address: Address1BillV3PartnerApi;
  mailingAddress?: MailingAddress1BillV3PartnerApi;
  /** Organization phone number */
  phone?: string;
  companyOwner?: CompanyOwner2;
  /** Organization tax ID. This value is required by the IRS for tax purposes. */
  taxId?: string;
  taxIdType?: TaxIdTypeRequest;
  /** Organization industry */
  industry?: string;
  businessCategory?: BusinessCategoryRequest;
  accountType?: OrganizationAccountTypeRequest;
  processingOptions?: ProcessingOptionsBillV3OrganizationsApi;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const organizationCreateRequestDtoProperties: s.Shape<OrganizationCreateRequestDto> = {
  name: s.string(),
  displayName: s.optional(s.string()),
  address: address1BillV3PartnerApiInternalSchema,
  mailingAddress: s.optional(s.lazy(() => mailingAddress1BillV3PartnerApiInternalSchema)),
  phone: s.optional(s.string()),
  companyOwner: s.optional(s.lazy(() => companyOwner2InternalSchema)),
  taxId: s.optional(s.string()),
  taxIdType: s.optional(s.lazy(() => taxIdTypeRequestSchema)),
  industry: s.optional(s.string()),
  businessCategory: s.optional(s.lazy(() => businessCategoryRequestSchema)),
  accountType: s.optional(s.lazy(() => organizationAccountTypeRequestSchema)),
  processingOptions: s.optional(s.lazy(() => processingOptionsBillV3OrganizationsApiSchema)),
};

export const organizationCreateRequestDtoInternalSchema: Schema<OrganizationCreateRequestDto> =
  s.object<OrganizationCreateRequestDto>(organizationCreateRequestDtoProperties, {
    additionalProperties: s.json(),
  });

export const organizationCreateRequestDtoSchema: Schema<OrganizationCreateRequestDto> = s.lazySchema(() =>
  s.object<OrganizationCreateRequestDto>(
    {
      ...organizationCreateRequestDtoProperties,
      name: s.string().check(s.minLength(1), s.maxLength(100)),
      displayName: s.optional(s.string().check(s.maxLength(100))),
      address: address1BillV3PartnerApiSchema,
      mailingAddress: s.optional(s.lazy(() => mailingAddress1BillV3PartnerApiSchema)),
      phone: s.optional(
        s.string().check(s.pattern("^(\\+?[1-9]\\d{0,2}[-\\s]?)?(\\(\\d{3}\\))?([0-9-\\s]{7,20})$")),
      ),
      companyOwner: s.optional(s.lazy(() => companyOwner2Schema)),
      industry: s.optional(s.string().check(s.maxLength(500))),
    },
    { additionalProperties: s.json() },
  ),
);
