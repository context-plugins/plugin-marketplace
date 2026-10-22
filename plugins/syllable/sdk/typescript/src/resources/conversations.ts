import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import * as s from "../core/validation/index.js";
import {
  conversationPropertiesSchema,
  type ConversationProperties,
} from "../models/conversation-properties.js";
import { httpValidationErrorSchema, type HttpValidationError } from "../models/http-validation-error.js";
import {
  listResponseConversationSchema,
  type ListResponseConversation,
} from "../models/list-response-conversation.js";
import { endDatetime3Schema, type EndDatetime3 } from "../models/unions/end-datetime3.js";
import { fields3Schema, type Fields3 } from "../models/unions/fields3.js";
import { orderByDirection1Schema, type OrderByDirection1 } from "../models/unions/order-by-direction1.js";
import { orderBy31Schema, type OrderBy31 } from "../models/unions/order-by31.js";
import { pageSchema, type Page } from "../models/unions/page.js";
import { startDatetime3Schema, type StartDatetime3 } from "../models/unions/start-datetime3.js";
import type { Servers } from "../servers.js";

/**
 * Operations related to conversations. A conversation is a record of messages between a user and an
 * agent, and is composed of one or more sessions.
 */
export class Conversations {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Conversations List
   *
   * @returns Successful Response
   *
   * @throws {@link Conversations.ConversationsListError} when the API answers with an error status
   * — narrow on `err.payload.kind`
   *
   * @throws {@link SyllableSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  conversationsList(
    request: Conversations.ConversationsListRequest,
    options?: RequestOptions,
  ): ApiPromise<ListResponseConversation, Conversations.ConversationsListError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v1/conversations/"),
        auth: this.#auth.apiKeyHeader,
        pathParams: [],
        query: [
          { name: "page", value: request.page, schema: s.optional(s.lazy(() => pageSchema)) },
          { name: "limit", value: request.limit, schema: s.defaulted(s.int(), 25) },
          {
            name: "search_fields",
            value: request.searchFields,
            schema: s.optional(s.array(s.lazy(() => conversationPropertiesSchema))),
          },
          {
            name: "search_field_values",
            value: request.searchFieldValues,
            schema: s.optional(s.array(s.string())),
          },
          { name: "order_by", value: request.orderBy, schema: s.optional(s.lazy(() => orderBy31Schema)) },
          {
            name: "order_by_direction",
            value: request.orderByDirection,
            schema: s.optional(s.lazy(() => orderByDirection1Schema)),
          },
          { name: "fields", value: request.fields, schema: s.optional(s.lazy(() => fields3Schema)) },
          {
            name: "start_datetime",
            value: request.startDatetime,
            schema: s.optional(s.lazy(() => startDatetime3Schema)),
          },
          {
            name: "end_datetime",
            value: request.endDatetime,
            schema: s.optional(s.lazy(() => endDatetime3Schema)),
          },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: listResponseConversationSchema },
        errorFactory: Conversations.ConversationsListError,
      },
      options,
    );
  }
}

export namespace Conversations {
  export type ConversationsListRequest = {
    /** The page number from which to start (0-based) */
    page?: Page;
    /** The maximum number of items to return @default 25 */
    limit?: number;
    /** String names of fields to search. Correspond by index to search field values */
    searchFields?: ConversationProperties[];
    /**
     * Values of fields to search. Correspond by index to search fields. Unless field name contains
     * "list", an individual search field value cannot be a list
     */
    searchFieldValues?: string[];
    /** The field whose value should be used to order the results */
    orderBy?: OrderBy31;
    /** The direction in which to order the results */
    orderByDirection?: OrderByDirection1;
    /** The fields to include in the response */
    fields?: Fields3;
    /** The start datetime for filtering results */
    startDatetime?: StartDatetime3;
    /** The end datetime for filtering results */
    endDatetime?: EndDatetime3;
  };

  export class ConversationsListError extends ApiError {
    declare readonly payload: Declared<"httpValidationError", HttpValidationError> | Undeclared;

    static readonly errors: ErrorDecoders<ConversationsListError> = [
      { on: 422, kind: "httpValidationError", decode: { kind: "json", schema: httpValidationErrorSchema } },
    ];
  }
}
