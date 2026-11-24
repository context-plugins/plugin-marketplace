import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { BinaryContent } from "../core/binary.js";
import type { RawClient } from "../core/raw-client.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import { stockCardSchema, type StockCard } from "../models/stock-card.js";
import type { Servers } from "../servers.js";

export class ProductInventory {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Product inventory adjust
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link FlowAccountError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  productInventoryAdjust(
    request: ProductInventory.ProductInventoryAdjustRequest,
    options?: RequestOptions,
  ): ApiPromise<BinaryContent, ApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/{culture}/product-inventories/adjust"),
        auth: this.#auth.bearer,
        pathParams: [{ name: "culture", value: request.culture, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: stockCardSchema },
      },
      {
        success: { kind: "binary", contentType: "application/octet-stream" },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Product inventory delete product inventory
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link FlowAccountError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  productInventoryDeleteProductInventory(
    request: ProductInventory.ProductInventoryDeleteProductInventoryRequest,
    options?: RequestOptions,
  ): ApiPromise<BinaryContent, ApiError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default("/{culture}/product-inventories/{id}"),
        auth: this.#auth.bearer,
        pathParams: [
          { name: "id", value: request.id, schema: s.nullable(s.string()) },
          { name: "culture", value: request.culture, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "binary", contentType: "application/octet-stream" },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Product inventory get list
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link FlowAccountError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  productInventoryGetList(
    request: ProductInventory.ProductInventoryGetListRequest,
    options?: RequestOptions,
  ): ApiPromise<BinaryContent, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/{culture}/product-inventories/{id}"),
        auth: this.#auth.bearer,
        pathParams: [
          { name: "id", value: request.id, schema: s.defaulted(s.int(), 0) },
          { name: "culture", value: request.culture, schema: s.string() },
        ],
        query: [
          { name: "SortBy", value: request.sortBy, schema: s.optionalNullable(s.string()) },
          { name: "CurrentPage", value: request.currentPage, schema: s.optionalNullable(s.string()) },
          { name: "PageSize", value: request.pageSize, schema: s.optionalNullable(s.string()) },
          { name: "Filter", value: request.filter, schema: s.optionalNullable(s.string()) },
          { name: "SearchString", value: request.searchString, schema: s.optionalNullable(s.string()) },
          {
            name: "CustomDocumentModels",
            value: request.customDocumentModels,
            schema: s.optionalNullable(s.string()),
          },
          { name: "Range", value: request.range, schema: s.optionalNullable(s.string()) },
          { name: "Month", value: request.month, schema: s.optionalNullable(s.string()) },
          { name: "Year", value: request.year, schema: s.optionalNullable(s.string()) },
          { name: "StartDate", value: request.startDate, schema: s.optionalNullable(s.string()) },
          { name: "EndDate", value: request.endDate, schema: s.optionalNullable(s.string()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "binary", contentType: "application/octet-stream" },
        errorFactory: ApiError,
      },
      options,
    );
  }
}

export namespace ProductInventory {
  export type ProductInventoryAdjustRequest = {
    culture: string;
    body: StockCard;
  };

  export type ProductInventoryDeleteProductInventoryRequest = {
    id: string | null;
    culture: string;
  };

  export type ProductInventoryGetListRequest = {
    /** @default 0 */
    id?: number;
    culture: string;
    sortBy?: string | null;
    currentPage?: string | null;
    pageSize?: string | null;
    filter?: string | null;
    searchString?: string | null;
    customDocumentModels?: string | null;
    range?: string | null;
    month?: string | null;
    year?: string | null;
    startDate?: string | null;
    endDate?: string | null;
  };
}
