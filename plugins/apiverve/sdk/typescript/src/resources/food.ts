import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import * as s from "../core/validation/index.js";
import { v1CocktailResponseSchema, type V1CocktailResponse } from "../models/v1-cocktail-response.js";
import { v1NutritionResponseSchema, type V1NutritionResponse } from "../models/v1-nutrition-response.js";
import { v1RecipeResponseSchema, type V1RecipeResponse } from "../models/v1-recipe-response.js";
import type { Servers } from "../servers.js";

export class Food {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Cocktail Recipe
   *
   * @remarks
   * Get the recipe for a cocktail based on the name or ingredient
   *
   * @returns Successful Response
   *
   * @throws {@link Food.CocktailError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link ApiVerveError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  cocktail(
    request: Food.CocktailRequest,
    options?: RequestOptions,
  ): ApiPromise<V1CocktailResponse, Food.CocktailError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v1/cocktail"),
        auth: this.#auth.apiKey,
        pathParams: [],
        query: [{ name: "name", value: request.name, schema: s.string() }],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: v1CocktailResponseSchema },
        errorFactory: Food.CocktailError,
      },
      options,
    );
  }

  /**
   * Nutrition
   *
   * @remarks
   * Get the nutrition facts for a generic whole food by name. Optionally scale the panel to a
   * serving weight in grams.
   *
   * @returns Successful Response
   *
   * @throws {@link Food.NutritionError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link ApiVerveError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  nutrition(
    request: Food.NutritionRequest,
    options?: RequestOptions,
  ): ApiPromise<V1NutritionResponse, Food.NutritionError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v1/nutrition"),
        auth: this.#auth.apiKey,
        pathParams: [],
        query: [
          { name: "food", value: request.food, schema: s.string() },
          { name: "grams", value: request.grams, schema: s.optional(s.float64()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: v1NutritionResponseSchema },
        errorFactory: Food.NutritionError,
      },
      options,
    );
  }

  /**
   * Recipe Generator
   *
   * @remarks
   * Recipe Generator is an AI-powered tool for generating detailed recipes. It returns complete
   * recipes with ingredients, instructions, prep time, cook time, and servings.
   *
   * @returns Successful Response
   *
   * @throws {@link Food.RecipeError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link ApiVerveError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  recipe(
    request: Food.RecipeRequest,
    options?: RequestOptions,
  ): ApiPromise<V1RecipeResponse, Food.RecipeError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v1/recipe"),
        auth: this.#auth.apiKey,
        pathParams: [],
        query: [{ name: "name", value: request.name, schema: s.string() }],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: v1RecipeResponseSchema },
        errorFactory: Food.RecipeError,
      },
      options,
    );
  }
}

export namespace Food {
  export type CocktailRequest = {
    /** The name of the cocktail for which you want to get the recipe (e.g., martini) */
    name: string;
  };

  export class CocktailError extends ApiError {
    declare readonly payload:
      | Declared<"error401", undefined>
      | Declared<"error404", undefined>
      | Declared<"error500", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<CocktailError> = [
      { on: 401, kind: "error401", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
    ];
  }

  export type NutritionRequest = {
    /** Name of the food to look up (e.g. banana, chicken breast, olive oil) */
    food: string;
    /**
     * Serving weight in grams to scale the nutrition panel to. Defaults to a per-100-gram basis.
     */
    grams?: number;
  };

  export class NutritionError extends ApiError {
    declare readonly payload:
      | Declared<"error401", undefined>
      | Declared<"error404", undefined>
      | Declared<"error500", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<NutritionError> = [
      { on: 401, kind: "error401", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
    ];
  }

  export type RecipeRequest = {
    /** The name or description of the recipe you want to generate */
    name: string;
  };

  export class RecipeError extends ApiError {
    declare readonly payload:
      | Declared<"error401", undefined>
      | Declared<"error404", undefined>
      | Declared<"error500", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<RecipeError> = [
      { on: 401, kind: "error401", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
    ];
  }
}
