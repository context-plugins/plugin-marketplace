import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { geo1Schema, type Geo1 } from "../models/geo1.js";
import {
  linkCodeqrIoLinksApiInternalSchema,
  type LinkCodeqrIoLinksApi,
} from "../models/link-codeqr-io-links-api.js";
import { linksBulkRequestInternalSchema, type LinksBulkRequest } from "../models/links-bulk-request.js";
import { linksBulkResponseSchema, type LinksBulkResponse } from "../models/links-bulk-response.js";
import { linksRequestInternalSchema, type LinksRequest } from "../models/links-request.js";
import { linksRequest1InternalSchema, type LinksRequest1 } from "../models/links-request1.js";
import { linksResponseSchema, type LinksResponse } from "../models/links-response.js";
import { m4001Schema, type M4001 } from "../models/m4001.js";
import { Sort, sortSchema } from "../models/sort.js";
import { groupBy4Schema, type GroupBy4 } from "../models/unions/group-by4.js";
import { linkIdsSchema, type LinkIds } from "../models/unions/link-ids.js";
import {
  linksBulkResponse1InternalSchema,
  type LinksBulkResponse1,
} from "../models/unions/links-bulk-response1.js";
import { tagIdsModelSchema, type TagIdsModel } from "../models/unions/tag-ids-model.js";
import { tagNamesSchema, type TagNames } from "../models/unions/tag-names.js";
import type { Servers } from "../servers.js";

export class Links {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Bulk create links
   *
   * @remarks
   * Bulk create up to 100 links for the authenticated workspace.
   *
   * @returns The created links
   *
   * @throws {@link Links.BulkCreateLinksError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link CodeQrError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  bulkCreateLinks(
    request: Links.BulkCreateLinksRequest = {},
    options?: RequestOptions,
  ): ApiPromise<LinksBulkResponse1[], Links.BulkCreateLinksError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/links/bulk"),
        auth: this.#auth.token,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.array(s.lazy(() => linksBulkRequestInternalSchema))),
        },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => linksBulkResponse1InternalSchema)) },
        errorFactory: Links.BulkCreateLinksError,
      },
      options,
    );
  }

  /**
   * Bulk delete links
   *
   * @remarks
   * Bulk delete up to 100 links for the authenticated workspace.
   *
   * @returns The deleted links count.
   *
   * @throws {@link Links.BulkDeleteLinksError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link CodeQrError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  bulkDeleteLinks(
    request: Links.BulkDeleteLinksRequest,
    options?: RequestOptions,
  ): ApiPromise<LinksBulkResponse, Links.BulkDeleteLinksError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default("/links/bulk"),
        auth: this.#auth.token,
        pathParams: [],
        query: [{ name: "linkIds", value: request.linkIds, schema: s.array(s.string()), style: "csv" }],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: linksBulkResponseSchema },
        errorFactory: Links.BulkDeleteLinksError,
      },
      options,
    );
  }

  /**
   * Create a new link
   *
   * @remarks
   * Create a new link for the authenticated workspace.
   *
   * @returns The created link
   *
   * @throws {@link Links.CreateLinkError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link CodeQrError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  createLink(
    request: Links.CreateLinkRequest = {},
    options?: RequestOptions,
  ): ApiPromise<LinkCodeqrIoLinksApi, Links.CreateLinkError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/links"),
        auth: this.#auth.token,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => linksRequestInternalSchema)),
        },
      },
      {
        success: { kind: "json", schema: linkCodeqrIoLinksApiInternalSchema },
        errorFactory: Links.CreateLinkError,
      },
      options,
    );
  }

  /**
   * Delete a link
   *
   * @remarks
   * Delete a link for the authenticated workspace.
   *
   * @returns The deleted link ID.
   *
   * @throws {@link Links.DeleteLinkError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link CodeQrError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  deleteLink(
    request: Links.DeleteLinkRequest,
    options?: RequestOptions,
  ): ApiPromise<LinksResponse, Links.DeleteLinkError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default("/links/{linkId}"),
        auth: this.#auth.token,
        pathParams: [{ name: "linkId", value: request.linkId, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: linksResponseSchema },
        errorFactory: Links.DeleteLinkError,
      },
      options,
    );
  }

  /**
   * Retrieve a link
   *
   * @remarks
   * Retrieve the info for a link.
   *
   * @returns The retrieved link
   *
   * @throws {@link Links.GetLinkInfoError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link CodeQrError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getLinkInfo(
    request: Links.GetLinkInfoRequest,
    options?: RequestOptions,
  ): ApiPromise<LinkCodeqrIoLinksApi, Links.GetLinkInfoError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/links/info"),
        auth: this.#auth.token,
        pathParams: [],
        query: [
          { name: "projectSlug", value: request.projectSlug, schema: s.string() },
          { name: "domain", value: request.domain, schema: s.string() },
          { name: "key", value: request.key, schema: s.string() },
          { name: "linkId", value: request.linkId, schema: s.optional(s.string()) },
          { name: "externalId", value: request.externalId, schema: s.optional(s.string()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: linkCodeqrIoLinksApiInternalSchema },
        errorFactory: Links.GetLinkInfoError,
      },
      options,
    );
  }

  /**
   * Retrieve a list of links
   *
   * @remarks
   * Retrieve a paginated list of links for the authenticated workspace.
   *
   * @returns A list of links
   *
   * @throws {@link Links.GetLinksError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link CodeQrError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getLinks(
    request: Links.GetLinksRequest = {},
    options?: RequestOptions,
  ): ApiPromise<LinkCodeqrIoLinksApi[], Links.GetLinksError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/links"),
        auth: this.#auth.token,
        pathParams: [],
        query: [
          { name: "projectSlug", value: request.projectSlug, schema: s.optional(s.string()) },
          { name: "domain", value: request.domain, schema: s.optional(s.string()) },
          { name: "tagId", value: request.tagId, schema: s.optional(s.string()) },
          { name: "tagIds", value: request.tagIds, schema: s.optional(s.lazy(() => tagIdsModelSchema)) },
          { name: "tagNames", value: request.tagNames, schema: s.optional(s.lazy(() => tagNamesSchema)) },
          { name: "folderId", value: request.folderId, schema: s.optional(s.string()) },
          { name: "search", value: request.search, schema: s.optional(s.string()) },
          { name: "userId", value: request.userId, schema: s.optional(s.string()) },
          { name: "showArchived", value: request.showArchived, schema: s.defaulted(s.boolean(), false) },
          { name: "password", value: request.password, schema: s.optional(s.string()) },
          { name: "expiresAt", value: request.expiresAt, schema: s.optionalNullable(s.dateTime()) },
          { value: request.geo, schema: s.optionalNullable(s.lazy(() => geo1Schema)) },
          { name: "ios", value: request.ios, schema: s.optional(s.string()) },
          { name: "android", value: request.android, schema: s.optional(s.string()) },
          { name: "comments", value: request.comments, schema: s.optional(s.string()) },
          { name: "withTags", value: request.withTags, schema: s.defaulted(s.boolean(), false) },
          {
            name: "trackConversion",
            value: request.trackConversion,
            schema: s.defaulted(s.boolean(), false),
          },
          { name: "useAsTemplate", value: request.useAsTemplate, schema: s.optional(s.boolean()) },
          { name: "hasPassword", value: request.hasPassword, schema: s.optional(s.boolean()) },
          { name: "hasExpiration", value: request.hasExpiration, schema: s.optional(s.boolean()) },
          { name: "hasUTM", value: request.hasUtm, schema: s.optional(s.boolean()) },
          { name: "hasCustomSocial", value: request.hasCustomSocial, schema: s.optional(s.boolean()) },
          { name: "hasGeo", value: request.hasGeo, schema: s.optional(s.boolean()) },
          { name: "hasDevice", value: request.hasDevice, schema: s.optional(s.boolean()) },
          { name: "hasComments", value: request.hasComments, schema: s.optional(s.boolean()) },
          { name: "hasTags", value: request.hasTags, schema: s.optional(s.boolean()) },
          { name: "createdAfter", value: request.createdAfter, schema: s.optional(s.dateTime()) },
          { name: "createdBefore", value: request.createdBefore, schema: s.optional(s.dateTime()) },
          { name: "expiresAfter", value: request.expiresAfter, schema: s.optional(s.dateTime()) },
          { name: "expiresBefore", value: request.expiresBefore, schema: s.optional(s.dateTime()) },
          { name: "clicksMin", value: request.clicksMin, schema: s.optional(s.int()) },
          { name: "clicksMax", value: request.clicksMax, schema: s.optional(s.int()) },
          { name: "utm_source", value: request.utmSource, schema: s.optional(s.string()) },
          { name: "utm_medium", value: request.utmMedium, schema: s.optional(s.string()) },
          { name: "utm_campaign", value: request.utmCampaign, schema: s.optional(s.string()) },
          { name: "utm_content", value: request.utmContent, schema: s.optional(s.string()) },
          { name: "utm_term", value: request.utmTerm, schema: s.optional(s.string()) },
          { name: "sort", value: request.sort, schema: s.defaulted(sortSchema, Sort.CreatedAt) },
          { name: "linkIds", value: request.linkIds, schema: s.optional(s.lazy(() => linkIdsSchema)) },
          { name: "page", value: request.page, schema: s.defaulted(s.float64(), 1) },
          { name: "pageSize", value: request.pageSize, schema: s.defaulted(s.float64(), 100) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => linkCodeqrIoLinksApiInternalSchema)) },
        errorFactory: Links.GetLinksError,
      },
      options,
    );
  }

  /**
   * Retrieve links count
   *
   * @remarks
   * Retrieve the number of links for the authenticated workspace.
   *
   * @returns A list of links
   *
   * @throws {@link Links.GetLinksCountError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link CodeQrError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getLinksCount(
    request: Links.GetLinksCountRequest = {},
    options?: RequestOptions,
  ): ApiPromise<number, Links.GetLinksCountError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/links/count"),
        auth: this.#auth.token,
        pathParams: [],
        query: [
          { name: "projectSlug", value: request.projectSlug, schema: s.optional(s.string()) },
          { name: "domain", value: request.domain, schema: s.optional(s.string()) },
          { name: "tagId", value: request.tagId, schema: s.optional(s.string()) },
          { name: "tagIds", value: request.tagIds, schema: s.optional(s.lazy(() => tagIdsModelSchema)) },
          { name: "tagNames", value: request.tagNames, schema: s.optional(s.lazy(() => tagNamesSchema)) },
          { name: "folderId", value: request.folderId, schema: s.optional(s.string()) },
          { name: "search", value: request.search, schema: s.optional(s.string()) },
          { name: "userId", value: request.userId, schema: s.optional(s.string()) },
          { name: "showArchived", value: request.showArchived, schema: s.defaulted(s.boolean(), false) },
          { name: "password", value: request.password, schema: s.optional(s.string()) },
          { name: "expiresAt", value: request.expiresAt, schema: s.optionalNullable(s.dateTime()) },
          { value: request.geo, schema: s.optionalNullable(s.lazy(() => geo1Schema)) },
          { name: "ios", value: request.ios, schema: s.optional(s.string()) },
          { name: "android", value: request.android, schema: s.optional(s.string()) },
          { name: "comments", value: request.comments, schema: s.optional(s.string()) },
          { name: "withTags", value: request.withTags, schema: s.defaulted(s.boolean(), false) },
          {
            name: "trackConversion",
            value: request.trackConversion,
            schema: s.defaulted(s.boolean(), false),
          },
          { name: "useAsTemplate", value: request.useAsTemplate, schema: s.optional(s.boolean()) },
          { name: "hasPassword", value: request.hasPassword, schema: s.optional(s.boolean()) },
          { name: "hasExpiration", value: request.hasExpiration, schema: s.optional(s.boolean()) },
          { name: "hasUTM", value: request.hasUtm, schema: s.optional(s.boolean()) },
          { name: "hasCustomSocial", value: request.hasCustomSocial, schema: s.optional(s.boolean()) },
          { name: "hasGeo", value: request.hasGeo, schema: s.optional(s.boolean()) },
          { name: "hasDevice", value: request.hasDevice, schema: s.optional(s.boolean()) },
          { name: "hasComments", value: request.hasComments, schema: s.optional(s.boolean()) },
          { name: "hasTags", value: request.hasTags, schema: s.optional(s.boolean()) },
          { name: "createdAfter", value: request.createdAfter, schema: s.optional(s.dateTime()) },
          { name: "createdBefore", value: request.createdBefore, schema: s.optional(s.dateTime()) },
          { name: "expiresAfter", value: request.expiresAfter, schema: s.optional(s.dateTime()) },
          { name: "expiresBefore", value: request.expiresBefore, schema: s.optional(s.dateTime()) },
          { name: "clicksMin", value: request.clicksMin, schema: s.optional(s.int()) },
          { name: "clicksMax", value: request.clicksMax, schema: s.optional(s.int()) },
          { name: "utm_source", value: request.utmSource, schema: s.optional(s.string()) },
          { name: "utm_medium", value: request.utmMedium, schema: s.optional(s.string()) },
          { name: "utm_campaign", value: request.utmCampaign, schema: s.optional(s.string()) },
          { name: "utm_content", value: request.utmContent, schema: s.optional(s.string()) },
          { name: "utm_term", value: request.utmTerm, schema: s.optional(s.string()) },
          { name: "groupBy", value: request.groupBy, schema: s.optional(s.lazy(() => groupBy4Schema)) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.float64() },
        errorFactory: Links.GetLinksCountError,
      },
      options,
    );
  }

  /**
   * Update a link
   *
   * @remarks
   * Update a link for the authenticated workspace. If there's no change, returns it as it is.
   *
   * @returns The updated link
   *
   * @throws {@link Links.UpdateLinkError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link CodeQrError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  updateLink(
    request: Links.UpdateLinkRequest,
    options?: RequestOptions,
  ): ApiPromise<LinkCodeqrIoLinksApi, Links.UpdateLinkError> {
    return this.#rawClient.execute(
      {
        method: "PUT",
        urlTemplate: this.#servers.default("/links/{linkId}"),
        auth: this.#auth.token,
        pathParams: [{ name: "linkId", value: request.linkId, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => linksRequest1InternalSchema)),
        },
      },
      {
        success: { kind: "json", schema: linkCodeqrIoLinksApiInternalSchema },
        errorFactory: Links.UpdateLinkError,
      },
      options,
    );
  }
}

export namespace Links {
  export type BulkCreateLinksRequest = {
    body?: LinksBulkRequest[];
  };

  export class BulkCreateLinksError extends ApiError {
    declare readonly payload:
      | Declared<"m4001", M4001>
      | Declared<"m40012", M4001>
      | Declared<"m40013", M4001>
      | Declared<"m40014", M4001>
      | Declared<"m40015", M4001>
      | Declared<"m40016", M4001>
      | Declared<"m40017", M4001>
      | Declared<"m40018", M4001>
      | Declared<"m40019", M4001>
      | Undeclared;

    static readonly errors: ErrorDecoders<BulkCreateLinksError> = [
      { on: 400, kind: "m4001", decode: { kind: "json", schema: m4001Schema } },
      { on: 401, kind: "m40012", decode: { kind: "json", schema: m4001Schema } },
      { on: 403, kind: "m40013", decode: { kind: "json", schema: m4001Schema } },
      { on: 404, kind: "m40014", decode: { kind: "json", schema: m4001Schema } },
      { on: 409, kind: "m40015", decode: { kind: "json", schema: m4001Schema } },
      { on: 410, kind: "m40016", decode: { kind: "json", schema: m4001Schema } },
      { on: 422, kind: "m40017", decode: { kind: "json", schema: m4001Schema } },
      { on: 429, kind: "m40018", decode: { kind: "json", schema: m4001Schema } },
      { on: 500, kind: "m40019", decode: { kind: "json", schema: m4001Schema } },
    ];
  }

  export type BulkDeleteLinksRequest = {
    /**
     * Comma-separated list of link IDs to delete. Maximum of 100 IDs. Non-existing IDs will be
     * ignored.
     */
    linkIds: string[];
  };

  export class BulkDeleteLinksError extends ApiError {
    declare readonly payload:
      | Declared<"m4001", M4001>
      | Declared<"m40012", M4001>
      | Declared<"m40013", M4001>
      | Declared<"m40014", M4001>
      | Declared<"m40015", M4001>
      | Declared<"m40016", M4001>
      | Declared<"m40017", M4001>
      | Declared<"m40018", M4001>
      | Declared<"m40019", M4001>
      | Undeclared;

    static readonly errors: ErrorDecoders<BulkDeleteLinksError> = [
      { on: 400, kind: "m4001", decode: { kind: "json", schema: m4001Schema } },
      { on: 401, kind: "m40012", decode: { kind: "json", schema: m4001Schema } },
      { on: 403, kind: "m40013", decode: { kind: "json", schema: m4001Schema } },
      { on: 404, kind: "m40014", decode: { kind: "json", schema: m4001Schema } },
      { on: 409, kind: "m40015", decode: { kind: "json", schema: m4001Schema } },
      { on: 410, kind: "m40016", decode: { kind: "json", schema: m4001Schema } },
      { on: 422, kind: "m40017", decode: { kind: "json", schema: m4001Schema } },
      { on: 429, kind: "m40018", decode: { kind: "json", schema: m4001Schema } },
      { on: 500, kind: "m40019", decode: { kind: "json", schema: m4001Schema } },
    ];
  }

  export type CreateLinkRequest = {
    body?: LinksRequest;
  };

  export class CreateLinkError extends ApiError {
    declare readonly payload:
      | Declared<"m4001", M4001>
      | Declared<"m40012", M4001>
      | Declared<"m40013", M4001>
      | Declared<"m40014", M4001>
      | Declared<"m40015", M4001>
      | Declared<"m40016", M4001>
      | Declared<"m40017", M4001>
      | Declared<"m40018", M4001>
      | Declared<"m40019", M4001>
      | Undeclared;

    static readonly errors: ErrorDecoders<CreateLinkError> = [
      { on: 400, kind: "m4001", decode: { kind: "json", schema: m4001Schema } },
      { on: 401, kind: "m40012", decode: { kind: "json", schema: m4001Schema } },
      { on: 403, kind: "m40013", decode: { kind: "json", schema: m4001Schema } },
      { on: 404, kind: "m40014", decode: { kind: "json", schema: m4001Schema } },
      { on: 409, kind: "m40015", decode: { kind: "json", schema: m4001Schema } },
      { on: 410, kind: "m40016", decode: { kind: "json", schema: m4001Schema } },
      { on: 422, kind: "m40017", decode: { kind: "json", schema: m4001Schema } },
      { on: 429, kind: "m40018", decode: { kind: "json", schema: m4001Schema } },
      { on: 500, kind: "m40019", decode: { kind: "json", schema: m4001Schema } },
    ];
  }

  export type DeleteLinkRequest = {
    /**
     * The id of the link to delete. You may use either `linkId` (obtained via `/links/info`
     * endpoint) or `externalId` prefixed with `ext_`.
     */
    linkId: string;
  };

  export class DeleteLinkError extends ApiError {
    declare readonly payload:
      | Declared<"m4001", M4001>
      | Declared<"m40012", M4001>
      | Declared<"m40013", M4001>
      | Declared<"m40014", M4001>
      | Declared<"m40015", M4001>
      | Declared<"m40016", M4001>
      | Declared<"m40017", M4001>
      | Declared<"m40018", M4001>
      | Declared<"m40019", M4001>
      | Undeclared;

    static readonly errors: ErrorDecoders<DeleteLinkError> = [
      { on: 400, kind: "m4001", decode: { kind: "json", schema: m4001Schema } },
      { on: 401, kind: "m40012", decode: { kind: "json", schema: m4001Schema } },
      { on: 403, kind: "m40013", decode: { kind: "json", schema: m4001Schema } },
      { on: 404, kind: "m40014", decode: { kind: "json", schema: m4001Schema } },
      { on: 409, kind: "m40015", decode: { kind: "json", schema: m4001Schema } },
      { on: 410, kind: "m40016", decode: { kind: "json", schema: m4001Schema } },
      { on: 422, kind: "m40017", decode: { kind: "json", schema: m4001Schema } },
      { on: 429, kind: "m40018", decode: { kind: "json", schema: m4001Schema } },
      { on: 500, kind: "m40019", decode: { kind: "json", schema: m4001Schema } },
    ];
  }

  export type GetLinkInfoRequest = {
    /**
     * The slug of the project to which the link belongs. For example, for `app.codeqr.io/acme`, the
     * projectSlug is `acme`.
     */
    projectSlug: string;
    domain: string;
    /**
     * The key of the link to be retrieved. For example, for `codeqr.link/github`, the key is
     * `github`.
     */
    key: string;
    /** The unique ID of the short link. */
    linkId?: string;
    /**
     * This is the ID of the link in your database. Must be prefixed with `ext_` when passed as a
     * query parameter.
     */
    externalId?: string;
  };

  export const getLinkInfoRequestSchema: Schema<GetLinkInfoRequest> = s.lazySchema(() =>
    s.object<GetLinkInfoRequest>({
      projectSlug: s.string().check(s.minLength(1)),
      domain: s.string().check(s.minLength(1)),
      key: s.string().check(s.minLength(1)),
      linkId: s.optional(s.string()),
      externalId: s.optional(s.string()),
    }),
  );

  export class GetLinkInfoError extends ApiError {
    declare readonly payload:
      | Declared<"m4001", M4001>
      | Declared<"m40012", M4001>
      | Declared<"m40013", M4001>
      | Declared<"m40014", M4001>
      | Declared<"m40015", M4001>
      | Declared<"m40016", M4001>
      | Declared<"m40017", M4001>
      | Declared<"m40018", M4001>
      | Declared<"m40019", M4001>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetLinkInfoError> = [
      { on: 400, kind: "m4001", decode: { kind: "json", schema: m4001Schema } },
      { on: 401, kind: "m40012", decode: { kind: "json", schema: m4001Schema } },
      { on: 403, kind: "m40013", decode: { kind: "json", schema: m4001Schema } },
      { on: 404, kind: "m40014", decode: { kind: "json", schema: m4001Schema } },
      { on: 409, kind: "m40015", decode: { kind: "json", schema: m4001Schema } },
      { on: 410, kind: "m40016", decode: { kind: "json", schema: m4001Schema } },
      { on: 422, kind: "m40017", decode: { kind: "json", schema: m4001Schema } },
      { on: 429, kind: "m40018", decode: { kind: "json", schema: m4001Schema } },
      { on: 500, kind: "m40019", decode: { kind: "json", schema: m4001Schema } },
    ];
  }

  export type GetLinksRequest = {
    /**
     * The slug of the project to which the link belongs. For example, for `app.codeqr.io/acme`, the
     * projectSlug is `acme`.
     */
    projectSlug?: string;
    /**
     * The domain to filter the links. For example, `ac.me`. If not provided, all links of the
     * project will be returned.
     */
    domain?: string;
    /**
     * [OBSOLETO (use tagIds em vez disso)]: The unique ID of the tag assigned to the short link.
     */
    tagId?: string;
    /** The IDs of the tags to filter the links. */
    tagIds?: TagIdsModel;
    /** The unique name of the tags assigned to the short link (case insensitive). */
    tagNames?: TagNames;
    /** The folder ID to filter the links by. */
    folderId?: string;
    /**
     * The search term to filter the links. The search term will be matched against the short link
     * slug and the destination URL.
     */
    search?: string;
    /** The ID of the user to filter by. */
    userId?: string;
    /**
     * If should include archived links in the response. The default is `false` if not provided.
     *
     * @default false
     */
    showArchived?: boolean;
    /** The password to filter by. */
    password?: string;
    expiresAt?: Date | null;
    /**
     * Geographic segmentation information for the short link in JSON format `{[COUNTRY]:
     * https://example.com }`.
     */
    geo?: Geo1 | null;
    /** The iOS device to filter by. */
    ios?: string;
    /** The Android device to filter by. */
    android?: string;
    /** The comments to filter by. */
    comments?: string;
    /**
     * If should include tags in the response. The default is `false` if not provided.
     *
     * @default false
     */
    withTags?: boolean;
    /**
     * If should include links with conversion tracking enabled. The default is `false` if not
     * provided.
     *
     * @default false
     */
    trackConversion?: boolean;
    /** Filter links marked as templates. */
    useAsTemplate?: boolean;
    /** Filter links that have password protection (any password) */
    hasPassword?: boolean;
    /** Filter links that have expiration date (any expiration) */
    hasExpiration?: boolean;
    /** Filter links that have UTM parameters */
    hasUtm?: boolean;
    /** Filter links that have custom social media cards */
    hasCustomSocial?: boolean;
    /** Filter links that have geo-targeting */
    hasGeo?: boolean;
    /** Filter links that have device targeting */
    hasDevice?: boolean;
    /** Filter links that have comments (any comments) */
    hasComments?: boolean;
    /** Filter links that have tags (any tags) */
    hasTags?: boolean;
    /** Created after date (ISO string) */
    createdAfter?: Date;
    /** Created before date (ISO string) */
    createdBefore?: Date;
    /** Expires after date (ISO string) */
    expiresAfter?: Date;
    /** Expires before date (ISO string) */
    expiresBefore?: Date;
    /** Minimum number of clicks */
    clicksMin?: number;
    /** Maximum number of clicks */
    clicksMax?: number;
    /** Filter by UTM source value */
    utmSource?: string;
    /** Filter by UTM medium value */
    utmMedium?: string;
    /** Filter by UTM campaign value */
    utmCampaign?: string;
    /** Filter by UTM content value */
    utmContent?: string;
    /** Filter by UTM term value */
    utmTerm?: string;
    /**
     * The field to sort the links by. The default is `createdAt`, and sort order is always
     * descending.
     *
     * @default Sort.CreatedAt
     */
    sort?: Sort;
    /** Link IDs to filter by. */
    linkIds?: LinkIds;
    /** The page number for pagination. @default 1 */
    page?: number;
    /** The number of items per page. @default 100 */
    pageSize?: number;
  };

  export const getLinksRequestSchema: Schema<GetLinksRequest> = s.lazySchema(() =>
    s.object<GetLinksRequest>({
      projectSlug: s.optional(s.string()),
      domain: s.optional(s.string()),
      tagId: s.optional(s.string()),
      tagIds: s.optional(s.lazy(() => tagIdsModelSchema)),
      tagNames: s.optional(s.lazy(() => tagNamesSchema)),
      folderId: s.optional(s.string()),
      search: s.optional(s.string()),
      userId: s.optional(s.string()),
      showArchived: s.defaulted(s.boolean(), false),
      password: s.optional(s.string()),
      expiresAt: s.optionalNullable(s.dateTime()),
      geo: s.optionalNullable(s.lazy(() => geo1Schema)),
      ios: s.optional(s.string()),
      android: s.optional(s.string()),
      comments: s.optional(s.string()),
      withTags: s.defaulted(s.boolean(), false),
      trackConversion: s.defaulted(s.boolean(), false),
      useAsTemplate: s.optional(s.boolean()),
      hasPassword: s.optional(s.boolean()),
      hasExpiration: s.optional(s.boolean()),
      hasUtm: s.optional(s.boolean()),
      hasCustomSocial: s.optional(s.boolean()),
      hasGeo: s.optional(s.boolean()),
      hasDevice: s.optional(s.boolean()),
      hasComments: s.optional(s.boolean()),
      hasTags: s.optional(s.boolean()),
      createdAfter: s.optional(s.dateTime()),
      createdBefore: s.optional(s.dateTime()),
      expiresAfter: s.optional(s.dateTime()),
      expiresBefore: s.optional(s.dateTime()),
      clicksMin: s.optional(s.int().check(s.gte(0))),
      clicksMax: s.optional(s.int().check(s.gte(0))),
      utmSource: s.optional(s.string()),
      utmMedium: s.optional(s.string()),
      utmCampaign: s.optional(s.string()),
      utmContent: s.optional(s.string()),
      utmTerm: s.optional(s.string()),
      sort: s.defaulted(sortSchema, Sort.CreatedAt),
      linkIds: s.optional(s.lazy(() => linkIdsSchema)),
      page: s.defaulted(s.float64().check(s.gt(0)), 1),
      pageSize: s.defaulted(s.float64().check(s.gt(0), s.lte(100)), 100),
    }),
  );

  export class GetLinksError extends ApiError {
    declare readonly payload:
      | Declared<"m4001", M4001>
      | Declared<"m40012", M4001>
      | Declared<"m40013", M4001>
      | Declared<"m40014", M4001>
      | Declared<"m40015", M4001>
      | Declared<"m40016", M4001>
      | Declared<"m40017", M4001>
      | Declared<"m40018", M4001>
      | Declared<"m40019", M4001>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetLinksError> = [
      { on: 400, kind: "m4001", decode: { kind: "json", schema: m4001Schema } },
      { on: 401, kind: "m40012", decode: { kind: "json", schema: m4001Schema } },
      { on: 403, kind: "m40013", decode: { kind: "json", schema: m4001Schema } },
      { on: 404, kind: "m40014", decode: { kind: "json", schema: m4001Schema } },
      { on: 409, kind: "m40015", decode: { kind: "json", schema: m4001Schema } },
      { on: 410, kind: "m40016", decode: { kind: "json", schema: m4001Schema } },
      { on: 422, kind: "m40017", decode: { kind: "json", schema: m4001Schema } },
      { on: 429, kind: "m40018", decode: { kind: "json", schema: m4001Schema } },
      { on: 500, kind: "m40019", decode: { kind: "json", schema: m4001Schema } },
    ];
  }

  export type GetLinksCountRequest = {
    /**
     * The slug of the project to which the link belongs. For example, for `app.codeqr.io/acme`, the
     * projectSlug is `acme`.
     */
    projectSlug?: string;
    /**
     * The domain to filter the links. For example, `ac.me`. If not provided, all links of the
     * project will be returned.
     */
    domain?: string;
    /**
     * [OBSOLETO (use tagIds em vez disso)]: The unique ID of the tag assigned to the short link.
     */
    tagId?: string;
    /** The IDs of the tags to filter the links. */
    tagIds?: TagIdsModel;
    /** The unique name of the tags assigned to the short link (case insensitive). */
    tagNames?: TagNames;
    /** The folder ID to filter the links by. */
    folderId?: string;
    /**
     * The search term to filter the links. The search term will be matched against the short link
     * slug and the destination URL.
     */
    search?: string;
    /** The ID of the user to filter by. */
    userId?: string;
    /**
     * If should include archived links in the response. The default is `false` if not provided.
     *
     * @default false
     */
    showArchived?: boolean;
    /** The password to filter by. */
    password?: string;
    expiresAt?: Date | null;
    /**
     * Geographic segmentation information for the short link in JSON format `{[COUNTRY]:
     * https://example.com }`.
     */
    geo?: Geo1 | null;
    /** The iOS device to filter by. */
    ios?: string;
    /** The Android device to filter by. */
    android?: string;
    /** The comments to filter by. */
    comments?: string;
    /**
     * If should include tags in the response. The default is `false` if not provided.
     *
     * @default false
     */
    withTags?: boolean;
    /**
     * If should include links with conversion tracking enabled. The default is `false` if not
     * provided.
     *
     * @default false
     */
    trackConversion?: boolean;
    /** Filter links marked as templates. */
    useAsTemplate?: boolean;
    /** Filter links that have password protection (any password) */
    hasPassword?: boolean;
    /** Filter links that have expiration date (any expiration) */
    hasExpiration?: boolean;
    /** Filter links that have UTM parameters */
    hasUtm?: boolean;
    /** Filter links that have custom social media cards */
    hasCustomSocial?: boolean;
    /** Filter links that have geo-targeting */
    hasGeo?: boolean;
    /** Filter links that have device targeting */
    hasDevice?: boolean;
    /** Filter links that have comments (any comments) */
    hasComments?: boolean;
    /** Filter links that have tags (any tags) */
    hasTags?: boolean;
    /** Created after date (ISO string) */
    createdAfter?: Date;
    /** Created before date (ISO string) */
    createdBefore?: Date;
    /** Expires after date (ISO string) */
    expiresAfter?: Date;
    /** Expires before date (ISO string) */
    expiresBefore?: Date;
    /** Minimum number of clicks */
    clicksMin?: number;
    /** Maximum number of clicks */
    clicksMax?: number;
    /** Filter by UTM source value */
    utmSource?: string;
    /** Filter by UTM medium value */
    utmMedium?: string;
    /** Filter by UTM campaign value */
    utmCampaign?: string;
    /** Filter by UTM content value */
    utmContent?: string;
    /** Filter by UTM term value */
    utmTerm?: string;
    /** The field to group the links by. */
    groupBy?: GroupBy4;
  };

  export const getLinksCountRequestSchema: Schema<GetLinksCountRequest> = s.lazySchema(() =>
    s.object<GetLinksCountRequest>({
      projectSlug: s.optional(s.string()),
      domain: s.optional(s.string()),
      tagId: s.optional(s.string()),
      tagIds: s.optional(s.lazy(() => tagIdsModelSchema)),
      tagNames: s.optional(s.lazy(() => tagNamesSchema)),
      folderId: s.optional(s.string()),
      search: s.optional(s.string()),
      userId: s.optional(s.string()),
      showArchived: s.defaulted(s.boolean(), false),
      password: s.optional(s.string()),
      expiresAt: s.optionalNullable(s.dateTime()),
      geo: s.optionalNullable(s.lazy(() => geo1Schema)),
      ios: s.optional(s.string()),
      android: s.optional(s.string()),
      comments: s.optional(s.string()),
      withTags: s.defaulted(s.boolean(), false),
      trackConversion: s.defaulted(s.boolean(), false),
      useAsTemplate: s.optional(s.boolean()),
      hasPassword: s.optional(s.boolean()),
      hasExpiration: s.optional(s.boolean()),
      hasUtm: s.optional(s.boolean()),
      hasCustomSocial: s.optional(s.boolean()),
      hasGeo: s.optional(s.boolean()),
      hasDevice: s.optional(s.boolean()),
      hasComments: s.optional(s.boolean()),
      hasTags: s.optional(s.boolean()),
      createdAfter: s.optional(s.dateTime()),
      createdBefore: s.optional(s.dateTime()),
      expiresAfter: s.optional(s.dateTime()),
      expiresBefore: s.optional(s.dateTime()),
      clicksMin: s.optional(s.int().check(s.gte(0))),
      clicksMax: s.optional(s.int().check(s.gte(0))),
      utmSource: s.optional(s.string()),
      utmMedium: s.optional(s.string()),
      utmCampaign: s.optional(s.string()),
      utmContent: s.optional(s.string()),
      utmTerm: s.optional(s.string()),
      groupBy: s.optional(s.lazy(() => groupBy4Schema)),
    }),
  );

  export class GetLinksCountError extends ApiError {
    declare readonly payload:
      | Declared<"m4001", M4001>
      | Declared<"m40012", M4001>
      | Declared<"m40013", M4001>
      | Declared<"m40014", M4001>
      | Declared<"m40015", M4001>
      | Declared<"m40016", M4001>
      | Declared<"m40017", M4001>
      | Declared<"m40018", M4001>
      | Declared<"m40019", M4001>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetLinksCountError> = [
      { on: 400, kind: "m4001", decode: { kind: "json", schema: m4001Schema } },
      { on: 401, kind: "m40012", decode: { kind: "json", schema: m4001Schema } },
      { on: 403, kind: "m40013", decode: { kind: "json", schema: m4001Schema } },
      { on: 404, kind: "m40014", decode: { kind: "json", schema: m4001Schema } },
      { on: 409, kind: "m40015", decode: { kind: "json", schema: m4001Schema } },
      { on: 410, kind: "m40016", decode: { kind: "json", schema: m4001Schema } },
      { on: 422, kind: "m40017", decode: { kind: "json", schema: m4001Schema } },
      { on: 429, kind: "m40018", decode: { kind: "json", schema: m4001Schema } },
      { on: 500, kind: "m40019", decode: { kind: "json", schema: m4001Schema } },
    ];
  }

  export type UpdateLinkRequest = {
    /**
     * The id of the link to update. You may use either `linkId` (obtained via `/links/info`
     * endpoint) or `externalId` prefixed with `ext_`.
     */
    linkId: string;
    body?: LinksRequest1;
  };

  export class UpdateLinkError extends ApiError {
    declare readonly payload:
      | Declared<"m4001", M4001>
      | Declared<"m40012", M4001>
      | Declared<"m40013", M4001>
      | Declared<"m40014", M4001>
      | Declared<"m40015", M4001>
      | Declared<"m40016", M4001>
      | Declared<"m40017", M4001>
      | Declared<"m40018", M4001>
      | Declared<"m40019", M4001>
      | Undeclared;

    static readonly errors: ErrorDecoders<UpdateLinkError> = [
      { on: 400, kind: "m4001", decode: { kind: "json", schema: m4001Schema } },
      { on: 401, kind: "m40012", decode: { kind: "json", schema: m4001Schema } },
      { on: 403, kind: "m40013", decode: { kind: "json", schema: m4001Schema } },
      { on: 404, kind: "m40014", decode: { kind: "json", schema: m4001Schema } },
      { on: 409, kind: "m40015", decode: { kind: "json", schema: m4001Schema } },
      { on: 410, kind: "m40016", decode: { kind: "json", schema: m4001Schema } },
      { on: 422, kind: "m40017", decode: { kind: "json", schema: m4001Schema } },
      { on: 429, kind: "m40018", decode: { kind: "json", schema: m4001Schema } },
      { on: 500, kind: "m40019", decode: { kind: "json", schema: m4001Schema } },
    ];
  }
}
