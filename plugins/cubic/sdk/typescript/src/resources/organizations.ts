import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { errorSchema, type Error } from "../models/error.js";
import { memberListSchema, type MemberList } from "../models/member-list.js";
import { memberUpdateResultSchema, type MemberUpdateResult } from "../models/member-update-result.js";
import { memberUpdateSchema, type MemberUpdate } from "../models/member-update.js";
import { organizationListSchema, type OrganizationList } from "../models/organization-list.js";
import { organizationMemberSchema, type OrganizationMember } from "../models/organization-member.js";
import { roleSchema, type Role } from "../models/role.js";
import { seatSchema, type Seat } from "../models/seat.js";
import type { Servers } from "../servers.js";

export class Organizations {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Get a member
   *
   * @returns OK
   *
   * @throws {@link Organizations.GetMemberError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link CubicError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getMember(
    request: Organizations.GetMemberRequest,
    options?: RequestOptions,
  ): ApiPromise<OrganizationMember, Organizations.GetMemberError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v1/organizations/{org}/members/{githubUserId}"),
        auth: this.#auth.analyticsApiKey,
        pathParams: [
          { name: "org", value: request.org, schema: s.string() },
          { name: "githubUserId", value: request.githubUserId, schema: s.string() },
        ],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: organizationMemberSchema },
        errorFactory: Organizations.GetMemberError,
      },
      options,
    );
  }

  /**
   * List members
   *
   * @returns OK
   *
   * @throws {@link Organizations.ListMembersError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link CubicError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listMembers(
    request: Organizations.ListMembersRequest,
    options?: RequestOptions,
  ): ApiPromise<MemberList, Organizations.ListMembersError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v1/organizations/{org}/members"),
        auth: this.#auth.analyticsApiKey,
        pathParams: [{ name: "org", value: request.org, schema: s.string() }],
        query: [
          { name: "search", value: request.search, schema: s.optional(s.string()) },
          { name: "role", value: request.role, schema: s.optional(s.lazy(() => roleSchema)) },
          { name: "seat", value: request.seat, schema: s.optional(s.lazy(() => seatSchema)) },
          { name: "cursor", value: request.cursor, schema: s.optional(s.string()) },
          { name: "limit", value: request.limit, schema: s.defaulted(s.int(), 20) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: memberListSchema },
        errorFactory: Organizations.ListMembersError,
      },
      options,
    );
  }

  /**
   * List the organizations you can view
   *
   * @remarks
   * An organization API key lists only its own organization.
   *
   * @returns OK
   *
   * @throws {@link Organizations.ListOrganizationsError} when the API answers with an error status
   * — narrow on `err.payload.kind`
   *
   * @throws {@link CubicError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listOrganizations(
    request: Organizations.ListOrganizationsRequest = {},
    options?: RequestOptions,
  ): ApiPromise<OrganizationList, Organizations.ListOrganizationsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v1/organizations"),
        auth: this.#auth.analyticsApiKey,
        pathParams: [],
        query: [
          { name: "cursor", value: request.cursor, schema: s.optional(s.string()) },
          { name: "limit", value: request.limit, schema: s.defaulted(s.int(), 20) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: organizationListSchema },
        errorFactory: Organizations.ListOrganizationsError,
      },
      options,
    );
  }

  /**
   * Turn a seat on or off, or change a role
   *
   * @remarks
   * Needs an organization admin or an organization API key with Admin access, and an active paid
   * subscription. It never buys seats. Turning a seat off does not remove access to cubic. To
   * remove someone, remove them from the GitHub organization.
   *
   * @returns OK
   *
   * @throws {@link Organizations.UpdateMemberError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link CubicError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  updateMember(
    request: Organizations.UpdateMemberRequest,
    options?: RequestOptions,
  ): ApiPromise<MemberUpdateResult, Organizations.UpdateMemberError> {
    return this.#rawClient.execute(
      {
        method: "PATCH",
        urlTemplate: this.#servers.default("/api/v1/organizations/{org}/members/{githubUserId}"),
        auth: this.#auth.analyticsApiKey,
        pathParams: [
          { name: "org", value: request.org, schema: s.string() },
          { name: "githubUserId", value: request.githubUserId, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: memberUpdateSchema },
      },
      {
        success: { kind: "json", schema: memberUpdateResultSchema },
        errorFactory: Organizations.UpdateMemberError,
      },
      options,
    );
  }
}

export namespace Organizations {
  export type GetMemberRequest = {
    /** GitHub organization login, such as acme. */
    org: string;
    /** Numeric GitHub user ID of the member. */
    githubUserId: string;
  };

  export const getMemberRequestSchema: Schema<GetMemberRequest> = s.lazySchema(() =>
    s.object<GetMemberRequest>({
      org: s.string().check(s.minLength(1), s.maxLength(255)),
      githubUserId: s.string().check(s.pattern("^\\d{1,20}$")),
    }),
  );

  export class GetMemberError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Declared<"error4", Error>
      | Declared<"error5", Error>
      | Declared<"error6", Error>
      | Declared<"error7", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetMemberError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 403, kind: "error3", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error4", decode: { kind: "json", schema: errorSchema } },
      { on: 429, kind: "error5", decode: { kind: "json", schema: errorSchema } },
      { on: 500, kind: "error6", decode: { kind: "json", schema: errorSchema } },
      { on: 503, kind: "error7", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type ListMembersRequest = {
    /** GitHub organization login, such as acme. */
    org: string;
    /** Match part of a GitHub login. */
    search?: string;
    role?: Role;
    /** true for members with a seat, false for members without one. */
    seat?: Seat;
    /** The nextCursor from the previous page. */
    cursor?: string;
    /** @default 20 */
    limit?: number;
  };

  export const listMembersRequestSchema: Schema<ListMembersRequest> = s.lazySchema(() =>
    s.object<ListMembersRequest>({
      org: s.string().check(s.minLength(1), s.maxLength(255)),
      search: s.optional(s.string().check(s.maxLength(255))),
      role: s.optional(s.lazy(() => roleSchema)),
      seat: s.optional(s.lazy(() => seatSchema)),
      cursor: s.optional(s.string().check(s.maxLength(255))),
      limit: s.defaulted(s.int().check(s.gte(1), s.lte(100)), 20),
    }),
  );

  export class ListMembersError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Declared<"error4", Error>
      | Declared<"error5", Error>
      | Declared<"error6", Error>
      | Declared<"error7", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<ListMembersError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 403, kind: "error3", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error4", decode: { kind: "json", schema: errorSchema } },
      { on: 429, kind: "error5", decode: { kind: "json", schema: errorSchema } },
      { on: 500, kind: "error6", decode: { kind: "json", schema: errorSchema } },
      { on: 503, kind: "error7", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type ListOrganizationsRequest = {
    /** The nextCursor from the previous page. */
    cursor?: string;
    /** @default 20 */
    limit?: number;
  };

  export const listOrganizationsRequestSchema: Schema<ListOrganizationsRequest> = s.lazySchema(() =>
    s.object<ListOrganizationsRequest>({
      cursor: s.optional(s.string().check(s.maxLength(255))),
      limit: s.defaulted(s.int().check(s.gte(1), s.lte(100)), 20),
    }),
  );

  export class ListOrganizationsError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Declared<"error4", Error>
      | Declared<"error5", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<ListOrganizationsError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 429, kind: "error3", decode: { kind: "json", schema: errorSchema } },
      { on: 500, kind: "error4", decode: { kind: "json", schema: errorSchema } },
      { on: 503, kind: "error5", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type UpdateMemberRequest = {
    /** GitHub organization login, such as acme. */
    org: string;
    /** Numeric GitHub user ID of the member. */
    githubUserId: string;
    body: MemberUpdate;
  };

  export const updateMemberRequestSchema: Schema<UpdateMemberRequest> = s.lazySchema(() =>
    s.object<UpdateMemberRequest>({
      org: s.string().check(s.minLength(1), s.maxLength(255)),
      githubUserId: s.string().check(s.pattern("^\\d{1,20}$")),
      body: memberUpdateSchema,
    }),
  );

  export class UpdateMemberError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Declared<"error4", Error>
      | Declared<"error5", Error>
      | Declared<"error6", Error>
      | Declared<"error7", Error>
      | Declared<"error8", Error>
      | Declared<"error9", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<UpdateMemberError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 403, kind: "error3", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error4", decode: { kind: "json", schema: errorSchema } },
      { on: 409, kind: "error5", decode: { kind: "json", schema: errorSchema } },
      { on: 422, kind: "error6", decode: { kind: "json", schema: errorSchema } },
      { on: 429, kind: "error7", decode: { kind: "json", schema: errorSchema } },
      { on: 500, kind: "error8", decode: { kind: "json", schema: errorSchema } },
      { on: 503, kind: "error9", decode: { kind: "json", schema: errorSchema } },
    ];
  }
}
