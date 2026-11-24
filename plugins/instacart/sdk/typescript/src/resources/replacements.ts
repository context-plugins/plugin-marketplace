import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import { errorSchema, type Error } from "../models/error.js";
import {
  replacementDecisionRequestSchema,
  type ReplacementDecisionRequest,
} from "../models/replacement-decision-request.js";
import { replacementResponseSchema, type ReplacementResponse } from "../models/replacement-response.js";
import type { Servers } from "../servers.js";

/**
 * Endpoints for managing item replacements suggested by shoppers during order fulfillment.
 */
export class Replacements {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Approve or reject an item replacement
   *
   * @remarks
   * Approves or rejects a replacement suggested by the shopper for a specific order item. If the
   * customer approves the replacement, specify the status as APPROVED. If the customer rejects the
   * replacement, specify the status as REJECTED. Items with a rejected replacement are
   * automatically refunded.
   *
   * @returns Replacement decision applied successfully
   *
   * @throws {@link Replacements.UpdateItemReplacementError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link InstacartError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  updateItemReplacement(
    request: Replacements.UpdateItemReplacementRequest,
    options?: RequestOptions,
  ): ApiPromise<ReplacementResponse, Replacements.UpdateItemReplacementError> {
    return this.#rawClient.execute(
      {
        method: "PUT",
        urlTemplate: this.#servers.default(
          "/v2/post_checkout/orders/{order_id}/items/{order_item_id}/replacement",
        ),
        auth: this.#auth.bearerAuth,
        pathParams: [
          { name: "order_id", value: request.orderId, schema: s.string() },
          { name: "order_item_id", value: request.orderItemId, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: replacementDecisionRequestSchema },
      },
      {
        success: { kind: "json", schema: replacementResponseSchema },
        errorFactory: Replacements.UpdateItemReplacementError,
      },
      options,
    );
  }
}

export namespace Replacements {
  export type UpdateItemReplacementRequest = {
    /** The unique identifier for the order. */
    orderId: string;
    /** The unique identifier for a specific item within the order. */
    orderItemId: string;
    body: ReplacementDecisionRequest;
  };

  export class UpdateItemReplacementError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<UpdateItemReplacementError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error3", decode: { kind: "json", schema: errorSchema } },
    ];
  }
}
