import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import { xAmzTargetSchema, type XAmzTarget } from "../models/xamz-target.js";
import { xAmzTarget1Schema, type XAmzTarget1 } from "../models/xamz-target1.js";
import { xAmzTarget2Schema, type XAmzTarget2 } from "../models/xamz-target2.js";
import { xAmzTarget3Schema, type XAmzTarget3 } from "../models/xamz-target3.js";
import { xAmzTarget4Schema, type XAmzTarget4 } from "../models/xamz-target4.js";
import type { Servers } from "../servers.js";

export class CallAnalyticsCategory {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Create Call Analytics Category
   *
   * @remarks
   * Creates a new Call Analytics category. All categories are automatically applied to your Call
   * Analytics transcriptions. Note that in order to apply categories to your transcriptions, you
   * must create them before submitting your transcription request, as categories cannot be applied
   * retroactively. When creating a new category, you can use the InputType parameter to label the
   * category as a POST_CALL or a REAL_TIME category. POST_CALL categories can only be applied to
   * post-call transcriptions and REAL_TIME categories can only be applied to real-time
   * transcriptions. If you do not include InputType, your category is created as a POST_CALL
   * category by default. Call Analytics categories are composed of rules. For each category, you
   * must create between 1 and 20 rules. Rules can include these parameters: , , , and . To update
   * an existing category, see . To learn more about Call Analytics categories, see Creating
   * categories for post-call transcriptions and Creating categories for real-time transcriptions.
   *
   * @returns Success
   *
   * @throws {@link CallAnalyticsCategory.CreateCallAnalyticsCategoryError} when the API answers
   * with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link AmazonTranscribeError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  createCallAnalyticsCategory(
    request: CallAnalyticsCategory.CreateCallAnalyticsCategoryRequestParams,
    options?: RequestOptions,
  ): ApiPromise<undefined, CallAnalyticsCategory.CreateCallAnalyticsCategoryError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/#CreateCallAnalyticsCategory"),
        auth: this.#auth.sigv4,
        pathParams: [],
        query: [],
        headers: [
          { name: "X-Amz-Target", value: request.xAmzTarget, schema: xAmzTargetSchema },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: CallAnalyticsCategory.CreateCallAnalyticsCategoryError,
      },
      options,
    );
  }

  /**
   * Delete Call Analytics Category
   *
   * @remarks
   * Deletes a Call Analytics category. To use this operation, specify the name of the category you
   * want to delete using CategoryName. Category names are case sensitive.
   *
   * @returns Success
   *
   * @throws {@link CallAnalyticsCategory.DeleteCallAnalyticsCategoryError} when the API answers
   * with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link AmazonTranscribeError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  deleteCallAnalyticsCategory(
    request: CallAnalyticsCategory.DeleteCallAnalyticsCategoryRequestParams,
    options?: RequestOptions,
  ): ApiPromise<undefined, CallAnalyticsCategory.DeleteCallAnalyticsCategoryError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/#DeleteCallAnalyticsCategory"),
        auth: this.#auth.sigv4,
        pathParams: [],
        query: [],
        headers: [
          { name: "X-Amz-Target", value: request.xAmzTarget, schema: xAmzTarget1Schema },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: CallAnalyticsCategory.DeleteCallAnalyticsCategoryError,
      },
      options,
    );
  }

  /**
   * Get Call Analytics Category
   *
   * @remarks
   * Provides information about the specified Call Analytics category. To get a list of your Call
   * Analytics categories, use the operation.
   *
   * @returns Success
   *
   * @throws {@link CallAnalyticsCategory.GetCallAnalyticsCategoryError} when the API answers with
   * an error status — narrow on `err.payload.kind`
   *
   * @throws {@link AmazonTranscribeError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  getCallAnalyticsCategory(
    request: CallAnalyticsCategory.GetCallAnalyticsCategoryRequestParams,
    options?: RequestOptions,
  ): ApiPromise<undefined, CallAnalyticsCategory.GetCallAnalyticsCategoryError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/#GetCallAnalyticsCategory"),
        auth: this.#auth.sigv4,
        pathParams: [],
        query: [],
        headers: [
          { name: "X-Amz-Target", value: request.xAmzTarget, schema: xAmzTarget2Schema },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: CallAnalyticsCategory.GetCallAnalyticsCategoryError,
      },
      options,
    );
  }

  /**
   * List Call Analytics Categories
   *
   * @remarks
   * Provides a list of Call Analytics categories, including all rules that make up each category.
   * To get detailed information about a specific Call Analytics category, use the operation.
   *
   * @returns Success
   *
   * @throws {@link CallAnalyticsCategory.ListCallAnalyticsCategoriesError} when the API answers
   * with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link AmazonTranscribeError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  listCallAnalyticsCategories(
    request: CallAnalyticsCategory.ListCallAnalyticsCategoriesRequestParams,
    options?: RequestOptions,
  ): ApiPromise<undefined, CallAnalyticsCategory.ListCallAnalyticsCategoriesError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/#ListCallAnalyticsCategories"),
        auth: this.#auth.sigv4,
        pathParams: [],
        query: [],
        headers: [
          { name: "X-Amz-Target", value: request.xAmzTarget, schema: xAmzTarget3Schema },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: CallAnalyticsCategory.ListCallAnalyticsCategoriesError,
      },
      options,
    );
  }

  /**
   * Update Call Analytics Category
   *
   * @remarks
   * Updates the specified Call Analytics category with new rules. Note that the
   * UpdateCallAnalyticsCategory operation overwrites all existing rules contained in the specified
   * category. You cannot append additional rules onto an existing category. To create a new
   * category, see .
   *
   * @returns Success
   *
   * @throws {@link CallAnalyticsCategory.UpdateCallAnalyticsCategoryError} when the API answers
   * with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link AmazonTranscribeError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  updateCallAnalyticsCategory(
    request: CallAnalyticsCategory.UpdateCallAnalyticsCategoryRequestParams,
    options?: RequestOptions,
  ): ApiPromise<undefined, CallAnalyticsCategory.UpdateCallAnalyticsCategoryError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/#UpdateCallAnalyticsCategory"),
        auth: this.#auth.sigv4,
        pathParams: [],
        query: [],
        headers: [
          { name: "X-Amz-Target", value: request.xAmzTarget, schema: xAmzTarget4Schema },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: CallAnalyticsCategory.UpdateCallAnalyticsCategoryError,
      },
      options,
    );
  }
}

export namespace CallAnalyticsCategory {
  export type CreateCallAnalyticsCategoryRequestParams = {
    xAmzTarget: XAmzTarget;
  };

  export class CreateCallAnalyticsCategoryError extends ApiError {
    declare readonly payload:
      | Declared<"error400", undefined>
      | Declared<"error409", undefined>
      | Declared<"error500", undefined>
      | Declared<"error429", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<CreateCallAnalyticsCategoryError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 409, kind: "error409", decode: { kind: "empty" } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
      { on: 429, kind: "error429", decode: { kind: "empty" } },
    ];
  }

  export type DeleteCallAnalyticsCategoryRequestParams = {
    xAmzTarget: XAmzTarget1;
  };

  export class DeleteCallAnalyticsCategoryError extends ApiError {
    declare readonly payload:
      | Declared<"error400", undefined>
      | Declared<"error500", undefined>
      | Declared<"error429", undefined>
      | Declared<"error404", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<DeleteCallAnalyticsCategoryError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
      { on: 429, kind: "error429", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
    ];
  }

  export type GetCallAnalyticsCategoryRequestParams = {
    xAmzTarget: XAmzTarget2;
  };

  export class GetCallAnalyticsCategoryError extends ApiError {
    declare readonly payload:
      | Declared<"error400", undefined>
      | Declared<"error500", undefined>
      | Declared<"error429", undefined>
      | Declared<"error404", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetCallAnalyticsCategoryError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
      { on: 429, kind: "error429", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
    ];
  }

  export type ListCallAnalyticsCategoriesRequestParams = {
    xAmzTarget: XAmzTarget3;
  };

  export class ListCallAnalyticsCategoriesError extends ApiError {
    declare readonly payload:
      | Declared<"error400", undefined>
      | Declared<"error500", undefined>
      | Declared<"error429", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<ListCallAnalyticsCategoriesError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
      { on: 429, kind: "error429", decode: { kind: "empty" } },
    ];
  }

  export type UpdateCallAnalyticsCategoryRequestParams = {
    xAmzTarget: XAmzTarget4;
  };

  export class UpdateCallAnalyticsCategoryError extends ApiError {
    declare readonly payload:
      | Declared<"error400", undefined>
      | Declared<"error409", undefined>
      | Declared<"error500", undefined>
      | Declared<"error429", undefined>
      | Declared<"error404", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<UpdateCallAnalyticsCategoryError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 409, kind: "error409", decode: { kind: "empty" } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
      { on: 429, kind: "error429", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
    ];
  }
}
