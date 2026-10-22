import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { anyAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import * as s from "../core/validation/index.js";
import { apiErrorModelSchema, type ApiErrorModel } from "../models/api-error-model.js";
import { directionEnumSchema, type DirectionEnum } from "../models/direction-enum.js";
import { listResponseSchema, type ListResponse } from "../models/list-response.js";
import { moderationKindSchema, type ModerationKind } from "../models/moderation-kind.js";
import { moderationStatus2Schema, type ModerationStatus2 } from "../models/moderation-status2.js";
import { resourceTypeSchema, type ResourceType } from "../models/resource-type.js";
import { fieldsSchema, type Fields } from "../models/unions/fields.js";
import type { Servers } from "../servers.js";

export class Moderations {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Get resources by moderation kind and status
   *
   * @remarks
   * Retrieves resources matching specific moderation kind and status.
   *
   * @returns List of resources retrieved
   *
   * @throws {@link Moderations.ListResourcesByModerationKindAndStatusError} when the API answers
   * with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link CloudinaryAssetManagementApiError} when no usable response was produced: a
   * connection failure, a timeout, a body that would not decode, a value that would not encode, or
   * a credential that could not be obtained
   */
  listResourcesByModerationKindAndStatus(
    request: Moderations.ListResourcesByModerationKindAndStatusRequest,
    options?: RequestOptions,
  ): ApiPromise<ListResponse, Moderations.ListResourcesByModerationKindAndStatusError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default(
          "/v1_1/{cloud_name}/resources/{resource_type}/moderations/{moderation_kind}/{moderation_status}",
        ),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.oauth2),
        pathParams: [
          { name: "cloud_name", value: request.cloudName, schema: s.string() },
          { name: "resource_type", value: request.resourceType, schema: resourceTypeSchema },
          { name: "moderation_kind", value: request.moderationKind, schema: moderationKindSchema },
          { name: "moderation_status", value: request.moderationStatus, schema: moderationStatus2Schema },
        ],
        query: [
          { name: "fields", value: request.fields, schema: s.optional(s.lazy(() => fieldsSchema)) },
          { name: "next_cursor", value: request.nextCursor, schema: s.optional(s.string()) },
          { name: "max_results", value: request.maxResults, schema: s.optional(s.int()) },
          {
            name: "direction",
            value: request.direction,
            schema: s.optional(s.lazy(() => directionEnumSchema)),
          },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: listResponseSchema },
        errorFactory: Moderations.ListResourcesByModerationKindAndStatusError,
      },
      options,
    );
  }
}

export namespace Moderations {
  export type ListResourcesByModerationKindAndStatusRequest = {
    /** The cloud name of your product environment. */
    cloudName: string;
    /** The type of resource (image, video, or raw). */
    resourceType: ResourceType;
    /** The type of moderation to filter by. */
    moderationKind: ModerationKind;
    /** The moderation status to filter by. */
    moderationStatus: ModerationStatus2;
    /**
     * Additional fields to include in the response. The fields public_id and asset_id are always
     * included.
     */
    fields?: Fields;
    /** Cursor for pagination. */
    nextCursor?: string;
    /** Maximum number of results to return (1-500). */
    maxResults?: number;
    /** The sort direction for the results. Default is "desc". */
    direction?: DirectionEnum;
  };

  export class ListResourcesByModerationKindAndStatusError extends ApiError {
    declare readonly payload:
      | Declared<"apiErrorModel", ApiErrorModel>
      | Declared<"apiErrorModel2", ApiErrorModel>
      | Undeclared;

    static readonly errors: ErrorDecoders<ListResourcesByModerationKindAndStatusError> = [
      { on: 400, kind: "apiErrorModel", decode: { kind: "json", schema: apiErrorModelSchema } },
      { on: 401, kind: "apiErrorModel2", decode: { kind: "json", schema: apiErrorModelSchema } },
    ];
  }
}
