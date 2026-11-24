import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import {
  syncSequenceStatusOutputSchema,
  type SyncSequenceStatusOutput,
} from "../models/sync-sequence-status-output.js";
import {
  triggerSequenceRunOutputSchema,
  type TriggerSequenceRunOutput,
} from "../models/trigger-sequence-run-output.js";
import { validateErrorJsonSchema, type ValidateErrorJson } from "../models/validate-error-json.js";
import type { Servers } from "../servers.js";

export class SyncSequences {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Sync sequence status
   *
   * @remarks
   * Get the status of a sync sequence run.
   *
   * @returns Ok
   *
   * @throws {@link SyncSequences.GetSyncSequenceRunError} when the API answers with an error status
   * — narrow on `err.payload.kind`
   *
   * @throws {@link HightouchError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getSyncSequenceRun(
    request: SyncSequences.GetSyncSequenceRunRequest,
    options?: RequestOptions,
  ): ApiPromise<SyncSequenceStatusOutput, SyncSequences.GetSyncSequenceRunError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/sync-sequences/runs/{syncSequenceRunId}"),
        auth: this.#auth.bearerAuth,
        pathParams: [{ name: "syncSequenceRunId", value: request.syncSequenceRunId, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: syncSequenceStatusOutputSchema },
        errorFactory: SyncSequences.GetSyncSequenceRunError,
      },
      options,
    );
  }

  /**
   * Trigger Sync sequence
   *
   * @remarks
   * Trigger a new run for the given sync sequence.
   *
   * A sequence never runs concurrently with itself. If a run is already in progress, then where run
   * queueing is enabled for the workspace, a single follow-up run is queued and starts after the
   * current run completes (repeated triggers return the same queued run); otherwise the id of the
   * run already in progress is returned.
   *
   * @returns Ok
   *
   * @throws {@link SyncSequences.TriggerSequenceRunError} when the API answers with an error status
   * — narrow on `err.payload.kind`
   *
   * @throws {@link HightouchError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  triggerSequenceRun(
    request: SyncSequences.TriggerSequenceRunRequest,
    options?: RequestOptions,
  ): ApiPromise<TriggerSequenceRunOutput, SyncSequences.TriggerSequenceRunError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/sync-sequences/{syncSequenceId}/trigger"),
        auth: this.#auth.bearerAuth,
        pathParams: [{ name: "syncSequenceId", value: request.syncSequenceId, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: triggerSequenceRunOutputSchema },
        errorFactory: SyncSequences.TriggerSequenceRunError,
      },
      options,
    );
  }
}

export namespace SyncSequences {
  export type GetSyncSequenceRunRequest = {
    /** The id of the sync sequence run */
    syncSequenceRunId: string;
  };

  export class GetSyncSequenceRunError extends ApiError {
    declare readonly payload:
      | Declared<"error400", undefined>
      | Declared<"error401", undefined>
      | Declared<"validateErrorJson", ValidateErrorJson>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetSyncSequenceRunError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 401, kind: "error401", decode: { kind: "empty" } },
      { on: 422, kind: "validateErrorJson", decode: { kind: "json", schema: validateErrorJsonSchema } },
    ];
  }

  export type TriggerSequenceRunRequest = {
    /** The id of the sync sequence to trigger a run */
    syncSequenceId: string;
  };

  export class TriggerSequenceRunError extends ApiError {
    declare readonly payload:
      | Declared<"error400", undefined>
      | Declared<"error401", undefined>
      | Declared<"validateErrorJson", ValidateErrorJson>
      | Undeclared;

    static readonly errors: ErrorDecoders<TriggerSequenceRunError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 401, kind: "error401", decode: { kind: "empty" } },
      { on: 422, kind: "validateErrorJson", decode: { kind: "json", schema: validateErrorJsonSchema } },
    ];
  }
}
