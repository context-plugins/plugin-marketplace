import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { apiErrorModelSchema, type ApiErrorModel } from "../models/api-error-model.js";
import { catchAllSchema, type CatchAll } from "../models/catch-all.js";
import { formatSchema, type Format } from "../models/format.js";
import {
  requestValidationErrorSchema,
  type RequestValidationError,
} from "../models/request-validation-error.js";
import { smtpSchema, type Smtp } from "../models/smtp.js";
import { checkResponseInternalSchema, type CheckResponse } from "../models/unions/check-response.js";
import type { Servers } from "../servers.js";

export class Check {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Validate
   *
   * @remarks
   * Perform an email validation for a single email address.
   *
   * @returns Successful validation result (single object). Service-level errors (empty/invalid
   * `email`, plan restrictions) are also returned here with HTTP 200 and a `success:false` ApiError
   * body.
   *
   * @throws {@link Check.CheckEmailError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link MailboxlayerError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  checkEmail(
    request: Check.CheckEmailRequest,
    options?: RequestOptions,
  ): ApiPromise<CheckResponse, Check.CheckEmailError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/check"),
        auth: this.#auth.accessKeyQuery,
        pathParams: [],
        query: [
          { name: "access_key", value: request.accessKey, schema: s.string() },
          { name: "email", value: request.email, schema: s.string() },
          { name: "smtp", value: request.smtp, schema: s.optional(s.lazy(() => smtpSchema)) },
          { name: "catch_all", value: request.catchAll, schema: s.optional(s.lazy(() => catchAllSchema)) },
          { name: "format", value: request.format, schema: s.optional(s.lazy(() => formatSchema)) },
          { name: "callback", value: request.callback, schema: s.optional(s.string()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: checkResponseInternalSchema },
        errorFactory: Check.CheckEmailError,
      },
      options,
    );
  }
}

export namespace Check {
  export type CheckEmailRequest = {
    /** Mailboxlayer API Access Key (required for all requests). */
    accessKey: string;
    /** Email address to validate (single validation). */
    email: string;
    /**
     * Enable (1) or disable (0) the SMTP check. SMTP verification is active by default. Turning it
     * off may speed up responses but disables the `smtp_check` verdict.
     */
    smtp?: Smtp;
    /**
     * Enable catch-all mailbox detection by setting `catch_all=1`. Disabled by default because
     * check is heavier and may increase response time. If not requested, the `catch_all` response
     * value will typically be `null`. Some plans restrict catch-all detection.
     */
    catchAll?: CatchAll;
    /** Set to 1 for human-prettified JSON output (useful for debugging; increases payload size). */
    format?: Format;
    /** JSONP callback function name; wrapper will be returned if specified. */
    callback?: string;
  };

  export const checkEmailRequestSchema: Schema<CheckEmailRequest> = s.lazySchema(() =>
    s.object<CheckEmailRequest>({
      accessKey: s.string(),
      email: s.string().check(s.email()),
      smtp: s.optional(s.lazy(() => smtpSchema)),
      catchAll: s.optional(s.lazy(() => catchAllSchema)),
      format: s.optional(s.lazy(() => formatSchema)),
      callback: s.optional(s.string()),
    }),
  );

  export class CheckEmailError extends ApiError {
    declare readonly payload:
      | Declared<"apiErrorModel", ApiErrorModel>
      | Declared<"apiErrorModel2", ApiErrorModel>
      | Declared<"apiErrorModel3", ApiErrorModel>
      | Declared<"requestValidationError", RequestValidationError>
      | Declared<"apiErrorModel4", ApiErrorModel>
      | Declared<"apiErrorModel5", ApiErrorModel>
      | Declared<"apiErrorModel6", ApiErrorModel>
      | Undeclared;

    static readonly errors: ErrorDecoders<CheckEmailError> = [
      { on: 401, kind: "apiErrorModel", decode: { kind: "json", schema: apiErrorModelSchema } },
      { on: 403, kind: "apiErrorModel2", decode: { kind: "json", schema: apiErrorModelSchema } },
      { on: 404, kind: "apiErrorModel3", decode: { kind: "json", schema: apiErrorModelSchema } },
      {
        on: 422,
        kind: "requestValidationError",
        decode: { kind: "json", schema: requestValidationErrorSchema },
      },
      { on: 429, kind: "apiErrorModel4", decode: { kind: "json", schema: apiErrorModelSchema } },
      { on: 500, kind: "apiErrorModel5", decode: { kind: "json", schema: apiErrorModelSchema } },
      { on: 503, kind: "apiErrorModel6", decode: { kind: "json", schema: apiErrorModelSchema } },
    ];
  }
}
