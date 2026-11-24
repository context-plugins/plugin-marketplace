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
  deleteSlotTypeVersionRequestSchema,
  type DeleteSlotTypeVersionRequest,
} from "../models/delete-slot-type-version-request.js";
import { getIntentsResponseSchema, type GetIntentsResponse } from "../models/get-intents-response.js";
import { getSlotTypesResponseSchema, type GetSlotTypesResponse } from "../models/get-slot-types-response.js";
import {
  getUtterancesViewResponseSchema,
  type GetUtterancesViewResponse,
} from "../models/get-utterances-view-response.js";
import {
  internalFailureExceptionSchema,
  type InternalFailureException,
} from "../models/internal-failure-exception.js";
import {
  limitExceededExceptionSchema,
  type LimitExceededException,
} from "../models/limit-exceeded-exception.js";
import {
  loopDetectedExceptionSchema,
  type LoopDetectedException,
} from "../models/loop-detected-exception.js";
import {
  notAcceptableExceptionSchema,
  type NotAcceptableException,
} from "../models/not-acceptable-exception.js";
import { notFoundExceptionSchema, type NotFoundException } from "../models/not-found-exception.js";
import { postContentRequestSchema, type PostContentRequest } from "../models/post-content-request.js";
import { postContentResponseSchema, type PostContentResponse } from "../models/post-content-response.js";
import { postTextRequestSchema, type PostTextRequest } from "../models/post-text-request.js";
import { postTextResponseSchema, type PostTextResponse } from "../models/post-text-response.js";
import {
  requestTimeoutExceptionSchema,
  type RequestTimeoutException,
} from "../models/request-timeout-exception.js";
import {
  runtimeLexBadGatewayExceptionSchema,
  type RuntimeLexBadGatewayException,
} from "../models/runtime-lex-bad-gateway-exception.js";
import {
  runtimeLexDependencyFailedExceptionSchema,
  type RuntimeLexDependencyFailedException,
} from "../models/runtime-lex-dependency-failed-exception.js";
import {
  unsupportedMediaTypeExceptionSchema,
  type UnsupportedMediaTypeException,
} from "../models/unsupported-media-type-exception.js";
import type { Servers } from "../servers.js";

export class Operations {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Delete Slot Type Version
   *
   * @remarks
   * Deletes a specific version of a slot type. To delete all versions of a slot type, use the
   * DeleteSlotType operation. This operation requires permissions for the lex:DeleteSlotTypeVersion
   * action.
   *
   * @returns Success
   *
   * @throws {@link Operations.DeleteSlotTypeVersionError} when the API answers with an error status
   * — narrow on `err.payload.kind`
   *
   * @throws {@link AmazonLexError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   *
   * @deprecated
   */
  deleteSlotTypeVersion(
    request: Operations.DeleteSlotTypeVersionRequestParams,
    options?: RequestOptions,
  ): ApiPromise<string, Operations.DeleteSlotTypeVersionError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.defaultAmazonLexModelBuildingV2OperationsApi(
          "/slottypes/{name}/version/{version}",
        ),
        auth: this.#auth.sigv4,
        pathParams: [
          { name: "name", value: request.name, schema: s.string() },
          { name: "version", value: request.version, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => deleteSlotTypeVersionRequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: s.string() },
        errorFactory: Operations.DeleteSlotTypeVersionError,
      },
      options,
    );
  }

  /**
   * Get Intents
   *
   * @remarks
   * Returns intent information as follows: If you specify the nameContains field, returns the
   * $LATEST version of all intents that contain the specified string. If you don't specify the
   * nameContains field, returns information about the $LATEST version of all intents. The operation
   * requires permission for the lex:GetIntents action.
   *
   * @returns Success
   *
   * @throws {@link Operations.GetIntentsError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link AmazonLexError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   *
   * @deprecated
   */
  getIntents(options?: RequestOptions): ApiPromise<GetIntentsResponse, Operations.GetIntentsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.defaultAmazonLexModelBuildingV2OperationsApi("/intents"),
        auth: this.#auth.sigv4,
        pathParams: [],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: getIntentsResponseSchema },
        errorFactory: Operations.GetIntentsError,
      },
      options,
    );
  }

  /**
   * Get Slot Types
   *
   * @remarks
   * Returns slot type information as follows: If you specify the nameContains field, returns the
   * $LATEST version of all slot types that contain the specified string. If you don't specify the
   * nameContains field, returns information about the $LATEST version of all slot types. The
   * operation requires permission for the lex:GetSlotTypes action.
   *
   * @returns Success
   *
   * @throws {@link Operations.GetSlotTypesError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link AmazonLexError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   *
   * @deprecated
   */
  getSlotTypes(options?: RequestOptions): ApiPromise<GetSlotTypesResponse, Operations.GetSlotTypesError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.defaultAmazonLexModelBuildingV2OperationsApi("/slottypes"),
        auth: this.#auth.sigv4,
        pathParams: [],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: getSlotTypesResponseSchema },
        errorFactory: Operations.GetSlotTypesError,
      },
      options,
    );
  }

  /**
   * Get Utterances View
   *
   * @remarks
   * Use the GetUtterancesView operation to get information about the utterances that your users
   * have made to your bot. You can use this list to tune the utterances that your bot responds to.
   * For example, say that you have created a bot to order flowers. After your users have used your
   * bot for a while, use the GetUtterancesView operation to see the requests that they have made
   * and whether they have been successful. You might find that the utterance "I want flowers" is
   * not being recognized. You could add this utterance to the OrderFlowers intent so that your bot
   * recognizes that utterance. After you publish a new version of a bot, you can get information
   * about the old version and the new so that you can compare the performance across the two
   * versions. Utterance statistics are generated once a day. Data is available for the last 15
   * days. You can request information for up to 5 versions of your bot in each request. Amazon Lex
   * returns the most frequent utterances received by the bot in the last 15 days. The response
   * contains information about a maximum of 100 utterances for each version. If you set
   * childDirected field to true when you created your bot, if you are using slot obfuscation with
   *
   * @returns Success
   *
   * @throws {@link Operations.GetUtterancesViewError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link AmazonLexError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   *
   * @deprecated
   */
  getUtterancesView(
    request: Operations.GetUtterancesViewRequestParams,
    options?: RequestOptions,
  ): ApiPromise<GetUtterancesViewResponse, Operations.GetUtterancesViewError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.defaultAmazonLexModelBuildingV2OperationsApi(
          "/bots/{botName}/utterances?view=aggregation",
        ),
        auth: this.#auth.sigv4,
        pathParams: [{ name: "botName", value: request.botName, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: getUtterancesViewResponseSchema },
        errorFactory: Operations.GetUtterancesViewError,
      },
      options,
    );
  }

  /**
   * Post Content
   *
   * @remarks
   * Sends user input (text or speech) to Amazon Lex. Clients use this API to send text and audio
   * requests to Amazon Lex at runtime. Amazon Lex interprets the user input using the machine
   * learning model that it built for the bot. The PostContent operation supports audio input at
   * 8kHz and 16kHz. You can use 8kHz audio to achieve higher speech recognition accuracy in
   * telephone audio applications. In response, Amazon Lex returns the next message to convey to the
   * user. Consider the following example messages: For a user input "I would like a pizza," Amazon
   * Lex might return a response with a message eliciting slot data (for example, PizzaSize): "What
   * size pizza would you like?". After the user provides all of the pizza order information, Amazon
   * Lex might return a response with a message to get user confirmation: "Order the pizza?". After
   * the user replies "Yes" to the confirmation prompt, Amazon Lex might return a conclusion
   * statement: "Thank you, your cheese pizza has been ordered.". Not all Amazon Lex messages
   * require a response from the user. For example, conclusion statements do not require a response.
   * Some messages require only a yes or no response. In addition to the message, Amazon Lex
   *
   * @returns Success
   *
   * @throws {@link Operations.PostContentError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link AmazonLexError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  postContent(
    request: Operations.PostContentRequestParams,
    options?: RequestOptions,
  ): ApiPromise<PostContentResponse, Operations.PostContentError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.defaultAmazonLexModelBuildingV2OperationsApi(
          "/bot/{botName}/alias/{botAlias}/user/{userId}/content",
        ),
        auth: this.#auth.sigv4,
        pathParams: [
          { name: "botName", value: request.botName, schema: s.string() },
          { name: "botAlias", value: request.botAlias, schema: s.string() },
          { name: "userId", value: request.userId, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => postContentRequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: postContentResponseSchema },
        errorFactory: Operations.PostContentError,
      },
      options,
    );
  }

  /**
   * Post Text
   *
   * @remarks
   * Sends user input to Amazon Lex. Client applications can use this API to send requests to Amazon
   * Lex at runtime. Amazon Lex then interprets the user input using the machine learning model it
   * built for the bot. In response, Amazon Lex returns the next message to convey to the user an
   * optional responseCard to display. Consider the following example messages: For a user input "I
   * would like a pizza", Amazon Lex might return a response with a message eliciting slot data (for
   * example, PizzaSize): "What size pizza would you like?" After the user provides all of the pizza
   * order information, Amazon Lex might return a response with a message to obtain user
   * confirmation "Proceed with the pizza order?". After the user replies to a confirmation prompt
   * with a "yes", Amazon Lex might return a conclusion statement: "Thank you, your cheese pizza has
   * been ordered.". Not all Amazon Lex messages require a user response. For example, a conclusion
   * statement does not require a response. Some messages require only a "yes" or "no" user
   * response. In addition to the message, Amazon Lex provides additional context about the message
   * in the response that you might use to enhance client behavior, for example, to
   *
   * @returns Success
   *
   * @throws {@link Operations.PostTextError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link AmazonLexError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  postText(
    request: Operations.PostTextRequestParams,
    options?: RequestOptions,
  ): ApiPromise<PostTextResponse, Operations.PostTextError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.defaultAmazonLexModelBuildingV2OperationsApi(
          "/bot/{botName}/alias/{botAlias}/user/{userId}/text",
        ),
        auth: this.#auth.sigv4,
        pathParams: [
          { name: "botName", value: request.botName, schema: s.string() },
          { name: "botAlias", value: request.botAlias, schema: s.string() },
          { name: "userId", value: request.userId, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: s.optional(s.lazy(() => postTextRequestSchema)) },
      },
      {
        success: { kind: "json", schema: postTextResponseSchema },
        errorFactory: Operations.PostTextError,
      },
      options,
    );
  }
}

export namespace Operations {
  export type DeleteSlotTypeVersionRequestParams = {
    name: string;
    version: string;
    body?: DeleteSlotTypeVersionRequest;
  };

  export class DeleteSlotTypeVersionError extends ApiError {
    declare readonly payload:
      | Declared<"badRequestException", BadRequestException>
      | Declared<"conflictException", ConflictException>
      | Declared<"internalFailureException", InternalFailureException>
      | Declared<"limitExceededException", LimitExceededException>
      | Declared<"notFoundException", NotFoundException>
      | Undeclared;

    static readonly errors: ErrorDecoders<DeleteSlotTypeVersionError> = [
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

  export class GetIntentsError extends ApiError {
    declare readonly payload:
      | Declared<"badRequestException", BadRequestException>
      | Declared<"internalFailureException", InternalFailureException>
      | Declared<"limitExceededException", LimitExceededException>
      | Declared<"notFoundException", NotFoundException>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetIntentsError> = [
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

  export class GetSlotTypesError extends ApiError {
    declare readonly payload:
      | Declared<"badRequestException", BadRequestException>
      | Declared<"internalFailureException", InternalFailureException>
      | Declared<"limitExceededException", LimitExceededException>
      | Declared<"notFoundException", NotFoundException>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetSlotTypesError> = [
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

  export type GetUtterancesViewRequestParams = {
    botName: string;
  };

  export class GetUtterancesViewError extends ApiError {
    declare readonly payload:
      | Declared<"badRequestException", BadRequestException>
      | Declared<"internalFailureException", InternalFailureException>
      | Declared<"limitExceededException", LimitExceededException>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetUtterancesViewError> = [
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

  export type PostContentRequestParams = {
    botName: string;
    botAlias: string;
    userId: string;
    body?: PostContentRequest;
  };

  export class PostContentError extends ApiError {
    declare readonly payload:
      | Declared<"runtimeLexBadGatewayException", RuntimeLexBadGatewayException>
      | Declared<"badRequestException", BadRequestException>
      | Declared<"conflictException", ConflictException>
      | Declared<"runtimeLexDependencyFailedException", RuntimeLexDependencyFailedException>
      | Declared<"internalFailureException", InternalFailureException>
      | Declared<"limitExceededException", LimitExceededException>
      | Declared<"loopDetectedException", LoopDetectedException>
      | Declared<"notAcceptableException", NotAcceptableException>
      | Declared<"notFoundException", NotFoundException>
      | Declared<"requestTimeoutException", RequestTimeoutException>
      | Declared<"unsupportedMediaTypeException", UnsupportedMediaTypeException>
      | Undeclared;

    static readonly errors: ErrorDecoders<PostContentError> = [
      {
        on: 502,
        kind: "runtimeLexBadGatewayException",
        decode: { kind: "json", schema: runtimeLexBadGatewayExceptionSchema },
      },
      { on: 400, kind: "badRequestException", decode: { kind: "json", schema: badRequestExceptionSchema } },
      { on: 409, kind: "conflictException", decode: { kind: "json", schema: conflictExceptionSchema } },
      {
        on: 424,
        kind: "runtimeLexDependencyFailedException",
        decode: { kind: "json", schema: runtimeLexDependencyFailedExceptionSchema },
      },
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
        on: 508,
        kind: "loopDetectedException",
        decode: { kind: "json", schema: loopDetectedExceptionSchema },
      },
      {
        on: 406,
        kind: "notAcceptableException",
        decode: { kind: "json", schema: notAcceptableExceptionSchema },
      },
      { on: 404, kind: "notFoundException", decode: { kind: "json", schema: notFoundExceptionSchema } },
      {
        on: 408,
        kind: "requestTimeoutException",
        decode: { kind: "json", schema: requestTimeoutExceptionSchema },
      },
      {
        on: 415,
        kind: "unsupportedMediaTypeException",
        decode: { kind: "json", schema: unsupportedMediaTypeExceptionSchema },
      },
    ];
  }

  export type PostTextRequestParams = {
    botName: string;
    botAlias: string;
    userId: string;
    body?: PostTextRequest;
  };

  export class PostTextError extends ApiError {
    declare readonly payload:
      | Declared<"runtimeLexBadGatewayException", RuntimeLexBadGatewayException>
      | Declared<"badRequestException", BadRequestException>
      | Declared<"conflictException", ConflictException>
      | Declared<"runtimeLexDependencyFailedException", RuntimeLexDependencyFailedException>
      | Declared<"internalFailureException", InternalFailureException>
      | Declared<"limitExceededException", LimitExceededException>
      | Declared<"loopDetectedException", LoopDetectedException>
      | Declared<"notFoundException", NotFoundException>
      | Undeclared;

    static readonly errors: ErrorDecoders<PostTextError> = [
      {
        on: 502,
        kind: "runtimeLexBadGatewayException",
        decode: { kind: "json", schema: runtimeLexBadGatewayExceptionSchema },
      },
      { on: 400, kind: "badRequestException", decode: { kind: "json", schema: badRequestExceptionSchema } },
      { on: 409, kind: "conflictException", decode: { kind: "json", schema: conflictExceptionSchema } },
      {
        on: 424,
        kind: "runtimeLexDependencyFailedException",
        decode: { kind: "json", schema: runtimeLexDependencyFailedExceptionSchema },
      },
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
        on: 508,
        kind: "loopDetectedException",
        decode: { kind: "json", schema: loopDetectedExceptionSchema },
      },
      { on: 404, kind: "notFoundException", decode: { kind: "json", schema: notFoundExceptionSchema } },
    ];
  }
}
