import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import * as s from "../core/validation/index.js";
import { memberSchema, type Member } from "../models/member.js";
import type { Servers } from "../servers.js";

export class Members {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Get Member
   *
   * @remarks
   * Returns information about a Member.
   *
   * @returns Resource
   *
   * @throws {@link Members.GetMemberError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link ShortcutError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getMember(
    request: Members.GetMemberRequest,
    options?: RequestOptions,
  ): ApiPromise<Member, Members.GetMemberError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v3/members/{member-public-id}"),
        auth: this.#auth.apiToken,
        pathParams: [{ name: "member-public-id", value: request.memberPublicId, schema: s.string() }],
        query: [{ name: "org-public-id", value: request.orgPublicId, schema: s.optional(s.string()) }],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: memberSchema },
        errorFactory: Members.GetMemberError,
      },
      options,
    );
  }

  /**
   * List Members
   *
   * @remarks
   * Returns information about members of the Workspace.
   *
   * @returns Resource
   *
   * @throws {@link Members.ListMembersError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link ShortcutError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listMembers(
    request: Members.ListMembersRequest = {},
    options?: RequestOptions,
  ): ApiPromise<Member[], Members.ListMembersError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v3/members"),
        auth: this.#auth.apiToken,
        pathParams: [],
        query: [
          { name: "org-public-id", value: request.orgPublicId, schema: s.optional(s.string()) },
          { name: "disabled", value: request.disabled, schema: s.optional(s.boolean()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => memberSchema)) },
        errorFactory: Members.ListMembersError,
      },
      options,
    );
  }
}

export namespace Members {
  export type GetMemberRequest = {
    /** The Member's unique ID. */
    memberPublicId: string;
    /** The unique ID of the Organization to limit the lookup to. */
    orgPublicId?: string;
  };

  export class GetMemberError extends ApiError {
    declare readonly payload:
      | Declared<"error400", undefined>
      | Declared<"error404", undefined>
      | Declared<"error422", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetMemberError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 422, kind: "error422", decode: { kind: "empty" } },
    ];
  }

  export type ListMembersRequest = {
    /** The unique ID of the Organization to limit the list to. */
    orgPublicId?: string;
    /**
     * Filter members by their disabled state. If true, return only disabled members. If false,
     * return only enabled members.
     */
    disabled?: boolean;
  };

  export class ListMembersError extends ApiError {
    declare readonly payload:
      | Declared<"error400", undefined>
      | Declared<"error404", undefined>
      | Declared<"error422", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<ListMembersError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 422, kind: "error422", decode: { kind: "empty" } },
    ];
  }
}
