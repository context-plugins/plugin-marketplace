import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import {
  accessControlRequestRequestSchema,
  type AccessControlRequestRequest,
} from "../models/access-control-request-request.js";
import {
  accessControlRequestResponseSchema,
  type AccessControlRequestResponse,
} from "../models/access-control-request-response.js";
import {
  accessControlRequest400Error1Schema,
  type AccessControlRequest400Error1,
} from "../models/access-control-request400-error1.js";
import type { Servers } from "../servers.js";

/**
 * Magic-link access requests for gated portals
 */
export class AccessControl {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Request Magic Link Access
   *
   * @remarks
   * Submit a reader's email as a pending request to be added to the space's magic-link whitelist.
   * The request does NOT grant access on its own — an admin must approve it. The space must be
   * configured for Magic Link (Magic Link enabled, the portal gating content, and the team's plan
   * allowing it); otherwise the request is refused with 400. There is one request per (email,
   * space). A repeat request for the same email is idempotent per status: a Pending request returns
   * the existing row unchanged; an Accepted request whose email is still whitelisted also returns
   * it unchanged; but an Accepted request whose access was later revoked, or a previously Rejected
   * request, is put back into the Pending queue and re-notifies the admins — so a rejected or
   * revoked reader can always re-apply.
   *
   * @returns Process status
   *
   * @throws {@link AccessControl.RequestMagicLinkAccessError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link ArchbeeError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  requestMagicLinkAccess(
    request: AccessControl.RequestMagicLinkAccessRequest,
    options?: RequestOptions,
  ): ApiPromise<AccessControlRequestResponse, AccessControl.RequestMagicLinkAccessError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/access-control/request"),
        auth: this.#auth.bearerAuth,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: accessControlRequestRequestSchema },
      },
      {
        success: { kind: "json", schema: accessControlRequestResponseSchema },
        errorFactory: AccessControl.RequestMagicLinkAccessError,
      },
      options,
    );
  }
}

export namespace AccessControl {
  export type RequestMagicLinkAccessRequest = {
    body: AccessControlRequestRequest;
  };

  export class RequestMagicLinkAccessError extends ApiError {
    declare readonly payload:
      | Declared<"accessControlRequest400Error1", AccessControlRequest400Error1>
      | Undeclared;

    static readonly errors: ErrorDecoders<RequestMagicLinkAccessError> = [
      {
        on: 400,
        kind: "accessControlRequest400Error1",
        decode: { kind: "json", schema: accessControlRequest400Error1Schema },
      },
    ];
  }
}
