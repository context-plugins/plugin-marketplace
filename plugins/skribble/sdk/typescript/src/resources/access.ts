import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { noneAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import { problemInternalSchema, type Problem } from "../models/problem.js";
import type { Servers } from "../servers.js";

/**
 * Endpoints for authentication, authorization, and user access management.
 */
export class Access {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;

  constructor(rawClient: RawClient, servers: Servers) {
    this.#rawClient = rawClient;
    this.#servers = servers;
  }

  /**
   * Authenticate and Obtain an Access Token
   *
   * @remarks
   * To use the Skribble API, you first need an API key and an API user. Both can be managed on the
   * API key page in your business profile. Consult our guide for setup instructions.
   *
   * Skribble offers two types of API keys:
   *
   * **Demo API keys**
   *
   * Demo API keys are for testing and development purposes. Signatures created with demo keys have
   * no legal weight and are free of charge.
   *
   * Demo keys can be identified by their name, which starts with **api_demo**.
   *
   * **Production API keys**
   *
   * Production API keys are used for live systems. Signatures created with production keys will be
   * invoiced.
   *
   * Production keys can be identified by their name, which starts with **api_production** or, in
   * some cases, **api_prod**.
   *
   * > **⚠ Note** > All costs incurred by signature requests created with your API keys will > be
   * **charged to your business**. We recommend starting with a demo API > key during development
   * and testing, and switching to a production key > only once testing is complete.
   *
   * For help setting up Skribble Business, contact us at support@skribble.com.
   *
   * To obtain an access token, authenticate using the `/access/login` endpoint. You can pass your
   * credentials as raw JSON or as `x-www-form-urlencoded` key-value pairs (see example requests).
   *
   * Upon successful authentication, a JSON Web Token (JWT) is returned. This JWT must be included
   * in nearly every API request.
   *
   * The access token is passed in the `Authorization` HTTP header using the `Bearer` scheme.
   * Example: `Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI...`
   *
   * ### Token life cycle
   *
   * #### API key
   *
   * API keys have a long but finite lifetime. The validity period depends on the volume of API
   * calls and is agreed upon individually as part of the shared secret agreement.
   *
   * #### Access token
   *
   * Access tokens have a lifetime of approximately **20 minutes**. Automatic token renewal is not
   * currently supported.
   *
   * #### Logout
   *
   * There is **no logout endpoint**. Access tokens expire automatically after the defined lifetime.
   *
   * @returns OK
   *
   * @throws {@link Access.AccessLoginError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link SkribbleError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  accessLogin(
    request: Access.AccessLoginRequest,
    options?: RequestOptions,
  ): ApiPromise<string, Access.AccessLoginError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/access/login"),
        auth: noneAuth,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "formUrlEncoded",
          value: [
            { name: "username", value: request.username, schema: s.string() },
            { name: "api-key", value: request.apiKey, schema: s.string() },
          ],
        },
      },
      {
        success: { kind: "text", schema: s.string() },
        errorFactory: Access.AccessLoginError,
      },
      options,
    );
  }
}

export namespace Access {
  export type AccessLoginRequest = {
    /** The username of the users credentials to login */
    username: string;
    /** The API key of the users credentials to login */
    apiKey: string;
  };

  export class AccessLoginError extends ApiError {
    declare readonly payload:
      | Declared<"problem", Problem>
      | Declared<"problem2", Problem>
      | Declared<"problem3", Problem>
      | Declared<"problem4", Problem>
      | Declared<"problem5", Problem>
      | Declared<"problem6", Problem>
      | Undeclared;

    static readonly errors: ErrorDecoders<AccessLoginError> = [
      { on: 400, kind: "problem", decode: { kind: "json", schema: problemInternalSchema } },
      { on: 403, kind: "problem2", decode: { kind: "json", schema: problemInternalSchema } },
      { on: 406, kind: "problem3", decode: { kind: "json", schema: problemInternalSchema } },
      { on: 429, kind: "problem4", decode: { kind: "json", schema: problemInternalSchema } },
      { on: 500, kind: "problem5", decode: { kind: "json", schema: problemInternalSchema } },
      { on: 503, kind: "problem6", decode: { kind: "json", schema: problemInternalSchema } },
    ];
  }
}
