import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { anyAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import {
  connectorToggleRequestSchema,
  type ConnectorToggleRequest,
} from "../models/connector-toggle-request.js";
import {
  connectorsToggleResponseSchema,
  type ConnectorsToggleResponse,
} from "../models/connectors-toggle-response.js";
import { errorResponseSchema, type ErrorResponse } from "../models/error-response.js";
import {
  connectorsToggleResponse1Schema,
  type ConnectorsToggleResponse1,
} from "../models/unions/connectors-toggle-response1.js";
import type { Servers } from "../servers.js";

/**
 * Enable/disable connectors for sync or agent functionality
 */
export class ConnectorControl {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Toggle connector sync or agent
   *
   * @remarks
   * Flip a connector's sync or agent use: each call turns it on when it is off and off when it is
   * on. Read <code>isActive</code> / <code>isAgentActive</code> first. Turning sync on starts the
   * first sync.<br><br> <b>Toggle Types:</b><br> <ul> <li><code>sync</code> - data
   * synchronization</li> <li><code>agent</code> - use by AI agents</li> </ul> <b>Before Sync Can Be
   * Turned On:</b><br> <ul> <li>The connector is configured (<code>isConfigured: true</code>)</li>
   * <li>OAuth connectors: sign-in has completed</li> <li>The connection test against the source
   * passes</li> <li>For agent: the connector supports agents (<code>supportsAgent:
   * true</code>)</li> <li>Local FS: must be enabled from the owner device via the desktop app,
   * which sends <code>deviceId</code> and <code>deviceName</code>. The first enable claims that
   * device as owner.</li> </ul> <b>Permissions:</b><br> <ul> <li>Team scope: Requires admin</li>
   * <li>Personal scope: Only creator can toggle</li> </ul>
   *
   * @returns Flipped
   *
   * @throws {@link ConnectorControl.ToggleConnectorError} when the API answers with an error status
   * — narrow on `err.payload.kind`
   *
   * @throws {@link PipesHubApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  toggleConnector(
    request: ConnectorControl.ToggleConnectorRequest,
    options?: RequestOptions,
  ): ApiPromise<ConnectorsToggleResponse, ConnectorControl.ToggleConnectorError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/connectors/{connectorId}/toggle"),
        auth: anyAuth(
          this.#auth.bearerAuth,
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
        ),
        pathParams: [{ name: "connectorId", value: request.connectorId, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: connectorToggleRequestSchema },
      },
      {
        success: { kind: "json", schema: connectorsToggleResponseSchema },
        errorFactory: ConnectorControl.ToggleConnectorError,
      },
      options,
    );
  }
}

export namespace ConnectorControl {
  export type ToggleConnectorRequest = {
    /** Connector instance ID */
    connectorId: string;
    /** Request payload */
    body: ConnectorToggleRequest;
  };

  export class ToggleConnectorError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Declared<"errorResponse3", ErrorResponse>
      | Declared<"errorResponse4", ErrorResponse>
      | Declared<"connectorsToggleResponse1", ConnectorsToggleResponse1>
      | Declared<"errorResponse5", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<ToggleConnectorError> = [
      { on: 400, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 401, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 403, kind: "errorResponse3", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 404, kind: "errorResponse4", decode: { kind: "json", schema: errorResponseSchema } },
      {
        on: 409,
        kind: "connectorsToggleResponse1",
        decode: { kind: "json", schema: connectorsToggleResponse1Schema },
      },
      { on: 500, kind: "errorResponse5", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }
}
