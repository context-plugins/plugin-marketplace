import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import { triggerRunIdrInputSchema, type TriggerRunIdrInput } from "../models/trigger-run-idr-input.js";
import { triggerRunIdrOutputSchema, type TriggerRunIdrOutput } from "../models/trigger-run-idr-output.js";
import { validateErrorJsonSchema, type ValidateErrorJson } from "../models/validate-error-json.js";
import type { Servers } from "../servers.js";

export class IdGraphs {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Trigger run id graph
   *
   * @remarks
   * DEPRECATED: use `/idr/{graphId}/trigger` instead
   *
   * @returns Ok
   *
   * @throws {@link IdGraphs.TriggerRunIdGraphError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link HightouchError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   *
   * @deprecated
   */
  triggerRunIdGraph(
    request: IdGraphs.TriggerRunIdGraphRequest,
    options?: RequestOptions,
  ): ApiPromise<TriggerRunIdrOutput, IdGraphs.TriggerRunIdGraphError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/id_graphs/{graphId}/trigger"),
        auth: this.#auth.bearerAuth,
        pathParams: [{ name: "graphId", value: request.graphId, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => triggerRunIdrInputSchema)),
        },
      },
      {
        success: { kind: "json", schema: triggerRunIdrOutputSchema },
        errorFactory: IdGraphs.TriggerRunIdGraphError,
      },
      options,
    );
  }
}

export namespace IdGraphs {
  export type TriggerRunIdGraphRequest = {
    graphId: string;
    body?: TriggerRunIdrInput;
  };

  export class TriggerRunIdGraphError extends ApiError {
    declare readonly payload:
      | Declared<"error400", undefined>
      | Declared<"error401", undefined>
      | Declared<"error403", undefined>
      | Declared<"error404", undefined>
      | Declared<"validateErrorJson", ValidateErrorJson>
      | Undeclared;

    static readonly errors: ErrorDecoders<TriggerRunIdGraphError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 401, kind: "error401", decode: { kind: "empty" } },
      { on: 403, kind: "error403", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 422, kind: "validateErrorJson", decode: { kind: "json", schema: validateErrorJsonSchema } },
    ];
  }
}
