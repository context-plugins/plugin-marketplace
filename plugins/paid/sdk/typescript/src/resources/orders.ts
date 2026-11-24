import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { noneAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import {
  batchSeatAssignmentsRequestSchema,
  type BatchSeatAssignmentsRequest,
} from "../models/batch-seat-assignments-request.js";
import {
  batchSeatAssignmentsResponseSchema,
  type BatchSeatAssignmentsResponse,
} from "../models/batch-seat-assignments-response.js";
import { cancelRenewalRequestSchema, type CancelRenewalRequest } from "../models/cancel-renewal-request.js";
import {
  cancelRenewalResponseSchema,
  type CancelRenewalResponse,
} from "../models/cancel-renewal-response.js";
import { createOrderRequestSchema, type CreateOrderRequest } from "../models/create-order-request.js";
import { errorResponseSchema, type ErrorResponse } from "../models/error-response.js";
import { errorSchema, type Error } from "../models/error.js";
import { invoicePaidOrdersApiSchema, type InvoicePaidOrdersApi } from "../models/invoice-paid-orders-api.js";
import { orderCreateSchema, type OrderCreate } from "../models/order-create.js";
import { orderLinesResponseSchema, type OrderLinesResponse } from "../models/order-lines-response.js";
import { orderListResponseSchema, type OrderListResponse } from "../models/order-list-response.js";
import {
  orderSeatListResponseSchema,
  type OrderSeatListResponse,
} from "../models/order-seat-list-response.js";
import { orderSeatSchema, type OrderSeat } from "../models/order-seat.js";
import { orderSchema, type Order } from "../models/order.js";
import { order1Schema, type Order1 } from "../models/order1.js";
import {
  ordersActivateAndPayRequestSchema,
  type OrdersActivateAndPayRequest,
} from "../models/orders-activate-and-pay-request.js";
import {
  ordersGetParametersCreationStateSchema,
  type OrdersGetParametersCreationState,
} from "../models/orders-get-parameters-creation-state.js";
import {
  ordersGetParametersStatusSchema,
  type OrdersGetParametersStatus,
} from "../models/orders-get-parameters-status.js";
import {
  ordersIdSeatsGetParametersStatusSchema,
  type OrdersIdSeatsGetParametersStatus,
} from "../models/orders-id-seats-get-parameters-status.js";
import {
  prorationUpgradeRequestSchema,
  type ProrationUpgradeRequest,
} from "../models/proration-upgrade-request.js";
import {
  prorationUpgradeResponseSchema,
  type ProrationUpgradeResponse,
} from "../models/proration-upgrade-response.js";
import { updateOrderRequestSchema, type UpdateOrderRequest } from "../models/update-order-request.js";
import {
  updateSeatAssignmentRequestSchema,
  type UpdateSeatAssignmentRequest,
} from "../models/update-seat-assignment-request.js";
import type { Servers } from "../servers.js";

export class Orders {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;

  constructor(rawClient: RawClient, servers: Servers) {
    this.#rawClient = rawClient;
    this.#servers = servers;
  }

  /**
   * Activate order
   *
   * @returns Success response
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link PaidError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  activate(request: Orders.ActivateRequest, options?: RequestOptions): ApiPromise<Order, ApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/orders/{orderId}/activate"),
        auth: noneAuth,
        pathParams: [{ name: "orderId", value: request.orderId, schema: s.string() }],
        query: [],
        headers: [
          { name: "Authorization", value: request.authorization, schema: s.string() },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: orderSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Activate order and process payment
   *
   * @remarks
   * Activates the order and processes the initial payment using the provided Stripe confirmation
   * token.
   *
   * @returns Order activated and payment processed successfully
   *
   * @throws {@link Orders.ActivateAndPayError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link PaidError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  activateAndPay(
    request: Orders.ActivateAndPayRequest,
    options?: RequestOptions,
  ): ApiPromise<Order, Orders.ActivateAndPayError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/orders/{orderId}/activate-and-pay"),
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
          schema: s.optional(s.lazy(() => ordersActivateAndPayRequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: orderSchema },
        errorFactory: Orders.ActivateAndPayError,
      },
      options,
    );
  }

  /**
   * Activate order
   *
   * @remarks
   * Activate a draft order by ID. Activation starts billing for the order using the same validation
   * and side effects as the dashboard activation flow.
   *
   * @returns 200
   *
   * @throws {@link Orders.ActivateOrderByIdError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link PaidError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  activateOrderById(
    request: Orders.ActivateOrderByIdRequest,
    options?: RequestOptions,
  ): ApiPromise<Order1, Orders.ActivateOrderByIdError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/orders/{id}/activate"),
        auth: noneAuth,
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        query: [],
        headers: [
          { name: "Authorization", value: request.authorization, schema: s.string() },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: order1Schema },
        errorFactory: Orders.ActivateOrderByIdError,
      },
      options,
    );
  }

  /**
   * Batch assign seats
   *
   * @remarks
   * Assign or unassign seats in batch for an order
   *
   * @returns 200
   *
   * @throws {@link Orders.BatchOrderSeatAssignmentsError} when the API answers with an error status
   * — narrow on `err.payload.kind`
   *
   * @throws {@link PaidError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  batchOrderSeatAssignments(
    request: Orders.BatchOrderSeatAssignmentsRequest,
    options?: RequestOptions,
  ): ApiPromise<BatchSeatAssignmentsResponse, Orders.BatchOrderSeatAssignmentsError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/orders/{id}/seat-assignments"),
        auth: noneAuth,
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        query: [],
        headers: [
          { name: "Authorization", value: request.authorization, schema: s.string() },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => batchSeatAssignmentsRequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: batchSeatAssignmentsResponseSchema },
        errorFactory: Orders.BatchOrderSeatAssignmentsError,
      },
      options,
    );
  }

  /**
   * Cancel order renewal
   *
   * @remarks
   * Schedules the cancellation of an order's renewal from a specified date. The order will remain
   * active until the cancellation date.
   *
   * @returns Order renewal cancelled successfully
   *
   * @throws {@link Orders.CancelRenewalError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link PaidError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  cancelRenewal(
    request: Orders.CancelRenewalRequestParams,
    options?: RequestOptions,
  ): ApiPromise<CancelRenewalResponse, Orders.CancelRenewalError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/orders/{orderId}/cancel"),
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
          schema: s.optional(s.lazy(() => cancelRenewalRequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: cancelRenewalResponseSchema },
        errorFactory: Orders.CancelRenewalError,
      },
      options,
    );
  }

  /**
   * Create a new order
   *
   * @remarks
   * Creates a new order for the organization
   *
   * @returns 201
   *
   * @throws {@link Orders.CreateOrderError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link PaidError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  createOrder(
    request: Orders.CreateOrderRequestParams,
    options?: RequestOptions,
  ): ApiPromise<Order1, Orders.CreateOrderError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/orders/"),
        auth: noneAuth,
        pathParams: [],
        query: [],
        headers: [
          { name: "Authorization", value: request.authorization, schema: s.string() },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => createOrderRequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: order1Schema },
        errorFactory: Orders.CreateOrderError,
      },
      options,
    );
  }

  /**
   * Create order
   *
   * @returns Success response
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link PaidError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  create4(request: Orders.Create4Request, options?: RequestOptions): ApiPromise<Order, ApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/orders"),
        auth: noneAuth,
        pathParams: [],
        query: [],
        headers: [
          { name: "Authorization", value: request.authorization, schema: s.string() },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "json", value: request.body, schema: s.optional(s.lazy(() => orderCreateSchema)) },
      },
      {
        success: { kind: "json", schema: orderSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Delete order
   *
   * @remarks
   * Delete an order by ID
   *
   * @returns 200
   *
   * @throws {@link Orders.DeleteOrderByIdError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link PaidError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  deleteOrderById(
    request: Orders.DeleteOrderByIdRequest,
    options?: RequestOptions,
  ): ApiPromise<Record<string, unknown>, Orders.DeleteOrderByIdError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default("/orders/{id}"),
        auth: noneAuth,
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        query: [],
        headers: [
          { name: "Authorization", value: request.authorization, schema: s.string() },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.record(s.string(), s.unknown()) },
        errorFactory: Orders.DeleteOrderByIdError,
      },
      options,
    );
  }

  /**
   * Delete order
   *
   * @returns Success response
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link PaidError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  delete4(
    request: Orders.Delete4Request,
    options?: RequestOptions,
  ): ApiPromise<Record<string, unknown>, ApiError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default("/orders/{orderId}"),
        auth: noneAuth,
        pathParams: [{ name: "orderId", value: request.orderId, schema: s.string() }],
        query: [],
        headers: [
          { name: "Authorization", value: request.authorization, schema: s.string() },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.record(s.string(), s.unknown()) },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Get invoices for an order
   *
   * @remarks
   * Retrieves all invoices associated with a specific order.
   *
   * @returns Success response
   *
   * @throws {@link Orders.GetInvoicesError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link PaidError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getInvoices(
    request: Orders.GetInvoicesRequest,
    options?: RequestOptions,
  ): ApiPromise<InvoicePaidOrdersApi[], Orders.GetInvoicesError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/orders/{orderId}/invoices"),
        auth: noneAuth,
        pathParams: [{ name: "orderId", value: request.orderId, schema: s.string() }],
        query: [],
        headers: [{ name: "Authorization", value: request.authorization, schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => invoicePaidOrdersApiSchema)) },
        errorFactory: Orders.GetInvoicesError,
      },
      options,
    );
  }

  /**
   * Get order
   *
   * @remarks
   * Get an order by ID
   *
   * @returns 200
   *
   * @throws {@link Orders.GetOrderByIdError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link PaidError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getOrderById(
    request: Orders.GetOrderByIdRequest,
    options?: RequestOptions,
  ): ApiPromise<Order1, Orders.GetOrderByIdError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/orders/{id}"),
        auth: noneAuth,
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        query: [],
        headers: [{ name: "Authorization", value: request.authorization, schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: order1Schema },
        errorFactory: Orders.GetOrderByIdError,
      },
      options,
    );
  }

  /**
   * Get order lines
   *
   * @remarks
   * Get the order lines for an order by ID
   *
   * @returns 200
   *
   * @throws {@link Orders.GetOrderLinesError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link PaidError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getOrderLines(
    request: Orders.GetOrderLinesRequest,
    options?: RequestOptions,
  ): ApiPromise<OrderLinesResponse, Orders.GetOrderLinesError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/orders/{id}/lines"),
        auth: noneAuth,
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        query: [
          { name: "limit", value: request.limit, schema: s.defaulted(s.int(), 10) },
          { name: "offset", value: request.offset, schema: s.optional(s.int()) },
        ],
        headers: [{ name: "Authorization", value: request.authorization, schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: orderLinesResponseSchema },
        errorFactory: Orders.GetOrderLinesError,
      },
      options,
    );
  }

  /**
   * Get order by ID
   *
   * @returns Success response
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link PaidError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  get4(request: Orders.Get4Request, options?: RequestOptions): ApiPromise<Order, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/orders/{orderId}"),
        auth: noneAuth,
        pathParams: [{ name: "orderId", value: request.orderId, schema: s.string() }],
        query: [],
        headers: [{ name: "Authorization", value: request.authorization, schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: orderSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * List seats
   *
   * @remarks
   * List seats for an order
   *
   * @returns 200
   *
   * @throws {@link Orders.ListOrderSeatsError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link PaidError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listOrderSeats(
    request: Orders.ListOrderSeatsRequest,
    options?: RequestOptions,
  ): ApiPromise<OrderSeatListResponse, Orders.ListOrderSeatsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/orders/{id}/seats"),
        auth: noneAuth,
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        query: [
          { name: "limit", value: request.limit, schema: s.defaulted(s.int(), 10) },
          { name: "offset", value: request.offset, schema: s.optional(s.int()) },
          { name: "productExternalId", value: request.productExternalId, schema: s.optional(s.string()) },
          {
            name: "status",
            value: request.status,
            schema: s.optional(s.lazy(() => ordersIdSeatsGetParametersStatusSchema)),
          },
        ],
        headers: [{ name: "Authorization", value: request.authorization, schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: orderSeatListResponseSchema },
        errorFactory: Orders.ListOrderSeatsError,
      },
      options,
    );
  }

  /**
   * List orders
   *
   * @remarks
   * Get a list of orders for the organization
   *
   * @returns 200
   *
   * @throws {@link Orders.ListOrdersError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link PaidError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listOrders(
    request: Orders.ListOrdersRequest,
    options?: RequestOptions,
  ): ApiPromise<OrderListResponse, Orders.ListOrdersError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/orders/"),
        auth: noneAuth,
        pathParams: [],
        query: [
          { name: "limit", value: request.limit, schema: s.defaulted(s.int(), 10) },
          { name: "offset", value: request.offset, schema: s.optional(s.int()) },
          { name: "customerId", value: request.customerId, schema: s.optional(s.string()) },
          { name: "externalCustomerId", value: request.externalCustomerId, schema: s.optional(s.string()) },
          { name: "externalId", value: request.externalId, schema: s.optional(s.string()) },
          {
            name: "creationState",
            value: request.creationState,
            schema: s.optional(s.lazy(() => ordersGetParametersCreationStateSchema)),
          },
          {
            name: "status",
            value: request.status,
            schema: s.optional(s.lazy(() => ordersGetParametersStatusSchema)),
          },
          { name: "startDateFrom", value: request.startDateFrom, schema: s.optional(s.string()) },
          { name: "startDateTo", value: request.startDateTo, schema: s.optional(s.string()) },
          { name: "endDateFrom", value: request.endDateFrom, schema: s.optional(s.string()) },
          { name: "endDateTo", value: request.endDateTo, schema: s.optional(s.string()) },
        ],
        headers: [{ name: "Authorization", value: request.authorization, schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: orderListResponseSchema },
        errorFactory: Orders.ListOrdersError,
      },
      options,
    );
  }

  /**
   * List orders
   *
   * @returns Success response
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link PaidError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  list4(request: Orders.List4Request, options?: RequestOptions): ApiPromise<Order[], ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/orders"),
        auth: noneAuth,
        pathParams: [],
        query: [],
        headers: [{ name: "Authorization", value: request.authorization, schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => orderSchema)) },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Schedule a plan change with proration
   *
   * @remarks
   * Schedules a plan upgrade or downgrade for an order with automatic proration calculation.
   * Credits are applied for the unused portion of the current billing period.
   *
   * @returns Plan change scheduled successfully
   *
   * @throws {@link Orders.SchedulePlanChangeError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link PaidError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  schedulePlanChange(
    request: Orders.SchedulePlanChangeRequest,
    options?: RequestOptions,
  ): ApiPromise<ProrationUpgradeResponse, Orders.SchedulePlanChangeError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/orders/{orderId}/schedule-plan-change"),
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
          schema: s.optional(s.lazy(() => prorationUpgradeRequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: prorationUpgradeResponseSchema },
        errorFactory: Orders.SchedulePlanChangeError,
      },
      options,
    );
  }

  /**
   * Update order
   *
   * @remarks
   * Update an order by ID
   *
   * @returns 200
   *
   * @throws {@link Orders.UpdateOrderByIdError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link PaidError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  updateOrderById(
    request: Orders.UpdateOrderByIdRequest,
    options?: RequestOptions,
  ): ApiPromise<Order1, Orders.UpdateOrderByIdError> {
    return this.#rawClient.execute(
      {
        method: "PUT",
        urlTemplate: this.#servers.default("/orders/{id}"),
        auth: noneAuth,
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        query: [],
        headers: [
          { name: "Authorization", value: request.authorization, schema: s.string() },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => updateOrderRequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: order1Schema },
        errorFactory: Orders.UpdateOrderByIdError,
      },
      options,
    );
  }

  /**
   * Assign or unassign seat
   *
   * @remarks
   * Assign or unassign a single seat on an order
   *
   * @returns 200
   *
   * @throws {@link Orders.UpdateOrderSeatAssignmentError} when the API answers with an error status
   * — narrow on `err.payload.kind`
   *
   * @throws {@link PaidError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  updateOrderSeatAssignment(
    request: Orders.UpdateOrderSeatAssignmentRequest,
    options?: RequestOptions,
  ): ApiPromise<OrderSeat, Orders.UpdateOrderSeatAssignmentError> {
    return this.#rawClient.execute(
      {
        method: "PUT",
        urlTemplate: this.#servers.default("/orders/{id}/seats/{seatId}"),
        auth: noneAuth,
        pathParams: [
          { name: "id", value: request.id, schema: s.string() },
          { name: "seatId", value: request.seatId, schema: s.string() },
        ],
        query: [],
        headers: [
          { name: "Authorization", value: request.authorization, schema: s.string() },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => updateSeatAssignmentRequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: orderSeatSchema },
        errorFactory: Orders.UpdateOrderSeatAssignmentError,
      },
      options,
    );
  }
}

export namespace Orders {
  export type ActivateRequest = {
    orderId: string;
    /** Bearer authentication */
    authorization: string;
  };

  export type ActivateAndPayRequest = {
    /** The order ID (can be internal ID or display ID) */
    orderId: string;
    /** Bearer authentication */
    authorization: string;
    body?: OrdersActivateAndPayRequest;
  };

  export class ActivateAndPayError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<ActivateAndPayError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 403, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error3", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type ActivateOrderByIdRequest = {
    id: string;
    /** API Key authentication using Bearer token */
    authorization: string;
  };

  export class ActivateOrderByIdError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Declared<"errorResponse3", ErrorResponse>
      | Declared<"errorResponse4", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<ActivateOrderByIdError> = [
      { on: 400, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 403, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 404, kind: "errorResponse3", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 500, kind: "errorResponse4", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type BatchOrderSeatAssignmentsRequest = {
    id: string;
    /** API Key authentication using Bearer token */
    authorization: string;
    /** Body */
    body?: BatchSeatAssignmentsRequest;
  };

  export class BatchOrderSeatAssignmentsError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Declared<"errorResponse3", ErrorResponse>
      | Declared<"errorResponse4", ErrorResponse>
      | Declared<"errorResponse5", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<BatchOrderSeatAssignmentsError> = [
      { on: 400, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 403, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 404, kind: "errorResponse3", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 409, kind: "errorResponse4", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 500, kind: "errorResponse5", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type CancelRenewalRequestParams = {
    /** The order ID (can be internal ID or display ID) */
    orderId: string;
    /** Bearer authentication */
    authorization: string;
    body?: CancelRenewalRequest;
  };

  export class CancelRenewalError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<CancelRenewalError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 403, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error3", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type CreateOrderRequestParams = {
    /** API Key authentication using Bearer token */
    authorization: string;
    /** Body */
    body?: CreateOrderRequest;
  };

  export class CreateOrderError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Declared<"errorResponse3", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<CreateOrderError> = [
      { on: 400, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 403, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 500, kind: "errorResponse3", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type Create4Request = {
    /** Bearer authentication */
    authorization: string;
    body?: OrderCreate;
  };

  export type DeleteOrderByIdRequest = {
    id: string;
    /** API Key authentication using Bearer token */
    authorization: string;
  };

  export class DeleteOrderByIdError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Declared<"errorResponse3", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<DeleteOrderByIdError> = [
      { on: 403, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 404, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 500, kind: "errorResponse3", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type Delete4Request = {
    orderId: string;
    /** Bearer authentication */
    authorization: string;
  };

  export type GetInvoicesRequest = {
    /** The order ID (can be internal ID or display ID) */
    orderId: string;
    /** Bearer authentication */
    authorization: string;
  };

  export class GetInvoicesError extends ApiError {
    declare readonly payload: Declared<"error", Error> | Declared<"error2", Error> | Undeclared;

    static readonly errors: ErrorDecoders<GetInvoicesError> = [
      { on: 403, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type GetOrderByIdRequest = {
    id: string;
    /** API Key authentication using Bearer token */
    authorization: string;
  };

  export class GetOrderByIdError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Declared<"errorResponse3", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetOrderByIdError> = [
      { on: 403, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 404, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 500, kind: "errorResponse3", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type GetOrderLinesRequest = {
    id: string;
    /** @default 10 */
    limit?: number;
    offset?: number;
    /** API Key authentication using Bearer token */
    authorization: string;
  };

  export class GetOrderLinesError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Declared<"errorResponse3", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetOrderLinesError> = [
      { on: 403, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 404, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 500, kind: "errorResponse3", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type Get4Request = {
    orderId: string;
    /** Bearer authentication */
    authorization: string;
  };

  export type ListOrderSeatsRequest = {
    id: string;
    /** @default 10 */
    limit?: number;
    offset?: number;
    productExternalId?: string;
    status?: OrdersIdSeatsGetParametersStatus;
    /** API Key authentication using Bearer token */
    authorization: string;
  };

  export class ListOrderSeatsError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Declared<"errorResponse3", ErrorResponse>
      | Declared<"errorResponse4", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<ListOrderSeatsError> = [
      { on: 400, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 403, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 404, kind: "errorResponse3", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 500, kind: "errorResponse4", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type ListOrdersRequest = {
    /** @default 10 */
    limit?: number;
    offset?: number;
    /** Filter by customer ID. */
    customerId?: string;
    /** Filter by customer external ID. */
    externalCustomerId?: string;
    /** Filter by the order's external ID (exact match). */
    externalId?: string;
    /** Filter by creation state: draft or active. */
    creationState?: OrdersGetParametersCreationState;
    /**
     * Filter by derived order status. draft: not yet activated. paused: billing is paused. ended:
     * end date is in the past. active: activated, not paused, and not ended.
     */
    status?: OrdersGetParametersStatus;
    /**
     * Only orders whose start date is on or after this date. Accepts an ISO 8601 date or date-time.
     * Date-only values (e.g. 2026-06-30) are treated as UTC; date-times without an explicit
     * timezone offset are ambiguous, so include one (e.g. 2026-06-30T00:00:00-05:00) when precision
     * matters.
     */
    startDateFrom?: string;
    /**
     * Only orders whose start date is on or before this date. Accepts an ISO 8601 date or
     * date-time. Date-only values (e.g. 2026-06-30) are treated as UTC; date-times without an
     * explicit timezone offset are ambiguous, so include one (e.g. 2026-06-30T00:00:00-05:00) when
     * precision matters.
     */
    startDateTo?: string;
    /**
     * Only orders whose end date is on or after this date. Orders without an end date are not
     * matched. Accepts an ISO 8601 date or date-time. Date-only values (e.g. 2026-06-30) are
     * treated as UTC; date-times without an explicit timezone offset are ambiguous, so include one
     * (e.g. 2026-06-30T00:00:00-05:00) when precision matters.
     */
    endDateFrom?: string;
    /**
     * Only orders whose end date is on or before this date. Orders without an end date are not
     * matched. Accepts an ISO 8601 date or date-time. Date-only values (e.g. 2026-06-30) are
     * treated as UTC; date-times without an explicit timezone offset are ambiguous, so include one
     * (e.g. 2026-06-30T00:00:00-05:00) when precision matters.
     */
    endDateTo?: string;
    /** API Key authentication using Bearer token */
    authorization: string;
  };

  export class ListOrdersError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Declared<"errorResponse3", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<ListOrdersError> = [
      { on: 400, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 403, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 500, kind: "errorResponse3", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type List4Request = {
    /** Bearer authentication */
    authorization: string;
  };

  export type SchedulePlanChangeRequest = {
    /** The order ID (can be internal ID or display ID) */
    orderId: string;
    /** Bearer authentication */
    authorization: string;
    body?: ProrationUpgradeRequest;
  };

  export class SchedulePlanChangeError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<SchedulePlanChangeError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 403, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error3", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type UpdateOrderByIdRequest = {
    id: string;
    /** API Key authentication using Bearer token */
    authorization: string;
    /** Body */
    body?: UpdateOrderRequest;
  };

  export class UpdateOrderByIdError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Declared<"errorResponse3", ErrorResponse>
      | Declared<"errorResponse4", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<UpdateOrderByIdError> = [
      { on: 400, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 403, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 404, kind: "errorResponse3", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 500, kind: "errorResponse4", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type UpdateOrderSeatAssignmentRequest = {
    id: string;
    seatId: string;
    /** API Key authentication using Bearer token */
    authorization: string;
    /** Body */
    body?: UpdateSeatAssignmentRequest;
  };

  export class UpdateOrderSeatAssignmentError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Declared<"errorResponse3", ErrorResponse>
      | Declared<"errorResponse4", ErrorResponse>
      | Declared<"errorResponse5", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<UpdateOrderSeatAssignmentError> = [
      { on: 400, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 403, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 404, kind: "errorResponse3", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 409, kind: "errorResponse4", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 500, kind: "errorResponse5", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }
}
