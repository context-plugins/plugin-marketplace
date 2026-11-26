import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { noneAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { bdcErrorInternalSchema, type BdcError } from "../models/bdc-error.js";
import {
  listResponseDtoOrganizationResponseDtoInternalSchema,
  type ListResponseDtoOrganizationResponseDto,
} from "../models/list-response-dto-organization-response-dto.js";
import {
  listResponseDtoOrganizationUserResponseDtoSchema,
  type ListResponseDtoOrganizationUserResponseDto,
} from "../models/list-response-dto-organization-user-response-dto.js";
import {
  listResponseDtoRoleResponseDtoSchema,
  type ListResponseDtoRoleResponseDto,
} from "../models/list-response-dto-role-response-dto.js";
import {
  loginAsUserRequestDtoInternalSchema,
  type LoginAsUserRequestDto,
} from "../models/login-as-user-request-dto.js";
import {
  loginAsUserResponseDtoSchema,
  type LoginAsUserResponseDto,
} from "../models/login-as-user-response-dto.js";
import {
  organizationCreateRequestDtoInternalSchema,
  type OrganizationCreateRequestDto,
} from "../models/organization-create-request-dto.js";
import {
  organizationResponseDtoInternalSchema,
  type OrganizationResponseDto,
} from "../models/organization-response-dto.js";
import {
  organizationUserResponseDtoSchema,
  type OrganizationUserResponseDto,
} from "../models/organization-user-response-dto.js";
import {
  partnerLoginRequestDtoSchema,
  type PartnerLoginRequestDto,
} from "../models/partner-login-request-dto.js";
import {
  partnerLoginResponseDtoSchema,
  type PartnerLoginResponseDto,
} from "../models/partner-login-response-dto.js";
import {
  partnerUserCreateRequestDtoInternalSchema,
  type PartnerUserCreateRequestDto,
} from "../models/partner-user-create-request-dto.js";
import {
  partnerUserUpdateRequestDtoSchema,
  type PartnerUserUpdateRequestDto,
} from "../models/partner-user-update-request-dto.js";
import {
  phoneVerificationRequestDtoInternalSchema,
  type PhoneVerificationRequestDto,
} from "../models/phone-verification-request-dto.js";
import { roleResponseDtoSchema, type RoleResponseDto } from "../models/role-response-dto.js";
import { statusDtoSchema, type StatusDto } from "../models/status-dto.js";
import {
  updateOrgPricePlanRequestSchema,
  type UpdateOrgPricePlanRequest,
} from "../models/update-org-price-plan-request.js";
import type { Servers } from "../servers.js";

export class Partner {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;

  constructor(rawClient: RawClient, servers: Servers) {
    this.#rawClient = rawClient;
    this.#servers = servers;
  }

  /**
   * Archive a user
   *
   * @remarks
   * Archive an existing user. In the response, the `archived` field is set as `true`.
   *
   * You can restore an archived user with `POST /v3/users/{userId}/restore`. There is no change
   * when you archive an archived user.
   *
   * This operation requires partner-level permissions.
   * * A `sessionId` header value generated with API partner login
   * * An `appKey` header value
   * * The `organizationId` of the organization
   *
   * @returns Archive a user response
   *
   * @throws {@link Partner.ArchivePartnerUserError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link BillError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  archivePartnerUser(
    request: Partner.ArchivePartnerUserRequest,
    options?: RequestOptions,
  ): ApiPromise<OrganizationUserResponseDto, Partner.ArchivePartnerUserError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v3/partner/users/{userId}/archive"),
        auth: noneAuth,
        pathParams: [{ name: "userId", value: request.userId, schema: s.string() }],
        query: [],
        headers: [
          { name: "sessionId", value: request.sessionId, schema: s.optionalNullable(s.string()) },
          { name: "appKey", value: request.appKey, schema: s.optionalNullable(s.string()) },
          { name: "organizationId", value: request.organizationId, schema: s.optionalNullable(s.string()) },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: organizationUserResponseDtoSchema },
        errorFactory: Partner.ArchivePartnerUserError,
      },
      options,
    );
  }

  /**
   * Create an organization
   *
   * @remarks
   * Create a new organization.
   *
   * This operation requires partner-level permissions.
   * * A `sessionId` header value generated with API partner login
   * * An `appKey` header value
   *
   * See Organizations for BILL partners in the Guides section for more information, sample
   * requests, and responses.
   *
   * @returns Create an organization response
   *
   * @throws {@link Partner.CreateOrganizationError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link BillError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  createOrganization(
    request: Partner.CreateOrganizationRequest,
    options?: RequestOptions,
  ): ApiPromise<OrganizationResponseDto, Partner.CreateOrganizationError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v3/partner/organizations"),
        auth: noneAuth,
        pathParams: [],
        query: [],
        headers: [
          { name: "sessionId", value: request.sessionId, schema: s.optionalNullable(s.string()) },
          { name: "appKey", value: request.appKey, schema: s.optionalNullable(s.string()) },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "json", value: request.body, schema: organizationCreateRequestDtoInternalSchema },
      },
      {
        success: { kind: "json", schema: organizationResponseDtoInternalSchema },
        errorFactory: Partner.CreateOrganizationError,
      },
      options,
    );
  }

  /**
   * Create a user
   *
   * @remarks
   * Create a new user. The new user is created for the organization (`organizationId`) in the
   * request header.
   *
   * In the request, set `username` as a unique alphanumeric value. The value must be 40 characters
   * or fewer. This field is not case-sensitive. Do not set the value as an email address or any PII
   * value. BILL uses this value to uniquely identify each user.
   *
   * This operation requires partner-level permissions.
   * * A `sessionId` header value generated with API partner login
   * * An `appKey` header value
   * * The `organizationId` of the organization
   *
   * See Users for BILL partners in the Guides section for more information, sample requests, and
   * responses.
   *
   * @returns Create a user response
   *
   * @throws {@link Partner.CreatePartnerUserError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link BillError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  createPartnerUser(
    request: Partner.CreatePartnerUserRequest,
    options?: RequestOptions,
  ): ApiPromise<OrganizationUserResponseDto, Partner.CreatePartnerUserError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v3/partner/users"),
        auth: noneAuth,
        pathParams: [],
        query: [],
        headers: [
          { name: "sessionId", value: request.sessionId, schema: s.optionalNullable(s.string()) },
          { name: "appKey", value: request.appKey, schema: s.optionalNullable(s.string()) },
          { name: "organizationId", value: request.organizationId, schema: s.optionalNullable(s.string()) },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "json", value: request.body, schema: partnerUserCreateRequestDtoInternalSchema },
      },
      {
        success: { kind: "json", schema: organizationUserResponseDtoSchema },
        errorFactory: Partner.CreatePartnerUserError,
      },
      options,
    );
  }

  /**
   * Add phone for risk verification
   *
   * @remarks
   * Add a phone number for a created user. BILL requires organization users to have a linked phone
   * number for initiating risk verification for the organization.
   *
   * You can check whether a phone number has been added for the user with `GET
   * /v3/risk-verifications/phone`.
   *
   * After you add a phone number with this endpoint, you can initiate risk verification for the
   * organization with `POST /v3/risk-verifications`.
   *
   * @returns Add phone for risk verification response
   *
   * @throws {@link Partner.CreatePhoneError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link BillError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  createPhone(
    request: Partner.CreatePhoneRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, Partner.CreatePhoneError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v3/partner/risk-verifications/{userId}/phone"),
        auth: noneAuth,
        pathParams: [{ name: "userId", value: request.userId, schema: s.string() }],
        query: [],
        headers: [
          { name: "sessionId", value: request.sessionId, schema: s.optionalNullable(s.string()) },
          { name: "appKey", value: request.appKey, schema: s.optionalNullable(s.string()) },
          { name: "organizationId", value: request.organizationId, schema: s.optionalNullable(s.string()) },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "json", value: request.body, schema: phoneVerificationRequestDtoInternalSchema },
      },
      {
        success: { kind: "empty" },
        errorFactory: Partner.CreatePhoneError,
      },
      options,
    );
  }

  /**
   * Get user details
   *
   * @remarks
   * Get details about an existing user.
   *
   * This operation requires partner-level permissions.
   * * A `sessionId` header value generated with API partner login
   * * An `appKey` header value
   * * The `organizationId` of the organization
   *
   * @returns Get user details response
   *
   * @throws {@link Partner.GetPartnerUserError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link BillError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getPartnerUser(
    request: Partner.GetPartnerUserRequest,
    options?: RequestOptions,
  ): ApiPromise<OrganizationUserResponseDto, Partner.GetPartnerUserError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v3/partner/users/{userId}"),
        auth: noneAuth,
        pathParams: [{ name: "userId", value: request.userId, schema: s.string() }],
        query: [],
        headers: [
          { name: "sessionId", value: request.sessionId, schema: s.optionalNullable(s.string()) },
          { name: "appKey", value: request.appKey, schema: s.optionalNullable(s.string()) },
          { name: "organizationId", value: request.organizationId, schema: s.optionalNullable(s.string()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: organizationUserResponseDtoSchema },
        errorFactory: Partner.GetPartnerUserError,
      },
      options,
    );
  }

  /**
   * Get user role details
   *
   * @remarks
   * Get details about an existing user role in a BILL organization.
   *
   * This operation requires partner-level permissions.
   * * A `sessionId` header value generated with API partner login
   * * An `appKey` header value
   * * The `organizationId` of the organization
   *
   * @returns Get user role details response
   *
   * @throws {@link Partner.GetPartnerUserRoleError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link BillError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getPartnerUserRole(
    request: Partner.GetPartnerUserRoleRequest,
    options?: RequestOptions,
  ): ApiPromise<RoleResponseDto, Partner.GetPartnerUserRoleError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v3/partner/roles/{roleId}"),
        auth: noneAuth,
        pathParams: [{ name: "roleId", value: request.roleId, schema: s.string() }],
        query: [],
        headers: [
          { name: "sessionId", value: request.sessionId, schema: s.optionalNullable(s.string()) },
          { name: "appKey", value: request.appKey, schema: s.optionalNullable(s.string()) },
          { name: "organizationId", value: request.organizationId, schema: s.optionalNullable(s.string()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: roleResponseDtoSchema },
        errorFactory: Partner.GetPartnerUserRoleError,
      },
      options,
    );
  }

  /**
   * Get list of organizations
   *
   * @remarks
   * Get a list of organization objects. By default, you get 20 results on one page of results. Set
   * `max` in your request to get up to 100 results on one page.
   *
   * See Search operations with lists in the Guides section for filtering, sorting, and pagination
   * examples.
   *
   * This operation requires partner-level permissions.
   * * A `sessionId` header value generated with API partner login
   * * An `appKey` header value
   *
   * @returns Get list of organizations response
   *
   * @throws {@link Partner.ListPartnerOrganizationsError} when the API answers with an error status
   * — narrow on `err.payload.kind`
   *
   * @throws {@link BillError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listPartnerOrganizations(
    request: Partner.ListPartnerOrganizationsRequest = {},
    options?: RequestOptions,
  ): ApiPromise<ListResponseDtoOrganizationResponseDto, Partner.ListPartnerOrganizationsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v3/partner/organizations"),
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
          { name: "appKey", value: request.appKey, schema: s.optionalNullable(s.string()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: listResponseDtoOrganizationResponseDtoInternalSchema },
        errorFactory: Partner.ListPartnerOrganizationsError,
      },
      options,
    );
  }

  /**
   * Get list of user roles
   *
   * @remarks
   * Get a list of user role objects available in a BILL organization. By default, you get 20
   * results on one page of results. Set `max` in your request to get up to 100 results on one page.
   *
   * See Search operations with lists in the Guides section for filtering, sorting, and pagination
   * examples.
   *
   * This operation requires partner-level permissions.
   * * A `sessionId` header value generated with API partner login
   * * An `appKey` header value
   * * The `organizationId` of the organization
   *
   * @returns Get list of user roles response
   *
   * @throws {@link Partner.ListPartnerUserRolesError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link BillError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listPartnerUserRoles(
    request: Partner.ListPartnerUserRolesRequest = {},
    options?: RequestOptions,
  ): ApiPromise<ListResponseDtoRoleResponseDto, Partner.ListPartnerUserRolesError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v3/partner/roles"),
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
          { name: "appKey", value: request.appKey, schema: s.optionalNullable(s.string()) },
          { name: "organizationId", value: request.organizationId, schema: s.optionalNullable(s.string()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: listResponseDtoRoleResponseDtoSchema },
        errorFactory: Partner.ListPartnerUserRolesError,
      },
      options,
    );
  }

  /**
   * Get list of users
   *
   * @remarks
   * Get a list of user objects. By default, you get 20 results on one page of results. Set `max` in
   * your request to get up to 100 results on one page.
   *
   * See Search operations with lists in the Guides section for filtering, sorting, and pagination
   * examples.
   *
   * This operation requires partner-level permissions.
   * * A `sessionId` header value generated with API partner login
   * * An `appKey` header value
   * * The `organizationId` of the organization
   *
   * @returns Get list of users response
   *
   * @throws {@link Partner.ListPartnerUsersError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link BillError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listPartnerUsers(
    request: Partner.ListPartnerUsersRequest = {},
    options?: RequestOptions,
  ): ApiPromise<ListResponseDtoOrganizationUserResponseDto, Partner.ListPartnerUsersError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v3/partner/users"),
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
          { name: "appKey", value: request.appKey, schema: s.optionalNullable(s.string()) },
          { name: "organizationId", value: request.organizationId, schema: s.optionalNullable(s.string()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: listResponseDtoOrganizationUserResponseDtoSchema },
        errorFactory: Partner.ListPartnerUsersError,
      },
      options,
    );
  }

  /**
   * API login as user
   *
   * @remarks
   * Sign in to a created organization as a created user of that organization. In the response, your
   * API session is created and a generated `sessionId` is available for organization-level BILL API
   * operations.
   *
   * This endpoint is required for a specific BILL partner-level workflow.
   * 1. Sign in to your partner account with API partner login.
   * 2. Create a child BILL organization with `POST /v3/partner/organizations`. In the response, a
   *    BILL-generated organization `id` is available.
   * 3. Create a user for the child BILL organization with `POST /v3/partner/users`. In the
   *    response, a BILL-generated user `id` is available.
   * 4. Sign in to the created organization as the created user of that organization with `POST
   *    /v3/partner/login-as-user`. After signing in, you can perform organization-level BILL API
   *    operations, such as creating a bill or paying a vendor. All organization-level BILL API
   *    operations require a `devKey` and `sessionId`.
   *
   * **Note**: When you create an organization and then create a user for that organization, it is
   * important that you initiate risk verification with `POST /v3/risk-verifications`. See Initiate
   * risk verification for an organization for more information.
   *
   * This operation requires partner-level permissions.
   * * A `sessionId` header value generated with API partner login
   * * An `appKey` header value
   *
   * You can sign out with `POST /v3/logout`. If your API session is inactive for 35 minutes, the
   * session expires and you are automatically signed out.
   *
   * ### MFA-trusted API session
   * Set both `rememberMeId` and `device` as additional fields in your `POST
   * /v3/partner/login-as-user` request to create an MFA-trusted API session.
   *
   * @returns API login as user response
   *
   * @throws {@link Partner.LoginAsUserError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link BillError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  loginAsUser(
    request: Partner.LoginAsUserRequest,
    options?: RequestOptions,
  ): ApiPromise<LoginAsUserResponseDto, Partner.LoginAsUserError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v3/partner/login-as-user"),
        auth: noneAuth,
        pathParams: [],
        query: [],
        headers: [
          { name: "sessionId", value: request.sessionId, schema: s.optionalNullable(s.string()) },
          { name: "appKey", value: request.appKey, schema: s.optionalNullable(s.string()) },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "json", value: request.body, schema: loginAsUserRequestDtoInternalSchema },
      },
      {
        success: { kind: "json", schema: loginAsUserResponseDtoSchema },
        errorFactory: Partner.LoginAsUserError,
      },
      options,
    );
  }

  /**
   * API partner login
   *
   * @remarks
   * Sign in to your BILL partner account. In the response, your partner API session is created and
   * a BILL-generated `sessionId` is available. Use the `sessionId` in all subsequent API calls to
   * confirm that you are in a signed-in session.
   *
   * You get additional permissions with a partner account `sessionId`.
   * * Create a child BILL organization with `POST /v3/partner/organizations`.
   * * Create a user for the child BILL organization with `POST /v3/partner/users`.
   * * Sign in to the created organization as the created user of that organization with
   *   `/v3/partner/login-as-user`. After signing in, you can perform organization-level BILL API
   *   operations, such as creating a bill or paying a vendor. All organization-level BILL API
   *   operations require a `devKey` and `sessionId`.
   *
   * **Note**: When you create an organization and then create a user for that organization, it is
   * important that you initiate risk verification with `POST /v3/risk-verifications`. See Initiate
   * risk verification for an organization for more information.
   *
   * You can sign out with `POST /v3/logout`. If your API session is inactive for 35 minutes, the
   * session expires and you are automatically signed out.
   *
   * @returns API partner login response
   *
   * @throws {@link Partner.PartnerLoginError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link BillError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  partnerLogin(
    request: Partner.PartnerLoginRequest,
    options?: RequestOptions,
  ): ApiPromise<PartnerLoginResponseDto, Partner.PartnerLoginError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v3/partner/login"),
        auth: noneAuth,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: partnerLoginRequestDtoSchema },
      },
      {
        success: { kind: "json", schema: partnerLoginResponseDtoSchema },
        errorFactory: Partner.PartnerLoginError,
      },
      options,
    );
  }

  /**
   * Restore an archived user
   *
   * @remarks
   * Restore an archived user. In the response, the `archived` field is set as `false`.
   *
   * You can perform any valid BILL operation on restored users. There is no change when you restore
   * a restored user.
   *
   * This operation requires partner-level permissions.
   * * A `sessionId` header value generated with API partner login
   * * An `appKey` header value
   * * The `organizationId` of the organization
   *
   * @returns Restore an archived user response
   *
   * @throws {@link Partner.RestorePartnerUserError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link BillError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  restorePartnerUser(
    request: Partner.RestorePartnerUserRequest,
    options?: RequestOptions,
  ): ApiPromise<OrganizationUserResponseDto, Partner.RestorePartnerUserError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v3/partner/users/{userId}/restore"),
        auth: noneAuth,
        pathParams: [{ name: "userId", value: request.userId, schema: s.string() }],
        query: [],
        headers: [
          { name: "sessionId", value: request.sessionId, schema: s.optionalNullable(s.string()) },
          { name: "appKey", value: request.appKey, schema: s.optionalNullable(s.string()) },
          { name: "organizationId", value: request.organizationId, schema: s.optionalNullable(s.string()) },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: organizationUserResponseDtoSchema },
        errorFactory: Partner.RestorePartnerUserError,
      },
      options,
    );
  }

  /**
   * Update an organization price plan
   *
   * @remarks
   * Update the price plan for an existing organization.
   *
   * When you onboard as a BILL partner, BILL works with you to set up price plans for the
   * organizations you create. Your organizations can have up to 5 price plans. Each price plan is
   * named in the `PricePlanN` format (`PricePlan1` up to `PricePlan5`).
   *
   * @returns Update an organization price plan response
   *
   * @throws {@link Partner.UpdateOrgPartnerPricePlanError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link BillError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  updateOrgPartnerPricePlan(
    request: Partner.UpdateOrgPartnerPricePlanRequest,
    options?: RequestOptions,
  ): ApiPromise<StatusDto, Partner.UpdateOrgPartnerPricePlanError> {
    return this.#rawClient.execute(
      {
        method: "PATCH",
        urlTemplate: this.#servers.default("/v3/partner/organizations/{organizationId}/price-plan"),
        auth: noneAuth,
        pathParams: [{ name: "organizationId", value: request.organizationId, schema: s.string() }],
        query: [],
        headers: [
          { name: "sessionId", value: request.sessionId, schema: s.optionalNullable(s.string()) },
          { name: "appKey", value: request.appKey, schema: s.optionalNullable(s.string()) },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "json", value: request.body, schema: updateOrgPricePlanRequestSchema },
      },
      {
        success: { kind: "json", schema: statusDtoSchema },
        errorFactory: Partner.UpdateOrgPartnerPricePlanError,
      },
      options,
    );
  }

  /**
   * Update a user
   *
   * @remarks
   * Update details about an existing user.
   *
   * This operation requires partner-level permissions.
   * * A `sessionId` header value generated with API partner login
   * * An `appKey` header value
   * * The `organizationId` of the organization
   *
   * @returns Update a user response
   *
   * @throws {@link Partner.UpdatePartnerUserError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link BillError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  updatePartnerUser(
    request: Partner.UpdatePartnerUserRequest,
    options?: RequestOptions,
  ): ApiPromise<OrganizationUserResponseDto, Partner.UpdatePartnerUserError> {
    return this.#rawClient.execute(
      {
        method: "PATCH",
        urlTemplate: this.#servers.default("/v3/partner/users/{userId}"),
        auth: noneAuth,
        pathParams: [{ name: "userId", value: request.userId, schema: s.string() }],
        query: [],
        headers: [
          { name: "sessionId", value: request.sessionId, schema: s.optionalNullable(s.string()) },
          { name: "appKey", value: request.appKey, schema: s.optionalNullable(s.string()) },
          { name: "organizationId", value: request.organizationId, schema: s.optionalNullable(s.string()) },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "json", value: request.body, schema: partnerUserUpdateRequestDtoSchema },
      },
      {
        success: { kind: "json", schema: organizationUserResponseDtoSchema },
        errorFactory: Partner.UpdatePartnerUserError,
      },
      options,
    );
  }
}

export namespace Partner {
  export type ArchivePartnerUserRequest = {
    userId: string;
    sessionId?: string | null;
    appKey?: string | null;
    organizationId?: string | null;
  };

  export const archivePartnerUserRequestSchema: Schema<ArchivePartnerUserRequest> = s.lazySchema(() =>
    s.object<ArchivePartnerUserRequest>({
      userId: s.string().check(s.minLength(1)),
      sessionId: s.optionalNullable(s.string()),
      appKey: s.optionalNullable(s.string()),
      organizationId: s.optionalNullable(s.string()),
    }),
  );

  export class ArchivePartnerUserError extends ApiError {
    declare readonly payload:
      | Declared<"error4XX", BdcError[]>
      | Declared<"error5XX", BdcError[]>
      | Undeclared;

    static readonly errors: ErrorDecoders<ArchivePartnerUserError> = [
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

  export type CreateOrganizationRequest = {
    sessionId?: string | null;
    appKey?: string | null;
    body: OrganizationCreateRequestDto;
  };

  export class CreateOrganizationError extends ApiError {
    declare readonly payload:
      | Declared<"error4XX", BdcError[]>
      | Declared<"error5XX", BdcError[]>
      | Undeclared;

    static readonly errors: ErrorDecoders<CreateOrganizationError> = [
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

  export type CreatePartnerUserRequest = {
    sessionId?: string | null;
    appKey?: string | null;
    organizationId?: string | null;
    body: PartnerUserCreateRequestDto;
  };

  export class CreatePartnerUserError extends ApiError {
    declare readonly payload:
      | Declared<"error4XX", BdcError[]>
      | Declared<"error5XX", BdcError[]>
      | Undeclared;

    static readonly errors: ErrorDecoders<CreatePartnerUserError> = [
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

  export type CreatePhoneRequest = {
    userId: string;
    sessionId?: string | null;
    appKey?: string | null;
    organizationId?: string | null;
    body: PhoneVerificationRequestDto;
  };

  export class CreatePhoneError extends ApiError {
    declare readonly payload:
      | Declared<"error4XX", BdcError[]>
      | Declared<"error5XX", BdcError[]>
      | Undeclared;

    static readonly errors: ErrorDecoders<CreatePhoneError> = [
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

  export type GetPartnerUserRequest = {
    userId: string;
    sessionId?: string | null;
    appKey?: string | null;
    organizationId?: string | null;
  };

  export const getPartnerUserRequestSchema: Schema<GetPartnerUserRequest> = s.lazySchema(() =>
    s.object<GetPartnerUserRequest>({
      userId: s.string().check(s.minLength(1)),
      sessionId: s.optionalNullable(s.string()),
      appKey: s.optionalNullable(s.string()),
      organizationId: s.optionalNullable(s.string()),
    }),
  );

  export class GetPartnerUserError extends ApiError {
    declare readonly payload:
      | Declared<"error4XX", BdcError[]>
      | Declared<"error5XX", BdcError[]>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetPartnerUserError> = [
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

  export type GetPartnerUserRoleRequest = {
    roleId: string;
    sessionId?: string | null;
    appKey?: string | null;
    organizationId?: string | null;
  };

  export const getPartnerUserRoleRequestSchema: Schema<GetPartnerUserRoleRequest> = s.lazySchema(() =>
    s.object<GetPartnerUserRoleRequest>({
      roleId: s.string().check(s.minLength(1)),
      sessionId: s.optionalNullable(s.string()),
      appKey: s.optionalNullable(s.string()),
      organizationId: s.optionalNullable(s.string()),
    }),
  );

  export class GetPartnerUserRoleError extends ApiError {
    declare readonly payload:
      | Declared<"error4XX", BdcError[]>
      | Declared<"error5XX", BdcError[]>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetPartnerUserRoleError> = [
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

  export type ListPartnerOrganizationsRequest = {
    max?: number | null;
    sort?: string | null;
    filters?: string | null;
    page?: string | null;
    sessionId?: string | null;
    appKey?: string | null;
  };

  export const listPartnerOrganizationsRequestSchema: Schema<ListPartnerOrganizationsRequest> = s.lazySchema(
    () =>
      s.object<ListPartnerOrganizationsRequest>({
        max: s.optionalNullable(s.int().check(s.gte(1), s.lte(100))),
        sort: s.optionalNullable(s.string()),
        filters: s.optionalNullable(s.string()),
        page: s.optionalNullable(s.string()),
        sessionId: s.optionalNullable(s.string()),
        appKey: s.optionalNullable(s.string()),
      }),
  );

  export class ListPartnerOrganizationsError extends ApiError {
    declare readonly payload:
      | Declared<"error4XX", BdcError[]>
      | Declared<"error5XX", BdcError[]>
      | Undeclared;

    static readonly errors: ErrorDecoders<ListPartnerOrganizationsError> = [
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

  export type ListPartnerUserRolesRequest = {
    max?: number | null;
    sort?: string | null;
    filters?: string | null;
    page?: string | null;
    sessionId?: string | null;
    appKey?: string | null;
    organizationId?: string | null;
  };

  export const listPartnerUserRolesRequestSchema: Schema<ListPartnerUserRolesRequest> = s.lazySchema(() =>
    s.object<ListPartnerUserRolesRequest>({
      max: s.optionalNullable(s.int().check(s.gte(1), s.lte(100))),
      sort: s.optionalNullable(s.string()),
      filters: s.optionalNullable(s.string()),
      page: s.optionalNullable(s.string()),
      sessionId: s.optionalNullable(s.string()),
      appKey: s.optionalNullable(s.string()),
      organizationId: s.optionalNullable(s.string()),
    }),
  );

  export class ListPartnerUserRolesError extends ApiError {
    declare readonly payload:
      | Declared<"error4XX", BdcError[]>
      | Declared<"error5XX", BdcError[]>
      | Undeclared;

    static readonly errors: ErrorDecoders<ListPartnerUserRolesError> = [
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

  export type ListPartnerUsersRequest = {
    max?: number | null;
    sort?: string | null;
    filters?: string | null;
    page?: string | null;
    sessionId?: string | null;
    appKey?: string | null;
    organizationId?: string | null;
  };

  export const listPartnerUsersRequestSchema: Schema<ListPartnerUsersRequest> = s.lazySchema(() =>
    s.object<ListPartnerUsersRequest>({
      max: s.optionalNullable(s.int().check(s.gte(1), s.lte(100))),
      sort: s.optionalNullable(s.string()),
      filters: s.optionalNullable(s.string()),
      page: s.optionalNullable(s.string()),
      sessionId: s.optionalNullable(s.string()),
      appKey: s.optionalNullable(s.string()),
      organizationId: s.optionalNullable(s.string()),
    }),
  );

  export class ListPartnerUsersError extends ApiError {
    declare readonly payload:
      | Declared<"error4XX", BdcError[]>
      | Declared<"error5XX", BdcError[]>
      | Undeclared;

    static readonly errors: ErrorDecoders<ListPartnerUsersError> = [
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

  export type LoginAsUserRequest = {
    sessionId?: string | null;
    appKey?: string | null;
    body: LoginAsUserRequestDto;
  };

  export class LoginAsUserError extends ApiError {
    declare readonly payload:
      | Declared<"error4XX", BdcError[]>
      | Declared<"error5XX", BdcError[]>
      | Undeclared;

    static readonly errors: ErrorDecoders<LoginAsUserError> = [
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

  export type PartnerLoginRequest = {
    body: PartnerLoginRequestDto;
  };

  export class PartnerLoginError extends ApiError {
    declare readonly payload:
      | Declared<"error4XX", BdcError[]>
      | Declared<"error5XX", BdcError[]>
      | Undeclared;

    static readonly errors: ErrorDecoders<PartnerLoginError> = [
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

  export type RestorePartnerUserRequest = {
    userId: string;
    sessionId?: string | null;
    appKey?: string | null;
    organizationId?: string | null;
  };

  export const restorePartnerUserRequestSchema: Schema<RestorePartnerUserRequest> = s.lazySchema(() =>
    s.object<RestorePartnerUserRequest>({
      userId: s.string().check(s.minLength(1)),
      sessionId: s.optionalNullable(s.string()),
      appKey: s.optionalNullable(s.string()),
      organizationId: s.optionalNullable(s.string()),
    }),
  );

  export class RestorePartnerUserError extends ApiError {
    declare readonly payload:
      | Declared<"error4XX", BdcError[]>
      | Declared<"error5XX", BdcError[]>
      | Undeclared;

    static readonly errors: ErrorDecoders<RestorePartnerUserError> = [
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

  export type UpdateOrgPartnerPricePlanRequest = {
    organizationId: string;
    sessionId?: string | null;
    appKey?: string | null;
    body: UpdateOrgPricePlanRequest;
  };

  export const updateOrgPartnerPricePlanRequestSchema: Schema<UpdateOrgPartnerPricePlanRequest> =
    s.lazySchema(() =>
      s.object<UpdateOrgPartnerPricePlanRequest>({
        organizationId: s.string().check(s.minLength(1)),
        sessionId: s.optionalNullable(s.string()),
        appKey: s.optionalNullable(s.string()),
        body: updateOrgPricePlanRequestSchema,
      }),
    );

  export class UpdateOrgPartnerPricePlanError extends ApiError {
    declare readonly payload:
      | Declared<"error4XX", BdcError[]>
      | Declared<"error5XX", BdcError[]>
      | Undeclared;

    static readonly errors: ErrorDecoders<UpdateOrgPartnerPricePlanError> = [
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

  export type UpdatePartnerUserRequest = {
    userId: string;
    sessionId?: string | null;
    appKey?: string | null;
    organizationId?: string | null;
    body: PartnerUserUpdateRequestDto;
  };

  export const updatePartnerUserRequestSchema: Schema<UpdatePartnerUserRequest> = s.lazySchema(() =>
    s.object<UpdatePartnerUserRequest>({
      userId: s.string().check(s.minLength(1)),
      sessionId: s.optionalNullable(s.string()),
      appKey: s.optionalNullable(s.string()),
      organizationId: s.optionalNullable(s.string()),
      body: partnerUserUpdateRequestDtoSchema,
    }),
  );

  export class UpdatePartnerUserError extends ApiError {
    declare readonly payload:
      | Declared<"error4XX", BdcError[]>
      | Declared<"error5XX", BdcError[]>
      | Undeclared;

    static readonly errors: ErrorDecoders<UpdatePartnerUserError> = [
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
