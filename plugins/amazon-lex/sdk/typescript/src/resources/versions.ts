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
  createIntentVersionRequestSchema,
  type CreateIntentVersionRequest,
} from "../models/create-intent-version-request.js";
import {
  createIntentVersionResponseSchema,
  type CreateIntentVersionResponse,
} from "../models/create-intent-version-response.js";
import {
  createSlotTypeVersionRequestSchema,
  type CreateSlotTypeVersionRequest,
} from "../models/create-slot-type-version-request.js";
import {
  createSlotTypeVersionResponseSchema,
  type CreateSlotTypeVersionResponse,
} from "../models/create-slot-type-version-response.js";
import {
  deleteIntentVersionRequestSchema,
  type DeleteIntentVersionRequest,
} from "../models/delete-intent-version-request.js";
import {
  deleteSlotTypeVersionRequestSchema,
  type DeleteSlotTypeVersionRequest,
} from "../models/delete-slot-type-version-request.js";
import { getBotResponseSchema, type GetBotResponse } from "../models/get-bot-response.js";
import {
  getBotVersionsResponseSchema,
  type GetBotVersionsResponse,
} from "../models/get-bot-versions-response.js";
import { getIntentResponseSchema, type GetIntentResponse } from "../models/get-intent-response.js";
import {
  getIntentVersionsResponseSchema,
  type GetIntentVersionsResponse,
} from "../models/get-intent-versions-response.js";
import { getSlotTypeResponseSchema, type GetSlotTypeResponse } from "../models/get-slot-type-response.js";
import {
  getSlotTypeVersionsResponseSchema,
  type GetSlotTypeVersionsResponse,
} from "../models/get-slot-type-versions-response.js";
import {
  internalFailureExceptionSchema,
  type InternalFailureException,
} from "../models/internal-failure-exception.js";
import {
  limitExceededExceptionSchema,
  type LimitExceededException,
} from "../models/limit-exceeded-exception.js";
import {
  modelsLexCreateBotVersionRequestSchema,
  type ModelsLexCreateBotVersionRequest,
} from "../models/models-lex-create-bot-version-request.js";
import {
  modelsLexCreateBotVersionResponseAmazonLexModelBuildingV2VersionsApiSchema,
  type ModelsLexCreateBotVersionResponseAmazonLexModelBuildingV2VersionsApi,
} from "../models/models-lex-create-bot-version-response-amazon-lex-model-building-v2-versions-api.js";
import {
  modelsLexDeleteBotVersionRequestSchema,
  type ModelsLexDeleteBotVersionRequest,
} from "../models/models-lex-delete-bot-version-request.js";
import { notFoundExceptionSchema, type NotFoundException } from "../models/not-found-exception.js";
import {
  preconditionFailedExceptionSchema,
  type PreconditionFailedException,
} from "../models/precondition-failed-exception.js";
import { putBotRequestSchema, type PutBotRequest } from "../models/put-bot-request.js";
import { putBotResponseSchema, type PutBotResponse } from "../models/put-bot-response.js";
import { putIntentRequestSchema, type PutIntentRequest } from "../models/put-intent-request.js";
import { putIntentResponseSchema, type PutIntentResponse } from "../models/put-intent-response.js";
import { putSlotTypeRequestSchema, type PutSlotTypeRequest } from "../models/put-slot-type-request.js";
import { putSlotTypeResponseSchema, type PutSlotTypeResponse } from "../models/put-slot-type-response.js";
import type { Servers } from "../servers.js";

export class Versions {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Create Bot Version
   *
   * @remarks
   * Creates a new version of the bot based on the $LATEST version. If the $LATEST version of this
   * resource hasn't changed since you created the last version, Amazon Lex doesn't create a new
   * version. It returns the last created version. You can update only the $LATEST version of the
   * bot. You can't update the numbered versions that you create with the CreateBotVersion
   * operation. When you create the first version of a bot, Amazon Lex sets the version to 1.
   * Subsequent versions increment by 1. For more information, see versioning-intro. This operation
   * requires permission for the lex:CreateBotVersion action.
   *
   * @returns Success
   *
   * @throws {@link Versions.CreateBotVersion2Error} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link AmazonLexError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   *
   * @deprecated
   */
  createBotVersion2(
    request: Versions.CreateBotVersion2Request,
    options?: RequestOptions,
  ): ApiPromise<
    ModelsLexCreateBotVersionResponseAmazonLexModelBuildingV2VersionsApi,
    Versions.CreateBotVersion2Error
  > {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/bots/{name}/versions"),
        auth: this.#auth.sigv4,
        pathParams: [{ name: "name", value: request.name, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => modelsLexCreateBotVersionRequestSchema)),
        },
      },
      {
        success: {
          kind: "json",
          schema: modelsLexCreateBotVersionResponseAmazonLexModelBuildingV2VersionsApiSchema,
        },
        errorFactory: Versions.CreateBotVersion2Error,
      },
      options,
    );
  }

  /**
   * Create Intent Version
   *
   * @remarks
   * Creates a new version of an intent based on the $LATEST version of the intent. If the $LATEST
   * version of this intent hasn't changed since you last updated it, Amazon Lex doesn't create a
   * new version. It returns the last version you created. You can update only the $LATEST version
   * of the intent. You can't update the numbered versions that you create with the
   * CreateIntentVersion operation. When you create a version of an intent, Amazon Lex sets the
   * version to 1. Subsequent versions increment by 1. For more information, see versioning-intro.
   * This operation requires permissions to perform the lex:CreateIntentVersion action.
   *
   * @returns Success
   *
   * @throws {@link Versions.CreateIntentVersionError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link AmazonLexError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   *
   * @deprecated
   */
  createIntentVersion(
    request: Versions.CreateIntentVersionRequestParams,
    options?: RequestOptions,
  ): ApiPromise<CreateIntentVersionResponse, Versions.CreateIntentVersionError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/intents/{name}/versions"),
        auth: this.#auth.sigv4,
        pathParams: [{ name: "name", value: request.name, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => createIntentVersionRequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: createIntentVersionResponseSchema },
        errorFactory: Versions.CreateIntentVersionError,
      },
      options,
    );
  }

  /**
   * Create Slot Type Version
   *
   * @remarks
   * Creates a new version of a slot type based on the $LATEST version of the specified slot type.
   * If the $LATEST version of this resource has not changed since the last version that you
   * created, Amazon Lex doesn't create a new version. It returns the last version that you created.
   * You can update only the $LATEST version of a slot type. You can't update the numbered versions
   * that you create with the CreateSlotTypeVersion operation. When you create a version of a slot
   * type, Amazon Lex sets the version to 1. Subsequent versions increment by 1. For more
   * information, see versioning-intro. This operation requires permissions for the
   * lex:CreateSlotTypeVersion action.
   *
   * @returns Success
   *
   * @throws {@link Versions.CreateSlotTypeVersionError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link AmazonLexError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   *
   * @deprecated
   */
  createSlotTypeVersion(
    request: Versions.CreateSlotTypeVersionRequestParams,
    options?: RequestOptions,
  ): ApiPromise<CreateSlotTypeVersionResponse, Versions.CreateSlotTypeVersionError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/slottypes/{name}/versions"),
        auth: this.#auth.sigv4,
        pathParams: [{ name: "name", value: request.name, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => createSlotTypeVersionRequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: createSlotTypeVersionResponseSchema },
        errorFactory: Versions.CreateSlotTypeVersionError,
      },
      options,
    );
  }

  /**
   * Delete Bot Version
   *
   * @remarks
   * Deletes a specific version of a bot. To delete all versions of a bot, use the DeleteBot
   * operation. This operation requires permissions for the lex:DeleteBotVersion action.
   *
   * @returns Success
   *
   * @throws {@link Versions.DeleteBotVersion2Error} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link AmazonLexError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   *
   * @deprecated
   */
  deleteBotVersion2(
    request: Versions.DeleteBotVersion2Request,
    options?: RequestOptions,
  ): ApiPromise<string, Versions.DeleteBotVersion2Error> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default("/bots/{name}/versions/{version}"),
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
          schema: s.optional(s.lazy(() => modelsLexDeleteBotVersionRequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: s.string() },
        errorFactory: Versions.DeleteBotVersion2Error,
      },
      options,
    );
  }

  /**
   * Delete Intent Version
   *
   * @remarks
   * Deletes a specific version of an intent. To delete all versions of a intent, use the
   * DeleteIntent operation. This operation requires permissions for the lex:DeleteIntentVersion
   * action.
   *
   * @returns Success
   *
   * @throws {@link Versions.DeleteIntentVersionError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link AmazonLexError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   *
   * @deprecated
   */
  deleteIntentVersion(
    request: Versions.DeleteIntentVersionRequestParams,
    options?: RequestOptions,
  ): ApiPromise<string, Versions.DeleteIntentVersionError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default("/intents/{name}/versions/{version}"),
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
          schema: s.optional(s.lazy(() => deleteIntentVersionRequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: s.string() },
        errorFactory: Versions.DeleteIntentVersionError,
      },
      options,
    );
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
   * @throws {@link Versions.DeleteSlotTypeVersion2Error} when the API answers with an error status
   * — narrow on `err.payload.kind`
   *
   * @throws {@link AmazonLexError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   *
   * @deprecated
   */
  deleteSlotTypeVersion2(
    request: Versions.DeleteSlotTypeVersion2Request,
    options?: RequestOptions,
  ): ApiPromise<string, Versions.DeleteSlotTypeVersion2Error> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default("/slottypes/{name}/version/{version}"),
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
        errorFactory: Versions.DeleteSlotTypeVersion2Error,
      },
      options,
    );
  }

  /**
   * Get Bot
   *
   * @remarks
   * Returns metadata information for a specific bot. You must provide the bot name and the bot
   * version or alias. This operation requires permissions for the lex:GetBot action.
   *
   * @returns Success
   *
   * @throws {@link Versions.GetBotError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link AmazonLexError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   *
   * @deprecated
   */
  getBot(
    request: Versions.GetBotRequestParams,
    options?: RequestOptions,
  ): ApiPromise<GetBotResponse, Versions.GetBotError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/bots/{name}/versions/{versionOrAlias}"),
        auth: this.#auth.sigv4,
        pathParams: [
          { name: "name", value: request.name, schema: s.string() },
          { name: "versionOrAlias", value: request.versionOrAlias, schema: s.string() },
        ],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: getBotResponseSchema },
        errorFactory: Versions.GetBotError,
      },
      options,
    );
  }

  /**
   * Get Bot Versions
   *
   * @remarks
   * Gets information about all of the versions of a bot. The GetBotVersions operation returns a
   * BotMetadata object for each version of a bot. For example, if a bot has three numbered
   * versions, the GetBotVersions operation returns four BotMetadata objects in the response, one
   * for each numbered version and one for the $LATEST version. The GetBotVersions operation always
   * returns at least one version, the $LATEST version. This operation requires permissions for the
   * lex:GetBotVersions action.
   *
   * @returns Success
   *
   * @throws {@link Versions.GetBotVersionsError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link AmazonLexError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   *
   * @deprecated
   */
  getBotVersions(
    request: Versions.GetBotVersionsRequestParams,
    options?: RequestOptions,
  ): ApiPromise<GetBotVersionsResponse, Versions.GetBotVersionsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/bots/{name}/versions"),
        auth: this.#auth.sigv4,
        pathParams: [{ name: "name", value: request.name, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: getBotVersionsResponseSchema },
        errorFactory: Versions.GetBotVersionsError,
      },
      options,
    );
  }

  /**
   * Get Intent
   *
   * @remarks
   * Returns information about an intent. In addition to the intent name, you must specify the
   * intent version. This operation requires permissions to perform the lex:GetIntent action.
   *
   * @returns Success
   *
   * @throws {@link Versions.GetIntentError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link AmazonLexError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   *
   * @deprecated
   */
  getIntent(
    request: Versions.GetIntentRequestParams,
    options?: RequestOptions,
  ): ApiPromise<GetIntentResponse, Versions.GetIntentError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/intents/{name}/versions/{version}"),
        auth: this.#auth.sigv4,
        pathParams: [
          { name: "name", value: request.name, schema: s.string() },
          { name: "version", value: request.version, schema: s.string() },
        ],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: getIntentResponseSchema },
        errorFactory: Versions.GetIntentError,
      },
      options,
    );
  }

  /**
   * Get Intent Versions
   *
   * @remarks
   * Gets information about all of the versions of an intent. The GetIntentVersions operation
   * returns an IntentMetadata object for each version of an intent. For example, if an intent has
   * three numbered versions, the GetIntentVersions operation returns four IntentMetadata objects in
   * the response, one for each numbered version and one for the $LATEST version. The
   * GetIntentVersions operation always returns at least one version, the $LATEST version. This
   * operation requires permissions for the lex:GetIntentVersions action.
   *
   * @returns Success
   *
   * @throws {@link Versions.GetIntentVersionsError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link AmazonLexError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   *
   * @deprecated
   */
  getIntentVersions(
    request: Versions.GetIntentVersionsRequestParams,
    options?: RequestOptions,
  ): ApiPromise<GetIntentVersionsResponse, Versions.GetIntentVersionsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/intents/{name}/versions"),
        auth: this.#auth.sigv4,
        pathParams: [{ name: "name", value: request.name, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: getIntentVersionsResponseSchema },
        errorFactory: Versions.GetIntentVersionsError,
      },
      options,
    );
  }

  /**
   * Get Slot Type
   *
   * @remarks
   * Returns information about a specific version of a slot type. In addition to specifying the slot
   * type name, you must specify the slot type version. This operation requires permissions for the
   * lex:GetSlotType action.
   *
   * @returns Success
   *
   * @throws {@link Versions.GetSlotTypeError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link AmazonLexError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   *
   * @deprecated
   */
  getSlotType(
    request: Versions.GetSlotTypeRequestParams,
    options?: RequestOptions,
  ): ApiPromise<GetSlotTypeResponse, Versions.GetSlotTypeError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/slottypes/{name}/versions/{version}"),
        auth: this.#auth.sigv4,
        pathParams: [
          { name: "name", value: request.name, schema: s.string() },
          { name: "version", value: request.version, schema: s.string() },
        ],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: getSlotTypeResponseSchema },
        errorFactory: Versions.GetSlotTypeError,
      },
      options,
    );
  }

  /**
   * Get Slot Type Versions
   *
   * @remarks
   * Gets information about all versions of a slot type. The GetSlotTypeVersions operation returns a
   * SlotTypeMetadata object for each version of a slot type. For example, if a slot type has three
   * numbered versions, the GetSlotTypeVersions operation returns four SlotTypeMetadata objects in
   * the response, one for each numbered version and one for the $LATEST version. The
   * GetSlotTypeVersions operation always returns at least one version, the $LATEST version. This
   * operation requires permissions for the lex:GetSlotTypeVersions action.
   *
   * @returns Success
   *
   * @throws {@link Versions.GetSlotTypeVersionsError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link AmazonLexError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   *
   * @deprecated
   */
  getSlotTypeVersions(
    request: Versions.GetSlotTypeVersionsRequestParams,
    options?: RequestOptions,
  ): ApiPromise<GetSlotTypeVersionsResponse, Versions.GetSlotTypeVersionsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/slottypes/{name}/versions"),
        auth: this.#auth.sigv4,
        pathParams: [{ name: "name", value: request.name, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: getSlotTypeVersionsResponseSchema },
        errorFactory: Versions.GetSlotTypeVersionsError,
      },
      options,
    );
  }

  /**
   * Put Bot
   *
   * @remarks
   * Creates an Amazon Lex conversational bot or replaces an existing bot. When you create or update
   * a bot you are only required to specify a name, a locale, and whether the bot is directed toward
   * children under age 13. You can use this to add intents later, or to remove intents from an
   * existing bot. When you create a bot with the minimum information, the bot is created or updated
   * but Amazon Lex returns the response FAILED. You can build the bot after you add one or more
   * intents. For more information about Amazon Lex bots, see how-it-works. If you specify the name
   * of an existing bot, the fields in the request replace the existing values in the $LATEST
   * version of the bot. Amazon Lex removes any fields that you don't provide values for in the
   * request, except for the idleTTLInSeconds and privacySettings fields, which are set to their
   * default values. If you don't specify values for required fields, Amazon Lex throws an
   * exception. This operation requires permissions for the lex:PutBot action. For more information,
   * see security-iam.
   *
   * @returns Success
   *
   * @throws {@link Versions.PutBotError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link AmazonLexError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   *
   * @deprecated
   */
  putBot(
    request: Versions.PutBotRequestParams,
    options?: RequestOptions,
  ): ApiPromise<PutBotResponse, Versions.PutBotError> {
    return this.#rawClient.execute(
      {
        method: "PUT",
        urlTemplate: this.#servers.default("/bots/{name}/versions/$LATEST"),
        auth: this.#auth.sigv4,
        pathParams: [{ name: "name", value: request.name, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: s.optional(s.lazy(() => putBotRequestSchema)) },
      },
      {
        success: { kind: "json", schema: putBotResponseSchema },
        errorFactory: Versions.PutBotError,
      },
      options,
    );
  }

  /**
   * Put Intent
   *
   * @remarks
   * Creates an intent or replaces an existing intent. To define the interaction between the user
   * and your bot, you use one or more intents. For a pizza ordering bot, for example, you would
   * create an OrderPizza intent. To create an intent or replace an existing intent, you must
   * provide the following: Intent name. For example, OrderPizza. Sample utterances. For example,
   * "Can I order a pizza, please." and "I want to order a pizza." Information to be gathered. You
   * specify slot types for the information that your bot will request from the user. You can
   * specify standard slot types, such as a date or a time, or custom slot types such as the size
   * and crust of a pizza. How the intent will be fulfilled. You can provide a Lambda function or
   * configure the intent to return the intent information to the client application. If you use a
   * Lambda function, when all of the intent information is available, Amazon Lex invokes your
   * Lambda function. If you configure your intent to return the intent information to the client
   * application. You can specify other optional information in the request, such as: A confirmation
   * prompt to ask the user to confirm an intent. For example, "Shall I order your pizza?" A con
   *
   * @returns Success
   *
   * @throws {@link Versions.PutIntentError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link AmazonLexError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   *
   * @deprecated
   */
  putIntent(
    request: Versions.PutIntentRequestParams,
    options?: RequestOptions,
  ): ApiPromise<PutIntentResponse, Versions.PutIntentError> {
    return this.#rawClient.execute(
      {
        method: "PUT",
        urlTemplate: this.#servers.default("/intents/{name}/versions/$LATEST"),
        auth: this.#auth.sigv4,
        pathParams: [{ name: "name", value: request.name, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: s.optional(s.lazy(() => putIntentRequestSchema)) },
      },
      {
        success: { kind: "json", schema: putIntentResponseSchema },
        errorFactory: Versions.PutIntentError,
      },
      options,
    );
  }

  /**
   * Put Slot Type
   *
   * @remarks
   * Creates a custom slot type or replaces an existing custom slot type. To create a custom slot
   * type, specify a name for the slot type and a set of enumeration values, which are the values
   * that a slot of this type can assume. For more information, see how-it-works. If you specify the
   * name of an existing slot type, the fields in the request replace the existing values in the
   * $LATEST version of the slot type. Amazon Lex removes the fields that you don't provide in the
   * request. If you don't specify required fields, Amazon Lex throws an exception. When you update
   * the $LATEST version of a slot type, if a bot uses the $LATEST version of an intent that
   * contains the slot type, the bot's status field is set to NOT_BUILT. This operation requires
   * permissions for the lex:PutSlotType action.
   *
   * @returns Success
   *
   * @throws {@link Versions.PutSlotTypeError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link AmazonLexError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   *
   * @deprecated
   */
  putSlotType(
    request: Versions.PutSlotTypeRequestParams,
    options?: RequestOptions,
  ): ApiPromise<PutSlotTypeResponse, Versions.PutSlotTypeError> {
    return this.#rawClient.execute(
      {
        method: "PUT",
        urlTemplate: this.#servers.default("/slottypes/{name}/versions/$LATEST"),
        auth: this.#auth.sigv4,
        pathParams: [{ name: "name", value: request.name, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => putSlotTypeRequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: putSlotTypeResponseSchema },
        errorFactory: Versions.PutSlotTypeError,
      },
      options,
    );
  }
}

export namespace Versions {
  export type CreateBotVersion2Request = {
    name: string;
    body?: ModelsLexCreateBotVersionRequest;
  };

  export class CreateBotVersion2Error extends ApiError {
    declare readonly payload:
      | Declared<"badRequestException", BadRequestException>
      | Declared<"conflictException", ConflictException>
      | Declared<"internalFailureException", InternalFailureException>
      | Declared<"limitExceededException", LimitExceededException>
      | Declared<"notFoundException", NotFoundException>
      | Declared<"preconditionFailedException", PreconditionFailedException>
      | Undeclared;

    static readonly errors: ErrorDecoders<CreateBotVersion2Error> = [
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
      {
        on: 412,
        kind: "preconditionFailedException",
        decode: { kind: "json", schema: preconditionFailedExceptionSchema },
      },
    ];
  }

  export type CreateIntentVersionRequestParams = {
    name: string;
    body?: CreateIntentVersionRequest;
  };

  export class CreateIntentVersionError extends ApiError {
    declare readonly payload:
      | Declared<"badRequestException", BadRequestException>
      | Declared<"conflictException", ConflictException>
      | Declared<"internalFailureException", InternalFailureException>
      | Declared<"limitExceededException", LimitExceededException>
      | Declared<"notFoundException", NotFoundException>
      | Declared<"preconditionFailedException", PreconditionFailedException>
      | Undeclared;

    static readonly errors: ErrorDecoders<CreateIntentVersionError> = [
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
      {
        on: 412,
        kind: "preconditionFailedException",
        decode: { kind: "json", schema: preconditionFailedExceptionSchema },
      },
    ];
  }

  export type CreateSlotTypeVersionRequestParams = {
    name: string;
    body?: CreateSlotTypeVersionRequest;
  };

  export class CreateSlotTypeVersionError extends ApiError {
    declare readonly payload:
      | Declared<"badRequestException", BadRequestException>
      | Declared<"conflictException", ConflictException>
      | Declared<"internalFailureException", InternalFailureException>
      | Declared<"limitExceededException", LimitExceededException>
      | Declared<"notFoundException", NotFoundException>
      | Declared<"preconditionFailedException", PreconditionFailedException>
      | Undeclared;

    static readonly errors: ErrorDecoders<CreateSlotTypeVersionError> = [
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
      {
        on: 412,
        kind: "preconditionFailedException",
        decode: { kind: "json", schema: preconditionFailedExceptionSchema },
      },
    ];
  }

  export type DeleteBotVersion2Request = {
    name: string;
    version: string;
    body?: ModelsLexDeleteBotVersionRequest;
  };

  export class DeleteBotVersion2Error extends ApiError {
    declare readonly payload:
      | Declared<"badRequestException", BadRequestException>
      | Declared<"conflictException", ConflictException>
      | Declared<"internalFailureException", InternalFailureException>
      | Declared<"limitExceededException", LimitExceededException>
      | Declared<"notFoundException", NotFoundException>
      | Undeclared;

    static readonly errors: ErrorDecoders<DeleteBotVersion2Error> = [
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

  export type DeleteIntentVersionRequestParams = {
    name: string;
    version: string;
    body?: DeleteIntentVersionRequest;
  };

  export class DeleteIntentVersionError extends ApiError {
    declare readonly payload:
      | Declared<"badRequestException", BadRequestException>
      | Declared<"conflictException", ConflictException>
      | Declared<"internalFailureException", InternalFailureException>
      | Declared<"limitExceededException", LimitExceededException>
      | Declared<"notFoundException", NotFoundException>
      | Undeclared;

    static readonly errors: ErrorDecoders<DeleteIntentVersionError> = [
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

  export type DeleteSlotTypeVersion2Request = {
    name: string;
    version: string;
    body?: DeleteSlotTypeVersionRequest;
  };

  export class DeleteSlotTypeVersion2Error extends ApiError {
    declare readonly payload:
      | Declared<"badRequestException", BadRequestException>
      | Declared<"conflictException", ConflictException>
      | Declared<"internalFailureException", InternalFailureException>
      | Declared<"limitExceededException", LimitExceededException>
      | Declared<"notFoundException", NotFoundException>
      | Undeclared;

    static readonly errors: ErrorDecoders<DeleteSlotTypeVersion2Error> = [
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

  export type GetBotRequestParams = {
    name: string;
    versionOrAlias: string;
  };

  export class GetBotError extends ApiError {
    declare readonly payload:
      | Declared<"badRequestException", BadRequestException>
      | Declared<"internalFailureException", InternalFailureException>
      | Declared<"limitExceededException", LimitExceededException>
      | Declared<"notFoundException", NotFoundException>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetBotError> = [
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

  export type GetBotVersionsRequestParams = {
    name: string;
  };

  export class GetBotVersionsError extends ApiError {
    declare readonly payload:
      | Declared<"badRequestException", BadRequestException>
      | Declared<"internalFailureException", InternalFailureException>
      | Declared<"limitExceededException", LimitExceededException>
      | Declared<"notFoundException", NotFoundException>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetBotVersionsError> = [
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

  export type GetIntentRequestParams = {
    name: string;
    version: string;
  };

  export class GetIntentError extends ApiError {
    declare readonly payload:
      | Declared<"badRequestException", BadRequestException>
      | Declared<"internalFailureException", InternalFailureException>
      | Declared<"limitExceededException", LimitExceededException>
      | Declared<"notFoundException", NotFoundException>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetIntentError> = [
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

  export type GetIntentVersionsRequestParams = {
    name: string;
  };

  export class GetIntentVersionsError extends ApiError {
    declare readonly payload:
      | Declared<"badRequestException", BadRequestException>
      | Declared<"internalFailureException", InternalFailureException>
      | Declared<"limitExceededException", LimitExceededException>
      | Declared<"notFoundException", NotFoundException>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetIntentVersionsError> = [
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

  export type GetSlotTypeRequestParams = {
    name: string;
    version: string;
  };

  export class GetSlotTypeError extends ApiError {
    declare readonly payload:
      | Declared<"badRequestException", BadRequestException>
      | Declared<"internalFailureException", InternalFailureException>
      | Declared<"limitExceededException", LimitExceededException>
      | Declared<"notFoundException", NotFoundException>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetSlotTypeError> = [
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

  export type GetSlotTypeVersionsRequestParams = {
    name: string;
  };

  export class GetSlotTypeVersionsError extends ApiError {
    declare readonly payload:
      | Declared<"badRequestException", BadRequestException>
      | Declared<"internalFailureException", InternalFailureException>
      | Declared<"limitExceededException", LimitExceededException>
      | Declared<"notFoundException", NotFoundException>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetSlotTypeVersionsError> = [
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

  export type PutBotRequestParams = {
    name: string;
    body?: PutBotRequest;
  };

  export class PutBotError extends ApiError {
    declare readonly payload:
      | Declared<"badRequestException", BadRequestException>
      | Declared<"conflictException", ConflictException>
      | Declared<"internalFailureException", InternalFailureException>
      | Declared<"limitExceededException", LimitExceededException>
      | Declared<"preconditionFailedException", PreconditionFailedException>
      | Undeclared;

    static readonly errors: ErrorDecoders<PutBotError> = [
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

  export type PutIntentRequestParams = {
    name: string;
    body?: PutIntentRequest;
  };

  export class PutIntentError extends ApiError {
    declare readonly payload:
      | Declared<"badRequestException", BadRequestException>
      | Declared<"conflictException", ConflictException>
      | Declared<"internalFailureException", InternalFailureException>
      | Declared<"limitExceededException", LimitExceededException>
      | Declared<"preconditionFailedException", PreconditionFailedException>
      | Undeclared;

    static readonly errors: ErrorDecoders<PutIntentError> = [
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

  export type PutSlotTypeRequestParams = {
    name: string;
    body?: PutSlotTypeRequest;
  };

  export class PutSlotTypeError extends ApiError {
    declare readonly payload:
      | Declared<"badRequestException", BadRequestException>
      | Declared<"conflictException", ConflictException>
      | Declared<"internalFailureException", InternalFailureException>
      | Declared<"limitExceededException", LimitExceededException>
      | Declared<"preconditionFailedException", PreconditionFailedException>
      | Undeclared;

    static readonly errors: ErrorDecoders<PutSlotTypeError> = [
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
