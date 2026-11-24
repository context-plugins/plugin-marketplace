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
import {
  deleteBotChannelAssociationRequestSchema,
  type DeleteBotChannelAssociationRequest,
} from "../models/delete-bot-channel-association-request.js";
import {
  getBotChannelAssociationResponseSchema,
  type GetBotChannelAssociationResponse,
} from "../models/get-bot-channel-association-response.js";
import {
  getBotChannelAssociationsResponseSchema,
  type GetBotChannelAssociationsResponse,
} from "../models/get-bot-channel-associations-response.js";
import {
  internalFailureExceptionSchema,
  type InternalFailureException,
} from "../models/internal-failure-exception.js";
import {
  limitExceededExceptionSchema,
  type LimitExceededException,
} from "../models/limit-exceeded-exception.js";
import { notFoundExceptionSchema, type NotFoundException } from "../models/not-found-exception.js";
import type { Servers } from "../servers.js";

export class Channels {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Delete Bot Channel Association
   *
   * @remarks
   * Deletes the association between an Amazon Lex bot and a messaging platform. This operation
   * requires permission for the lex:DeleteBotChannelAssociation action.
   *
   * @returns Success
   *
   * @throws {@link Channels.DeleteBotChannelAssociationError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link AmazonLexError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   *
   * @deprecated
   */
  deleteBotChannelAssociation(
    request: Channels.DeleteBotChannelAssociationRequestParams,
    options?: RequestOptions,
  ): ApiPromise<string, Channels.DeleteBotChannelAssociationError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default("/bots/{botName}/aliases/{botAlias}/channels/{name}"),
        auth: this.#auth.sigv4,
        pathParams: [
          { name: "botName", value: request.botName, schema: s.string() },
          { name: "botAlias", value: request.botAlias, schema: s.string() },
          { name: "name", value: request.name, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => deleteBotChannelAssociationRequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: s.string() },
        errorFactory: Channels.DeleteBotChannelAssociationError,
      },
      options,
    );
  }

  /**
   * Get Bot Channel Association
   *
   * @remarks
   * Returns information about the association between an Amazon Lex bot and a messaging platform.
   * This operation requires permissions for the lex:GetBotChannelAssociation action.
   *
   * @returns Success
   *
   * @throws {@link Channels.GetBotChannelAssociationError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link AmazonLexError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   *
   * @deprecated
   */
  getBotChannelAssociation(
    request: Channels.GetBotChannelAssociationRequestParams,
    options?: RequestOptions,
  ): ApiPromise<GetBotChannelAssociationResponse, Channels.GetBotChannelAssociationError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/bots/{botName}/aliases/{botAlias}/channels/{name}"),
        auth: this.#auth.sigv4,
        pathParams: [
          { name: "botName", value: request.botName, schema: s.string() },
          { name: "botAlias", value: request.botAlias, schema: s.string() },
          { name: "name", value: request.name, schema: s.string() },
        ],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: getBotChannelAssociationResponseSchema },
        errorFactory: Channels.GetBotChannelAssociationError,
      },
      options,
    );
  }

  /**
   * Get Bot Channel Associations
   *
   * @remarks
   * Returns a list of all of the channels associated with the specified bot. The
   * GetBotChannelAssociations operation requires permissions for the lex:GetBotChannelAssociations
   * action.
   *
   * @returns Success
   *
   * @throws {@link Channels.GetBotChannelAssociationsError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link AmazonLexError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   *
   * @deprecated
   */
  getBotChannelAssociations(
    request: Channels.GetBotChannelAssociationsRequestParams,
    options?: RequestOptions,
  ): ApiPromise<GetBotChannelAssociationsResponse, Channels.GetBotChannelAssociationsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/bots/{botName}/aliases/{botAlias}/channels"),
        auth: this.#auth.sigv4,
        pathParams: [
          { name: "botName", value: request.botName, schema: s.string() },
          { name: "botAlias", value: request.botAlias, schema: s.string() },
        ],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: getBotChannelAssociationsResponseSchema },
        errorFactory: Channels.GetBotChannelAssociationsError,
      },
      options,
    );
  }
}

export namespace Channels {
  export type DeleteBotChannelAssociationRequestParams = {
    botName: string;
    botAlias: string;
    name: string;
    body?: DeleteBotChannelAssociationRequest;
  };

  export class DeleteBotChannelAssociationError extends ApiError {
    declare readonly payload:
      | Declared<"badRequestException", BadRequestException>
      | Declared<"conflictException", ConflictException>
      | Declared<"internalFailureException", InternalFailureException>
      | Declared<"limitExceededException", LimitExceededException>
      | Declared<"notFoundException", NotFoundException>
      | Undeclared;

    static readonly errors: ErrorDecoders<DeleteBotChannelAssociationError> = [
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

  export type GetBotChannelAssociationRequestParams = {
    botName: string;
    botAlias: string;
    name: string;
  };

  export class GetBotChannelAssociationError extends ApiError {
    declare readonly payload:
      | Declared<"badRequestException", BadRequestException>
      | Declared<"internalFailureException", InternalFailureException>
      | Declared<"limitExceededException", LimitExceededException>
      | Declared<"notFoundException", NotFoundException>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetBotChannelAssociationError> = [
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

  export type GetBotChannelAssociationsRequestParams = {
    botName: string;
    botAlias: string;
  };

  export class GetBotChannelAssociationsError extends ApiError {
    declare readonly payload:
      | Declared<"badRequestException", BadRequestException>
      | Declared<"internalFailureException", InternalFailureException>
      | Declared<"limitExceededException", LimitExceededException>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetBotChannelAssociationsError> = [
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
}
