import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import {
  accessDeniedExceptionSchema,
  type AccessDeniedException,
} from "../models/access-denied-exception.js";
import {
  internalServerExceptionSchema,
  type InternalServerException,
} from "../models/internal-server-exception.js";
import {
  listAnomalousLogGroupsResponseSchema,
  type ListAnomalousLogGroupsResponse,
} from "../models/list-anomalous-log-groups-response.js";
import {
  listLogAnomaliesRequestSchema,
  type ListLogAnomaliesRequest,
} from "../models/list-log-anomalies-request.js";
import {
  resourceNotFoundExceptionSchema,
  type ResourceNotFoundException,
} from "../models/resource-not-found-exception.js";
import { throttlingExceptionSchema, type ThrottlingException } from "../models/throttling-exception.js";
import { validationExceptionSchema, type ValidationException } from "../models/validation-exception.js";
import type { Servers } from "../servers.js";

export class ListLogAnomalies {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * List Anomalous Log Groups
   *
   * @remarks
   * Returns the list of log groups that contain log anomalies.
   *
   * @returns Success
   *
   * @throws {@link ListLogAnomalies.ListAnomalousLogGroupsError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link AmazonDevOpsGuruError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  listAnomalousLogGroups(
    request: ListLogAnomalies.ListAnomalousLogGroupsRequest = {},
    options?: RequestOptions,
  ): ApiPromise<ListAnomalousLogGroupsResponse, ListLogAnomalies.ListAnomalousLogGroupsError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/list-log-anomalies"),
        auth: this.#auth.sigv4,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => listLogAnomaliesRequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: listAnomalousLogGroupsResponseSchema },
        errorFactory: ListLogAnomalies.ListAnomalousLogGroupsError,
      },
      options,
    );
  }
}

export namespace ListLogAnomalies {
  export type ListAnomalousLogGroupsRequest = {
    body?: ListLogAnomaliesRequest;
  };

  export class ListAnomalousLogGroupsError extends ApiError {
    declare readonly payload:
      | Declared<"accessDeniedException", AccessDeniedException>
      | Declared<"internalServerException", InternalServerException>
      | Declared<"resourceNotFoundException", ResourceNotFoundException>
      | Declared<"throttlingException", ThrottlingException>
      | Declared<"validationException", ValidationException>
      | Undeclared;

    static readonly errors: ErrorDecoders<ListAnomalousLogGroupsError> = [
      {
        on: 403,
        kind: "accessDeniedException",
        decode: { kind: "json", schema: accessDeniedExceptionSchema },
      },
      {
        on: 500,
        kind: "internalServerException",
        decode: { kind: "json", schema: internalServerExceptionSchema },
      },
      {
        on: 404,
        kind: "resourceNotFoundException",
        decode: { kind: "json", schema: resourceNotFoundExceptionSchema },
      },
      { on: 429, kind: "throttlingException", decode: { kind: "json", schema: throttlingExceptionSchema } },
      { on: 400, kind: "validationException", decode: { kind: "json", schema: validationExceptionSchema } },
    ];
  }
}
