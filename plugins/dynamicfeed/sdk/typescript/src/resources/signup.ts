import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { noneAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import { bodySignupSignupPostSchema, type BodySignupSignupPost } from "../models/body-signup-signup-post.js";
import { httpValidationErrorSchema, type HttpValidationError } from "../models/http-validation-error.js";
import type { Servers } from "../servers.js";

export class Signup {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;

  constructor(rawClient: RawClient, servers: Servers) {
    this.#rawClient = rawClient;
    this.#servers = servers;
  }

  /**
   * Signup
   *
   * @remarks
   * Get a free API key instantly.
   *
   * @returns Successful Response
   *
   * @throws {@link Signup.SignupSignupPostError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link DynamicFeedError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  signupSignupPost(
    request: Signup.SignupSignupPostRequest = {},
    options?: RequestOptions,
  ): ApiPromise<Record<string, unknown>, Signup.SignupSignupPostError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/signup"),
        auth: noneAuth,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => bodySignupSignupPostSchema)),
        },
      },
      {
        success: { kind: "json", schema: s.record(s.string(), s.unknown()) },
        errorFactory: Signup.SignupSignupPostError,
      },
      options,
    );
  }
}

export namespace Signup {
  export type SignupSignupPostRequest = {
    body?: BodySignupSignupPost;
  };

  export class SignupSignupPostError extends ApiError {
    declare readonly payload: Declared<"httpValidationError", HttpValidationError> | Undeclared;

    static readonly errors: ErrorDecoders<SignupSignupPostError> = [
      { on: 422, kind: "httpValidationError", decode: { kind: "json", schema: httpValidationErrorSchema } },
    ];
  }
}
