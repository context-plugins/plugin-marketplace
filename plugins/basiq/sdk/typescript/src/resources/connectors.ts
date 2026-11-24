import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { connectorsResponseInternalSchema, type ConnectorsResponse } from "../models/connectors-response.js";
import {
  connectorsResponse1InternalSchema,
  type ConnectorsResponse1,
} from "../models/connectors-response1.js";
import { connectors400Error1Schema, type Connectors400Error1 } from "../models/connectors400-error1.js";
import { connectors401Error1Schema, type Connectors401Error1 } from "../models/connectors401-error1.js";
import { connectors404Error1Schema, type Connectors404Error1 } from "../models/connectors404-error1.js";
import { connectors500Error1Schema, type Connectors500Error1 } from "../models/connectors500-error1.js";
import type { Servers } from "../servers.js";

export class Connectors {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Retrieve a connector
   *
   * @remarks
   * NOTE: This end point requires authentication.
   *
   * @returns Returns data of single connector.
   *
   * @throws {@link Connectors.GetConnectorError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link BasiqError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getConnector(
    request: Connectors.GetConnectorRequest,
    options?: RequestOptions,
  ): ApiPromise<ConnectorsResponse1, Connectors.GetConnectorError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/connectors/{connectorId}/{method}"),
        auth: this.#auth.servicesToken,
        pathParams: [
          { name: "connectorId", value: request.connectorId, schema: s.string() },
          { name: "method", value: request.method, schema: s.string() },
        ],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: connectorsResponse1InternalSchema },
        errorFactory: Connectors.GetConnectorError,
      },
      options,
    );
  }

  /**
   * Retrieve connectors
   *
   * @remarks
   * NOTE: This end point requires authentication.
   *
   * @returns Returns data of single connector.
   *
   * @throws {@link Connectors.GetConnectorsError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link BasiqError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getConnectors(
    request: Connectors.GetConnectorsRequest = {},
    options?: RequestOptions,
  ): ApiPromise<ConnectorsResponse, Connectors.GetConnectorsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/connectors"),
        auth: this.#auth.servicesToken,
        pathParams: [],
        query: [{ name: "filter", value: request.filter, schema: s.optional(s.string()) }],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: connectorsResponseInternalSchema },
        errorFactory: Connectors.GetConnectorsError,
      },
      options,
    );
  }
}

export namespace Connectors {
  export type GetConnectorRequest = {
    /** Connector ID */
    connectorId: string;
    /** Connector method */
    method: string;
  };

  export const getConnectorRequestSchema: Schema<GetConnectorRequest> = s.lazySchema(() =>
    s.object<GetConnectorRequest>({
      connectorId: s.string().check(s.pattern("^[A-Z]{2}[0-9]{5}$")),
      method: s.string(),
    }),
  );

  export class GetConnectorError extends ApiError {
    declare readonly payload:
      | Declared<"connectors400Error1", Connectors400Error1>
      | Declared<"connectors401Error1", Connectors401Error1>
      | Declared<"connectors404Error1", Connectors404Error1>
      | Declared<"connectors500Error1", Connectors500Error1>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetConnectorError> = [
      { on: 400, kind: "connectors400Error1", decode: { kind: "json", schema: connectors400Error1Schema } },
      { on: 401, kind: "connectors401Error1", decode: { kind: "json", schema: connectors401Error1Schema } },
      { on: 404, kind: "connectors404Error1", decode: { kind: "json", schema: connectors404Error1Schema } },
      { on: 500, kind: "connectors500Error1", decode: { kind: "json", schema: connectors500Error1Schema } },
    ];
  }

  export type GetConnectorsRequest = {
    /**
     * Filter parameter can be used to filter connector list by connector property. This parameter
     * should contain a comma-separated list of filter statements.</br> A filter statement is
     * composed of the entity name (in this case, it is always 'connector'), the property name
     * (e.g., 'stage'), the filter operator (e.g., 'eq'), and the quoted string value in parentheses
     * (e.g., "('live')").</br> The following list of regular expressions describes acceptable
     * filter statements:</br> • (connector).(id).(eq)\(('[A-Z][A-Z][0-9]{5}')\)</br> •
     * (connector).(method).(eq)\(('web'||'open-banking'|'pdf'|'csv')\)</br> •
     * (connector).(status).(eq|ne)\(('operational'|'degraded-performance'|'partial-outage'|'major-outage'|'under-maintenance')\)</br>
     * • (connector).(status).(in)\(([\w\W]+)\)</br> •
     * (connector).(stage).(eq|ne)\(('live'|'beta'|'alpha')\)</br> •
     * (connector).(stage).(in)\(([\w\W]+)\)</br> •
     * (connector).(scopes).(in|eq|ne)\(([\w\W]+)\)</br> •
     * (connector).(institution).(country).(eq|ne)\(('Australia'|'New Zealand')\)</br> •
     * (connector).(institution).(country).(in)\(([\w\W]+)\)</br> •
     * (connector).(institution).(tier).(eq|ne)\(('1'|'2'|'3'|'4')\)</br> •
     * (connector).(institution).(tier).(in)\(([\W\d]+)\)</br> •
     * (connector).(institution).(type).(eq|ne)\(('Bank'|'Bank (Foreign)'|'Test Bank'|'Credit
     * Union'|'Financial Services'|'Superannuation')\)</br> •
     * (connector).(authorization).(type).(eq|ne)\(('user'|'user-mfa'|'user-mfa-intermittent'|'other'|'token')\)</br>
     * • (connector).(authorization).(type).(in)\(([\w\W]+)\)</br> •
     * (connector).(connectorEngine).(eq|ne)\(('chrome'|'node')\)</br> Multiple filter definitions
     * should be separated with a comma (,).</br> For example, this filter statement will keep only
     * live tier 1 and tier 2 institutions:
     * filter=connector.stage.eq('live'),connector.institution.tier.in('1','2')</br>
     */
    filter?: string;
  };

  export class GetConnectorsError extends ApiError {
    declare readonly payload:
      | Declared<"connectors400Error1", Connectors400Error1>
      | Declared<"connectors401Error1", Connectors401Error1>
      | Declared<"connectors404Error1", Connectors404Error1>
      | Declared<"connectors500Error1", Connectors500Error1>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetConnectorsError> = [
      { on: 400, kind: "connectors400Error1", decode: { kind: "json", schema: connectors400Error1Schema } },
      { on: 401, kind: "connectors401Error1", decode: { kind: "json", schema: connectors401Error1Schema } },
      { on: 404, kind: "connectors404Error1", decode: { kind: "json", schema: connectors404Error1Schema } },
      { on: 500, kind: "connectors500Error1", decode: { kind: "json", schema: connectors500Error1Schema } },
    ];
  }
}
