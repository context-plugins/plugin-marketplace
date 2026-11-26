import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { noneAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { accountTypeRequestSchema, type AccountTypeRequest } from "../models/account-type-request.js";
import { bdcErrorInternalSchema, type BdcError } from "../models/bdc-error.js";
import {
  bulkVendorResponseDtoInternalSchema,
  type BulkVendorResponseDto,
} from "../models/bulk-vendor-response-dto.js";
import { countryCodeSchema, type CountryCode } from "../models/country-code.js";
import { currencyCodeSchema, type CurrencyCode } from "../models/currency-code.js";
import {
  intlPmtsConfigurationResponseDtoSchema,
  type IntlPmtsConfigurationResponseDto,
} from "../models/intl-pmts-configuration-response-dto.js";
import {
  listVendorResponseDtoInternalSchema,
  type ListVendorResponseDto,
} from "../models/list-vendor-response-dto.js";
import {
  vendorBankAccountRequestDtoInternalSchema,
  vendorBankAccountRequestDtoSchema,
  type VendorBankAccountRequestDto,
} from "../models/vendor-bank-account-request-dto.js";
import {
  vendorBankAccountResponseDtoInternalSchema,
  type VendorBankAccountResponseDto,
} from "../models/vendor-bank-account-response-dto.js";
import {
  vendorConfigurationResponseDtoSchema,
  type VendorConfigurationResponseDto,
} from "../models/vendor-configuration-response-dto.js";
import {
  vendorRequestDtoInternalSchema,
  vendorRequestDtoSchema,
  type VendorRequestDto,
} from "../models/vendor-request-dto.js";
import { vendorResponseDtoInternalSchema, type VendorResponseDto } from "../models/vendor-response-dto.js";
import {
  vendorUpdateRequestDtoInternalSchema,
  vendorUpdateRequestDtoSchema,
  type VendorUpdateRequestDto,
} from "../models/vendor-update-request-dto.js";
import type { Servers } from "../servers.js";

export class Vendors {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;

  constructor(rawClient: RawClient, servers: Servers) {
    this.#rawClient = rawClient;
    this.#servers = servers;
  }

  /**
   * Archive a vendor
   *
   * @remarks
   * Archive an existing vendor. In the response, the `archived` field is set as `true`.
   *
   * You can restore an archived vendor with `POST /v3/vendors/{vendorId}/restore`. There is no
   * change when you archive an archived vendor.
   *
   * @returns Archive a vendor response
   *
   * @throws {@link Vendors.ArchiveVendorError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link BillError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  archiveVendor(
    request: Vendors.ArchiveVendorRequest,
    options?: RequestOptions,
  ): ApiPromise<VendorResponseDto, Vendors.ArchiveVendorError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v3/vendors/{vendorId}/archive"),
        auth: noneAuth,
        pathParams: [{ name: "vendorId", value: request.vendorId, schema: s.string() }],
        query: [],
        headers: [
          { name: "sessionId", value: request.sessionId, schema: s.optionalNullable(s.string()) },
          { name: "devKey", value: request.devKey, schema: s.optionalNullable(s.string()) },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: vendorResponseDtoInternalSchema },
        errorFactory: Vendors.ArchiveVendorError,
      },
      options,
    );
  }

  /**
   * Create multiple vendors
   *
   * @remarks
   * Create multiple vendors with one API request. You can create up to 20 vendors with one `POST
   * /v3/vendors/bulk` request.
   *
   * In your bulk vendor creation request, all your vendors must be successfully created for a
   * successful response. If any vendor creation is not successful, the entire request fails and
   * none of the vendors in the request are created.
   *
   * ### Requirements for enabling vendor payments
   *
   * Vendor address details are required for paying a vendor by check or for inviting the vendor to
   * join the BILL network.
   * * `line1`
   * * `city`
   * * `zipOrPostalCode`
   * * `country`
   * * `payeeName`
   *
   * **Note**: A vendor can be enrolled to accept virtual card payments even without being connected
   * in the BILL network. See Virtual card FAQ in the BILL Help Center for more information.
   *
   * ### Requirements for enabling electronic payments to vendors
   *
   * Vendor bank account details are required for paying a vendor with electronic payment methods.
   *
   * `paymentInformation` details about bank accounts are required for adding a vendor bank account.
   * * `payeeName`
   * * `bankCountry` (for international vendors)
   * * `paymentCurrency` (for international vendors)
   * * `nameOnAccount`
   * * `accountNumber`
   * * `routingNumber` (empty for an IBAN `accountNumber`)
   * * `type` (for international vendors)
   *
   * `regulatoryFields` and `paymentPurpose` are additional required fields for enabling electronic
   * payments to international vendors (not United States) in specific countries.
   *
   * **Note**: When you add a vendor bank account in the production environment, BILL requires 2
   * business days to complete a one-time verification of the bank account. To pay such a vendor,
   * you must set a `processDate` that is 2 business days from the current date.
   *
   * See Vendors in the Guides section for more information, sample requests, and responses.
   *
   * @returns Create multiple vendors response
   *
   * @throws {@link Vendors.CreateBulkVendorError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link BillError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  createBulkVendor(
    request: Vendors.CreateBulkVendorRequest,
    options?: RequestOptions,
  ): ApiPromise<BulkVendorResponseDto, Vendors.CreateBulkVendorError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v3/vendors/bulk"),
        auth: noneAuth,
        pathParams: [],
        query: [],
        headers: [
          { name: "sessionId", value: request.sessionId, schema: s.optionalNullable(s.string()) },
          { name: "devKey", value: request.devKey, schema: s.optionalNullable(s.string()) },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: {
          kind: "json",
          value: request.body,
          schema: s.array(s.lazy(() => vendorRequestDtoInternalSchema)),
        },
      },
      {
        success: { kind: "json", schema: bulkVendorResponseDtoInternalSchema },
        errorFactory: Vendors.CreateBulkVendorError,
      },
      options,
    );
  }

  /**
   * Create a vendor
   *
   * @remarks
   * Create a new vendor.
   *
   * ### Requirements for enabling vendor payments
   *
   * Vendor address details are required for paying a vendor by check or for inviting the vendor to
   * join the BILL network.
   * * `line1`
   * * `city`
   * * `zipOrPostalCode`
   * * `country`
   * * `payeeName`
   *
   * **Note**: A vendor can be enrolled to accept virtual card payments even without being connected
   * in the BILL network. See Virtual card FAQ in the BILL Help Center for more information.
   *
   * ### Requirements for enabling electronic payments to vendors
   *
   * Vendor bank account details are required for paying a vendor with electronic payment methods.
   *
   * `paymentInformation` details about bank accounts are required for adding a vendor bank account.
   * * `payeeName`
   * * `bankCountry` (for international vendors)
   * * `paymentCurrency` (for international vendors)
   * * `nameOnAccount`
   * * `accountNumber`
   * * `routingNumber` (empty for an IBAN `accountNumber`)
   * * `type` (for international vendors)
   *
   * `regulatoryFields` and `paymentPurpose` are additional required fields for enabling electronic
   * payments to international vendors (not United States) in specific countries.
   *
   * **Note**: When you add a vendor bank account in the production environment, BILL requires 2
   * business days to complete a one-time verification of the bank account. To pay such a vendor,
   * you must set a `processDate` that is 2 business days from the current date.
   *
   * See Vendors in the Guides section for more information, sample requests, and responses.
   *
   * @returns Create a vendor response
   *
   * @throws {@link Vendors.CreateVendorError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link BillError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  createVendor(
    request: Vendors.CreateVendorRequest,
    options?: RequestOptions,
  ): ApiPromise<VendorResponseDto, Vendors.CreateVendorError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v3/vendors"),
        auth: noneAuth,
        pathParams: [],
        query: [],
        headers: [
          { name: "sessionId", value: request.sessionId, schema: s.optionalNullable(s.string()) },
          { name: "devKey", value: request.devKey, schema: s.optionalNullable(s.string()) },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "json", value: request.body, schema: vendorRequestDtoInternalSchema },
      },
      {
        success: { kind: "json", schema: vendorResponseDtoInternalSchema },
        errorFactory: Vendors.CreateVendorError,
      },
      options,
    );
  }

  /**
   * Create a vendor bank account
   *
   * @remarks
   * Create a vendor bank account for an existing vendor.
   *
   * To update vendor bank account information, you must first delete the existing vendor bank
   * account (with `DELETE /v3/vendors/{vendorId}/bank-account`), and then create a new vendor bank
   * account (with `POST /v3/vendors/{vendorId}/bank-account`) with the updated information.
   *
   * **Note**: When you add a vendor bank account in the production environment, BILL requires 2
   * business days to complete a one-time verification of the bank account. To pay such a vendor,
   * you must set a `processDate` that is 2 business days from the current date.
   *
   * @returns Create a vendor bank account response
   *
   * @throws {@link Vendors.CreateVendorBankAccountError} when the API answers with an error status
   * — narrow on `err.payload.kind`
   *
   * @throws {@link BillError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  createVendorBankAccount(
    request: Vendors.CreateVendorBankAccountRequest,
    options?: RequestOptions,
  ): ApiPromise<VendorBankAccountResponseDto, Vendors.CreateVendorBankAccountError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v3/vendors/{vendorId}/bank-account"),
        auth: noneAuth,
        pathParams: [{ name: "vendorId", value: request.vendorId, schema: s.string() }],
        query: [],
        headers: [
          { name: "sessionId", value: request.sessionId, schema: s.optionalNullable(s.string()) },
          { name: "devKey", value: request.devKey, schema: s.optionalNullable(s.string()) },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "json", value: request.body, schema: vendorBankAccountRequestDtoInternalSchema },
      },
      {
        success: { kind: "json", schema: vendorBankAccountResponseDtoInternalSchema },
        errorFactory: Vendors.CreateVendorBankAccountError,
      },
      options,
    );
  }

  /**
   * Delete a vendor bank account
   *
   * @remarks
   * Delete the existing vendor bank account for a vendor.
   *
   * To update vendor bank account information, you must first delete the existing vendor bank
   * account (with `DELETE /v3/vendors/{vendorId}/bank-account`), and then create a new vendor bank
   * account (with `POST /v3/vendors/{vendorId}/bank-account`) with the updated information.
   *
   * @returns Delete a vendor bank account response
   *
   * @throws {@link Vendors.DeleteVendorBankAccountError} when the API answers with an error status
   * — narrow on `err.payload.kind`
   *
   * @throws {@link BillError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  deleteVendorBankAccount(
    request: Vendors.DeleteVendorBankAccountRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, Vendors.DeleteVendorBankAccountError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default("/v3/vendors/{vendorId}/bank-account"),
        auth: noneAuth,
        pathParams: [{ name: "vendorId", value: request.vendorId, schema: s.string() }],
        query: [],
        headers: [
          { name: "sessionId", value: request.sessionId, schema: s.optionalNullable(s.string()) },
          { name: "devKey", value: request.devKey, schema: s.optionalNullable(s.string()) },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: Vendors.DeleteVendorBankAccountError,
      },
      options,
    );
  }

  /**
   * Get vendor configuration
   *
   * @remarks
   * Get international payments (not USD) configuration after vendor creation. This configuration is
   * required for compliance with international payment rules of a vendor country and vendor bank
   * account.
   *
   * In the response, the required `paymentPurpose` and `regulatoryFields` information is retrieved
   * for the vendor.
   *
   * **Note**: If you are adding `paymentPurpose` and `regulatoryFields` information during
   * international vendor creation, use `GET /v3/vendors/configuration/international-payments` to
   * get the required configuration before vendor creation.
   *
   * See Create an international vendor for more information on how to set `paymentPurpose` and
   * `regulatoryFields`.
   *
   * @returns Get vendor configuration response
   *
   * @throws {@link Vendors.GetConfigurationByVendorIdError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link BillError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getConfigurationByVendorId(
    request: Vendors.GetConfigurationByVendorIdRequest,
    options?: RequestOptions,
  ): ApiPromise<VendorConfigurationResponseDto, Vendors.GetConfigurationByVendorIdError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v3/vendors/{vendorId}/configuration"),
        auth: noneAuth,
        pathParams: [{ name: "vendorId", value: request.vendorId, schema: s.string() }],
        query: [],
        headers: [
          { name: "sessionId", value: request.sessionId, schema: s.optionalNullable(s.string()) },
          { name: "devKey", value: request.devKey, schema: s.optionalNullable(s.string()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: vendorConfigurationResponseDtoSchema },
        errorFactory: Vendors.GetConfigurationByVendorIdError,
      },
      options,
    );
  }

  /**
   * Get international payments configuration
   *
   * @remarks
   * Get international payments (not USD) configuration that is required for compliance with
   * international payment rules of a vendor country and vendor bank account.
   *
   * This information is based on vendor country, bill currency, and vendor account type. Use this
   * endpoint for getting information before creating an international vendor. In the response, the
   * required `paymentPurpose` and `regulatoryFields` information is retrieved for the vendor.
   *
   * **Note**: If you are adding `paymentPurpose` and `regulatoryFields` information after creating
   * an international vendor, use `GET /v3/vendors/{vendorId}/configuration` to get the required
   * configuration for your created vendor.
   *
   * See Create an international vendor for more information on how to set `paymentPurpose` and
   * `regulatoryFields`.
   *
   * @returns Get international payments configuration response
   *
   * @throws {@link Vendors.GetIntlConfigError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link BillError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getIntlConfig(
    request: Vendors.GetIntlConfigRequest,
    options?: RequestOptions,
  ): ApiPromise<IntlPmtsConfigurationResponseDto, Vendors.GetIntlConfigError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v3/vendors/configuration/international-payments"),
        auth: noneAuth,
        pathParams: [],
        query: [
          { name: "country", value: request.country, schema: countryCodeSchema },
          { name: "billCurrency", value: request.billCurrency, schema: currencyCodeSchema },
          { name: "accountType", value: request.accountType, schema: accountTypeRequestSchema },
        ],
        headers: [
          { name: "sessionId", value: request.sessionId, schema: s.optionalNullable(s.string()) },
          { name: "devKey", value: request.devKey, schema: s.optionalNullable(s.string()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: intlPmtsConfigurationResponseDtoSchema },
        errorFactory: Vendors.GetIntlConfigError,
      },
      options,
    );
  }

  /**
   * Get vendor details
   *
   * @remarks
   * Get details about an existing vendor.
   *
   * @returns Get vendor details response
   *
   * @throws {@link Vendors.GetVendorError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link BillError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getVendor(
    request: Vendors.GetVendorRequest,
    options?: RequestOptions,
  ): ApiPromise<VendorResponseDto, Vendors.GetVendorError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v3/vendors/{vendorId}"),
        auth: noneAuth,
        pathParams: [{ name: "vendorId", value: request.vendorId, schema: s.string() }],
        query: [],
        headers: [
          { name: "sessionId", value: request.sessionId, schema: s.optionalNullable(s.string()) },
          { name: "devKey", value: request.devKey, schema: s.optionalNullable(s.string()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: vendorResponseDtoInternalSchema },
        errorFactory: Vendors.GetVendorError,
      },
      options,
    );
  }

  /**
   * Get vendor bank account details
   *
   * @remarks
   * Get details about an existing vendor bank account.
   *
   * @returns Get vendor bank account details response
   *
   * @throws {@link Vendors.GetVendorBankAccountError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link BillError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getVendorBankAccount(
    request: Vendors.GetVendorBankAccountRequest,
    options?: RequestOptions,
  ): ApiPromise<VendorBankAccountResponseDto, Vendors.GetVendorBankAccountError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v3/vendors/{vendorId}/bank-account"),
        auth: noneAuth,
        pathParams: [{ name: "vendorId", value: request.vendorId, schema: s.string() }],
        query: [],
        headers: [
          { name: "sessionId", value: request.sessionId, schema: s.optionalNullable(s.string()) },
          { name: "devKey", value: request.devKey, schema: s.optionalNullable(s.string()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: vendorBankAccountResponseDtoInternalSchema },
        errorFactory: Vendors.GetVendorBankAccountError,
      },
      options,
    );
  }

  /**
   * Get list of vendors
   *
   * @remarks
   * Get a list of vendor objects. By default, you get 20 results on one page of results. Set `max`
   * in your request to get up to 100 results on one page.
   *
   * See Search operations with lists in the Guides section for filtering, sorting, and pagination
   * examples.
   *
   * @returns Get list of vendors response
   *
   * @throws {@link Vendors.ListVendorsError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link BillError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listVendors(
    request: Vendors.ListVendorsRequest = {},
    options?: RequestOptions,
  ): ApiPromise<ListVendorResponseDto, Vendors.ListVendorsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v3/vendors"),
        auth: noneAuth,
        pathParams: [],
        query: [
          { name: "max", value: request.max, schema: s.optionalNullable(s.int()) },
          { name: "sort", value: request.sort, schema: s.optionalNullable(s.string()) },
          { name: "filters", value: request.filters, schema: s.optionalNullable(s.string()) },
          { name: "page", value: request.page, schema: s.optionalNullable(s.string()) },
        ],
        headers: [
          { name: "sessionId", value: request.sessionId, schema: s.optionalNullable(s.string()) },
          { name: "devKey", value: request.devKey, schema: s.optionalNullable(s.string()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: listVendorResponseDtoInternalSchema },
        errorFactory: Vendors.ListVendorsError,
      },
      options,
    );
  }

  /**
   * Restore an archived vendor
   *
   * @remarks
   * Restore an archived vendor. In the response, the `archived` field is set as `false`.
   *
   * You can perform any valid BILL operation on restored vendors. There is no change when you
   * restore a restored vendor.
   *
   * @returns Restore an archived vendor response
   *
   * @throws {@link Vendors.RestoreVendorError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link BillError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  restoreVendor(
    request: Vendors.RestoreVendorRequest,
    options?: RequestOptions,
  ): ApiPromise<VendorResponseDto, Vendors.RestoreVendorError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v3/vendors/{vendorId}/restore"),
        auth: noneAuth,
        pathParams: [{ name: "vendorId", value: request.vendorId, schema: s.string() }],
        query: [],
        headers: [
          { name: "sessionId", value: request.sessionId, schema: s.optionalNullable(s.string()) },
          { name: "devKey", value: request.devKey, schema: s.optionalNullable(s.string()) },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: vendorResponseDtoInternalSchema },
        errorFactory: Vendors.RestoreVendorError,
      },
      options,
    );
  }

  /**
   * Update a vendor
   *
   * @remarks
   * Update details about an existing vendor.
   *
   * ### Requirements for enabling vendor payments
   *
   * Vendor address details are required for paying a vendor by check or for inviting the vendor to
   * join the BILL network.
   * * `line1`
   * * `city`
   * * `zipOrPostalCode`
   * * `country`
   * * `payeeName`
   *
   * **Note**: You cannot add or update vendor bank account information with this endpoint. You can
   * add and manage vendor bank account information with a dedicated set of endpoints.
   * * **Create a vendor bank account**: `POST /v3/vendors/{vendorId}/bank-account`
   * * **Get vendor bank account details**: `GET /v3/vendors/{vendorId}/bank-account`
   * * **Delete a vendor bank account**: `DELETE /v3/vendors/{vendorId}/bank-account`
   *
   * @returns Update a vendor response
   *
   * @throws {@link Vendors.UpdateVendorError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link BillError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  updateVendor(
    request: Vendors.UpdateVendorRequest,
    options?: RequestOptions,
  ): ApiPromise<VendorResponseDto, Vendors.UpdateVendorError> {
    return this.#rawClient.execute(
      {
        method: "PATCH",
        urlTemplate: this.#servers.default("/v3/vendors/{vendorId}"),
        auth: noneAuth,
        pathParams: [{ name: "vendorId", value: request.vendorId, schema: s.string() }],
        query: [],
        headers: [
          { name: "sessionId", value: request.sessionId, schema: s.optionalNullable(s.string()) },
          { name: "devKey", value: request.devKey, schema: s.optionalNullable(s.string()) },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "json", value: request.body, schema: vendorUpdateRequestDtoInternalSchema },
      },
      {
        success: { kind: "json", schema: vendorResponseDtoInternalSchema },
        errorFactory: Vendors.UpdateVendorError,
      },
      options,
    );
  }
}

export namespace Vendors {
  export type ArchiveVendorRequest = {
    vendorId: string;
    sessionId?: string | null;
    devKey?: string | null;
  };

  export const archiveVendorRequestSchema: Schema<ArchiveVendorRequest> = s.lazySchema(() =>
    s.object<ArchiveVendorRequest>({
      vendorId: s.string().check(s.minLength(1)),
      sessionId: s.optionalNullable(s.string()),
      devKey: s.optionalNullable(s.string()),
    }),
  );

  export class ArchiveVendorError extends ApiError {
    declare readonly payload:
      | Declared<"error4XX", BdcError[]>
      | Declared<"error5XX", BdcError[]>
      | Undeclared;

    static readonly errors: ErrorDecoders<ArchiveVendorError> = [
      {
        on: [400, 499],
        kind: "error4XX",
        decode: { kind: "json", schema: s.array(s.lazy(() => bdcErrorInternalSchema)) },
      },
      {
        on: [500, 599],
        kind: "error5XX",
        decode: { kind: "json", schema: s.array(s.lazy(() => bdcErrorInternalSchema)) },
      },
    ];
  }

  export type CreateBulkVendorRequest = {
    sessionId?: string | null;
    devKey?: string | null;
    body: VendorRequestDto[];
  };

  export const createBulkVendorRequestSchema: Schema<CreateBulkVendorRequest> = s.lazySchema(() =>
    s.object<CreateBulkVendorRequest>({
      sessionId: s.optionalNullable(s.string()),
      devKey: s.optionalNullable(s.string()),
      body: s.array(s.lazy(() => vendorRequestDtoSchema)).check(s.minLength(1), s.maxLength(20)),
    }),
  );

  export class CreateBulkVendorError extends ApiError {
    declare readonly payload:
      | Declared<"error4XX", BdcError[]>
      | Declared<"error5XX", BdcError[]>
      | Undeclared;

    static readonly errors: ErrorDecoders<CreateBulkVendorError> = [
      {
        on: [400, 499],
        kind: "error4XX",
        decode: { kind: "json", schema: s.array(s.lazy(() => bdcErrorInternalSchema)) },
      },
      {
        on: [500, 599],
        kind: "error5XX",
        decode: { kind: "json", schema: s.array(s.lazy(() => bdcErrorInternalSchema)) },
      },
    ];
  }

  export type CreateVendorRequest = {
    sessionId?: string | null;
    devKey?: string | null;
    body: VendorRequestDto;
  };

  export class CreateVendorError extends ApiError {
    declare readonly payload:
      | Declared<"error4XX", BdcError[]>
      | Declared<"error5XX", BdcError[]>
      | Undeclared;

    static readonly errors: ErrorDecoders<CreateVendorError> = [
      {
        on: [400, 499],
        kind: "error4XX",
        decode: { kind: "json", schema: s.array(s.lazy(() => bdcErrorInternalSchema)) },
      },
      {
        on: [500, 599],
        kind: "error5XX",
        decode: { kind: "json", schema: s.array(s.lazy(() => bdcErrorInternalSchema)) },
      },
    ];
  }

  export type CreateVendorBankAccountRequest = {
    vendorId: string;
    sessionId?: string | null;
    devKey?: string | null;
    body: VendorBankAccountRequestDto;
  };

  export const createVendorBankAccountRequestSchema: Schema<CreateVendorBankAccountRequest> = s.lazySchema(
    () =>
      s.object<CreateVendorBankAccountRequest>({
        vendorId: s.string().check(s.minLength(1)),
        sessionId: s.optionalNullable(s.string()),
        devKey: s.optionalNullable(s.string()),
        body: vendorBankAccountRequestDtoSchema,
      }),
  );

  export class CreateVendorBankAccountError extends ApiError {
    declare readonly payload:
      | Declared<"error4XX", BdcError[]>
      | Declared<"error5XX", BdcError[]>
      | Undeclared;

    static readonly errors: ErrorDecoders<CreateVendorBankAccountError> = [
      {
        on: [400, 499],
        kind: "error4XX",
        decode: { kind: "json", schema: s.array(s.lazy(() => bdcErrorInternalSchema)) },
      },
      {
        on: [500, 599],
        kind: "error5XX",
        decode: { kind: "json", schema: s.array(s.lazy(() => bdcErrorInternalSchema)) },
      },
    ];
  }

  export type DeleteVendorBankAccountRequest = {
    vendorId: string;
    sessionId?: string | null;
    devKey?: string | null;
  };

  export const deleteVendorBankAccountRequestSchema: Schema<DeleteVendorBankAccountRequest> = s.lazySchema(
    () =>
      s.object<DeleteVendorBankAccountRequest>({
        vendorId: s.string().check(s.minLength(1)),
        sessionId: s.optionalNullable(s.string()),
        devKey: s.optionalNullable(s.string()),
      }),
  );

  export class DeleteVendorBankAccountError extends ApiError {
    declare readonly payload:
      | Declared<"error4XX", BdcError[]>
      | Declared<"error5XX", BdcError[]>
      | Undeclared;

    static readonly errors: ErrorDecoders<DeleteVendorBankAccountError> = [
      {
        on: [400, 499],
        kind: "error4XX",
        decode: { kind: "json", schema: s.array(s.lazy(() => bdcErrorInternalSchema)) },
      },
      {
        on: [500, 599],
        kind: "error5XX",
        decode: { kind: "json", schema: s.array(s.lazy(() => bdcErrorInternalSchema)) },
      },
    ];
  }

  export type GetConfigurationByVendorIdRequest = {
    vendorId: string;
    sessionId?: string | null;
    devKey?: string | null;
  };

  export const getConfigurationByVendorIdRequestSchema: Schema<GetConfigurationByVendorIdRequest> =
    s.lazySchema(() =>
      s.object<GetConfigurationByVendorIdRequest>({
        vendorId: s.string().check(s.minLength(1)),
        sessionId: s.optionalNullable(s.string()),
        devKey: s.optionalNullable(s.string()),
      }),
    );

  export class GetConfigurationByVendorIdError extends ApiError {
    declare readonly payload:
      | Declared<"error4XX", BdcError[]>
      | Declared<"error5XX", BdcError[]>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetConfigurationByVendorIdError> = [
      {
        on: [400, 499],
        kind: "error4XX",
        decode: { kind: "json", schema: s.array(s.lazy(() => bdcErrorInternalSchema)) },
      },
      {
        on: [500, 599],
        kind: "error5XX",
        decode: { kind: "json", schema: s.array(s.lazy(() => bdcErrorInternalSchema)) },
      },
    ];
  }

  export type GetIntlConfigRequest = {
    country: CountryCode;
    billCurrency: CurrencyCode;
    accountType: AccountTypeRequest;
    sessionId?: string | null;
    devKey?: string | null;
  };

  export class GetIntlConfigError extends ApiError {
    declare readonly payload:
      | Declared<"error4XX", BdcError[]>
      | Declared<"error5XX", BdcError[]>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetIntlConfigError> = [
      {
        on: [400, 499],
        kind: "error4XX",
        decode: { kind: "json", schema: s.array(s.lazy(() => bdcErrorInternalSchema)) },
      },
      {
        on: [500, 599],
        kind: "error5XX",
        decode: { kind: "json", schema: s.array(s.lazy(() => bdcErrorInternalSchema)) },
      },
    ];
  }

  export type GetVendorRequest = {
    vendorId: string;
    sessionId?: string | null;
    devKey?: string | null;
  };

  export const getVendorRequestSchema: Schema<GetVendorRequest> = s.lazySchema(() =>
    s.object<GetVendorRequest>({
      vendorId: s.string().check(s.minLength(1)),
      sessionId: s.optionalNullable(s.string()),
      devKey: s.optionalNullable(s.string()),
    }),
  );

  export class GetVendorError extends ApiError {
    declare readonly payload:
      | Declared<"error4XX", BdcError[]>
      | Declared<"error5XX", BdcError[]>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetVendorError> = [
      {
        on: [400, 499],
        kind: "error4XX",
        decode: { kind: "json", schema: s.array(s.lazy(() => bdcErrorInternalSchema)) },
      },
      {
        on: [500, 599],
        kind: "error5XX",
        decode: { kind: "json", schema: s.array(s.lazy(() => bdcErrorInternalSchema)) },
      },
    ];
  }

  export type GetVendorBankAccountRequest = {
    vendorId: string;
    sessionId?: string | null;
    devKey?: string | null;
  };

  export const getVendorBankAccountRequestSchema: Schema<GetVendorBankAccountRequest> = s.lazySchema(() =>
    s.object<GetVendorBankAccountRequest>({
      vendorId: s.string().check(s.minLength(1)),
      sessionId: s.optionalNullable(s.string()),
      devKey: s.optionalNullable(s.string()),
    }),
  );

  export class GetVendorBankAccountError extends ApiError {
    declare readonly payload:
      | Declared<"error4XX", BdcError[]>
      | Declared<"error5XX", BdcError[]>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetVendorBankAccountError> = [
      {
        on: [400, 499],
        kind: "error4XX",
        decode: { kind: "json", schema: s.array(s.lazy(() => bdcErrorInternalSchema)) },
      },
      {
        on: [500, 599],
        kind: "error5XX",
        decode: { kind: "json", schema: s.array(s.lazy(() => bdcErrorInternalSchema)) },
      },
    ];
  }

  export type ListVendorsRequest = {
    max?: number | null;
    sort?: string | null;
    filters?: string | null;
    page?: string | null;
    sessionId?: string | null;
    devKey?: string | null;
  };

  export const listVendorsRequestSchema: Schema<ListVendorsRequest> = s.lazySchema(() =>
    s.object<ListVendorsRequest>({
      max: s.optionalNullable(s.int().check(s.gte(1), s.lte(100))),
      sort: s.optionalNullable(s.string()),
      filters: s.optionalNullable(s.string()),
      page: s.optionalNullable(s.string()),
      sessionId: s.optionalNullable(s.string()),
      devKey: s.optionalNullable(s.string()),
    }),
  );

  export class ListVendorsError extends ApiError {
    declare readonly payload:
      | Declared<"error4XX", BdcError[]>
      | Declared<"error5XX", BdcError[]>
      | Undeclared;

    static readonly errors: ErrorDecoders<ListVendorsError> = [
      {
        on: [400, 499],
        kind: "error4XX",
        decode: { kind: "json", schema: s.array(s.lazy(() => bdcErrorInternalSchema)) },
      },
      {
        on: [500, 599],
        kind: "error5XX",
        decode: { kind: "json", schema: s.array(s.lazy(() => bdcErrorInternalSchema)) },
      },
    ];
  }

  export type RestoreVendorRequest = {
    vendorId: string;
    sessionId?: string | null;
    devKey?: string | null;
  };

  export const restoreVendorRequestSchema: Schema<RestoreVendorRequest> = s.lazySchema(() =>
    s.object<RestoreVendorRequest>({
      vendorId: s.string().check(s.minLength(1)),
      sessionId: s.optionalNullable(s.string()),
      devKey: s.optionalNullable(s.string()),
    }),
  );

  export class RestoreVendorError extends ApiError {
    declare readonly payload:
      | Declared<"error4XX", BdcError[]>
      | Declared<"error5XX", BdcError[]>
      | Undeclared;

    static readonly errors: ErrorDecoders<RestoreVendorError> = [
      {
        on: [400, 499],
        kind: "error4XX",
        decode: { kind: "json", schema: s.array(s.lazy(() => bdcErrorInternalSchema)) },
      },
      {
        on: [500, 599],
        kind: "error5XX",
        decode: { kind: "json", schema: s.array(s.lazy(() => bdcErrorInternalSchema)) },
      },
    ];
  }

  export type UpdateVendorRequest = {
    vendorId: string;
    sessionId?: string | null;
    devKey?: string | null;
    body: VendorUpdateRequestDto;
  };

  export const updateVendorRequestSchema: Schema<UpdateVendorRequest> = s.lazySchema(() =>
    s.object<UpdateVendorRequest>({
      vendorId: s.string().check(s.minLength(1)),
      sessionId: s.optionalNullable(s.string()),
      devKey: s.optionalNullable(s.string()),
      body: vendorUpdateRequestDtoSchema,
    }),
  );

  export class UpdateVendorError extends ApiError {
    declare readonly payload:
      | Declared<"error4XX", BdcError[]>
      | Declared<"error5XX", BdcError[]>
      | Undeclared;

    static readonly errors: ErrorDecoders<UpdateVendorError> = [
      {
        on: [400, 499],
        kind: "error4XX",
        decode: { kind: "json", schema: s.array(s.lazy(() => bdcErrorInternalSchema)) },
      },
      {
        on: [500, 599],
        kind: "error5XX",
        decode: { kind: "json", schema: s.array(s.lazy(() => bdcErrorInternalSchema)) },
      },
    ];
  }
}
