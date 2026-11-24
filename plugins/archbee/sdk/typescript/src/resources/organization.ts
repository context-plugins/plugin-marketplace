import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import {
  teamDisplayRulesResponseSchema,
  type TeamDisplayRulesResponse,
} from "../models/team-display-rules-response.js";
import {
  teamDisplayRules400Error1Schema,
  type TeamDisplayRules400Error1,
} from "../models/team-display-rules400-error1.js";
import { teamExport400Error1Schema, type TeamExport400Error1 } from "../models/team-export400-error1.js";
import type { Servers } from "../servers.js";

/**
 * Organization-level export and display rules
 */
export class Organization {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Organization Display Rules
   *
   * @remarks
   * Export a list of display rules.
   *
   * @returns Successful export todo
   *
   * @throws {@link Organization.OrganizationDisplayRulesError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link ArchbeeError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  organizationDisplayRules(
    options?: RequestOptions,
  ): ApiPromise<TeamDisplayRulesResponse, Organization.OrganizationDisplayRulesError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/team/display-rules"),
        auth: this.#auth.bearerAuth,
        pathParams: [],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: teamDisplayRulesResponseSchema },
        errorFactory: Organization.OrganizationDisplayRulesError,
      },
      options,
    );
  }

  /**
   * Organization Export
   *
   * @remarks
   * Export assets, spaces with documents, team and user data from Archbee given teamId. Use
   * --output
   *
   * @returns Successful export
   *
   * @throws {@link Organization.OrganizationExportError} when the API answers with an error status
   * — narrow on `err.payload.kind`
   *
   * @throws {@link ArchbeeError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  organizationExport(options?: RequestOptions): ApiPromise<undefined, Organization.OrganizationExportError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/team/export"),
        auth: this.#auth.bearerAuth,
        pathParams: [],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: Organization.OrganizationExportError,
      },
      options,
    );
  }
}

export namespace Organization {
  export class OrganizationDisplayRulesError extends ApiError {
    declare readonly payload: Declared<"teamDisplayRules400Error1", TeamDisplayRules400Error1> | Undeclared;

    static readonly errors: ErrorDecoders<OrganizationDisplayRulesError> = [
      {
        on: 400,
        kind: "teamDisplayRules400Error1",
        decode: { kind: "json", schema: teamDisplayRules400Error1Schema },
      },
    ];
  }

  export class OrganizationExportError extends ApiError {
    declare readonly payload: Declared<"teamExport400Error1", TeamExport400Error1> | Undeclared;

    static readonly errors: ErrorDecoders<OrganizationExportError> = [
      { on: 400, kind: "teamExport400Error1", decode: { kind: "json", schema: teamExport400Error1Schema } },
    ];
  }
}
