import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { anyAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import { errorResponseSchema, type ErrorResponse } from "../models/error-response.js";
import {
  portfoliosAddCustomFieldSettingRequestSchema,
  type PortfoliosAddCustomFieldSettingRequest,
} from "../models/portfolios-add-custom-field-setting-request.js";
import {
  portfoliosAddCustomFieldSettingResponseSchema,
  type PortfoliosAddCustomFieldSettingResponse,
} from "../models/portfolios-add-custom-field-setting-response.js";
import {
  portfoliosAddItemRequestSchema,
  type PortfoliosAddItemRequest,
} from "../models/portfolios-add-item-request.js";
import {
  portfoliosAddItemResponseSchema,
  type PortfoliosAddItemResponse,
} from "../models/portfolios-add-item-response.js";
import {
  portfoliosAddMembersRequestSchema,
  type PortfoliosAddMembersRequest,
} from "../models/portfolios-add-members-request.js";
import {
  portfoliosAddMembersResponseSchema,
  type PortfoliosAddMembersResponse,
} from "../models/portfolios-add-members-response.js";
import {
  portfoliosItemsResponseSchema,
  type PortfoliosItemsResponse,
} from "../models/portfolios-items-response.js";
import {
  portfoliosRemoveCustomFieldSettingRequestSchema,
  type PortfoliosRemoveCustomFieldSettingRequest,
} from "../models/portfolios-remove-custom-field-setting-request.js";
import {
  portfoliosRemoveCustomFieldSettingResponseSchema,
  type PortfoliosRemoveCustomFieldSettingResponse,
} from "../models/portfolios-remove-custom-field-setting-response.js";
import {
  portfoliosRemoveItemRequestSchema,
  type PortfoliosRemoveItemRequest,
} from "../models/portfolios-remove-item-request.js";
import {
  portfoliosRemoveItemResponseSchema,
  type PortfoliosRemoveItemResponse,
} from "../models/portfolios-remove-item-response.js";
import {
  portfoliosRemoveMembersRequestSchema,
  type PortfoliosRemoveMembersRequest,
} from "../models/portfolios-remove-members-request.js";
import {
  portfoliosRemoveMembersResponseSchema,
  type PortfoliosRemoveMembersResponse,
} from "../models/portfolios-remove-members-response.js";
import { portfoliosRequestSchema, type PortfoliosRequest } from "../models/portfolios-request.js";
import { portfoliosResponseSchema, type PortfoliosResponse } from "../models/portfolios-response.js";
import { portfoliosResponse1Schema, type PortfoliosResponse1 } from "../models/portfolios-response1.js";
import { portfoliosResponse4Schema, type PortfoliosResponse4 } from "../models/portfolios-response4.js";
import type { Servers } from "../servers.js";

/**
 * A portfolio gives a high-level overview of the status of multiple initiatives in Asana.
 * Portfolios provide a dashboard overview of the state of multiple projects, including a progress
 * report and the most recent status update. Portfolios have some restrictions on size. Each
 * portfolio has a max of 500 items and, like projects, a maximum of 20 custom fields.
 */
export class Portfolios {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Add a custom field to a portfolio
   *
   * @remarks
   * Custom fields are associated with portfolios by way of custom field settings. This method
   * creates a setting for the portfolio.
   *
   * @returns Successfully added the custom field to the portfolio.
   *
   * @throws {@link Portfolios.AddCustomFieldSettingForPortfolioError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link AsanaError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  addCustomFieldSettingForPortfolio(
    request: Portfolios.AddCustomFieldSettingForPortfolioRequest,
    options?: RequestOptions,
  ): ApiPromise<PortfoliosAddCustomFieldSettingResponse, Portfolios.AddCustomFieldSettingForPortfolioError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/portfolios/{portfolio_gid}/addCustomFieldSetting"),
        auth: anyAuth(this.#auth.personalAccessToken, this.#auth.oauth2),
        pathParams: [{ name: "portfolio_gid", value: request.portfolioGid, schema: s.string() }],
        query: [{ name: "opt_pretty", value: request.optPretty, schema: s.optionalNullable(s.boolean()) }],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: portfoliosAddCustomFieldSettingRequestSchema },
      },
      {
        success: { kind: "json", schema: portfoliosAddCustomFieldSettingResponseSchema },
        errorFactory: Portfolios.AddCustomFieldSettingForPortfolioError,
      },
      options,
    );
  }

  /**
   * Add a portfolio item
   *
   * @remarks
   * Add an item to a portfolio. Returns an empty data block.
   *
   * @returns Successfully added the item to the portfolio.
   *
   * @throws {@link Portfolios.AddItemForPortfolioError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link AsanaError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  addItemForPortfolio(
    request: Portfolios.AddItemForPortfolioRequest,
    options?: RequestOptions,
  ): ApiPromise<PortfoliosAddItemResponse, Portfolios.AddItemForPortfolioError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/portfolios/{portfolio_gid}/addItem"),
        auth: anyAuth(this.#auth.personalAccessToken, this.#auth.oauth2),
        pathParams: [{ name: "portfolio_gid", value: request.portfolioGid, schema: s.string() }],
        query: [
          { name: "opt_pretty", value: request.optPretty, schema: s.optionalNullable(s.boolean()) },
          {
            name: "opt_fields",
            value: request.optFields,
            schema: s.optional(s.array(s.string())),
            style: "csv",
          },
        ],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: portfoliosAddItemRequestSchema },
      },
      {
        success: { kind: "json", schema: portfoliosAddItemResponseSchema },
        errorFactory: Portfolios.AddItemForPortfolioError,
      },
      options,
    );
  }

  /**
   * Add users to a portfolio
   *
   * @remarks
   * Adds the specified list of users as members of the portfolio. Returns the updated portfolio
   * record.
   *
   * @returns Successfully added members to the portfolio.
   *
   * @throws {@link Portfolios.AddMembersForPortfolioError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link AsanaError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  addMembersForPortfolio(
    request: Portfolios.AddMembersForPortfolioRequest,
    options?: RequestOptions,
  ): ApiPromise<PortfoliosAddMembersResponse, Portfolios.AddMembersForPortfolioError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/portfolios/{portfolio_gid}/addMembers"),
        auth: anyAuth(this.#auth.personalAccessToken, this.#auth.oauth2),
        pathParams: [{ name: "portfolio_gid", value: request.portfolioGid, schema: s.string() }],
        query: [
          { name: "opt_pretty", value: request.optPretty, schema: s.optionalNullable(s.boolean()) },
          {
            name: "opt_fields",
            value: request.optFields,
            schema: s.optional(s.array(s.string())),
            style: "csv",
          },
        ],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: portfoliosAddMembersRequestSchema },
      },
      {
        success: { kind: "json", schema: portfoliosAddMembersResponseSchema },
        errorFactory: Portfolios.AddMembersForPortfolioError,
      },
      options,
    );
  }

  /**
   * Create a portfolio
   *
   * @remarks
   * Creates a new portfolio in the given workspace with the supplied name.
   *
   * Note that portfolios created in the Asana UI may have some state (like the “Priority” custom
   * field) which is automatically added to the portfolio when it is created. Portfolios created via
   * our API will *not* be created with the same initial state to allow integrations to create their
   * own starting state on a portfolio.
   *
   * @returns Successfully created portfolio.
   *
   * @throws {@link Portfolios.CreatePortfolioError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link AsanaError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  createPortfolio(
    request: Portfolios.CreatePortfolioRequest,
    options?: RequestOptions,
  ): ApiPromise<PortfoliosResponse1, Portfolios.CreatePortfolioError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/portfolios"),
        auth: anyAuth(this.#auth.personalAccessToken, this.#auth.oauth2),
        pathParams: [],
        query: [
          { name: "opt_pretty", value: request.optPretty, schema: s.optionalNullable(s.boolean()) },
          {
            name: "opt_fields",
            value: request.optFields,
            schema: s.optional(s.array(s.string())),
            style: "csv",
          },
        ],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: portfoliosRequestSchema },
      },
      {
        success: { kind: "json", schema: portfoliosResponse1Schema },
        errorFactory: Portfolios.CreatePortfolioError,
      },
      options,
    );
  }

  /**
   * Delete a portfolio
   *
   * @remarks
   * An existing portfolio can be deleted by making a DELETE request on the URL for that portfolio.
   *
   * Returns an empty data record.
   *
   * @returns Successfully deleted the specified portfolio.
   *
   * @throws {@link Portfolios.DeletePortfolioError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link AsanaError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  deletePortfolio(
    request: Portfolios.DeletePortfolioRequest,
    options?: RequestOptions,
  ): ApiPromise<PortfoliosResponse4, Portfolios.DeletePortfolioError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default("/portfolios/{portfolio_gid}"),
        auth: anyAuth(this.#auth.personalAccessToken, this.#auth.oauth2),
        pathParams: [{ name: "portfolio_gid", value: request.portfolioGid, schema: s.string() }],
        query: [
          { name: "opt_pretty", value: request.optPretty, schema: s.optionalNullable(s.boolean()) },
          {
            name: "opt_fields",
            value: request.optFields,
            schema: s.optional(s.array(s.string())),
            style: "csv",
          },
        ],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: portfoliosResponse4Schema },
        errorFactory: Portfolios.DeletePortfolioError,
      },
      options,
    );
  }

  /**
   * Get portfolio items
   *
   * @remarks
   * Get a list of the items in compact form in a portfolio.
   *
   * @returns Successfully retrieved the requested portfolio's items.
   *
   * @throws {@link Portfolios.GetItemsForPortfolioError} when the API answers with an error status
   * — narrow on `err.payload.kind`
   *
   * @throws {@link AsanaError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getItemsForPortfolio(
    request: Portfolios.GetItemsForPortfolioRequest,
    options?: RequestOptions,
  ): ApiPromise<PortfoliosItemsResponse, Portfolios.GetItemsForPortfolioError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/portfolios/{portfolio_gid}/items"),
        auth: anyAuth(this.#auth.personalAccessToken, this.#auth.oauth2),
        pathParams: [{ name: "portfolio_gid", value: request.portfolioGid, schema: s.string() }],
        query: [
          { name: "opt_pretty", value: request.optPretty, schema: s.optionalNullable(s.boolean()) },
          {
            name: "opt_fields",
            value: request.optFields,
            schema: s.optional(s.array(s.string())),
            style: "csv",
          },
          { name: "limit", value: request.limit, schema: s.optional(s.int()) },
          { name: "offset", value: request.offset, schema: s.optional(s.string()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: portfoliosItemsResponseSchema },
        errorFactory: Portfolios.GetItemsForPortfolioError,
      },
      options,
    );
  }

  /**
   * Get a portfolio
   *
   * @remarks
   * Returns the complete portfolio record for a single portfolio.
   *
   * @returns Successfully retrieved the requested portfolio.
   *
   * @throws {@link Portfolios.GetPortfolioError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link AsanaError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getPortfolio(
    request: Portfolios.GetPortfolioRequest,
    options?: RequestOptions,
  ): ApiPromise<PortfoliosResponse1, Portfolios.GetPortfolioError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/portfolios/{portfolio_gid}"),
        auth: anyAuth(this.#auth.personalAccessToken, this.#auth.oauth2),
        pathParams: [{ name: "portfolio_gid", value: request.portfolioGid, schema: s.string() }],
        query: [
          { name: "opt_pretty", value: request.optPretty, schema: s.optionalNullable(s.boolean()) },
          {
            name: "opt_fields",
            value: request.optFields,
            schema: s.optional(s.array(s.string())),
            style: "csv",
          },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: portfoliosResponse1Schema },
        errorFactory: Portfolios.GetPortfolioError,
      },
      options,
    );
  }

  /**
   * Get multiple portfolios
   *
   * @remarks
   * Returns a list of the portfolios in compact representation that are owned by the current API
   * user.
   *
   * @returns Successfully retrieved portfolios.
   *
   * @throws {@link Portfolios.GetPortfoliosError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link AsanaError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getPortfolios(
    request: Portfolios.GetPortfoliosRequest,
    options?: RequestOptions,
  ): ApiPromise<PortfoliosResponse, Portfolios.GetPortfoliosError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/portfolios"),
        auth: anyAuth(this.#auth.personalAccessToken, this.#auth.oauth2),
        pathParams: [],
        query: [
          { name: "workspace", value: request.workspace, schema: s.string() },
          { name: "owner", value: request.owner, schema: s.string() },
          { name: "opt_pretty", value: request.optPretty, schema: s.optionalNullable(s.boolean()) },
          {
            name: "opt_fields",
            value: request.optFields,
            schema: s.optional(s.array(s.string())),
            style: "csv",
          },
          { name: "limit", value: request.limit, schema: s.optional(s.int()) },
          { name: "offset", value: request.offset, schema: s.optional(s.string()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: portfoliosResponseSchema },
        errorFactory: Portfolios.GetPortfoliosError,
      },
      options,
    );
  }

  /**
   * Remove a custom field from a portfolio
   *
   * @remarks
   * Removes a custom field setting from a portfolio.
   *
   * @returns Successfully removed the custom field from the portfolio.
   *
   * @throws {@link Portfolios.RemoveCustomFieldSettingForPortfolioError} when the API answers with
   * an error status — narrow on `err.payload.kind`
   *
   * @throws {@link AsanaError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  removeCustomFieldSettingForPortfolio(
    request: Portfolios.RemoveCustomFieldSettingForPortfolioRequest,
    options?: RequestOptions,
  ): ApiPromise<
    PortfoliosRemoveCustomFieldSettingResponse,
    Portfolios.RemoveCustomFieldSettingForPortfolioError
  > {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/portfolios/{portfolio_gid}/removeCustomFieldSetting"),
        auth: anyAuth(this.#auth.personalAccessToken, this.#auth.oauth2),
        pathParams: [{ name: "portfolio_gid", value: request.portfolioGid, schema: s.string() }],
        query: [{ name: "opt_pretty", value: request.optPretty, schema: s.optionalNullable(s.boolean()) }],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: portfoliosRemoveCustomFieldSettingRequestSchema },
      },
      {
        success: { kind: "json", schema: portfoliosRemoveCustomFieldSettingResponseSchema },
        errorFactory: Portfolios.RemoveCustomFieldSettingForPortfolioError,
      },
      options,
    );
  }

  /**
   * Remove a portfolio item
   *
   * @remarks
   * Remove an item from a portfolio. Returns an empty data block.
   *
   * @returns Successfully removed the item from the portfolio.
   *
   * @throws {@link Portfolios.RemoveItemForPortfolioError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link AsanaError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  removeItemForPortfolio(
    request: Portfolios.RemoveItemForPortfolioRequest,
    options?: RequestOptions,
  ): ApiPromise<PortfoliosRemoveItemResponse, Portfolios.RemoveItemForPortfolioError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/portfolios/{portfolio_gid}/removeItem"),
        auth: anyAuth(this.#auth.personalAccessToken, this.#auth.oauth2),
        pathParams: [{ name: "portfolio_gid", value: request.portfolioGid, schema: s.string() }],
        query: [
          { name: "opt_pretty", value: request.optPretty, schema: s.optionalNullable(s.boolean()) },
          {
            name: "opt_fields",
            value: request.optFields,
            schema: s.optional(s.array(s.string())),
            style: "csv",
          },
        ],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: portfoliosRemoveItemRequestSchema },
      },
      {
        success: { kind: "json", schema: portfoliosRemoveItemResponseSchema },
        errorFactory: Portfolios.RemoveItemForPortfolioError,
      },
      options,
    );
  }

  /**
   * Remove users from a portfolio
   *
   * @remarks
   * Removes the specified list of users from members of the portfolio. Returns the updated
   * portfolio record.
   *
   * @returns Successfully removed the members from the portfolio.
   *
   * @throws {@link Portfolios.RemoveMembersForPortfolioError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link AsanaError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  removeMembersForPortfolio(
    request: Portfolios.RemoveMembersForPortfolioRequest,
    options?: RequestOptions,
  ): ApiPromise<PortfoliosRemoveMembersResponse, Portfolios.RemoveMembersForPortfolioError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/portfolios/{portfolio_gid}/removeMembers"),
        auth: anyAuth(this.#auth.personalAccessToken, this.#auth.oauth2),
        pathParams: [{ name: "portfolio_gid", value: request.portfolioGid, schema: s.string() }],
        query: [
          { name: "opt_pretty", value: request.optPretty, schema: s.optionalNullable(s.boolean()) },
          {
            name: "opt_fields",
            value: request.optFields,
            schema: s.optional(s.array(s.string())),
            style: "csv",
          },
        ],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: portfoliosRemoveMembersRequestSchema },
      },
      {
        success: { kind: "json", schema: portfoliosRemoveMembersResponseSchema },
        errorFactory: Portfolios.RemoveMembersForPortfolioError,
      },
      options,
    );
  }

  /**
   * Update a portfolio
   *
   * @remarks
   * An existing portfolio can be updated by making a PUT request on the URL for that portfolio.
   * Only the fields provided in the `data` block will be updated; any unspecified fields will
   * remain unchanged.
   *
   * Returns the complete updated portfolio record.
   *
   * @returns Successfully updated the portfolio.
   *
   * @throws {@link Portfolios.UpdatePortfolioError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link AsanaError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  updatePortfolio(
    request: Portfolios.UpdatePortfolioRequest,
    options?: RequestOptions,
  ): ApiPromise<PortfoliosResponse1, Portfolios.UpdatePortfolioError> {
    return this.#rawClient.execute(
      {
        method: "PUT",
        urlTemplate: this.#servers.default("/portfolios/{portfolio_gid}"),
        auth: anyAuth(this.#auth.personalAccessToken, this.#auth.oauth2),
        pathParams: [{ name: "portfolio_gid", value: request.portfolioGid, schema: s.string() }],
        query: [
          { name: "opt_pretty", value: request.optPretty, schema: s.optionalNullable(s.boolean()) },
          {
            name: "opt_fields",
            value: request.optFields,
            schema: s.optional(s.array(s.string())),
            style: "csv",
          },
        ],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: portfoliosRequestSchema },
      },
      {
        success: { kind: "json", schema: portfoliosResponse1Schema },
        errorFactory: Portfolios.UpdatePortfolioError,
      },
      options,
    );
  }
}

export namespace Portfolios {
  export type AddCustomFieldSettingForPortfolioRequest = {
    /** Globally unique identifier for the portfolio. */
    portfolioGid: string;
    /**
     * Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON
     * this means doing proper line breaking and indentation to make it readable. This will take
     * extra time and increase the response size so it is advisable only to use this during
     * debugging.
     */
    optPretty?: boolean | null;
    /** Information about the custom field setting. */
    body: PortfoliosAddCustomFieldSettingRequest;
  };

  export class AddCustomFieldSettingForPortfolioError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Declared<"errorResponse3", ErrorResponse>
      | Declared<"errorResponse4", ErrorResponse>
      | Declared<"errorResponse5", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<AddCustomFieldSettingForPortfolioError> = [
      { on: 400, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 401, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 403, kind: "errorResponse3", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 404, kind: "errorResponse4", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 500, kind: "errorResponse5", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type AddItemForPortfolioRequest = {
    /** Globally unique identifier for the portfolio. */
    portfolioGid: string;
    /**
     * Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON
     * this means doing proper line breaking and indentation to make it readable. This will take
     * extra time and increase the response size so it is advisable only to use this during
     * debugging.
     */
    optPretty?: boolean | null;
    /**
     * Defines fields to return. Some requests return *compact* representations of objects in order
     * to conserve resources and complete the request more efficiently. Other times requests return
     * more information than you may need. This option allows you to list the exact set of fields
     * that the API should be sure to return for the objects. The field names should be provided as
     * paths, described below. The id of included objects will always be returned, regardless of the
     * field options.
     */
    optFields?: string[];
    /** Information about the item being inserted. */
    body: PortfoliosAddItemRequest;
  };

  export class AddItemForPortfolioError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Declared<"errorResponse3", ErrorResponse>
      | Declared<"errorResponse4", ErrorResponse>
      | Declared<"errorResponse5", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<AddItemForPortfolioError> = [
      { on: 400, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 401, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 403, kind: "errorResponse3", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 404, kind: "errorResponse4", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 500, kind: "errorResponse5", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type AddMembersForPortfolioRequest = {
    /** Globally unique identifier for the portfolio. */
    portfolioGid: string;
    /**
     * Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON
     * this means doing proper line breaking and indentation to make it readable. This will take
     * extra time and increase the response size so it is advisable only to use this during
     * debugging.
     */
    optPretty?: boolean | null;
    /**
     * Defines fields to return. Some requests return *compact* representations of objects in order
     * to conserve resources and complete the request more efficiently. Other times requests return
     * more information than you may need. This option allows you to list the exact set of fields
     * that the API should be sure to return for the objects. The field names should be provided as
     * paths, described below. The id of included objects will always be returned, regardless of the
     * field options.
     */
    optFields?: string[];
    /** Information about the members being added. */
    body: PortfoliosAddMembersRequest;
  };

  export class AddMembersForPortfolioError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Declared<"errorResponse3", ErrorResponse>
      | Declared<"errorResponse4", ErrorResponse>
      | Declared<"errorResponse5", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<AddMembersForPortfolioError> = [
      { on: 400, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 401, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 403, kind: "errorResponse3", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 404, kind: "errorResponse4", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 500, kind: "errorResponse5", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type CreatePortfolioRequest = {
    /**
     * Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON
     * this means doing proper line breaking and indentation to make it readable. This will take
     * extra time and increase the response size so it is advisable only to use this during
     * debugging.
     */
    optPretty?: boolean | null;
    /**
     * Defines fields to return. Some requests return *compact* representations of objects in order
     * to conserve resources and complete the request more efficiently. Other times requests return
     * more information than you may need. This option allows you to list the exact set of fields
     * that the API should be sure to return for the objects. The field names should be provided as
     * paths, described below. The id of included objects will always be returned, regardless of the
     * field options.
     */
    optFields?: string[];
    /** The portfolio to create. */
    body: PortfoliosRequest;
  };

  export class CreatePortfolioError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Declared<"errorResponse3", ErrorResponse>
      | Declared<"errorResponse4", ErrorResponse>
      | Declared<"errorResponse5", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<CreatePortfolioError> = [
      { on: 400, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 401, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 403, kind: "errorResponse3", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 404, kind: "errorResponse4", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 500, kind: "errorResponse5", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type DeletePortfolioRequest = {
    /** Globally unique identifier for the portfolio. */
    portfolioGid: string;
    /**
     * Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON
     * this means doing proper line breaking and indentation to make it readable. This will take
     * extra time and increase the response size so it is advisable only to use this during
     * debugging.
     */
    optPretty?: boolean | null;
    /**
     * Defines fields to return. Some requests return *compact* representations of objects in order
     * to conserve resources and complete the request more efficiently. Other times requests return
     * more information than you may need. This option allows you to list the exact set of fields
     * that the API should be sure to return for the objects. The field names should be provided as
     * paths, described below. The id of included objects will always be returned, regardless of the
     * field options.
     */
    optFields?: string[];
  };

  export class DeletePortfolioError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Declared<"errorResponse3", ErrorResponse>
      | Declared<"errorResponse4", ErrorResponse>
      | Declared<"errorResponse5", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<DeletePortfolioError> = [
      { on: 400, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 401, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 403, kind: "errorResponse3", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 404, kind: "errorResponse4", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 500, kind: "errorResponse5", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type GetItemsForPortfolioRequest = {
    /** Globally unique identifier for the portfolio. */
    portfolioGid: string;
    /**
     * Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON
     * this means doing proper line breaking and indentation to make it readable. This will take
     * extra time and increase the response size so it is advisable only to use this during
     * debugging.
     */
    optPretty?: boolean | null;
    /**
     * Defines fields to return. Some requests return *compact* representations of objects in order
     * to conserve resources and complete the request more efficiently. Other times requests return
     * more information than you may need. This option allows you to list the exact set of fields
     * that the API should be sure to return for the objects. The field names should be provided as
     * paths, described below. The id of included objects will always be returned, regardless of the
     * field options.
     */
    optFields?: string[];
    /**
     * Results per page. The number of objects to return per page. The value must be between 1 and
     * 100.
     */
    limit?: number;
    /**
     * Offset token. An offset to the next page returned by the API. A pagination request will
     * return an offset token, which can be used as an input parameter to the next request. If an
     * offset is not passed in, the API will return the first page of results. 'Note: You can only
     * pass in an offset that was returned to you via a previously paginated request.'
     */
    offset?: string;
  };

  export class GetItemsForPortfolioError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Declared<"errorResponse3", ErrorResponse>
      | Declared<"errorResponse4", ErrorResponse>
      | Declared<"errorResponse5", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetItemsForPortfolioError> = [
      { on: 400, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 401, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 403, kind: "errorResponse3", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 404, kind: "errorResponse4", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 500, kind: "errorResponse5", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type GetPortfolioRequest = {
    /** Globally unique identifier for the portfolio. */
    portfolioGid: string;
    /**
     * Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON
     * this means doing proper line breaking and indentation to make it readable. This will take
     * extra time and increase the response size so it is advisable only to use this during
     * debugging.
     */
    optPretty?: boolean | null;
    /**
     * Defines fields to return. Some requests return *compact* representations of objects in order
     * to conserve resources and complete the request more efficiently. Other times requests return
     * more information than you may need. This option allows you to list the exact set of fields
     * that the API should be sure to return for the objects. The field names should be provided as
     * paths, described below. The id of included objects will always be returned, regardless of the
     * field options.
     */
    optFields?: string[];
  };

  export class GetPortfolioError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Declared<"errorResponse3", ErrorResponse>
      | Declared<"errorResponse4", ErrorResponse>
      | Declared<"errorResponse5", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetPortfolioError> = [
      { on: 400, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 401, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 403, kind: "errorResponse3", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 404, kind: "errorResponse4", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 500, kind: "errorResponse5", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type GetPortfoliosRequest = {
    /** The workspace or organization to filter portfolios on. */
    workspace: string;
    /**
     * The user who owns the portfolio. Currently, API users can only get a list of portfolios that
     * they themselves own.
     */
    owner: string;
    /**
     * Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON
     * this means doing proper line breaking and indentation to make it readable. This will take
     * extra time and increase the response size so it is advisable only to use this during
     * debugging.
     */
    optPretty?: boolean | null;
    /**
     * Defines fields to return. Some requests return *compact* representations of objects in order
     * to conserve resources and complete the request more efficiently. Other times requests return
     * more information than you may need. This option allows you to list the exact set of fields
     * that the API should be sure to return for the objects. The field names should be provided as
     * paths, described below. The id of included objects will always be returned, regardless of the
     * field options.
     */
    optFields?: string[];
    /**
     * Results per page. The number of objects to return per page. The value must be between 1 and
     * 100.
     */
    limit?: number;
    /**
     * Offset token. An offset to the next page returned by the API. A pagination request will
     * return an offset token, which can be used as an input parameter to the next request. If an
     * offset is not passed in, the API will return the first page of results. 'Note: You can only
     * pass in an offset that was returned to you via a previously paginated request.'
     */
    offset?: string;
  };

  export class GetPortfoliosError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Declared<"errorResponse3", ErrorResponse>
      | Declared<"errorResponse4", ErrorResponse>
      | Declared<"errorResponse5", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetPortfoliosError> = [
      { on: 400, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 401, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 403, kind: "errorResponse3", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 404, kind: "errorResponse4", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 500, kind: "errorResponse5", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type RemoveCustomFieldSettingForPortfolioRequest = {
    /** Globally unique identifier for the portfolio. */
    portfolioGid: string;
    /**
     * Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON
     * this means doing proper line breaking and indentation to make it readable. This will take
     * extra time and increase the response size so it is advisable only to use this during
     * debugging.
     */
    optPretty?: boolean | null;
    /** Information about the custom field setting being removed. */
    body: PortfoliosRemoveCustomFieldSettingRequest;
  };

  export class RemoveCustomFieldSettingForPortfolioError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Declared<"errorResponse3", ErrorResponse>
      | Declared<"errorResponse4", ErrorResponse>
      | Declared<"errorResponse5", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<RemoveCustomFieldSettingForPortfolioError> = [
      { on: 400, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 401, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 403, kind: "errorResponse3", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 404, kind: "errorResponse4", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 500, kind: "errorResponse5", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type RemoveItemForPortfolioRequest = {
    /** Globally unique identifier for the portfolio. */
    portfolioGid: string;
    /**
     * Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON
     * this means doing proper line breaking and indentation to make it readable. This will take
     * extra time and increase the response size so it is advisable only to use this during
     * debugging.
     */
    optPretty?: boolean | null;
    /**
     * Defines fields to return. Some requests return *compact* representations of objects in order
     * to conserve resources and complete the request more efficiently. Other times requests return
     * more information than you may need. This option allows you to list the exact set of fields
     * that the API should be sure to return for the objects. The field names should be provided as
     * paths, described below. The id of included objects will always be returned, regardless of the
     * field options.
     */
    optFields?: string[];
    /** Information about the item being removed. */
    body: PortfoliosRemoveItemRequest;
  };

  export class RemoveItemForPortfolioError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Declared<"errorResponse3", ErrorResponse>
      | Declared<"errorResponse4", ErrorResponse>
      | Declared<"errorResponse5", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<RemoveItemForPortfolioError> = [
      { on: 400, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 401, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 403, kind: "errorResponse3", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 404, kind: "errorResponse4", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 500, kind: "errorResponse5", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type RemoveMembersForPortfolioRequest = {
    /** Globally unique identifier for the portfolio. */
    portfolioGid: string;
    /**
     * Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON
     * this means doing proper line breaking and indentation to make it readable. This will take
     * extra time and increase the response size so it is advisable only to use this during
     * debugging.
     */
    optPretty?: boolean | null;
    /**
     * Defines fields to return. Some requests return *compact* representations of objects in order
     * to conserve resources and complete the request more efficiently. Other times requests return
     * more information than you may need. This option allows you to list the exact set of fields
     * that the API should be sure to return for the objects. The field names should be provided as
     * paths, described below. The id of included objects will always be returned, regardless of the
     * field options.
     */
    optFields?: string[];
    /** Information about the members being removed. */
    body: PortfoliosRemoveMembersRequest;
  };

  export class RemoveMembersForPortfolioError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Declared<"errorResponse3", ErrorResponse>
      | Declared<"errorResponse4", ErrorResponse>
      | Declared<"errorResponse5", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<RemoveMembersForPortfolioError> = [
      { on: 400, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 401, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 403, kind: "errorResponse3", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 404, kind: "errorResponse4", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 500, kind: "errorResponse5", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type UpdatePortfolioRequest = {
    /** Globally unique identifier for the portfolio. */
    portfolioGid: string;
    /**
     * Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON
     * this means doing proper line breaking and indentation to make it readable. This will take
     * extra time and increase the response size so it is advisable only to use this during
     * debugging.
     */
    optPretty?: boolean | null;
    /**
     * Defines fields to return. Some requests return *compact* representations of objects in order
     * to conserve resources and complete the request more efficiently. Other times requests return
     * more information than you may need. This option allows you to list the exact set of fields
     * that the API should be sure to return for the objects. The field names should be provided as
     * paths, described below. The id of included objects will always be returned, regardless of the
     * field options.
     */
    optFields?: string[];
    /** The updated fields for the portfolio. */
    body: PortfoliosRequest;
  };

  export class UpdatePortfolioError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Declared<"errorResponse3", ErrorResponse>
      | Declared<"errorResponse4", ErrorResponse>
      | Declared<"errorResponse5", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<UpdatePortfolioError> = [
      { on: 400, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 401, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 403, kind: "errorResponse3", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 404, kind: "errorResponse4", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 500, kind: "errorResponse5", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }
}
