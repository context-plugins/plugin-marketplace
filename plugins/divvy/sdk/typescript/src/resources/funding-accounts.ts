import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { noneAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { apCardResponseDtoSchema, type ApCardResponseDto } from "../models/ap-card-response-dto.js";
import {
  bankAccountVerifyRequestDtoInternalSchema,
  type BankAccountVerifyRequestDto,
} from "../models/bank-account-verify-request-dto.js";
import {
  bankAccountVerifyResponseDtoSchema,
  type BankAccountVerifyResponseDto,
} from "../models/bank-account-verify-response-dto.js";
import { bdcErrorInternalSchema, type BdcError } from "../models/bdc-error.js";
import {
  cardAccountResponseDtoSchema,
  type CardAccountResponseDto,
} from "../models/card-account-response-dto.js";
import { cardUserStatusSchema, type CardUserStatus } from "../models/card-user-status.js";
import {
  fundingAccountPermissionResponseDtoSchema,
  type FundingAccountPermissionResponseDto,
} from "../models/funding-account-permission-response-dto.js";
import {
  listCardFundingPurposesResponseDtoSchema,
  type ListCardFundingPurposesResponseDto,
} from "../models/list-card-funding-purposes-response-dto.js";
import {
  listPayableCardAccountsResponseDtoSchema,
  type ListPayableCardAccountsResponseDto,
} from "../models/list-payable-card-accounts-response-dto.js";
import {
  listResponseDtoOrganizationBankAccountResponseDtoSchema,
  type ListResponseDtoOrganizationBankAccountResponseDto,
} from "../models/list-response-dto-organization-bank-account-response-dto.js";
import {
  listResponseDtoOrganizationBankAccountUserResponseDtoSchema,
  type ListResponseDtoOrganizationBankAccountUserResponseDto,
} from "../models/list-response-dto-organization-bank-account-user-response-dto.js";
import {
  listResponseDtoOrganizationCardAccountUserResponseDtoSchema,
  type ListResponseDtoOrganizationCardAccountUserResponseDto,
} from "../models/list-response-dto-organization-card-account-user-response-dto.js";
import {
  nominateBankAccountUserRequestDtoInternalSchema,
  type NominateBankAccountUserRequestDto,
} from "../models/nominate-bank-account-user-request-dto.js";
import {
  organizationBankAccountCreateRequestDtoInternalSchema,
  type OrganizationBankAccountCreateRequestDto,
} from "../models/organization-bank-account-create-request-dto.js";
import {
  organizationBankAccountResponseDtoSchema,
  type OrganizationBankAccountResponseDto,
} from "../models/organization-bank-account-response-dto.js";
import {
  organizationBankAccountUpdateRequestDtoInternalSchema,
  organizationBankAccountUpdateRequestDtoSchema,
  type OrganizationBankAccountUpdateRequestDto,
} from "../models/organization-bank-account-update-request-dto.js";
import {
  organizationBankAccountUserResponseDtoSchema,
  type OrganizationBankAccountUserResponseDto,
} from "../models/organization-bank-account-user-response-dto.js";
import { statusDtoSchema, type StatusDto } from "../models/status-dto.js";
import type { Servers } from "../servers.js";

export class FundingAccounts {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;

  constructor(rawClient: RawClient, servers: Servers) {
    this.#rawClient = rawClient;
    this.#servers = servers;
  }

  /**
   * Archive a bank account
   *
   * @remarks
   * Archive an existing bank account. In the response, the `archived` field is set as `true`.
   *
   * Archiving a bank account at BILL has a set of requirements.
   * * **Bank account status**: The bank account `status` must be set as `VERIFIED`. You can verify
   *   the bank account with `POST /v3/funding-accounts/banks/{bankAccountId}/verify`.
   * * **Bank account user status**: The bank account user `verificationStatus` must be set as
   *   `VERIFIED`. To begin the verification process, nominate a bank account user with `POST
   *   /v3/funding-accounts/banks/users`.
   *
   * @returns Archive a bank account response
   *
   * @throws {@link FundingAccounts.ArchiveBankAccountError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link DivvyError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  archiveBankAccount(
    request: FundingAccounts.ArchiveBankAccountRequest,
    options?: RequestOptions,
  ): ApiPromise<OrganizationBankAccountResponseDto, FundingAccounts.ArchiveBankAccountError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v3/funding-accounts/banks/{bankAccountId}/archive"),
        auth: noneAuth,
        pathParams: [{ name: "bankAccountId", value: request.bankAccountId, schema: s.string() }],
        query: [],
        headers: [
          { name: "sessionId", value: request.sessionId, schema: s.optionalNullable(s.string()) },
          { name: "devKey", value: request.devKey, schema: s.optionalNullable(s.string()) },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: organizationBankAccountResponseDtoSchema },
        errorFactory: FundingAccounts.ArchiveBankAccountError,
      },
      options,
    );
  }

  /**
   * Archive a bank account user
   *
   * @remarks
   * Archive an existing bank account user. In the response, the `archived` field is set as `true`
   * and the bank account user `verificationStatus` is set as `UNVERIFIED`.
   *
   * @returns Archive a bank account user response
   *
   * @throws {@link FundingAccounts.ArchiveBankAccountUserError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link DivvyError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  archiveBankAccountUser(
    request: FundingAccounts.ArchiveBankAccountUserRequest,
    options?: RequestOptions,
  ): ApiPromise<OrganizationBankAccountUserResponseDto, FundingAccounts.ArchiveBankAccountUserError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v3/funding-accounts/banks/users/{bankAccountUserId}/archive"),
        auth: noneAuth,
        pathParams: [{ name: "bankAccountUserId", value: request.bankAccountUserId, schema: s.string() }],
        query: [],
        headers: [
          { name: "sessionId", value: request.sessionId, schema: s.optionalNullable(s.string()) },
          { name: "devKey", value: request.devKey, schema: s.optionalNullable(s.string()) },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: organizationBankAccountUserResponseDtoSchema },
        errorFactory: FundingAccounts.ArchiveBankAccountUserError,
      },
      options,
    );
  }

  /**
   * Create a bank account
   *
   * @remarks
   * Create a new bank account. The currently signed-in user must have the `ADMINISTRATOR` user role
   * in the BILL organization to perform this operation. BILL sends an email notification for
   * informing you about changes to your funding accounts.
   *
   * When you create a bank account, BILL sends a test ACH payment to confirm whether the account
   * details are accurate.
   *
   * In the response, three fields are set to their default values.
   * * The bank account `status` is set as `PENDING`. You can verify the bank account with `POST
   *   /v3/funding-accounts/banks/{bankAccountId}/verify`.
   * * The `payables` and `receivables` values are set as `false`. To update these values, update
   *   the bank account with `PATCH /v3/funding-accounts/banks/{bankAccountId}`.
   *
   * **Note**: Creating a bank account requires an MFA-trusted API session. See MFA setup for
   * information about the BILL MFA process.
   *
   * See Bank account setup (v3 API) in the Guides section for more information, sample requests,
   * and responses.
   *
   * @returns Create a bank account response
   *
   * @throws {@link FundingAccounts.CreateBankAccountError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link DivvyError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  createBankAccount(
    request: FundingAccounts.CreateBankAccountRequest,
    options?: RequestOptions,
  ): ApiPromise<OrganizationBankAccountResponseDto, FundingAccounts.CreateBankAccountError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v3/funding-accounts/banks"),
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
          schema: organizationBankAccountCreateRequestDtoInternalSchema,
        },
      },
      {
        success: { kind: "json", schema: organizationBankAccountResponseDtoSchema },
        errorFactory: FundingAccounts.CreateBankAccountError,
      },
      options,
    );
  }

  /**
   * Get bank account details
   *
   * @remarks
   * Get details about an existing bank account.
   *
   * @returns Get bank account details response
   *
   * @throws {@link FundingAccounts.GetBankAccountError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link DivvyError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getBankAccount(
    request: FundingAccounts.GetBankAccountRequest,
    options?: RequestOptions,
  ): ApiPromise<OrganizationBankAccountResponseDto, FundingAccounts.GetBankAccountError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v3/funding-accounts/banks/{bankAccountId}"),
        auth: noneAuth,
        pathParams: [{ name: "bankAccountId", value: request.bankAccountId, schema: s.string() }],
        query: [],
        headers: [
          { name: "sessionId", value: request.sessionId, schema: s.optionalNullable(s.string()) },
          { name: "devKey", value: request.devKey, schema: s.optionalNullable(s.string()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: organizationBankAccountResponseDtoSchema },
        errorFactory: FundingAccounts.GetBankAccountError,
      },
      options,
    );
  }

  /**
   * Get card account details
   *
   * @remarks
   * Get details about an existing card account.
   *
   * @returns Get card account details response
   *
   * @throws {@link FundingAccounts.GetCardAccountError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link DivvyError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getCardAccount(
    request: FundingAccounts.GetCardAccountRequest,
    options?: RequestOptions,
  ): ApiPromise<CardAccountResponseDto, FundingAccounts.GetCardAccountError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v3/funding-accounts/cards/{cardAccountId}"),
        auth: noneAuth,
        pathParams: [{ name: "cardAccountId", value: request.cardAccountId, schema: s.string() }],
        query: [],
        headers: [
          { name: "sessionId", value: request.sessionId, schema: s.optionalNullable(s.string()) },
          { name: "devKey", value: request.devKey, schema: s.optionalNullable(s.string()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: cardAccountResponseDtoSchema },
        errorFactory: FundingAccounts.GetCardAccountError,
      },
      options,
    );
  }

  /**
   * Get funding account permissions
   *
   * @remarks
   * Get the funding account permissions available for the current organization and current
   * organization user.
   *
   * @returns Get funding account permissions response
   *
   * @throws {@link FundingAccounts.GetFundingAccountPermissionError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link DivvyError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getFundingAccountPermission(
    request: FundingAccounts.GetFundingAccountPermissionRequest = {},
    options?: RequestOptions,
  ): ApiPromise<FundingAccountPermissionResponseDto, FundingAccounts.GetFundingAccountPermissionError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v3/funding-accounts/permissions"),
        auth: noneAuth,
        pathParams: [],
        query: [],
        headers: [
          { name: "sessionId", value: request.sessionId, schema: s.optionalNullable(s.string()) },
          { name: "devKey", value: request.devKey, schema: s.optionalNullable(s.string()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: fundingAccountPermissionResponseDtoSchema },
        errorFactory: FundingAccounts.GetFundingAccountPermissionError,
      },
      options,
    );
  }

  /**
   * Get list of bank account users
   *
   * @remarks
   * Get a list of bank account user objects. In the response, if the bank account user
   * `verificationStatus` is set as `NOMINATED`, user verification must be completed before the user
   * can pay with the specified bank account.
   *
   * By default, you get 20 results on one page of results. Set `max` in your request to get up to
   * 100 results on one page.
   *
   * @returns Get list of bank account users response
   *
   * @throws {@link FundingAccounts.ListBankAccountUsersError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link DivvyError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listBankAccountUsers(
    request: FundingAccounts.ListBankAccountUsersRequest = {},
    options?: RequestOptions,
  ): ApiPromise<
    ListResponseDtoOrganizationBankAccountUserResponseDto,
    FundingAccounts.ListBankAccountUsersError
  > {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v3/funding-accounts/banks/users"),
        auth: noneAuth,
        pathParams: [],
        query: [
          { name: "max", value: request.max, schema: s.optionalNullable(s.int()) },
          { name: "sort", value: request.sort, schema: s.optionalNullable(s.string()) },
          { name: "filters", value: request.filters, schema: s.optionalNullable(s.string()) },
          { name: "page", value: request.page, schema: s.optionalNullable(s.string()) },
          { name: "currentUser", value: request.currentUser, schema: s.optionalNullable(s.boolean()) },
        ],
        headers: [
          { name: "sessionId", value: request.sessionId, schema: s.optionalNullable(s.string()) },
          { name: "devKey", value: request.devKey, schema: s.optionalNullable(s.string()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: listResponseDtoOrganizationBankAccountUserResponseDtoSchema },
        errorFactory: FundingAccounts.ListBankAccountUsersError,
      },
      options,
    );
  }

  /**
   * Get list of bank accounts
   *
   * @remarks
   * Get a list of bank account objects. By default, you get 20 results on one page of results. Set
   * `max` in your request to get up to 100 results on one page.
   *
   * See Search operations with lists in the Guides section for filtering, sorting, and pagination
   * examples.
   *
   * @returns Get list of bank accounts response
   *
   * @throws {@link FundingAccounts.ListBankAccountsError} when the API answers with an error status
   * — narrow on `err.payload.kind`
   *
   * @throws {@link DivvyError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listBankAccounts(
    request: FundingAccounts.ListBankAccountsRequest = {},
    options?: RequestOptions,
  ): ApiPromise<ListResponseDtoOrganizationBankAccountResponseDto, FundingAccounts.ListBankAccountsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v3/funding-accounts/banks"),
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
        success: { kind: "json", schema: listResponseDtoOrganizationBankAccountResponseDtoSchema },
        errorFactory: FundingAccounts.ListBankAccountsError,
      },
      options,
    );
  }

  /**
   * Get list of card account users
   *
   * @remarks
   * Get a list of card account user objects. In the response, if the card account user
   * `verificationStatus` is set as `NOMINATED`, user verification must be completed before the user
   * can pay with the specified card account.
   *
   * By default, you get 20 results on one page of results. Set `max` in your request to get up to
   * 100 results on one page.
   *
   * @returns Get list of card account users response
   *
   * @throws {@link FundingAccounts.ListCardAccountUsersError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link DivvyError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listCardAccountUsers(
    request: FundingAccounts.ListCardAccountUsersRequest = {},
    options?: RequestOptions,
  ): ApiPromise<
    ListResponseDtoOrganizationCardAccountUserResponseDto,
    FundingAccounts.ListCardAccountUsersError
  > {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v3/funding-accounts/cards/users"),
        auth: noneAuth,
        pathParams: [],
        query: [
          { name: "max", value: request.max, schema: s.optionalNullable(s.int()) },
          { name: "sort", value: request.sort, schema: s.optionalNullable(s.string()) },
          { name: "filters", value: request.filters, schema: s.optionalNullable(s.string()) },
          { name: "page", value: request.page, schema: s.optionalNullable(s.string()) },
          { name: "currentUser", value: request.currentUser, schema: s.optionalNullable(s.boolean()) },
        ],
        headers: [
          { name: "sessionId", value: request.sessionId, schema: s.optionalNullable(s.string()) },
          { name: "devKey", value: request.devKey, schema: s.optionalNullable(s.string()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: listResponseDtoOrganizationCardAccountUserResponseDtoSchema },
        errorFactory: FundingAccounts.ListCardAccountUsersError,
      },
      options,
    );
  }

  /**
   * Get card funding purpose
   *
   * @remarks
   * Get a list of card funding purpose values based on the vendor and card brand.
   *
   * When you create a payment (`POST /v3/payments` or `POST /v3/payments/bulk`) with a
   * `CARD_ACCOUNT` funding account `type`, BILL requires a vendor industry value for compliance.
   * When BILL cannot identify the vendor industry, the `cardFundingPurpose` field must be set in
   * your payment request.
   *
   * Use this endpoint to get the list of card funding purpose values you can set. If you get an
   * empty 200 response, BILL has information about the vendor industry and setting the
   * `cardFundingPurpose` field is not required in your payment request.
   *
   * @returns Get card funding purpose response
   *
   * @throws {@link FundingAccounts.ListCardFundingPurposesError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link DivvyError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listCardFundingPurposes(
    request: FundingAccounts.ListCardFundingPurposesRequest,
    options?: RequestOptions,
  ): ApiPromise<ListCardFundingPurposesResponseDto, FundingAccounts.ListCardFundingPurposesError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v3/funding-accounts/cards/funding-purposes"),
        auth: noneAuth,
        pathParams: [],
        query: [
          { name: "vendorId", value: request.vendorId, schema: s.string() },
          { name: "brand", value: request.brand, schema: s.string() },
        ],
        headers: [
          { name: "sessionId", value: request.sessionId, schema: s.optionalNullable(s.string()) },
          { name: "devKey", value: request.devKey, schema: s.optionalNullable(s.string()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: listCardFundingPurposesResponseDtoSchema },
        errorFactory: FundingAccounts.ListCardFundingPurposesError,
      },
      options,
    );
  }

  /**
   * Get list of AP Cards
   *
   * @remarks
   * Get a list of AP Card objects.
   *
   * With the AP Card, you can earn rewards simply by paying your bills. The AP Card is a payment
   * method that enables you to send fast payments with no transaction fees or annual fees. You can
   * use the AP Card with any vendor who accepts virtual card payments.
   *
   * See AP Card Frequently Asked Questions (FAQs) in the BILL Help to learn more about AP Card.
   *
   * @returns Get list of AP Cards response
   *
   * @throws {@link FundingAccounts.ListPayableApCardsError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link DivvyError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listPayableApCards(
    request: FundingAccounts.ListPayableApCardsRequest = {},
    options?: RequestOptions,
  ): ApiPromise<ApCardResponseDto[], FundingAccounts.ListPayableApCardsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v3/funding-accounts/ap-cards"),
        auth: noneAuth,
        pathParams: [],
        query: [],
        headers: [
          { name: "sessionId", value: request.sessionId, schema: s.optionalNullable(s.string()) },
          { name: "devKey", value: request.devKey, schema: s.optionalNullable(s.string()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => apCardResponseDtoSchema)) },
        errorFactory: FundingAccounts.ListPayableApCardsError,
      },
      options,
    );
  }

  /**
   * Get list of card accounts
   *
   * @remarks
   * Get a list of card account objects.
   *
   * @returns Get list of card accounts response
   *
   * @throws {@link FundingAccounts.ListPayableCardAccountsError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link DivvyError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listPayableCardAccounts(
    request: FundingAccounts.ListPayableCardAccountsRequest,
    options?: RequestOptions,
  ): ApiPromise<ListPayableCardAccountsResponseDto, FundingAccounts.ListPayableCardAccountsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v3/funding-accounts/cards"),
        auth: noneAuth,
        pathParams: [],
        query: [{ name: "cardUserStatus", value: request.cardUserStatus, schema: cardUserStatusSchema }],
        headers: [
          { name: "sessionId", value: request.sessionId, schema: s.optionalNullable(s.string()) },
          { name: "devKey", value: request.devKey, schema: s.optionalNullable(s.string()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: listPayableCardAccountsResponseDtoSchema },
        errorFactory: FundingAccounts.ListPayableCardAccountsError,
      },
      options,
    );
  }

  /**
   * Nominate a bank account user
   *
   * @remarks
   * Nominate a bank account user.
   *
   * When you nominate a user, BILL performs a set of operations.
   * * The bank account user `verificationStatus` is set as `NOMINATED`.
   * * BILL sends the user an email asking them to sign in to the BILL web app and complete identity
   *   verification. See Verify your identity in the Guides section for test verification
   *   information you can enter in the sandbox environment.
   *
   * After user identity verification is successful, the bank account user `verificationStatus` is
   * set as `VERIFIED` and the user can pay with the specified bank account.
   *
   * **Note**: The bank account `status` must be set as `VERIFIED` before you can nominate bank
   * account users.
   *
   * @returns Nominate a bank account user response
   *
   * @throws {@link FundingAccounts.NominateBankAccountUserError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link DivvyError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  nominateBankAccountUser(
    request: FundingAccounts.NominateBankAccountUserRequest,
    options?: RequestOptions,
  ): ApiPromise<StatusDto, FundingAccounts.NominateBankAccountUserError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v3/funding-accounts/banks/users/nominate"),
        auth: noneAuth,
        pathParams: [],
        query: [],
        headers: [
          { name: "sessionId", value: request.sessionId, schema: s.optionalNullable(s.string()) },
          { name: "devKey", value: request.devKey, schema: s.optionalNullable(s.string()) },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "json", value: request.body, schema: nominateBankAccountUserRequestDtoInternalSchema },
      },
      {
        success: { kind: "json", schema: statusDtoSchema },
        errorFactory: FundingAccounts.NominateBankAccountUserError,
      },
      options,
    );
  }

  /**
   * Update a bank account
   *
   * @remarks
   * Update details about an existing bank account.
   *
   * This operation follows a set of rules.
   * * **Bank account `status` requirement**: The bank account `status` must be set as `VERIFIED`
   *   before you can update any details about the bank account. You can verify the bank account
   *   with `POST /v3/funding-accounts/banks/{bankAccountId}/verify`.
   * * **Update field restrictions**: You cannot update the `routingNumber`, `accountNumber`, and
   *   account `type` values for a bank account. If you want to update any of these values, create a
   *   new bank account with `POST /v3/funding-accounts/banks`.
   *
   * @returns Update a bank account response
   *
   * @throws {@link FundingAccounts.UpdateBankAccountError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link DivvyError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  updateBankAccount(
    request: FundingAccounts.UpdateBankAccountRequest,
    options?: RequestOptions,
  ): ApiPromise<OrganizationBankAccountResponseDto, FundingAccounts.UpdateBankAccountError> {
    return this.#rawClient.execute(
      {
        method: "PATCH",
        urlTemplate: this.#servers.default("/v3/funding-accounts/banks/{bankAccountId}"),
        auth: noneAuth,
        pathParams: [{ name: "bankAccountId", value: request.bankAccountId, schema: s.string() }],
        query: [],
        headers: [
          { name: "sessionId", value: request.sessionId, schema: s.optionalNullable(s.string()) },
          { name: "devKey", value: request.devKey, schema: s.optionalNullable(s.string()) },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: {
          kind: "json",
          value: request.body,
          schema: organizationBankAccountUpdateRequestDtoInternalSchema,
        },
      },
      {
        success: { kind: "json", schema: organizationBankAccountResponseDtoSchema },
        errorFactory: FundingAccounts.UpdateBankAccountError,
      },
      options,
    );
  }

  /**
   * Verify a bank account
   *
   * @remarks
   * Verify an existing bank account.
   *
   * When you create a bank account, BILL sends a test ACH payment to the bank account to confirm
   * whether the account details are accurate. Enter the test amount as the `depositAmount` value in
   * your `POST /v3/funding-accounts/banks/{bankAccountId}/verify` request.
   *
   * **Note**: Bank account verification is required in the production environment before the
   * account can be used for other BILL operations. In the sandbox environment, set `depositAmount`
   * as `0.50` to complete bank account verification.
   *
   * The bank account `status` is set as `VERIFIED` when BILL is able to verify the `depositAmount`
   * value. BILL sends an email notification for confirming a test transaction. When BILL cannot
   * verify the bank account after three attempts, you cannot use the bank account. At this point,
   * use another bank account or create a bank account with `POST /v3/funding-accounts/banks`.
   *
   * After your bank account verification is complete, ensure that the current bank account user
   * `verificationStatus` is set as `VERIFIED` before you can use the bank account. To begin the
   * verification process, nominate a bank account user with `POST
   * /v3/funding-accounts/banks/users/nominate`.
   *
   * See Bank account setup (v3 API) in the Guides section for more information, sample requests,
   * and responses.
   *
   * @returns Verify a bank account response
   *
   * @throws {@link FundingAccounts.VerifyBankAccountError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link DivvyError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  verifyBankAccount(
    request: FundingAccounts.VerifyBankAccountRequest,
    options?: RequestOptions,
  ): ApiPromise<BankAccountVerifyResponseDto, FundingAccounts.VerifyBankAccountError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v3/funding-accounts/banks/{bankAccountId}/verify"),
        auth: noneAuth,
        pathParams: [{ name: "bankAccountId", value: request.bankAccountId, schema: s.string() }],
        query: [],
        headers: [
          { name: "sessionId", value: request.sessionId, schema: s.optionalNullable(s.string()) },
          { name: "devKey", value: request.devKey, schema: s.optionalNullable(s.string()) },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "json", value: request.body, schema: bankAccountVerifyRequestDtoInternalSchema },
      },
      {
        success: { kind: "json", schema: bankAccountVerifyResponseDtoSchema },
        errorFactory: FundingAccounts.VerifyBankAccountError,
      },
      options,
    );
  }
}

export namespace FundingAccounts {
  export type ArchiveBankAccountRequest = {
    bankAccountId: string;
    sessionId?: string | null;
    devKey?: string | null;
  };

  export const archiveBankAccountRequestSchema: Schema<ArchiveBankAccountRequest> = s.lazySchema(() =>
    s.object<ArchiveBankAccountRequest>({
      bankAccountId: s.string().check(s.minLength(1)),
      sessionId: s.optionalNullable(s.string()),
      devKey: s.optionalNullable(s.string()),
    }),
  );

  export class ArchiveBankAccountError extends ApiError {
    declare readonly payload:
      | Declared<"error4XX", BdcError[]>
      | Declared<"error5XX", BdcError[]>
      | Undeclared;

    static readonly errors: ErrorDecoders<ArchiveBankAccountError> = [
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

  export type ArchiveBankAccountUserRequest = {
    bankAccountUserId: string;
    sessionId?: string | null;
    devKey?: string | null;
  };

  export const archiveBankAccountUserRequestSchema: Schema<ArchiveBankAccountUserRequest> = s.lazySchema(() =>
    s.object<ArchiveBankAccountUserRequest>({
      bankAccountUserId: s.string().check(s.minLength(1)),
      sessionId: s.optionalNullable(s.string()),
      devKey: s.optionalNullable(s.string()),
    }),
  );

  export class ArchiveBankAccountUserError extends ApiError {
    declare readonly payload:
      | Declared<"error4XX", BdcError[]>
      | Declared<"error5XX", BdcError[]>
      | Undeclared;

    static readonly errors: ErrorDecoders<ArchiveBankAccountUserError> = [
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

  export type CreateBankAccountRequest = {
    sessionId?: string | null;
    devKey?: string | null;
    body: OrganizationBankAccountCreateRequestDto;
  };

  export class CreateBankAccountError extends ApiError {
    declare readonly payload:
      | Declared<"error4XX", BdcError[]>
      | Declared<"error5XX", BdcError[]>
      | Undeclared;

    static readonly errors: ErrorDecoders<CreateBankAccountError> = [
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

  export type GetBankAccountRequest = {
    bankAccountId: string;
    sessionId?: string | null;
    devKey?: string | null;
  };

  export const getBankAccountRequestSchema: Schema<GetBankAccountRequest> = s.lazySchema(() =>
    s.object<GetBankAccountRequest>({
      bankAccountId: s.string().check(s.minLength(1)),
      sessionId: s.optionalNullable(s.string()),
      devKey: s.optionalNullable(s.string()),
    }),
  );

  export class GetBankAccountError extends ApiError {
    declare readonly payload:
      | Declared<"error4XX", BdcError[]>
      | Declared<"error5XX", BdcError[]>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetBankAccountError> = [
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

  export type GetCardAccountRequest = {
    cardAccountId: string;
    sessionId?: string | null;
    devKey?: string | null;
  };

  export const getCardAccountRequestSchema: Schema<GetCardAccountRequest> = s.lazySchema(() =>
    s.object<GetCardAccountRequest>({
      cardAccountId: s.string().check(s.minLength(1)),
      sessionId: s.optionalNullable(s.string()),
      devKey: s.optionalNullable(s.string()),
    }),
  );

  export class GetCardAccountError extends ApiError {
    declare readonly payload:
      | Declared<"error4XX", BdcError[]>
      | Declared<"error5XX", BdcError[]>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetCardAccountError> = [
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

  export type GetFundingAccountPermissionRequest = {
    sessionId?: string | null;
    devKey?: string | null;
  };

  export class GetFundingAccountPermissionError extends ApiError {
    declare readonly payload:
      | Declared<"error4XX", BdcError[]>
      | Declared<"error5XX", BdcError[]>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetFundingAccountPermissionError> = [
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

  export type ListBankAccountUsersRequest = {
    max?: number | null;
    sort?: string | null;
    filters?: string | null;
    page?: string | null;
    currentUser?: boolean | null;
    sessionId?: string | null;
    devKey?: string | null;
  };

  export const listBankAccountUsersRequestSchema: Schema<ListBankAccountUsersRequest> = s.lazySchema(() =>
    s.object<ListBankAccountUsersRequest>({
      max: s.optionalNullable(s.int().check(s.gte(1), s.lte(100))),
      sort: s.optionalNullable(s.string()),
      filters: s.optionalNullable(s.string()),
      page: s.optionalNullable(s.string()),
      currentUser: s.optionalNullable(s.boolean()),
      sessionId: s.optionalNullable(s.string()),
      devKey: s.optionalNullable(s.string()),
    }),
  );

  export class ListBankAccountUsersError extends ApiError {
    declare readonly payload:
      | Declared<"error4XX", BdcError[]>
      | Declared<"error5XX", BdcError[]>
      | Undeclared;

    static readonly errors: ErrorDecoders<ListBankAccountUsersError> = [
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

  export type ListBankAccountsRequest = {
    max?: number | null;
    sort?: string | null;
    filters?: string | null;
    page?: string | null;
    sessionId?: string | null;
    devKey?: string | null;
  };

  export const listBankAccountsRequestSchema: Schema<ListBankAccountsRequest> = s.lazySchema(() =>
    s.object<ListBankAccountsRequest>({
      max: s.optionalNullable(s.int().check(s.gte(1), s.lte(100))),
      sort: s.optionalNullable(s.string()),
      filters: s.optionalNullable(s.string()),
      page: s.optionalNullable(s.string()),
      sessionId: s.optionalNullable(s.string()),
      devKey: s.optionalNullable(s.string()),
    }),
  );

  export class ListBankAccountsError extends ApiError {
    declare readonly payload:
      | Declared<"error4XX", BdcError[]>
      | Declared<"error5XX", BdcError[]>
      | Undeclared;

    static readonly errors: ErrorDecoders<ListBankAccountsError> = [
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

  export type ListCardAccountUsersRequest = {
    max?: number | null;
    sort?: string | null;
    filters?: string | null;
    page?: string | null;
    currentUser?: boolean | null;
    sessionId?: string | null;
    devKey?: string | null;
  };

  export const listCardAccountUsersRequestSchema: Schema<ListCardAccountUsersRequest> = s.lazySchema(() =>
    s.object<ListCardAccountUsersRequest>({
      max: s.optionalNullable(s.int().check(s.gte(1), s.lte(100))),
      sort: s.optionalNullable(s.string()),
      filters: s.optionalNullable(s.string()),
      page: s.optionalNullable(s.string()),
      currentUser: s.optionalNullable(s.boolean()),
      sessionId: s.optionalNullable(s.string()),
      devKey: s.optionalNullable(s.string()),
    }),
  );

  export class ListCardAccountUsersError extends ApiError {
    declare readonly payload:
      | Declared<"error4XX", BdcError[]>
      | Declared<"error5XX", BdcError[]>
      | Undeclared;

    static readonly errors: ErrorDecoders<ListCardAccountUsersError> = [
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

  export type ListCardFundingPurposesRequest = {
    vendorId: string;
    brand: string;
    sessionId?: string | null;
    devKey?: string | null;
  };

  export class ListCardFundingPurposesError extends ApiError {
    declare readonly payload:
      | Declared<"error4XX", BdcError[]>
      | Declared<"error5XX", BdcError[]>
      | Undeclared;

    static readonly errors: ErrorDecoders<ListCardFundingPurposesError> = [
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

  export type ListPayableApCardsRequest = {
    sessionId?: string | null;
    devKey?: string | null;
  };

  export class ListPayableApCardsError extends ApiError {
    declare readonly payload:
      | Declared<"error4XX", BdcError[]>
      | Declared<"error5XX", BdcError[]>
      | Undeclared;

    static readonly errors: ErrorDecoders<ListPayableApCardsError> = [
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

  export type ListPayableCardAccountsRequest = {
    cardUserStatus: CardUserStatus;
    sessionId?: string | null;
    devKey?: string | null;
  };

  export class ListPayableCardAccountsError extends ApiError {
    declare readonly payload:
      | Declared<"error4XX", BdcError[]>
      | Declared<"error5XX", BdcError[]>
      | Undeclared;

    static readonly errors: ErrorDecoders<ListPayableCardAccountsError> = [
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

  export type NominateBankAccountUserRequest = {
    sessionId?: string | null;
    devKey?: string | null;
    body: NominateBankAccountUserRequestDto;
  };

  export class NominateBankAccountUserError extends ApiError {
    declare readonly payload:
      | Declared<"error4XX", BdcError[]>
      | Declared<"error5XX", BdcError[]>
      | Undeclared;

    static readonly errors: ErrorDecoders<NominateBankAccountUserError> = [
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

  export type UpdateBankAccountRequest = {
    bankAccountId: string;
    sessionId?: string | null;
    devKey?: string | null;
    body: OrganizationBankAccountUpdateRequestDto;
  };

  export const updateBankAccountRequestSchema: Schema<UpdateBankAccountRequest> = s.lazySchema(() =>
    s.object<UpdateBankAccountRequest>({
      bankAccountId: s.string().check(s.minLength(1)),
      sessionId: s.optionalNullable(s.string()),
      devKey: s.optionalNullable(s.string()),
      body: organizationBankAccountUpdateRequestDtoSchema,
    }),
  );

  export class UpdateBankAccountError extends ApiError {
    declare readonly payload:
      | Declared<"error4XX", BdcError[]>
      | Declared<"error5XX", BdcError[]>
      | Undeclared;

    static readonly errors: ErrorDecoders<UpdateBankAccountError> = [
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

  export type VerifyBankAccountRequest = {
    bankAccountId: string;
    sessionId?: string | null;
    devKey?: string | null;
    body: BankAccountVerifyRequestDto;
  };

  export class VerifyBankAccountError extends ApiError {
    declare readonly payload:
      | Declared<"error4XX", BdcError[]>
      | Declared<"error5XX", BdcError[]>
      | Undeclared;

    static readonly errors: ErrorDecoders<VerifyBankAccountError> = [
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
