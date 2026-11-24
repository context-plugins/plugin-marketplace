import { ApiError } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { noneAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import { orderSchema, type Order } from "../models/order.js";
import { ordersLinesRequestSchema, type OrdersLinesRequest } from "../models/orders-lines-request.js";
import type { Servers } from "../servers.js";

export class OrdersLines {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;

  constructor(rawClient: RawClient, servers: Servers) {
    this.#rawClient = rawClient;
    this.#servers = servers;
  }

  /**
   * Update order lines
   *
   * @returns Success response
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link PaidError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  update3(request: OrdersLines.Update3Request, options?: RequestOptions): ApiPromise<Order, ApiError> {
    return this.#rawClient.execute(
      {
        method: "PUT",
        urlTemplate: this.#servers.default("/orders/{orderId}/lines"),
        auth: noneAuth,
        pathParams: [{ name: "orderId", value: request.orderId, schema: s.string() }],
        query: [],
        headers: [
          { name: "Authorization", value: request.authorization, schema: s.string() },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => ordersLinesRequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: orderSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }
}

export namespace OrdersLines {
  export type Update3Request = {
    orderId: string;
    /** Bearer authentication */
    authorization: string;
    body?: OrdersLinesRequest;
  };
}
