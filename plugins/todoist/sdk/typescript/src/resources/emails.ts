import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import { body4Schema, type Body4 } from "../models/body4.js";
import { emailObjectTypeSchema, type EmailObjectType } from "../models/email-object-type.js";
import { emailResponseSchema, type EmailResponse } from "../models/email-response.js";
import { statusOkResponseSchema, type StatusOkResponse } from "../models/status-ok-response.js";
import { todoistErrorSchema, type TodoistError } from "../models/todoist-error.js";
import type { Servers } from "../servers.js";

export class Emails {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Email Disable
   *
   * @remarks
   * Disable the current email to a Todoist object
   *
   * @returns Successful Response
   *
   * @throws {@link Emails.EmailDisableApiV1EmailsDeleteError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link TodoistApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  emailDisableApiV1EmailsDelete(
    request: Emails.EmailDisableApiV1EmailsDeleteRequest,
    options?: RequestOptions,
  ): ApiPromise<StatusOkResponse, Emails.EmailDisableApiV1EmailsDeleteError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default("/api/v1/emails"),
        auth: this.#auth.bearerAuth,
        pathParams: [],
        query: [
          { name: "obj_type", value: request.objType, schema: emailObjectTypeSchema },
          { name: "obj_id", value: request.objId, schema: s.string() },
        ],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: statusOkResponseSchema },
        errorFactory: Emails.EmailDisableApiV1EmailsDeleteError,
      },
      options,
    );
  }

  /**
   * Email Get Or Create
   *
   * @remarks
   * Get or create an email to a Todoist object, currently only projects and tasks are supported.
   *
   * @returns Successful Response
   *
   * @throws {@link Emails.EmailGetOrCreateApiV1EmailsPutError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link TodoistApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  emailGetOrCreateApiV1EmailsPut(
    request: Emails.EmailGetOrCreateApiV1EmailsPutRequest,
    options?: RequestOptions,
  ): ApiPromise<EmailResponse, Emails.EmailGetOrCreateApiV1EmailsPutError> {
    return this.#rawClient.execute(
      {
        method: "PUT",
        urlTemplate: this.#servers.default("/api/v1/emails"),
        auth: this.#auth.bearerAuth,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: body4Schema },
      },
      {
        success: { kind: "json", schema: emailResponseSchema },
        errorFactory: Emails.EmailGetOrCreateApiV1EmailsPutError,
      },
      options,
    );
  }
}

export namespace Emails {
  export type EmailDisableApiV1EmailsDeleteRequest = {
    objType: EmailObjectType;
    objId: string;
  };

  export class EmailDisableApiV1EmailsDeleteError extends ApiError {
    declare readonly payload:
      | Declared<"todoistError", TodoistError>
      | Declared<"todoistError2", TodoistError>
      | Declared<"todoistError3", TodoistError>
      | Declared<"todoistError4", TodoistError>
      | Undeclared;

    static readonly errors: ErrorDecoders<EmailDisableApiV1EmailsDeleteError> = [
      { on: 400, kind: "todoistError", decode: { kind: "json", schema: todoistErrorSchema } },
      { on: 401, kind: "todoistError2", decode: { kind: "json", schema: todoistErrorSchema } },
      { on: 403, kind: "todoistError3", decode: { kind: "json", schema: todoistErrorSchema } },
      { on: 404, kind: "todoistError4", decode: { kind: "json", schema: todoistErrorSchema } },
    ];
  }

  export type EmailGetOrCreateApiV1EmailsPutRequest = {
    body: Body4;
  };

  export class EmailGetOrCreateApiV1EmailsPutError extends ApiError {
    declare readonly payload:
      | Declared<"todoistError", TodoistError>
      | Declared<"todoistError2", TodoistError>
      | Declared<"todoistError3", TodoistError>
      | Declared<"todoistError4", TodoistError>
      | Undeclared;

    static readonly errors: ErrorDecoders<EmailGetOrCreateApiV1EmailsPutError> = [
      { on: 400, kind: "todoistError", decode: { kind: "json", schema: todoistErrorSchema } },
      { on: 401, kind: "todoistError2", decode: { kind: "json", schema: todoistErrorSchema } },
      { on: 403, kind: "todoistError3", decode: { kind: "json", schema: todoistErrorSchema } },
      { on: 404, kind: "todoistError4", decode: { kind: "json", schema: todoistErrorSchema } },
    ];
  }
}
