import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import { badRequestExceptionSchema, type BadRequestException } from "../models/bad-request-exception.js";
import { getMigrationResponseSchema, type GetMigrationResponse } from "../models/get-migration-response.js";
import {
  getMigrationsResponseSchema,
  type GetMigrationsResponse,
} from "../models/get-migrations-response.js";
import {
  internalFailureExceptionSchema,
  type InternalFailureException,
} from "../models/internal-failure-exception.js";
import {
  limitExceededExceptionSchema,
  type LimitExceededException,
} from "../models/limit-exceeded-exception.js";
import {
  modelsLexAccessDeniedExceptionSchema,
  type ModelsLexAccessDeniedException,
} from "../models/models-lex-access-denied-exception.js";
import { notFoundExceptionSchema, type NotFoundException } from "../models/not-found-exception.js";
import {
  startMigrationRequestSchema,
  type StartMigrationRequest,
} from "../models/start-migration-request.js";
import {
  startMigrationResponseSchema,
  type StartMigrationResponse,
} from "../models/start-migration-response.js";
import type { Servers } from "../servers.js";

export class Migrations {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Get Migration
   *
   * @remarks
   * Provides details about an ongoing or complete migration from an Amazon Lex V1 bot to an Amazon
   * Lex V2 bot. Use this operation to view the migration alerts and warnings related to the
   * migration.
   *
   * @returns Success
   *
   * @throws {@link Migrations.GetMigrationError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link AmazonLexError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   *
   * @deprecated
   */
  getMigration(
    request: Migrations.GetMigrationRequestParams,
    options?: RequestOptions,
  ): ApiPromise<GetMigrationResponse, Migrations.GetMigrationError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/migrations/{migrationId}"),
        auth: this.#auth.sigv4,
        pathParams: [{ name: "migrationId", value: request.migrationId, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: getMigrationResponseSchema },
        errorFactory: Migrations.GetMigrationError,
      },
      options,
    );
  }

  /**
   * Get Migrations
   *
   * @remarks
   * Gets a list of migrations between Amazon Lex V1 and Amazon Lex V2.
   *
   * @returns Success
   *
   * @throws {@link Migrations.GetMigrationsError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link AmazonLexError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   *
   * @deprecated
   */
  getMigrations(options?: RequestOptions): ApiPromise<GetMigrationsResponse, Migrations.GetMigrationsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/migrations"),
        auth: this.#auth.sigv4,
        pathParams: [],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: getMigrationsResponseSchema },
        errorFactory: Migrations.GetMigrationsError,
      },
      options,
    );
  }

  /**
   * Start Migration
   *
   * @remarks
   * Starts migrating a bot from Amazon Lex V1 to Amazon Lex V2. Migrate your bot when you want to
   * take advantage of the new features of Amazon Lex V2. For more information, see Migrating a bot
   * in the Amazon Lex developer guide.
   *
   * @returns Success
   *
   * @throws {@link Migrations.StartMigrationError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link AmazonLexError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   *
   * @deprecated
   */
  startMigration(
    request: Migrations.StartMigrationRequestParams = {},
    options?: RequestOptions,
  ): ApiPromise<StartMigrationResponse, Migrations.StartMigrationError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/migrations"),
        auth: this.#auth.sigv4,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => startMigrationRequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: startMigrationResponseSchema },
        errorFactory: Migrations.StartMigrationError,
      },
      options,
    );
  }
}

export namespace Migrations {
  export type GetMigrationRequestParams = {
    migrationId: string;
  };

  export class GetMigrationError extends ApiError {
    declare readonly payload:
      | Declared<"badRequestException", BadRequestException>
      | Declared<"internalFailureException", InternalFailureException>
      | Declared<"limitExceededException", LimitExceededException>
      | Declared<"notFoundException", NotFoundException>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetMigrationError> = [
      { on: 400, kind: "badRequestException", decode: { kind: "json", schema: badRequestExceptionSchema } },
      {
        on: 500,
        kind: "internalFailureException",
        decode: { kind: "json", schema: internalFailureExceptionSchema },
      },
      {
        on: 429,
        kind: "limitExceededException",
        decode: { kind: "json", schema: limitExceededExceptionSchema },
      },
      { on: 404, kind: "notFoundException", decode: { kind: "json", schema: notFoundExceptionSchema } },
    ];
  }

  export class GetMigrationsError extends ApiError {
    declare readonly payload:
      | Declared<"badRequestException", BadRequestException>
      | Declared<"internalFailureException", InternalFailureException>
      | Declared<"limitExceededException", LimitExceededException>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetMigrationsError> = [
      { on: 400, kind: "badRequestException", decode: { kind: "json", schema: badRequestExceptionSchema } },
      {
        on: 500,
        kind: "internalFailureException",
        decode: { kind: "json", schema: internalFailureExceptionSchema },
      },
      {
        on: 429,
        kind: "limitExceededException",
        decode: { kind: "json", schema: limitExceededExceptionSchema },
      },
    ];
  }

  export type StartMigrationRequestParams = {
    body?: StartMigrationRequest;
  };

  export class StartMigrationError extends ApiError {
    declare readonly payload:
      | Declared<"modelsLexAccessDeniedException", ModelsLexAccessDeniedException>
      | Declared<"badRequestException", BadRequestException>
      | Declared<"internalFailureException", InternalFailureException>
      | Declared<"limitExceededException", LimitExceededException>
      | Declared<"notFoundException", NotFoundException>
      | Undeclared;

    static readonly errors: ErrorDecoders<StartMigrationError> = [
      {
        on: 403,
        kind: "modelsLexAccessDeniedException",
        decode: { kind: "json", schema: modelsLexAccessDeniedExceptionSchema },
      },
      { on: 400, kind: "badRequestException", decode: { kind: "json", schema: badRequestExceptionSchema } },
      {
        on: 500,
        kind: "internalFailureException",
        decode: { kind: "json", schema: internalFailureExceptionSchema },
      },
      {
        on: 429,
        kind: "limitExceededException",
        decode: { kind: "json", schema: limitExceededExceptionSchema },
      },
      { on: 404, kind: "notFoundException", decode: { kind: "json", schema: notFoundExceptionSchema } },
    ];
  }
}
