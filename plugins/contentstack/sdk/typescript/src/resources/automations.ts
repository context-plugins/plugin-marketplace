import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { anyAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import { automationListSchema, type AutomationList } from "../models/automation-list.js";
import { automationSchema, type Automation } from "../models/automation.js";
import { errorSchema, type Error } from "../models/error.js";
import type { Servers } from "../servers.js";

/**
 * Automations are individual workflow definitions that connect triggers (such as Contentstack
 * content events) to actions (such as sending notifications or updating external systems).
 */
export class Automations {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Activate an automation
   *
   * @remarks
   * Enables an automation so that it will execute when its configured trigger conditions are met.
   * Only automations in a valid, configured state can be activated.
   *
   * @returns Automation activated successfully.
   *
   * @throws {@link Automations.ActivateAutomationError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link ContentstackError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  activateAutomation(
    request: Automations.ActivateAutomationRequest,
    options?: RequestOptions,
  ): ApiPromise<Automation, Automations.ActivateAutomationError> {
    return this.#rawClient.execute(
      {
        method: "PUT",
        urlTemplate: this.#servers.defaultContentstackAutomateManagementAccountsApi(
          "/v1/organizations/{organization_uid}/projects/{project_uid}/automations/{automation_uid}/activate",
        ),
        auth: anyAuth(this.#auth.bearerAuth, this.#auth.authtokenAuth),
        pathParams: [
          { name: "organization_uid", value: request.organizationUid, schema: s.string() },
          { name: "project_uid", value: request.projectUid, schema: s.string() },
          { name: "automation_uid", value: request.automationUid, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: automationSchema },
        errorFactory: Automations.ActivateAutomationError,
      },
      options,
    );
  }

  /**
   * Deactivate an automation
   *
   * @remarks
   * Disables an active automation, preventing it from executing when its trigger conditions are
   * met. Existing in-progress executions will complete before the automation is fully deactivated.
   *
   * @returns Automation deactivated successfully.
   *
   * @throws {@link Automations.DeactivateAutomationError} when the API answers with an error status
   * — narrow on `err.payload.kind`
   *
   * @throws {@link ContentstackError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  deactivateAutomation(
    request: Automations.DeactivateAutomationRequest,
    options?: RequestOptions,
  ): ApiPromise<Automation, Automations.DeactivateAutomationError> {
    return this.#rawClient.execute(
      {
        method: "PUT",
        urlTemplate: this.#servers.defaultContentstackAutomateManagementAccountsApi(
          "/v1/organizations/{organization_uid}/projects/{project_uid}/automations/{automation_uid}/deactivate",
        ),
        auth: anyAuth(this.#auth.bearerAuth, this.#auth.authtokenAuth),
        pathParams: [
          { name: "organization_uid", value: request.organizationUid, schema: s.string() },
          { name: "project_uid", value: request.projectUid, schema: s.string() },
          { name: "automation_uid", value: request.automationUid, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: automationSchema },
        errorFactory: Automations.DeactivateAutomationError,
      },
      options,
    );
  }

  /**
   * Get all automations
   *
   * @remarks
   * Retrieves all automation workflow definitions within a specific project, including their
   * trigger configurations, steps, and activation status.
   *
   * @returns A list of automations in the project.
   *
   * @throws {@link Automations.GetAllAutomationsError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link ContentstackError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getAllAutomations(
    request: Automations.GetAllAutomationsRequest,
    options?: RequestOptions,
  ): ApiPromise<AutomationList, Automations.GetAllAutomationsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.defaultContentstackAutomateManagementAccountsApi(
          "/v1/organizations/{organization_uid}/projects/{project_uid}/automations",
        ),
        auth: anyAuth(this.#auth.bearerAuth, this.#auth.authtokenAuth),
        pathParams: [
          { name: "organization_uid", value: request.organizationUid, schema: s.string() },
          { name: "project_uid", value: request.projectUid, schema: s.string() },
        ],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: automationListSchema },
        errorFactory: Automations.GetAllAutomationsError,
      },
      options,
    );
  }

  /**
   * Get an automation
   *
   * @remarks
   * Retrieves the full configuration of a specific automation including trigger settings, action
   * steps, error handling, and activation status.
   *
   * @returns The requested automation configuration.
   *
   * @throws {@link Automations.GetAutomationError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link ContentstackError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getAutomation(
    request: Automations.GetAutomationRequest,
    options?: RequestOptions,
  ): ApiPromise<Automation, Automations.GetAutomationError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.defaultContentstackAutomateManagementAccountsApi(
          "/v1/organizations/{organization_uid}/projects/{project_uid}/automations/{automation_uid}",
        ),
        auth: anyAuth(this.#auth.bearerAuth, this.#auth.authtokenAuth),
        pathParams: [
          { name: "organization_uid", value: request.organizationUid, schema: s.string() },
          { name: "project_uid", value: request.projectUid, schema: s.string() },
          { name: "automation_uid", value: request.automationUid, schema: s.string() },
        ],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: automationSchema },
        errorFactory: Automations.GetAutomationError,
      },
      options,
    );
  }
}

export namespace Automations {
  export type ActivateAutomationRequest = {
    /** The unique identifier of the organization. */
    organizationUid: string;
    /** The unique identifier of the automation project. */
    projectUid: string;
    /** The unique identifier of the automation. */
    automationUid: string;
  };

  export class ActivateAutomationError extends ApiError {
    declare readonly payload: Declared<"error", Error> | Declared<"error2", Error> | Undeclared;

    static readonly errors: ErrorDecoders<ActivateAutomationError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type DeactivateAutomationRequest = {
    /** The unique identifier of the organization. */
    organizationUid: string;
    /** The unique identifier of the automation project. */
    projectUid: string;
    /** The unique identifier of the automation. */
    automationUid: string;
  };

  export class DeactivateAutomationError extends ApiError {
    declare readonly payload: Declared<"error", Error> | Undeclared;

    static readonly errors: ErrorDecoders<DeactivateAutomationError> = [
      { on: 401, kind: "error", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type GetAllAutomationsRequest = {
    /** The unique identifier of the organization. */
    organizationUid: string;
    /** The unique identifier of the automation project. */
    projectUid: string;
  };

  export class GetAllAutomationsError extends ApiError {
    declare readonly payload: Declared<"error", Error> | Undeclared;

    static readonly errors: ErrorDecoders<GetAllAutomationsError> = [
      { on: 401, kind: "error", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type GetAutomationRequest = {
    /** The unique identifier of the organization. */
    organizationUid: string;
    /** The unique identifier of the automation project. */
    projectUid: string;
    /** The unique identifier of the automation. */
    automationUid: string;
  };

  export class GetAutomationError extends ApiError {
    declare readonly payload: Declared<"error", Error> | Declared<"error2", Error> | Undeclared;

    static readonly errors: ErrorDecoders<GetAutomationError> = [
      { on: 401, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }
}
