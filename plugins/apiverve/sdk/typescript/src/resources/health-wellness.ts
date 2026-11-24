import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import * as s from "../core/validation/index.js";
import {
  v1BmicalculatorResponseSchema,
  type V1BmicalculatorResponse,
} from "../models/v1-bmicalculator-response.js";
import { v1ExercisesResponseSchema, type V1ExercisesResponse } from "../models/v1-exercises-response.js";
import type { Servers } from "../servers.js";

export class HealthWellness {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * BMI Calculator
   *
   * @remarks
   * Calculate BMI, ideal weight, BMR, TDEE, calorie targets and macros
   *
   * @returns Successful Response
   *
   * @throws {@link HealthWellness.BmicalculatorError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link ApiVerveError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  bmicalculator(
    request: HealthWellness.BmicalculatorRequest,
    options?: RequestOptions,
  ): ApiPromise<V1BmicalculatorResponse, HealthWellness.BmicalculatorError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v1/bmicalculator"),
        auth: this.#auth.apiKey,
        pathParams: [],
        query: [
          { name: "weight", value: request.weight, schema: s.float64() },
          { name: "height", value: request.height, schema: s.float64() },
          { name: "unit", value: request.unit, schema: s.string() },
          { name: "age", value: request.age, schema: s.optional(s.float64()) },
          { name: "gender", value: request.gender, schema: s.optional(s.string()) },
          { name: "activityLevel", value: request.activityLevel, schema: s.optional(s.string()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: v1BmicalculatorResponseSchema },
        errorFactory: HealthWellness.BmicalculatorError,
      },
      options,
    );
  }

  /**
   * Exercises
   *
   * @remarks
   * Exercises is a simple tool for getting exercise information. It returns information on various
   * exercises.
   *
   * @returns Successful Response
   *
   * @throws {@link HealthWellness.ExercisesError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link ApiVerveError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  exercises(
    request: HealthWellness.ExercisesRequest,
    options?: RequestOptions,
  ): ApiPromise<V1ExercisesResponse, HealthWellness.ExercisesError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v1/exercises"),
        auth: this.#auth.apiKey,
        pathParams: [],
        query: [
          { name: "muscle", value: request.muscle, schema: s.string() },
          { name: "name", value: request.name, schema: s.optional(s.string()) },
          { name: "equipment", value: request.equipment, schema: s.optional(s.string()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: v1ExercisesResponseSchema },
        errorFactory: HealthWellness.ExercisesError,
      },
      options,
    );
  }
}

export namespace HealthWellness {
  export type BmicalculatorRequest = {
    /** Weight in kg (metric) or lbs (imperial) */
    weight: number;
    /** Height in cm (metric) or inches (imperial) */
    height: number;
    /** Unit system for weight and height */
    unit: string;
    /** Age in years (required for BMR/TDEE calculations) */
    age?: number;
    /** Gender (required for BMR/TDEE calculations) */
    gender?: string;
    /** Activity level (required for TDEE/calorie calculations) */
    activityLevel?: string;
  };

  export class BmicalculatorError extends ApiError {
    declare readonly payload:
      | Declared<"error401", undefined>
      | Declared<"error404", undefined>
      | Declared<"error500", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<BmicalculatorError> = [
      { on: 401, kind: "error401", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
    ];
  }

  export type ExercisesRequest = {
    /** The muscle group to get exercises for */
    muscle: string;
    /** The name of the exercise to get information about */
    name?: string;
    /** The equipment used for the exercise */
    equipment?: string;
  };

  export class ExercisesError extends ApiError {
    declare readonly payload:
      | Declared<"error401", undefined>
      | Declared<"error404", undefined>
      | Declared<"error500", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<ExercisesError> = [
      { on: 401, kind: "error401", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
    ];
  }
}
