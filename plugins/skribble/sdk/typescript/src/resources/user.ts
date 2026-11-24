import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { problemInternalSchema, type Problem } from "../models/problem.js";
import {
  userSignatureQualitiesResponseSchema,
  type UserSignatureQualitiesResponse,
} from "../models/user-signature-qualities-response.js";
import type { Servers } from "../servers.js";

/**
 * Endpoints for user information and signature quality queries.
 */
export class User {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Get Signature Quality Details for a User
   *
   * @remarks
   * Returns the effective signature `quality` that will be applied when the given `username` signs
   * a document.
   *
   * The resulting quality is determined by the combination of the requested `quality` and
   * `legislation`, where `any` matches any legislation.
   *
   * For example, if you create a `SignatureRequest` with `quality=AES_MINIMAL` and
   * `legislation=ZERTES`, this endpoint will indicate the final quality the user will sign with —
   * typically `QES`, as `AES_MINIMAL` upgrades to `QES` when the user's settings allow it.
   *
   * @returns OK
   *
   * @throws {@link User.GetUserSignatureQualitiesError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link SkribbleError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getUserSignatureQualities(
    request: User.GetUserSignatureQualitiesRequest = {},
    options?: RequestOptions,
  ): ApiPromise<UserSignatureQualitiesResponse, User.GetUserSignatureQualitiesError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.defaultSkribbleUserApi("/user/signature-qualities"),
        auth: this.#auth.bearer,
        pathParams: [],
        query: [{ name: "username", value: request.username, schema: s.optional(s.string()) }],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: userSignatureQualitiesResponseSchema },
        errorFactory: User.GetUserSignatureQualitiesError,
      },
      options,
    );
  }
}

export namespace User {
  export type GetUserSignatureQualitiesRequest = {
    /** Username to find */
    username?: string;
  };

  export const getUserSignatureQualitiesRequestSchema: Schema<GetUserSignatureQualitiesRequest> =
    s.lazySchema(() =>
      s.object<GetUserSignatureQualitiesRequest>({
        username: s.optional(s.string().check(s.email())),
      }),
    );

  export class GetUserSignatureQualitiesError extends ApiError {
    declare readonly payload:
      | Declared<"problem", Problem>
      | Declared<"problem2", Problem>
      | Declared<"problem3", Problem>
      | Declared<"problem4", Problem>
      | Declared<"problem5", Problem>
      | Declared<"problem6", Problem>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetUserSignatureQualitiesError> = [
      { on: 400, kind: "problem", decode: { kind: "json", schema: problemInternalSchema } },
      { on: 401, kind: "problem2", decode: { kind: "json", schema: problemInternalSchema } },
      { on: 404, kind: "problem3", decode: { kind: "json", schema: problemInternalSchema } },
      { on: 429, kind: "problem4", decode: { kind: "json", schema: problemInternalSchema } },
      { on: 500, kind: "problem5", decode: { kind: "json", schema: problemInternalSchema } },
      { on: 503, kind: "problem6", decode: { kind: "json", schema: problemInternalSchema } },
    ];
  }
}
