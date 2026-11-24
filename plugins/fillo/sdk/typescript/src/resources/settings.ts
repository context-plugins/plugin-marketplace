import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import { errorSchema, type Error } from "../models/error.js";
import { formSettingsEnvelopeSchema, type FormSettingsEnvelope } from "../models/form-settings-envelope.js";
import type { Servers } from "../servers.js";

export class Settings {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Get a form's settings
   *
   * @remarks
   * The form's current operational settings (notifications, receipts, save-and-resume, response
   * limits, and the like). Scope: settings:manage.
   *
   * @returns The form's settings.
   *
   * @throws {@link Settings.GetFormSettingsError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link FilloError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getFormSettings(
    request: Settings.GetFormSettingsRequest,
    options?: RequestOptions,
  ): ApiPromise<FormSettingsEnvelope, Settings.GetFormSettingsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v1/manage/forms/{form}/settings"),
        auth: this.#auth.bearerAuth,
        pathParams: [{ name: "form", value: request.form, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: formSettingsEnvelopeSchema },
        errorFactory: Settings.GetFormSettingsError,
      },
      options,
    );
  }

  /**
   * Patch a form's settings
   *
   * @remarks
   * Update one or more operational settings. The request body IS the settings patch object,
   * validated and saved by the same writer as the dashboard; any key set to null is cleared. Scope:
   * settings:manage — plus forms:write whenever the patch names one of the six presentation keys
   * (submitMode, submitLabel, successTitle, successMessage, redirectUrl, showProgress), which live
   * inside the form schema rather than beside it. The 403 names the missing scope.
   *
   * @returns The updated settings.
   *
   * @throws {@link Settings.UpdateFormSettingsError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link FilloError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  updateFormSettings(
    request: Settings.UpdateFormSettingsRequest,
    options?: RequestOptions,
  ): ApiPromise<FormSettingsEnvelope, Settings.UpdateFormSettingsError> {
    return this.#rawClient.execute(
      {
        method: "PATCH",
        urlTemplate: this.#servers.default("/api/v1/manage/forms/{form}/settings"),
        auth: this.#auth.bearerAuth,
        pathParams: [{ name: "form", value: request.form, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: s.record(s.string(), s.unknown()) },
      },
      {
        success: { kind: "json", schema: formSettingsEnvelopeSchema },
        errorFactory: Settings.UpdateFormSettingsError,
      },
      options,
    );
  }
}

export namespace Settings {
  export type GetFormSettingsRequest = {
    /** A form id or slug. */
    form: string;
  };

  export class GetFormSettingsError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Declared<"error4", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetFormSettingsError> = [
      { on: 401, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 403, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error3", decode: { kind: "json", schema: errorSchema } },
      { on: 429, kind: "error4", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type UpdateFormSettingsRequest = {
    /** A form id or slug. */
    form: string;
    body: Record<string, unknown>;
  };

  export class UpdateFormSettingsError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Declared<"error4", Error>
      | Declared<"error5", Error>
      | Declared<"error6", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<UpdateFormSettingsError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 403, kind: "error3", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error4", decode: { kind: "json", schema: errorSchema } },
      { on: 409, kind: "error5", decode: { kind: "json", schema: errorSchema } },
      { on: 429, kind: "error6", decode: { kind: "json", schema: errorSchema } },
    ];
  }
}
