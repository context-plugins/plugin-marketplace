import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { apiErrorModelInternalSchema, type ApiErrorModel } from "../models/api-error-model.js";
import {
  changeCursorExpiredResponseSchema,
  type ChangeCursorExpiredResponse,
} from "../models/change-cursor-expired-response.js";
import { eventTypeSchema, type EventType } from "../models/event-type.js";
import { platformSchema, type Platform } from "../models/platform.js";
import { includeRecord1Schema, type IncludeRecord1 } from "../models/unions/include-record1.js";
import {
  vehicleChangesResponseInternalSchema,
  type VehicleChangesResponse,
} from "../models/vehicle-changes-response.js";
import type { Servers } from "../servers.js";

/**
 * Durable, sequence-ordered material vehicle changes for reliable synchronization and replay.
 */
export class ChangeStream {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Read durable vehicle changes
   *
   * @remarks
   * Read material Copart and IAAI changes in monotonically increasing sequence order. Persist
   * meta.next_cursor only after your local transaction succeeds, then pass it back as after on the
   * next request. Sequence gaps are valid. Non-material technical null/zero initialization noise is
   * filtered. If a cursor falls outside the retained window, the API returns HTTP 410
   * cursor_expired instead of silently skipping events. New reserve.changed events carry
   * pricing.seller_reserve.* fields when a source-observed reserve status or inferred threshold
   * changes. Reserve Off alone does not establish a numerical reserve.
   *
   * @returns Sequence-ordered change events.
   *
   * @throws {@link ChangeStream.ListVehicleChangesError} when the API answers with an error status
   * — narrow on `err.payload.kind`
   *
   * @throws {@link ApibaraError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listVehicleChanges(
    request: ChangeStream.ListVehicleChangesRequest = {},
    options?: RequestOptions,
  ): ApiPromise<VehicleChangesResponse, ChangeStream.ListVehicleChangesError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/changes"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [],
        query: [
          { name: "after", value: request.after, schema: s.defaulted(s.int(), 0) },
          { name: "limit", value: request.limit, schema: s.defaulted(s.int(), 100) },
          { name: "platform", value: request.platform, schema: s.optional(s.lazy(() => platformSchema)) },
          { name: "event_type", value: request.eventType, schema: s.optional(s.lazy(() => eventTypeSchema)) },
          { name: "terminal", value: request.terminal, schema: s.optional(s.boolean()) },
          { name: "lot_number", value: request.lotNumber, schema: s.optional(s.string()) },
          { name: "vin", value: request.vin, schema: s.optional(s.string()) },
          {
            name: "include_record",
            value: request.includeRecord,
            schema: s.optional(s.lazy(() => includeRecord1Schema)),
          },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: vehicleChangesResponseInternalSchema },
        errorFactory: ChangeStream.ListVehicleChangesError,
      },
      options,
    );
  }
}

export namespace ChangeStream {
  export type ListVehicleChangesRequest = {
    /**
     * Return events with sequence greater than this checkpoint. Start with 0 for the oldest
     * retained event.
     *
     * @default 0
     */
    after?: number;
    /** @default 100 */
    limit?: number;
    platform?: Platform;
    eventType?: EventType;
    terminal?: boolean;
    lotNumber?: string;
    vin?: string;
    /**
     * Optional current-record hydration. true/all adds the current full normalized vehicle record
     * to every event where available; created adds it only to lot.created. Sync Center incremental
     * feeds use created to stay self-contained without duplicating large media payloads on every
     * bid/status event.
     */
    includeRecord?: IncludeRecord1;
  };

  export const listVehicleChangesRequestSchema: Schema<ListVehicleChangesRequest> = s.lazySchema(() =>
    s.object<ListVehicleChangesRequest>({
      after: s.defaulted(s.int().check(s.gte(0)), 0),
      limit: s.defaulted(s.int().check(s.gte(1), s.lte(2000)), 100),
      platform: s.optional(s.lazy(() => platformSchema)),
      eventType: s.optional(s.lazy(() => eventTypeSchema)),
      terminal: s.optional(s.boolean()),
      lotNumber: s.optional(s.string()),
      vin: s.optional(s.string()),
      includeRecord: s.optional(s.lazy(() => includeRecord1Schema)),
    }),
  );

  export class ListVehicleChangesError extends ApiError {
    declare readonly payload:
      | Declared<"changeCursorExpiredResponse", ChangeCursorExpiredResponse>
      | Declared<"apiErrorModel", ApiErrorModel>
      | Declared<"apiErrorModel2", ApiErrorModel>
      | Undeclared;

    static readonly errors: ErrorDecoders<ListVehicleChangesError> = [
      {
        on: 410,
        kind: "changeCursorExpiredResponse",
        decode: { kind: "json", schema: changeCursorExpiredResponseSchema },
      },
      { on: 401, kind: "apiErrorModel", decode: { kind: "json", schema: apiErrorModelInternalSchema } },
      { on: 422, kind: "apiErrorModel2", decode: { kind: "json", schema: apiErrorModelInternalSchema } },
    ];
  }
}
