import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { allAuth, anyAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import { activeThemeSchema, type ActiveTheme } from "../models/active-theme.js";
import {
  analyticsV1SettingsThemesResponseInternalSchema,
  type AnalyticsV1SettingsThemesResponse,
} from "../models/analytics-v1-settings-themes-response.js";
import {
  createCustomThemeRequestInternalSchema,
  type CreateCustomThemeRequest,
} from "../models/create-custom-theme-request.js";
import { customThemeInternalSchema, type CustomTheme } from "../models/custom-theme.js";
import { errorSchema, type Error } from "../models/error.js";
import {
  setActiveThemeRequestSchema,
  type SetActiveThemeRequest,
} from "../models/set-active-theme-request.js";
import {
  updateCustomThemeRequestInternalSchema,
  type UpdateCustomThemeRequest,
} from "../models/update-custom-theme-request.js";
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
   * Create a custom theme
   *
   * @remarks
   * Creates a new custom color theme. Requires Cloud Analytics Admin permission.
   *
   * @returns Created - Custom theme created successfully.
   *
   * @throws {@link Settings.CreateCustomThemeError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link DoiTError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  createCustomTheme(
    request: Settings.CreateCustomThemeRequestParams,
    options?: RequestOptions,
  ): ApiPromise<CustomTheme, Settings.CreateCustomThemeError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/analytics/v1/settings/themes"),
        auth: anyAuth(this.#auth.apiKey, allAuth(this.#auth.tenantId, this.#auth.apiKey)),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: createCustomThemeRequestInternalSchema },
      },
      {
        success: { kind: "json", schema: customThemeInternalSchema },
        errorFactory: Settings.CreateCustomThemeError,
      },
      options,
    );
  }

  /**
   * Delete a custom theme
   *
   * @remarks
   * Deletes the custom theme specified by the Id. Requires Cloud Analytics Admin permission.
   *
   * @returns OK - Custom theme deleted.
   *
   * @throws {@link Settings.DeleteCustomThemeError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link DoiTError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  deleteCustomTheme(
    request: Settings.DeleteCustomThemeRequest,
    options?: RequestOptions,
  ): ApiPromise<Record<string, unknown>, Settings.DeleteCustomThemeError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default("/analytics/v1/settings/themes/{id}"),
        auth: anyAuth(this.#auth.apiKey, allAuth(this.#auth.tenantId, this.#auth.apiKey)),
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.record(s.string(), s.unknown()) },
        errorFactory: Settings.DeleteCustomThemeError,
      },
      options,
    );
  }

  /**
   * Get the active theme
   *
   * @remarks
   * Returns the theme currently active for the authenticated user. `themeId` is the reserved
   * sentinel `"default"` when no custom or preset theme is selected and the user is on the built-in
   * default.
   *
   * @returns OK - The request succeeded.
   *
   * @throws {@link Settings.GetActiveThemeError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link DoiTError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getActiveTheme(options?: RequestOptions): ApiPromise<ActiveTheme, Settings.GetActiveThemeError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/analytics/v1/settings/active-theme"),
        auth: anyAuth(this.#auth.apiKey, allAuth(this.#auth.tenantId, this.#auth.apiKey)),
        pathParams: [],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: activeThemeSchema },
        errorFactory: Settings.GetActiveThemeError,
      },
      options,
    );
  }

  /**
   * Retrieve a custom theme
   *
   * @remarks
   * Returns a custom theme by the specified Id.
   *
   * @returns OK - Custom theme returned.
   *
   * @throws {@link Settings.GetCustomThemeError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link DoiTError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getCustomTheme(
    request: Settings.GetCustomThemeRequest,
    options?: RequestOptions,
  ): ApiPromise<CustomTheme, Settings.GetCustomThemeError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/analytics/v1/settings/themes/{id}"),
        auth: anyAuth(this.#auth.apiKey, allAuth(this.#auth.tenantId, this.#auth.apiKey)),
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: customThemeInternalSchema },
        errorFactory: Settings.GetCustomThemeError,
      },
      options,
    );
  }

  /**
   * List custom themes
   *
   * @remarks
   * Returns the list of custom color themes defined for your account.
   *
   * @returns OK - The request succeeded.
   *
   * @throws {@link Settings.ListCustomThemesError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link DoiTError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listCustomThemes(
    options?: RequestOptions,
  ): ApiPromise<AnalyticsV1SettingsThemesResponse, Settings.ListCustomThemesError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/analytics/v1/settings/themes"),
        auth: anyAuth(this.#auth.apiKey, allAuth(this.#auth.tenantId, this.#auth.apiKey)),
        pathParams: [],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: analyticsV1SettingsThemesResponseInternalSchema },
        errorFactory: Settings.ListCustomThemesError,
      },
      options,
    );
  }

  /**
   * Set the active theme
   *
   * @remarks
   * Sets the theme active for the authenticated user. Send the reserved sentinel `themeId:
   * "default"` to clear the active theme and fall back to the built-in default. Returns the updated
   * active theme.
   *
   * @returns OK - Active theme updated.
   *
   * @throws {@link Settings.SetActiveThemeError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link DoiTError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  setActiveTheme(
    request: Settings.SetActiveThemeRequestParams,
    options?: RequestOptions,
  ): ApiPromise<ActiveTheme, Settings.SetActiveThemeError> {
    return this.#rawClient.execute(
      {
        method: "PUT",
        urlTemplate: this.#servers.default("/analytics/v1/settings/active-theme"),
        auth: anyAuth(this.#auth.apiKey, allAuth(this.#auth.tenantId, this.#auth.apiKey)),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: setActiveThemeRequestSchema },
      },
      {
        success: { kind: "json", schema: activeThemeSchema },
        errorFactory: Settings.SetActiveThemeError,
      },
      options,
    );
  }

  /**
   * Update a custom theme
   *
   * @remarks
   * Updates the custom theme specified by the Id. Requires Cloud Analytics Admin permission.
   *
   * @returns OK - Custom theme updated.
   *
   * @throws {@link Settings.UpdateCustomThemeError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link DoiTError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  updateCustomTheme(
    request: Settings.UpdateCustomThemeRequestParams,
    options?: RequestOptions,
  ): ApiPromise<CustomTheme, Settings.UpdateCustomThemeError> {
    return this.#rawClient.execute(
      {
        method: "PATCH",
        urlTemplate: this.#servers.default("/analytics/v1/settings/themes/{id}"),
        auth: anyAuth(this.#auth.apiKey, allAuth(this.#auth.tenantId, this.#auth.apiKey)),
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: updateCustomThemeRequestInternalSchema },
      },
      {
        success: { kind: "json", schema: customThemeInternalSchema },
        errorFactory: Settings.UpdateCustomThemeError,
      },
      options,
    );
  }
}

export namespace Settings {
  export type CreateCustomThemeRequestParams = {
    body: CreateCustomThemeRequest;
  };

  export class CreateCustomThemeError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Declared<"error4", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<CreateCustomThemeError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 403, kind: "error3", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error4", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type DeleteCustomThemeRequest = {
    /** Custom theme ID */
    id: string;
  };

  export class DeleteCustomThemeError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Declared<"error4", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<DeleteCustomThemeError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 403, kind: "error3", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error4", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export class GetActiveThemeError extends ApiError {
    declare readonly payload: Declared<"error", Error> | Declared<"error2", Error> | Undeclared;

    static readonly errors: ErrorDecoders<GetActiveThemeError> = [
      { on: 401, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 403, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type GetCustomThemeRequest = {
    /** Custom theme ID */
    id: string;
  };

  export class GetCustomThemeError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Declared<"error4", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetCustomThemeError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 403, kind: "error3", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error4", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export class ListCustomThemesError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<ListCustomThemesError> = [
      { on: 401, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 403, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error3", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type SetActiveThemeRequestParams = {
    body: SetActiveThemeRequest;
  };

  export class SetActiveThemeError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Declared<"error4", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<SetActiveThemeError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 403, kind: "error3", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error4", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type UpdateCustomThemeRequestParams = {
    /** Custom theme ID */
    id: string;
    body: UpdateCustomThemeRequest;
  };

  export class UpdateCustomThemeError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Declared<"error4", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<UpdateCustomThemeError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 403, kind: "error3", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error4", decode: { kind: "json", schema: errorSchema } },
    ];
  }
}
