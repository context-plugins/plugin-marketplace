import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import { billSchema, type Bill } from "../models/bill.js";
import { billsRequestSchema, type BillsRequest } from "../models/bills-request.js";
import { errorSchema, type Error } from "../models/error.js";
import type { Servers } from "../servers.js";

/**
 * Razorpay Billme digital receipts and bills for retail, food & beverage, events, and ecommerce.
 */
export class Bills {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Create a bill
   *
   * @remarks
   * Create a digital bill/receipt for a customer. Supports retail, food & beverage, events, and
   * ecommerce use cases. Used for Razorpay Billme digital receipts.
   *
   * @returns Bill created successfully
   *
   * @throws {@link Bills.CreateBillError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link CurlecError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  createBill(
    request: Bills.CreateBillRequest,
    options?: RequestOptions,
  ): ApiPromise<Bill, Bills.CreateBillError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/bills"),
        auth: this.#auth.basicAuth,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: billsRequestSchema },
      },
      {
        success: { kind: "json", schema: billSchema },
        errorFactory: Bills.CreateBillError,
      },
      options,
    );
  }

  /**
   * Delete a bill
   *
   * @remarks
   * Delete a digital bill/receipt.
   *
   * @returns Bill deleted successfully
   *
   * @throws {@link Bills.DeleteBillError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link CurlecError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  deleteBill(
    request: Bills.DeleteBillRequest,
    options?: RequestOptions,
  ): ApiPromise<Record<string, unknown>, Bills.DeleteBillError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default("/bills/{bill_id}"),
        auth: this.#auth.basicAuth,
        pathParams: [{ name: "bill_id", value: request.billId, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.record(s.string(), s.unknown()) },
        errorFactory: Bills.DeleteBillError,
      },
      options,
    );
  }

  /**
   * Update a bill
   *
   * @remarks
   * Update an existing digital bill. Can update customer details, line items, receipt summary, and
   * other fields.
   *
   * @returns Bill updated successfully
   *
   * @throws {@link Bills.UpdateBillError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link CurlecError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  updateBill(
    request: Bills.UpdateBillRequest,
    options?: RequestOptions,
  ): ApiPromise<Bill, Bills.UpdateBillError> {
    return this.#rawClient.execute(
      {
        method: "PATCH",
        urlTemplate: this.#servers.default("/bills/{bill_id}"),
        auth: this.#auth.basicAuth,
        pathParams: [{ name: "bill_id", value: request.billId, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: billSchema },
      },
      {
        success: { kind: "json", schema: billSchema },
        errorFactory: Bills.UpdateBillError,
      },
      options,
    );
  }
}

export namespace Bills {
  export type CreateBillRequest = {
    body: BillsRequest;
  };

  export class CreateBillError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Declared<"error4", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<CreateBillError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 429, kind: "error3", decode: { kind: "json", schema: errorSchema } },
      { on: 500, kind: "error4", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type DeleteBillRequest = {
    /** Bill ID with prefix bill_ */
    billId: string;
  };

  export class DeleteBillError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Declared<"error4", Error>
      | Declared<"error5", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<DeleteBillError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 429, kind: "error3", decode: { kind: "json", schema: errorSchema } },
      { on: 500, kind: "error4", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error5", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type UpdateBillRequest = {
    /** Bill ID with prefix bill_ */
    billId: string;
    body: Bill;
  };

  export class UpdateBillError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Declared<"error4", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<UpdateBillError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 429, kind: "error3", decode: { kind: "json", schema: errorSchema } },
      { on: 500, kind: "error4", decode: { kind: "json", schema: errorSchema } },
    ];
  }
}
