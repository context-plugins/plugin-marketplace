import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  authorizationException1Schema,
  type AuthorizationException1,
} from "../models/authorization-exception1.js";
import {
  modelNotFoundException1Schema,
  type ModelNotFoundException1,
} from "../models/model-not-found-exception1.js";
import {
  recurringPlanResourceSchema,
  type RecurringPlanResource,
} from "../models/recurring-plan-resource.js";
import { v1PlansResponseInternalSchema, type V1PlansResponse } from "../models/v1-plans-response.js";
import { validationException1Schema, type ValidationException1 } from "../models/validation-exception1.js";
import type { Servers } from "../servers.js";

export class RecurringPlans {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * List all recurring plans
   *
   * @returns Paginated set of `RecurringPlanResource`
   *
   * @throws {@link RecurringPlans.PlansIndexError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link GivebutterError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  plansIndex(
    request: RecurringPlans.PlansIndexRequest = {},
    options?: RequestOptions,
  ): ApiPromise<V1PlansResponse, RecurringPlans.PlansIndexError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v1/plans"),
        auth: this.#auth.http,
        pathParams: [],
        query: [{ name: "contacts", value: request.contacts, schema: s.optionalNullable(s.string()) }],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: v1PlansResponseInternalSchema },
        errorFactory: RecurringPlans.PlansIndexError,
      },
      options,
    );
  }

  /**
   * Get a recurring plan
   *
   * @returns `RecurringPlanResource`
   *
   * @throws {@link RecurringPlans.PlansShowError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link GivebutterError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  plansShow(
    request: RecurringPlans.PlansShowRequest,
    options?: RequestOptions,
  ): ApiPromise<RecurringPlanResource, RecurringPlans.PlansShowError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v1/plans/{plan}"),
        auth: this.#auth.http,
        pathParams: [{ name: "plan", value: request.plan, schema: s.nullable(s.string()) }],
        query: [
          { name: "first_name", value: request.firstName, schema: s.optional(s.string()) },
          { name: "last_name", value: request.lastName, schema: s.optional(s.string()) },
          { name: "email", value: request.email, schema: s.optional(s.string()) },
          { name: "amount", value: request.amount, schema: s.optional(s.string()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: recurringPlanResourceSchema },
        errorFactory: RecurringPlans.PlansShowError,
      },
      options,
    );
  }
}

export namespace RecurringPlans {
  export type PlansIndexRequest = {
    contacts?: string | null;
  };

  export class PlansIndexError extends ApiError {
    declare readonly payload: Declared<"validationException1", ValidationException1> | Undeclared;

    static readonly errors: ErrorDecoders<PlansIndexError> = [
      { on: 422, kind: "validationException1", decode: { kind: "json", schema: validationException1Schema } },
    ];
  }

  export type PlansShowRequest = {
    /** The plan uid */
    plan: string | null;
    firstName?: string;
    lastName?: string;
    email?: string;
    amount?: string;
  };

  export const plansShowRequestSchema: Schema<PlansShowRequest> = s.lazySchema(() =>
    s.object<PlansShowRequest>({
      plan: s.nullable(s.string()),
      firstName: s.optional(s.string().check(s.maxLength(255))),
      lastName: s.optional(s.string().check(s.maxLength(255))),
      email: s.optional(s.string()),
      amount: s.optional(s.string()),
    }),
  );

  export class PlansShowError extends ApiError {
    declare readonly payload:
      | Declared<"authorizationException1", AuthorizationException1>
      | Declared<"modelNotFoundException1", ModelNotFoundException1>
      | Undeclared;

    static readonly errors: ErrorDecoders<PlansShowError> = [
      {
        on: 403,
        kind: "authorizationException1",
        decode: { kind: "json", schema: authorizationException1Schema },
      },
      {
        on: 404,
        kind: "modelNotFoundException1",
        decode: { kind: "json", schema: modelNotFoundException1Schema },
      },
    ];
  }
}
