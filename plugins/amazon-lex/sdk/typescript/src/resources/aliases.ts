import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import { badRequestExceptionSchema, type BadRequestException } from "../models/bad-request-exception.js";
import { conflictExceptionSchema, type ConflictException } from "../models/conflict-exception.js";
import { getBotAliasResponseSchema, type GetBotAliasResponse } from "../models/get-bot-alias-response.js";
import {
  getBotAliasesResponseSchema,
  type GetBotAliasesResponse,
} from "../models/get-bot-aliases-response.js";
import {
  internalFailureExceptionSchema,
  type InternalFailureException,
} from "../models/internal-failure-exception.js";
import {
  limitExceededExceptionSchema,
  type LimitExceededException,
} from "../models/limit-exceeded-exception.js";
import {
  modelsLexDeleteBotAliasRequestSchema,
  type ModelsLexDeleteBotAliasRequest,
} from "../models/models-lex-delete-bot-alias-request.js";
import { notFoundExceptionSchema, type NotFoundException } from "../models/not-found-exception.js";
import {
  preconditionFailedExceptionSchema,
  type PreconditionFailedException,
} from "../models/precondition-failed-exception.js";
import { putBotAliasRequestSchema, type PutBotAliasRequest } from "../models/put-bot-alias-request.js";
import { putBotAliasResponseSchema, type PutBotAliasResponse } from "../models/put-bot-alias-response.js";
import type { Servers } from "../servers.js";

export class Aliases {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Delete Bot Alias
   *
   * @remarks
   * Deletes an alias for the specified bot. You can't delete an alias that is used in the
   * association between a bot and a messaging channel. If an alias is used in a channel
   * association, the DeleteBot operation returns a ResourceInUseException exception that includes a
   * reference to the channel association that refers to the bot. You can remove the reference to
   * the alias by deleting the channel association. If you get the same exception again, delete the
   * referring association until the DeleteBotAlias operation is successful.
   *
   * @returns Success
   *
   * @throws {@link Aliases.DeleteBotAliasError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link AmazonLexError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   *
   * @deprecated
   */
  deleteBotAlias(
    request: Aliases.DeleteBotAliasRequestParams,
    options?: RequestOptions,
  ): ApiPromise<string, Aliases.DeleteBotAliasError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default("/bots/{botName}/aliases/{name}"),
        auth: this.#auth.sigv4,
        pathParams: [
          { name: "botName", value: request.botName, schema: s.string() },
          { name: "name", value: request.name, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => modelsLexDeleteBotAliasRequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: s.string() },
        errorFactory: Aliases.DeleteBotAliasError,
      },
      options,
    );
  }

  /**
   * Get Bot Alias
   *
   * @remarks
   * Returns information about an Amazon Lex bot alias. For more information about aliases, see
   * versioning-aliases. This operation requires permissions for the lex:GetBotAlias action.
   *
   * @returns Success
   *
   * @throws {@link Aliases.GetBotAliasError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link AmazonLexError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   *
   * @deprecated
   */
  getBotAlias(
    request: Aliases.GetBotAliasRequestParams,
    options?: RequestOptions,
  ): ApiPromise<GetBotAliasResponse, Aliases.GetBotAliasError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/bots/{botName}/aliases/{name}"),
        auth: this.#auth.sigv4,
        pathParams: [
          { name: "botName", value: request.botName, schema: s.string() },
          { name: "name", value: request.name, schema: s.string() },
        ],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: getBotAliasResponseSchema },
        errorFactory: Aliases.GetBotAliasError,
      },
      options,
    );
  }

  /**
   * Get Bot Aliases
   *
   * @remarks
   * Returns a list of aliases for a specified Amazon Lex bot. This operation requires permissions
   * for the lex:GetBotAliases action.
   *
   * @returns Success
   *
   * @throws {@link Aliases.GetBotAliasesError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link AmazonLexError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   *
   * @deprecated
   */
  getBotAliases(
    request: Aliases.GetBotAliasesRequestParams,
    options?: RequestOptions,
  ): ApiPromise<GetBotAliasesResponse, Aliases.GetBotAliasesError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/bots/{botName}/aliases"),
        auth: this.#auth.sigv4,
        pathParams: [{ name: "botName", value: request.botName, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: getBotAliasesResponseSchema },
        errorFactory: Aliases.GetBotAliasesError,
      },
      options,
    );
  }

  /**
   * Put Bot Alias
   *
   * @remarks
   * Creates an alias for the specified version of the bot or replaces an alias for the specified
   * bot. To change the version of the bot that the alias points to, replace the alias. For more
   * information about aliases, see versioning-aliases. This operation requires permissions for the
   * lex:PutBotAlias action.
   *
   * @returns Success
   *
   * @throws {@link Aliases.PutBotAliasError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link AmazonLexError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   *
   * @deprecated
   */
  putBotAlias(
    request: Aliases.PutBotAliasRequestParams,
    options?: RequestOptions,
  ): ApiPromise<PutBotAliasResponse, Aliases.PutBotAliasError> {
    return this.#rawClient.execute(
      {
        method: "PUT",
        urlTemplate: this.#servers.default("/bots/{botName}/aliases/{name}"),
        auth: this.#auth.sigv4,
        pathParams: [
          { name: "botName", value: request.botName, schema: s.string() },
          { name: "name", value: request.name, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => putBotAliasRequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: putBotAliasResponseSchema },
        errorFactory: Aliases.PutBotAliasError,
      },
      options,
    );
  }
}

export namespace Aliases {
  export type DeleteBotAliasRequestParams = {
    botName: string;
    name: string;
    body?: ModelsLexDeleteBotAliasRequest;
  };

  export class DeleteBotAliasError extends ApiError {
    declare readonly payload:
      | Declared<"badRequestException", BadRequestException>
      | Declared<"conflictException", ConflictException>
      | Declared<"internalFailureException", InternalFailureException>
      | Declared<"limitExceededException", LimitExceededException>
      | Declared<"notFoundException", NotFoundException>
      | Undeclared;

    static readonly errors: ErrorDecoders<DeleteBotAliasError> = [
      { on: 400, kind: "badRequestException", decode: { kind: "json", schema: badRequestExceptionSchema } },
      { on: 409, kind: "conflictException", decode: { kind: "json", schema: conflictExceptionSchema } },
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

  export type GetBotAliasRequestParams = {
    botName: string;
    name: string;
  };

  export class GetBotAliasError extends ApiError {
    declare readonly payload:
      | Declared<"badRequestException", BadRequestException>
      | Declared<"internalFailureException", InternalFailureException>
      | Declared<"limitExceededException", LimitExceededException>
      | Declared<"notFoundException", NotFoundException>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetBotAliasError> = [
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

  export type GetBotAliasesRequestParams = {
    botName: string;
  };

  export class GetBotAliasesError extends ApiError {
    declare readonly payload:
      | Declared<"badRequestException", BadRequestException>
      | Declared<"internalFailureException", InternalFailureException>
      | Declared<"limitExceededException", LimitExceededException>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetBotAliasesError> = [
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

  export type PutBotAliasRequestParams = {
    botName: string;
    name: string;
    body?: PutBotAliasRequest;
  };

  export class PutBotAliasError extends ApiError {
    declare readonly payload:
      | Declared<"badRequestException", BadRequestException>
      | Declared<"conflictException", ConflictException>
      | Declared<"internalFailureException", InternalFailureException>
      | Declared<"limitExceededException", LimitExceededException>
      | Declared<"preconditionFailedException", PreconditionFailedException>
      | Undeclared;

    static readonly errors: ErrorDecoders<PutBotAliasError> = [
      { on: 400, kind: "badRequestException", decode: { kind: "json", schema: badRequestExceptionSchema } },
      { on: 409, kind: "conflictException", decode: { kind: "json", schema: conflictExceptionSchema } },
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
      {
        on: 412,
        kind: "preconditionFailedException",
        decode: { kind: "json", schema: preconditionFailedExceptionSchema },
      },
    ];
  }
}
