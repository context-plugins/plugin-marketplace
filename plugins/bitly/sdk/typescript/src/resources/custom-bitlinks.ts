import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import { addCustomBitlinkSchema, type AddCustomBitlink } from "../models/add-custom-bitlink.js";
import {
  clickMetricsBitlyCustomBitlinksApiSchema,
  type ClickMetricsBitlyCustomBitlinksApi,
} from "../models/click-metrics-bitly-custom-bitlinks-api.js";
import { clicksSchema, type Clicks } from "../models/clicks.js";
import {
  customBitlinkBitlyCustomBitlinksApiSchema,
  type CustomBitlinkBitlyCustomBitlinksApi,
} from "../models/custom-bitlink-bitly-custom-bitlinks-api.js";
import { errorSchema, type Error } from "../models/error.js";
import { simplifiedErrorSchema, type SimplifiedError } from "../models/simplified-error.js";
import { TimeUnit, timeUnitSchema } from "../models/time-unit.js";
import { updateCustomBitlinkSchema, type UpdateCustomBitlink } from "../models/update-custom-bitlink.js";
import type { Servers } from "../servers.js";

/**
 * These endpoints are for updating custom Bitlinks only. Custom Bitlinks have both a BSD and a
 * customized back-half (e.g., yourcompany.com/yourcampaign). If a link begins with the bit.ly
 * domain or ends with an auto-generated random string it is not a custom Bitlink.
 */
export class CustomBitlinks {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Add Custom Bitlink
   *
   * @remarks
   * Add a keyword (or "custom back-half") to a Bitlink with a Custom Domain (domains must match).
   * This endpoint can also be used for initial redirects to a link.
   *
   * @returns SUCCESS
   *
   * @throws {@link CustomBitlinks.AddCustomBitlinkError} when the API answers with an error status
   * — narrow on `err.payload.kind`
   *
   * @throws {@link BitlyError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  addCustomBitlink(
    request: CustomBitlinks.AddCustomBitlinkRequest,
    options?: RequestOptions,
  ): ApiPromise<CustomBitlinkBitlyCustomBitlinksApi, CustomBitlinks.AddCustomBitlinkError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/custom_bitlinks"),
        auth: this.#auth.bearerAuth,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: addCustomBitlinkSchema },
      },
      {
        success: { kind: "json", schema: customBitlinkBitlyCustomBitlinksApiSchema },
        errorFactory: CustomBitlinks.AddCustomBitlinkError,
      },
      options,
    );
  }

  /**
   * Get Clicks for a Custom Bitlink's Entire History
   *
   * @remarks
   * Returns the click counts for the specified link. This returns an array with clicks based on a
   * date.
   *
   * @returns SUCCESS
   *
   * @throws {@link CustomBitlinks.GetClicksForCustomBitlinkError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link BitlyError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getClicksForCustomBitlink(
    request: CustomBitlinks.GetClicksForCustomBitlinkRequest,
    options?: RequestOptions,
  ): ApiPromise<Clicks, CustomBitlinks.GetClicksForCustomBitlinkError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/custom_bitlinks/{custom_bitlink}/clicks"),
        auth: this.#auth.bearerAuth,
        pathParams: [{ name: "custom_bitlink", value: request.customBitlink, schema: s.string() }],
        query: [
          { name: "unit", value: request.unit, schema: s.defaulted(timeUnitSchema, TimeUnit.Day) },
          { name: "units", value: request.units, schema: s.defaulted(s.int(), -1) },
          { name: "unit_reference", value: request.unitReference, schema: s.optional(s.string()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: clicksSchema },
        errorFactory: CustomBitlinks.GetClicksForCustomBitlinkError,
      },
      options,
    );
  }

  /**
   * Retrieve Custom Bitlink
   *
   * @remarks
   * Returns the details and history of the specified link.
   *
   * @returns SUCCESS
   *
   * @throws {@link CustomBitlinks.GetCustomBitlinkError} when the API answers with an error status
   * — narrow on `err.payload.kind`
   *
   * @throws {@link BitlyError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getCustomBitlink(
    request: CustomBitlinks.GetCustomBitlinkRequest,
    options?: RequestOptions,
  ): ApiPromise<CustomBitlinkBitlyCustomBitlinksApi, CustomBitlinks.GetCustomBitlinkError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/custom_bitlinks/{custom_bitlink}"),
        auth: this.#auth.bearerAuth,
        pathParams: [{ name: "custom_bitlink", value: request.customBitlink, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: customBitlinkBitlyCustomBitlinksApiSchema },
        errorFactory: CustomBitlinks.GetCustomBitlinkError,
      },
      options,
    );
  }

  /**
   * Get Metrics for a Custom Bitlink by Destination
   *
   * @remarks
   * Returns click metrics for the specified link by its historical destinations.
   *
   * @returns SUCCESS
   *
   * @throws {@link CustomBitlinks.GetCustomBitlinkMetricsByDestinationError} when the API answers
   * with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link BitlyError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getCustomBitlinkMetricsByDestination(
    request: CustomBitlinks.GetCustomBitlinkMetricsByDestinationRequest,
    options?: RequestOptions,
  ): ApiPromise<
    ClickMetricsBitlyCustomBitlinksApi,
    CustomBitlinks.GetCustomBitlinkMetricsByDestinationError
  > {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/custom_bitlinks/{custom_bitlink}/clicks_by_destination"),
        auth: this.#auth.bearerAuth,
        pathParams: [{ name: "custom_bitlink", value: request.customBitlink, schema: s.string() }],
        query: [
          { name: "unit", value: request.unit, schema: s.defaulted(timeUnitSchema, TimeUnit.Day) },
          { name: "units", value: request.units, schema: s.defaulted(s.int(), -1) },
          { name: "unit_reference", value: request.unitReference, schema: s.optional(s.string()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: clickMetricsBitlyCustomBitlinksApiSchema },
        errorFactory: CustomBitlinks.GetCustomBitlinkMetricsByDestinationError,
      },
      options,
    );
  }

  /**
   * Update Custom Bitlink
   *
   * @remarks
   * Move a keyword (or custom back-half) to a different Bitlink (domains must match).
   *
   * @returns SUCCESS
   *
   * @throws {@link CustomBitlinks.UpdateCustomBitlinkError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link BitlyError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  updateCustomBitlink(
    request: CustomBitlinks.UpdateCustomBitlinkRequest,
    options?: RequestOptions,
  ): ApiPromise<CustomBitlinkBitlyCustomBitlinksApi, CustomBitlinks.UpdateCustomBitlinkError> {
    return this.#rawClient.execute(
      {
        method: "PATCH",
        urlTemplate: this.#servers.default("/custom_bitlinks/{custom_bitlink}"),
        auth: this.#auth.bearerAuth,
        pathParams: [{ name: "custom_bitlink", value: request.customBitlink, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: updateCustomBitlinkSchema },
      },
      {
        success: { kind: "json", schema: customBitlinkBitlyCustomBitlinksApiSchema },
        errorFactory: CustomBitlinks.UpdateCustomBitlinkError,
      },
      options,
    );
  }
}

export namespace CustomBitlinks {
  export type AddCustomBitlinkRequest = {
    body: AddCustomBitlink;
  };

  export class AddCustomBitlinkError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Declared<"error4", Error>
      | Declared<"error5", Error>
      | Declared<"error6", Error>
      | Declared<"simplifiedError", SimplifiedError>
      | Declared<"error7", Error>
      | Declared<"error8", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<AddCustomBitlinkError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 402, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 403, kind: "error3", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error4", decode: { kind: "json", schema: errorSchema } },
      { on: 409, kind: "error5", decode: { kind: "json", schema: errorSchema } },
      { on: 422, kind: "error6", decode: { kind: "json", schema: errorSchema } },
      { on: 429, kind: "simplifiedError", decode: { kind: "json", schema: simplifiedErrorSchema } },
      { on: 500, kind: "error7", decode: { kind: "json", schema: errorSchema } },
      { on: 503, kind: "error8", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type GetClicksForCustomBitlinkRequest = {
    /** A Custom Bitlink made of the domain and keyword */
    customBitlink: string;
    /** A unit of time @default TimeUnit.Day */
    unit?: TimeUnit;
    /**
     * An integer representing the time units to query data for. pass -1 to return all units of time
     *
     * @default -1
     */
    units?: number;
    /**
     * An ISO-8601 timestamp, indicating the most recent time for which to pull metrics. Will
     * default to current time. Timestamp values should be url encoded (i.e. replace '+' with '%2B'
     * and ':' with '%3A'; 2022-02-02T15:53:02+0000 becomes 2022-02-02T15%3A53%3A02%2B0000)
     */
    unitReference?: string;
  };

  export class GetClicksForCustomBitlinkError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Declared<"error4", Error>
      | Declared<"error5", Error>
      | Declared<"simplifiedError", SimplifiedError>
      | Declared<"error6", Error>
      | Declared<"error7", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetClicksForCustomBitlinkError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 402, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 403, kind: "error3", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error4", decode: { kind: "json", schema: errorSchema } },
      { on: 410, kind: "error5", decode: { kind: "json", schema: errorSchema } },
      { on: 429, kind: "simplifiedError", decode: { kind: "json", schema: simplifiedErrorSchema } },
      { on: 500, kind: "error6", decode: { kind: "json", schema: errorSchema } },
      { on: 503, kind: "error7", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type GetCustomBitlinkRequest = {
    /** A Custom Bitlink made of the domain and keyword */
    customBitlink: string;
  };

  export class GetCustomBitlinkError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Declared<"error4", Error>
      | Declared<"simplifiedError", SimplifiedError>
      | Declared<"error5", Error>
      | Declared<"error6", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetCustomBitlinkError> = [
      { on: 402, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 403, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error3", decode: { kind: "json", schema: errorSchema } },
      { on: 410, kind: "error4", decode: { kind: "json", schema: errorSchema } },
      { on: 429, kind: "simplifiedError", decode: { kind: "json", schema: simplifiedErrorSchema } },
      { on: 500, kind: "error5", decode: { kind: "json", schema: errorSchema } },
      { on: 503, kind: "error6", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type GetCustomBitlinkMetricsByDestinationRequest = {
    /** A Custom Bitlink made of the domain and keyword */
    customBitlink: string;
    /** A unit of time @default TimeUnit.Day */
    unit?: TimeUnit;
    /**
     * An integer representing the time units to query data for. pass -1 to return all units of time
     *
     * @default -1
     */
    units?: number;
    /**
     * An ISO-8601 timestamp, indicating the most recent time for which to pull metrics. Will
     * default to current time. Timestamp values should be url encoded (i.e. replace '+' with '%2B'
     * and ':' with '%3A'; 2022-02-02T15:53:02+0000 becomes 2022-02-02T15%3A53%3A02%2B0000)
     */
    unitReference?: string;
  };

  export class GetCustomBitlinkMetricsByDestinationError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Declared<"error4", Error>
      | Declared<"simplifiedError", SimplifiedError>
      | Declared<"error5", Error>
      | Declared<"error6", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetCustomBitlinkMetricsByDestinationError> = [
      { on: 402, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 403, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error3", decode: { kind: "json", schema: errorSchema } },
      { on: 410, kind: "error4", decode: { kind: "json", schema: errorSchema } },
      { on: 429, kind: "simplifiedError", decode: { kind: "json", schema: simplifiedErrorSchema } },
      { on: 500, kind: "error5", decode: { kind: "json", schema: errorSchema } },
      { on: 503, kind: "error6", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type UpdateCustomBitlinkRequest = {
    /** A Custom Bitlink made of the domain and keyword */
    customBitlink: string;
    body: UpdateCustomBitlink;
  };

  export class UpdateCustomBitlinkError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Declared<"error4", Error>
      | Declared<"error5", Error>
      | Declared<"simplifiedError", SimplifiedError>
      | Declared<"error6", Error>
      | Declared<"error7", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<UpdateCustomBitlinkError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 402, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 403, kind: "error3", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error4", decode: { kind: "json", schema: errorSchema } },
      { on: 422, kind: "error5", decode: { kind: "json", schema: errorSchema } },
      { on: 429, kind: "simplifiedError", decode: { kind: "json", schema: simplifiedErrorSchema } },
      { on: 500, kind: "error6", decode: { kind: "json", schema: errorSchema } },
      { on: 503, kind: "error7", decode: { kind: "json", schema: errorSchema } },
    ];
  }
}
