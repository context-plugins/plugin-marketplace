import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import { categoryInternalSchema, type Category } from "../models/category.js";
import { createCategoryInternalSchema, type CreateCategory } from "../models/create-category.js";
import { milestoneInternalSchema, type Milestone } from "../models/milestone.js";
import { updateCategoryInternalSchema, type UpdateCategory } from "../models/update-category.js";
import type { Servers } from "../servers.js";

export class Categories {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Create Category
   *
   * @remarks
   * Create Category allows you to create a new Category in Shortcut.
   *
   * @returns Resource
   *
   * @throws {@link Categories.CreateCategoryError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link ShortcutError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  createCategory(
    request: Categories.CreateCategoryRequest,
    options?: RequestOptions,
  ): ApiPromise<Category, Categories.CreateCategoryError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/api/v3/categories"),
        auth: this.#auth.apiToken,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: createCategoryInternalSchema },
      },
      {
        success: { kind: "json", schema: categoryInternalSchema },
        errorFactory: Categories.CreateCategoryError,
      },
      options,
    );
  }

  /**
   * Delete Category
   *
   * @remarks
   * Delete Category can be used to delete any Category.
   *
   * @returns No Content
   *
   * @throws {@link Categories.DeleteCategoryError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link ShortcutError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  deleteCategory(
    request: Categories.DeleteCategoryRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, Categories.DeleteCategoryError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default("/api/v3/categories/{category-public-id}"),
        auth: this.#auth.apiToken,
        pathParams: [{ name: "category-public-id", value: request.categoryPublicId, schema: s.int() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: Categories.DeleteCategoryError,
      },
      options,
    );
  }

  /**
   * Get Category
   *
   * @remarks
   * Get Category returns information about the selected Category.
   *
   * @returns Resource
   *
   * @throws {@link Categories.GetCategoryError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link ShortcutError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getCategory(
    request: Categories.GetCategoryRequest,
    options?: RequestOptions,
  ): ApiPromise<Category, Categories.GetCategoryError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v3/categories/{category-public-id}"),
        auth: this.#auth.apiToken,
        pathParams: [{ name: "category-public-id", value: request.categoryPublicId, schema: s.int() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: categoryInternalSchema },
        errorFactory: Categories.GetCategoryError,
      },
      options,
    );
  }

  /**
   * List Categories
   *
   * @remarks
   * List Categories returns a list of all Categories and their attributes.
   *
   * @returns Resource
   *
   * @throws {@link Categories.ListCategoriesError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link ShortcutError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listCategories(options?: RequestOptions): ApiPromise<Category[], Categories.ListCategoriesError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v3/categories"),
        auth: this.#auth.apiToken,
        pathParams: [],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => categoryInternalSchema)) },
        errorFactory: Categories.ListCategoriesError,
      },
      options,
    );
  }

  /**
   * List Category Milestones
   *
   * @remarks
   * List Category Milestones returns a list of all Milestones with the Category.
   *
   * @returns Resource
   *
   * @throws {@link Categories.ListCategoryMilestonesError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link ShortcutError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listCategoryMilestones(
    request: Categories.ListCategoryMilestonesRequest,
    options?: RequestOptions,
  ): ApiPromise<Milestone[], Categories.ListCategoryMilestonesError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v3/categories/{category-public-id}/milestones"),
        auth: this.#auth.apiToken,
        pathParams: [{ name: "category-public-id", value: request.categoryPublicId, schema: s.int() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => milestoneInternalSchema)) },
        errorFactory: Categories.ListCategoryMilestonesError,
      },
      options,
    );
  }

  /**
   * List Category Objectives
   *
   * @remarks
   * Returns a list of all Objectives with the Category.
   *
   * @returns Resource
   *
   * @throws {@link Categories.ListCategoryObjectivesError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link ShortcutError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listCategoryObjectives(
    request: Categories.ListCategoryObjectivesRequest,
    options?: RequestOptions,
  ): ApiPromise<Milestone[], Categories.ListCategoryObjectivesError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v3/categories/{category-public-id}/objectives"),
        auth: this.#auth.apiToken,
        pathParams: [{ name: "category-public-id", value: request.categoryPublicId, schema: s.int() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => milestoneInternalSchema)) },
        errorFactory: Categories.ListCategoryObjectivesError,
      },
      options,
    );
  }

  /**
   * Update Category
   *
   * @remarks
   * Update Category allows you to replace a Category name with another name. If you try to name a
   * Category something that already exists, you will receive a 422 response.
   *
   * @returns Resource
   *
   * @throws {@link Categories.UpdateCategoryError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link ShortcutError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  updateCategory(
    request: Categories.UpdateCategoryRequest,
    options?: RequestOptions,
  ): ApiPromise<Category, Categories.UpdateCategoryError> {
    return this.#rawClient.execute(
      {
        method: "PUT",
        urlTemplate: this.#servers.default("/api/v3/categories/{category-public-id}"),
        auth: this.#auth.apiToken,
        pathParams: [{ name: "category-public-id", value: request.categoryPublicId, schema: s.int() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: updateCategoryInternalSchema },
      },
      {
        success: { kind: "json", schema: categoryInternalSchema },
        errorFactory: Categories.UpdateCategoryError,
      },
      options,
    );
  }
}

export namespace Categories {
  export type CreateCategoryRequest = {
    body: CreateCategory;
  };

  export class CreateCategoryError extends ApiError {
    declare readonly payload:
      | Declared<"error400", undefined>
      | Declared<"error404", undefined>
      | Declared<"error422", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<CreateCategoryError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 422, kind: "error422", decode: { kind: "empty" } },
    ];
  }

  export type DeleteCategoryRequest = {
    /** The unique ID of the Category. */
    categoryPublicId: number;
  };

  export class DeleteCategoryError extends ApiError {
    declare readonly payload:
      | Declared<"error400", undefined>
      | Declared<"error404", undefined>
      | Declared<"error422", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<DeleteCategoryError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 422, kind: "error422", decode: { kind: "empty" } },
    ];
  }

  export type GetCategoryRequest = {
    /** The unique ID of the Category. */
    categoryPublicId: number;
  };

  export class GetCategoryError extends ApiError {
    declare readonly payload:
      | Declared<"error400", undefined>
      | Declared<"error404", undefined>
      | Declared<"error422", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetCategoryError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 422, kind: "error422", decode: { kind: "empty" } },
    ];
  }

  export class ListCategoriesError extends ApiError {
    declare readonly payload:
      | Declared<"error400", undefined>
      | Declared<"error404", undefined>
      | Declared<"error422", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<ListCategoriesError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 422, kind: "error422", decode: { kind: "empty" } },
    ];
  }

  export type ListCategoryMilestonesRequest = {
    /** The unique ID of the Category. */
    categoryPublicId: number;
  };

  export class ListCategoryMilestonesError extends ApiError {
    declare readonly payload:
      | Declared<"error400", undefined>
      | Declared<"error404", undefined>
      | Declared<"error422", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<ListCategoryMilestonesError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 422, kind: "error422", decode: { kind: "empty" } },
    ];
  }

  export type ListCategoryObjectivesRequest = {
    /** The unique ID of the Category. */
    categoryPublicId: number;
  };

  export class ListCategoryObjectivesError extends ApiError {
    declare readonly payload:
      | Declared<"error400", undefined>
      | Declared<"error404", undefined>
      | Declared<"error422", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<ListCategoryObjectivesError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 422, kind: "error422", decode: { kind: "empty" } },
    ];
  }

  export type UpdateCategoryRequest = {
    /** The unique ID of the Category you wish to update. */
    categoryPublicId: number;
    body: UpdateCategory;
  };

  export class UpdateCategoryError extends ApiError {
    declare readonly payload:
      | Declared<"error400", undefined>
      | Declared<"error404", undefined>
      | Declared<"error422", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<UpdateCategoryError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 422, kind: "error422", decode: { kind: "empty" } },
    ];
  }
}
