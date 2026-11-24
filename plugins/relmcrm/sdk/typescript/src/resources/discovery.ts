import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { anyAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import { schemaDocSchema, type SchemaDoc } from "../models/schema-doc.js";
import { settingsRequestSchema, type SettingsRequest } from "../models/settings-request.js";
import { settingsSchema, type Settings } from "../models/settings.js";
import { usageSchema, type Usage } from "../models/usage.js";
import type { Servers } from "../servers.js";

/**
 * Self-describing schema, usage, settings.
 */
export class Discovery {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Live object/field/enum registry
   *
   * @remarks
   * Returns every object with its fields, id_prefix and list_filters, all enum groups,
   * list_controls, the automation capability catalog, and usage notes. Call this before guessing a
   * type, field or filter.
   *
   * @returns Schema document
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link RelmCrmError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getSchema(options?: RequestOptions): ApiPromise<SchemaDoc, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/schema"),
        auth: anyAuth(this.#auth.bearerAuth, this.#auth.oauth2),
        pathParams: [],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: schemaDocSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Workspace settings (spend cap)
   *
   * @returns Settings
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link RelmCrmError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getSettings(options?: RequestOptions): ApiPromise<Settings, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/settings"),
        auth: anyAuth(this.#auth.bearerAuth, this.#auth.oauth2),
        pathParams: [],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: settingsSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Current billing period usage
   *
   * @returns Usage
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link RelmCrmError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getUsage(options?: RequestOptions): ApiPromise<Usage, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/usage"),
        auth: anyAuth(this.#auth.bearerAuth, this.#auth.oauth2),
        pathParams: [],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: usageSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Set the monthly overage spend cap
   *
   * @returns Settings
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link RelmCrmError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  setSettings(
    request: Discovery.SetSettingsRequest,
    options?: RequestOptions,
  ): ApiPromise<Settings, ApiError> {
    return this.#rawClient.execute(
      {
        method: "PATCH",
        urlTemplate: this.#servers.default("/settings"),
        auth: anyAuth(this.#auth.bearerAuth, this.#auth.oauth2),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: settingsRequestSchema },
      },
      {
        success: { kind: "json", schema: settingsSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }
}

export namespace Discovery {
  export type SetSettingsRequest = {
    body: SettingsRequest;
  };
}
