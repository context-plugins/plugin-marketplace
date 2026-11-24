import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { noneAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import { errorSchema, type Error } from "../models/error.js";
import { PostAudienceFilter, postAudienceFilterSchema } from "../models/post-audience-filter.js";
import { postExpandFieldSchema, type PostExpandField } from "../models/post-expand-field.js";
import { PostOrderBy, postOrderBySchema } from "../models/post-order-by.js";
import { PostPlatformFilter, postPlatformFilterSchema } from "../models/post-platform-filter.js";
import { postProcessingSchema, type PostProcessing } from "../models/post-processing.js";
import { PostStatusFilter, postStatusFilterSchema } from "../models/post-status-filter.js";
import {
  postsAggregateStatsResponseSchema,
  type PostsAggregateStatsResponse,
} from "../models/posts-aggregate-stats-response.js";
import { postsCreateResponseSchema, type PostsCreateResponse } from "../models/posts-create-response.js";
import { postsGetResponseSchema, type PostsGetResponse } from "../models/posts-get-response.js";
import {
  PostsListRequestHiddenFromFeed,
  postsListRequestHiddenFromFeedSchema,
} from "../models/posts-list-request-hidden-from-feed.js";
import { postsListResponseSchema, type PostsListResponse } from "../models/posts-list-response.js";
import { postsPreviewResponseSchema, type PostsPreviewResponse } from "../models/posts-preview-response.js";
import {
  postsTestSendResponseSchema,
  type PostsTestSendResponse,
} from "../models/posts-test-send-response.js";
import {
  publicationsPostsRequestSchema,
  type PublicationsPostsRequest,
} from "../models/publications-posts-request.js";
import {
  publicationsPostsRequest1Schema,
  type PublicationsPostsRequest1,
} from "../models/publications-posts-request1.js";
import {
  publicationsPostsTestSendsRequestSchema,
  type PublicationsPostsTestSendsRequest,
} from "../models/publications-posts-test-sends-request.js";
import { RequestDirection, requestDirectionSchema } from "../models/request-direction.js";
import type { Servers } from "../servers.js";

export class Posts {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;

  constructor(rawClient: RawClient, servers: Servers) {
    this.#rawClient = rawClient;
    this.#servers = servers;
  }

  /**
   * Get aggregate stats OAuth Scope: posts:read
   *
   * @remarks
   * Retrieve aggregate stats for all posts
   *
   * @returns OK
   *
   * @throws {@link Posts.AggregateStatsError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link BeehiivError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  aggregateStats(
    request: Posts.AggregateStatsRequest,
    options?: RequestOptions,
  ): ApiPromise<PostsAggregateStatsResponse, Posts.AggregateStatsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/publications/{publicationId}/posts/aggregate_stats"),
        auth: noneAuth,
        pathParams: [{ name: "publicationId", value: request.publicationId, schema: s.string() }],
        query: [
          {
            name: "audience",
            value: request.audience,
            schema: s.defaulted(postAudienceFilterSchema, PostAudienceFilter.All),
          },
          {
            name: "platform",
            value: request.platform,
            schema: s.defaulted(postPlatformFilterSchema, PostPlatformFilter.All),
          },
          {
            name: "status",
            value: request.status,
            schema: s.defaulted(postStatusFilterSchema, PostStatusFilter.All),
          },
          { name: "content_tags[]", value: request.contentTags, schema: s.optional(s.array(s.string())) },
          { name: "authors[]", value: request.authors, schema: s.optional(s.array(s.string())) },
          {
            name: "hidden_from_feed",
            value: request.hiddenFromFeed,
            schema: s.defaulted(postsListRequestHiddenFromFeedSchema, PostsListRequestHiddenFromFeed.All),
          },
        ],
        headers: [{ name: "Authorization", value: request.authorization, schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: postsAggregateStatsResponseSchema },
        errorFactory: Posts.AggregateStatsError,
      },
      options,
    );
  }

  /**
   * Create post OAuth Scope: posts:write
   *
   * @remarks
   * This endpoint is available to publications on the Max and Enterprise plans.
   *
   * Create a post for a specific publication. For a detailed walkthrough including setup, testing
   * workflows, and working with custom HTML and templates, see the Using the Send API and Create
   * Post Endpoint guide.
   *
   * ## Asynchronous creation
   *
   * Post creation is processed in the background. This endpoint returns `201` immediately with the
   * post's `id`, but the post is not finished being created at that moment. The returned `id` is
   * stable — it is the same id the post will have once creation completes.
   *
   * If you fetch the post (`GET /publications/{publicationId}/posts/{postId}`) right away, it may
   * not exist yet. In that case the fetch returns `202` (still being created) — wait briefly and
   * retry, honoring the `Retry-After` header. If background creation fails, the fetch returns `404`
   * with the error code `POST_CREATION_FAILED`, so you should stop retrying, verify your request,
   * and try creating the post again.
   *
   * ## Content methods
   *
   * There are three ways to provide content for a post. You must provide either `blocks` or
   * `body_content`, but not both.
   *
   * ### 1. Blocks
   *
   * Use the `blocks` field to build your post with structured content blocks such as paragraphs,
   * images, headings, buttons, tables, and more. Each block has a `type` and its own set of
   * properties. This method gives you fine-grained control over individual content elements and
   * supports features like visual settings, visibility settings, and dynamic content targeting.
   *
   * ### 2. Raw HTML (`body_content`)
   *
   * Use the `body_content` field to provide a single string of raw HTML. The HTML is wrapped in an
   * `htmlSnippet` block internally. This is useful when you have pre-built HTML content or are
   * migrating from another platform.
   *
   * ### 3. HTML blocks within blocks
   *
   * Use `type: html` blocks inside the `blocks` array to embed raw HTML snippets alongside other
   * structured blocks. This lets you mix structured content (paragraphs, images, etc.) with custom
   * HTML where needed.
   *
   * ## CSS and styling guardrails
   *
   * beehiiv processes all HTML content through a sanitization pipeline. When using `body_content`
   * or `html` blocks, be aware of the following:
   *
   * - **`` tags are removed.** All `` block elements are stripped during sanitization. Do not rely
   *   on embedded stylesheets.
   * - **`` tags are removed.** External stylesheet references are not allowed.
   * - **Inline styles are preserved.** Styles applied directly to elements via the `style`
   *   attribute (e.g., ` `) are kept intact.
   * - **CSS classes have no effect.** While class attributes are not stripped, no corresponding
   *   stylesheets are loaded to apply them.
   * - **beehiiv's email template wraps your content.** Your HTML is rendered inside beehiiv's email
   *   table structure, which applies its own layout and spacing. This may affect the appearance of
   *   your content.
   * - **Use inline styles for all visual styling.** Since `` and `` tags are removed, inline styles
   *   on individual elements are the only reliable way to control appearance.
   *
   * @returns Created
   *
   * @throws {@link Posts.Create8Error} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link BeehiivError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  create8(
    request: Posts.Create8Request,
    options?: RequestOptions,
  ): ApiPromise<PostsCreateResponse, Posts.Create8Error> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/publications/{publicationId}/posts"),
        auth: noneAuth,
        pathParams: [{ name: "publicationId", value: request.publicationId, schema: s.string() }],
        query: [],
        headers: [
          { name: "Authorization", value: request.authorization, schema: s.string() },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => publicationsPostsRequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: postsCreateResponseSchema },
        errorFactory: Posts.Create8Error,
      },
      options,
    );
  }

  /**
   * Delete post OAuth Scope: posts:write
   *
   * @remarks
   * Delete or Archive a post. Any post that has been confirmed will have it's status changed to
   * `archived`. Posts in the `draft` status will be permanently deleted.
   *
   * @returns The post was created via the Send API and is still being processed in the background.
   * Wait briefly and retry, honoring the `Retry-After` header.
   *
   * @throws {@link Posts.Delete3Error} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link BeehiivError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  delete3(
    request: Posts.Delete3Request,
    options?: RequestOptions,
  ): ApiPromise<PostProcessing, Posts.Delete3Error> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default("/publications/{publicationId}/posts/{postId}"),
        auth: noneAuth,
        pathParams: [
          { name: "publicationId", value: request.publicationId, schema: s.string() },
          { name: "postId", value: request.postId, schema: s.string() },
        ],
        query: [],
        headers: [
          { name: "Authorization", value: request.authorization, schema: s.string() },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: postProcessingSchema },
        errorFactory: Posts.Delete3Error,
      },
      options,
    );
  }

  /**
   * List posts OAuth Scope: posts:read
   *
   * @remarks
   * Retrieve all posts belonging to a specific publication
   *
   * @returns OK
   *
   * @throws {@link Posts.Index17Error} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link BeehiivError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  index17(
    request: Posts.Index17Request,
    options?: RequestOptions,
  ): ApiPromise<PostsListResponse, Posts.Index17Error> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/publications/{publicationId}/posts"),
        auth: noneAuth,
        pathParams: [{ name: "publicationId", value: request.publicationId, schema: s.string() }],
        query: [
          {
            name: "expand",
            value: request.expand,
            schema: s.optional(s.array(s.lazy(() => postExpandFieldSchema))),
          },
          {
            name: "audience",
            value: request.audience,
            schema: s.defaulted(postAudienceFilterSchema, PostAudienceFilter.All),
          },
          {
            name: "platform",
            value: request.platform,
            schema: s.defaulted(postPlatformFilterSchema, PostPlatformFilter.All),
          },
          {
            name: "status",
            value: request.status,
            schema: s.defaulted(postStatusFilterSchema, PostStatusFilter.All),
          },
          { name: "content_tags[]", value: request.contentTags, schema: s.optional(s.array(s.string())) },
          { name: "slugs[]", value: request.slugs, schema: s.optional(s.array(s.string())) },
          { name: "authors[]", value: request.authors, schema: s.optional(s.array(s.string())) },
          { name: "premium_tiers", value: request.premiumTiers, schema: s.optional(s.array(s.string())) },
          { name: "limit", value: request.limit, schema: s.optional(s.int()) },
          { name: "page", value: request.page, schema: s.optional(s.int()) },
          {
            name: "order_by",
            value: request.orderBy,
            schema: s.defaulted(postOrderBySchema, PostOrderBy.Created),
          },
          {
            name: "direction",
            value: request.direction,
            schema: s.defaulted(requestDirectionSchema, RequestDirection.Asc),
          },
          {
            name: "hidden_from_feed",
            value: request.hiddenFromFeed,
            schema: s.defaulted(postsListRequestHiddenFromFeedSchema, PostsListRequestHiddenFromFeed.All),
          },
        ],
        headers: [{ name: "Authorization", value: request.authorization, schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: postsListResponseSchema },
        errorFactory: Posts.Index17Error,
      },
      options,
    );
  }

  /**
   * Generate post preview URL OAuth Scope: posts:read
   *
   * @remarks
   * Generate a URL to preview a post as a given audience. The returned `preview_url` renders the
   * post in the beehiiv app and requires a beehiiv session with access to the publication - it is
   * not itself an HTML-returning endpoint.
   *
   * @returns OK
   *
   * @throws {@link Posts.PreviewError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link BeehiivError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  preview(
    request: Posts.PreviewRequest,
    options?: RequestOptions,
  ): ApiPromise<PostsPreviewResponse, Posts.PreviewError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/publications/{publicationId}/posts/{postId}/preview"),
        auth: noneAuth,
        pathParams: [
          { name: "publicationId", value: request.publicationId, schema: s.string() },
          { name: "postId", value: request.postId, schema: s.string() },
        ],
        query: [
          { name: "platform", value: request.platform, schema: s.optional(s.string()) },
          { name: "subscriber_type", value: request.subscriberType, schema: s.optional(s.string()) },
          { name: "tier_ids", value: request.tierIds, schema: s.optional(s.array(s.string())) },
          { name: "subscriber_id", value: request.subscriberId, schema: s.optional(s.string()) },
        ],
        headers: [{ name: "Authorization", value: request.authorization, schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: postsPreviewResponseSchema },
        errorFactory: Posts.PreviewError,
      },
      options,
    );
  }

  /**
   * Get post OAuth Scope: posts:read
   *
   * @remarks
   * Retrieve a single Post belonging to a specific publication.
   *
   * Posts created via the Send API are built asynchronously, so a recently created post may not
   * exist yet. When the post is still being created, this endpoint returns `202` (still being
   * created) with a `Retry-After` header — wait briefly and retry. If background creation failed,
   * it returns `404` with the error code `POST_CREATION_FAILED`, indicating the post will never
   * become available; verify your request and try creating it again.
   *
   * @returns OK
   *
   * @throws {@link Posts.Show12Error} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link BeehiivError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  show12(
    request: Posts.Show12Request,
    options?: RequestOptions,
  ): ApiPromise<PostsGetResponse, Posts.Show12Error> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/publications/{publicationId}/posts/{postId}"),
        auth: noneAuth,
        pathParams: [
          { name: "publicationId", value: request.publicationId, schema: s.string() },
          { name: "postId", value: request.postId, schema: s.string() },
        ],
        query: [
          {
            name: "expand",
            value: request.expand,
            schema: s.optional(s.array(s.lazy(() => postExpandFieldSchema))),
          },
          { name: "premium_tiers", value: request.premiumTiers, schema: s.optional(s.array(s.string())) },
        ],
        headers: [{ name: "Authorization", value: request.authorization, schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: postsGetResponseSchema },
        errorFactory: Posts.Show12Error,
      },
      options,
    );
  }

  /**
   * Send test email OAuth Scope: posts
   *
   * @remarks
   * Send a test email for a specific post to one or more email addresses. Returns the number of
   * remaining test sends for the day and the time at which the limit resets.
   *
   * @returns OK
   *
   * @throws {@link Posts.TestSendError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link BeehiivError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  testSend(
    request: Posts.TestSendRequest,
    options?: RequestOptions,
  ): ApiPromise<PostsTestSendResponse, Posts.TestSendError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/publications/{publicationId}/posts/{postId}/test_sends"),
        auth: noneAuth,
        pathParams: [
          { name: "publicationId", value: request.publicationId, schema: s.string() },
          { name: "postId", value: request.postId, schema: s.string() },
        ],
        query: [],
        headers: [
          { name: "Authorization", value: request.authorization, schema: s.string() },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => publicationsPostsTestSendsRequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: postsTestSendResponseSchema },
        errorFactory: Posts.TestSendError,
      },
      options,
    );
  }

  /**
   * Update post OAuth Scope: posts:write
   *
   * @remarks
   * This endpoint is available to publications on the Max and Enterprise plans.
   *
   * Update an existing post for a specific publication. Only the fields provided in the request
   * body will be updated — all other fields remain unchanged. For a detailed walkthrough of content
   * methods and working with custom HTML, see the Using the Send API and Create Post Endpoint
   * guide.
   *
   * To update post content, provide either `blocks` or `body_content` (not both). If neither is
   * provided, the existing content is preserved. The same content methods and CSS guardrails
   * described in the create endpoint apply here.
   *
   * @returns Updated
   *
   * @throws {@link Posts.Update3Error} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link BeehiivError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  update3(
    request: Posts.Update3Request,
    options?: RequestOptions,
  ): ApiPromise<PostsGetResponse, Posts.Update3Error> {
    return this.#rawClient.execute(
      {
        method: "PATCH",
        urlTemplate: this.#servers.default("/publications/{publicationId}/posts/{postId}"),
        auth: noneAuth,
        pathParams: [
          { name: "publicationId", value: request.publicationId, schema: s.string() },
          { name: "postId", value: request.postId, schema: s.string() },
        ],
        query: [],
        headers: [
          { name: "Authorization", value: request.authorization, schema: s.string() },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => publicationsPostsRequest1Schema)),
        },
      },
      {
        success: { kind: "json", schema: postsGetResponseSchema },
        errorFactory: Posts.Update3Error,
      },
      options,
    );
  }
}

export namespace Posts {
  export type AggregateStatsRequest = {
    /** The prefixed ID of the publication object */
    publicationId: string;
    /** Optionally filter the results by audience @default PostAudienceFilter.All */
    audience?: PostAudienceFilter;
    /**
     * Optionally filter the results by platform.<br>`web` - Posts only published to web.<br>`email`
     * - Posts only published to email.<br>`both` - Posts published to email and web.<br>`all` -
     * Does not restrict results by platform.
     *
     * @default PostPlatformFilter.All
     */
    platform?: PostPlatformFilter;
    /**
     * Optionally filter the results by the status of the post.<br>`draft` - not been
     * scheduled.<br>`confirmed` - The post will be active after the `scheduled_at`.<br>`archived` -
     * The post is no longer active.<br>`all` - Does not restrict results by status.
     *
     * @default PostStatusFilter.All
     */
    status?: PostStatusFilter;
    /**
     * Optionally filter posts by content_tags. Adding a content tag will return any post with that
     * content tag associated to it.<br>Example: Filtering for `content_tags: ["sales","closing"]`
     * will return results of posts that have *either* sales or closing content_tags.
     */
    contentTags?: string[];
    /**
     * Optionally filter posts by their authors. Adding an author name will return any post with
     * that author associated to it (case-insensitive).<br><br><b>Example:</b> Filtering for
     * `authors: ["John Doe","Jane Smith"]` will return results of posts that have *either* John Doe
     * or Jane Smith as authors.
     */
    authors?: string[];
    /**
     * Optionally filter the results by the `hidden_from_feed` attribute of the post.<br>`all` -
     * Does not restrict results by `hidden_from_feed`.<br>`true` - Only return posts hidden from
     * the feed.<br>`false` - Only return posts that are visible on the feed.
     *
     * @default PostsListRequestHiddenFromFeed.All
     */
    hiddenFromFeed?: PostsListRequestHiddenFromFeed;
    /** Bearer authentication */
    authorization: string;
  };

  export class AggregateStatsError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Declared<"error4", Error>
      | Declared<"error5", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<AggregateStatsError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error3", decode: { kind: "json", schema: errorSchema } },
      { on: 429, kind: "error4", decode: { kind: "json", schema: errorSchema } },
      { on: 500, kind: "error5", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type Create8Request = {
    /** The prefixed ID of the publication object */
    publicationId: string;
    /** Bearer authentication */
    authorization: string;
    body?: PublicationsPostsRequest;
  };

  export class Create8Error extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Declared<"error4", Error>
      | Declared<"error5", Error>
      | Declared<"error6", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<Create8Error> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 403, kind: "error3", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error4", decode: { kind: "json", schema: errorSchema } },
      { on: 429, kind: "error5", decode: { kind: "json", schema: errorSchema } },
      { on: 500, kind: "error6", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type Delete3Request = {
    /** The prefixed ID of the publication object */
    publicationId: string;
    /** The prefixed ID of the post object */
    postId: string;
    /** Bearer authentication */
    authorization: string;
  };

  export class Delete3Error extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Declared<"error4", Error>
      | Declared<"error5", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<Delete3Error> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error3", decode: { kind: "json", schema: errorSchema } },
      { on: 429, kind: "error4", decode: { kind: "json", schema: errorSchema } },
      { on: 500, kind: "error5", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type Index17Request = {
    /** The prefixed ID of the publication object */
    publicationId: string;
    /**
     * Optionally expand the results by adding additional information. <br>`stats` - Adds statistics
     * about the post(s). <br>`free_web_content` - Adds the web HTML rendered to a free reader.
     * <br>`free_email_content` - Adds the email HTML rendered to a free reader.
     * <br>`free_rss_content` - Adds the RSS feed HTML. <br>`premium_web_content` - Adds the web
     * HTML rendered to a premium reader. <br>`premium_email_content` - Adds the email HTML rendered
     * to a premium reader.
     */
    expand?: PostExpandField[];
    /** Optionally filter the results by audience @default PostAudienceFilter.All */
    audience?: PostAudienceFilter;
    /**
     * Optionally filter the results by platform.<br>`web` - Posts only published to web.<br>`email`
     * - Posts only published to email.<br>`both` - Posts published to email and web.<br>`all` -
     * Does not restrict results by platform.
     *
     * @default PostPlatformFilter.All
     */
    platform?: PostPlatformFilter;
    /**
     * Optionally filter the results by the status of the post.<br>`draft` - not been
     * scheduled.<br>`confirmed` - The post will be active after the `scheduled_at`.<br>`archived` -
     * The post is no longer active.<br>`all` - Does not restrict results by status.
     *
     * @default PostStatusFilter.All
     */
    status?: PostStatusFilter;
    /**
     * Optionally filter posts by content_tags. Adding a content tag will return any post with that
     * content tag associated to it.<br><br><b>Example</b>: Filtering for `content_tags:
     * ["sales","closing"]` will return results of posts that have *either* `sales` or `closing`
     * content_tags.
     */
    contentTags?: string[];
    /**
     * Optionally filter posts by their slugs. Adding a slug will return any post with that exact
     * slug associated to it.<br><br><b>Example:</b> Filtering for `slugs:
     * ["my-first-post","another-post"]` will return results of posts that have *either*
     * `my-first-post` or `another-post` as their slug.
     */
    slugs?: string[];
    /**
     * Optionally filter posts by their authors. Adding an author name will return any post with
     * that author associated to it (case-insensitive).<br><br><b>Example:</b> Filtering for
     * `authors: ["John Doe","Jane Smith"]` will return results of posts that have *either* John Doe
     * or Jane Smith as authors.
     */
    authors?: string[];
    /**
     * Optionally filter posts by audience based on premium tiers.<br> This takes in an array of
     * Display Names of the premium tiers.<br> It will also scope any expanded content output to the
     * specified premium tiers.<br> Note: This is case insensitive.
     */
    premiumTiers?: string[];
    /**
     * A limit on the number of objects to be returned. The limit can range between 1 and 100, and
     * the default is 10.
     */
    limit?: number;
    /**
     * Pagination returns the results in pages. Each page contains the number of results specified
     * by the `limit` (default: 10).<br>If not specified, results 1-10 from page 1 will be returned.
     */
    page?: number;
    /**
     * The field that the results are sorted by. Defaults to created<br> `created` - The time in
     * which the post was first created.<br> `publish_date` - The time the post was set to be
     * published.<br> `displayed_date` - The time displayed in place of the `publish_date`. If no
     * `displayed_date` was set, it will default to the `publish_date`
     *
     * @default PostOrderBy.Created
     */
    orderBy?: PostOrderBy;
    /**
     * The direction that the results are sorted in. Defaults to asc<br> `asc` - Ascending, sorts
     * from smallest to largest.<br> `desc` - Descending, sorts from largest to smallest.
     *
     * @default RequestDirection.Asc
     */
    direction?: RequestDirection;
    /**
     * Optionally filter the results by the `hidden_from_feed` attribute of the post.<br>`all` -
     * Does not restrict results by `hidden_from_feed`.<br>`true` - Only return posts hidden from
     * the feed.<br>`false` - Only return posts that are visible on the feed.
     *
     * @default PostsListRequestHiddenFromFeed.All
     */
    hiddenFromFeed?: PostsListRequestHiddenFromFeed;
    /** Bearer authentication */
    authorization: string;
  };

  export class Index17Error extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Declared<"error4", Error>
      | Declared<"error5", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<Index17Error> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error3", decode: { kind: "json", schema: errorSchema } },
      { on: 429, kind: "error4", decode: { kind: "json", schema: errorSchema } },
      { on: 500, kind: "error5", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type PreviewRequest = {
    /** The prefixed ID of the publication object */
    publicationId: string;
    /** The prefixed ID of the post object */
    postId: string;
    /** `email` (default) or `web`. */
    platform?: string;
    /**
     * `free` (default) or `premium`. `premium` requires `tier_ids` to be present. Ignored if
     * `subscriber_id` is present.
     */
    subscriberType?: string;
    /**
     * One or more premium tier IDs to preview as. Only used when `subscriber_type` is `premium`.
     * Ignored if `subscriber_id` is present.
     */
    tierIds?: string[];
    /**
     * Preview using a specific subscriber's real tier memberships. Takes precedence over
     * `subscriber_type`/`tier_ids` when present.
     */
    subscriberId?: string;
    /** Bearer authentication */
    authorization: string;
  };

  export class PreviewError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Declared<"error4", Error>
      | Declared<"error5", Error>
      | Declared<"error6", Error>
      | Declared<"error7", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<PreviewError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 403, kind: "error3", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error4", decode: { kind: "json", schema: errorSchema } },
      { on: 422, kind: "error5", decode: { kind: "json", schema: errorSchema } },
      { on: 429, kind: "error6", decode: { kind: "json", schema: errorSchema } },
      { on: 500, kind: "error7", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type Show12Request = {
    /** The prefixed ID of the publication object */
    publicationId: string;
    /** The prefixed ID of the post object */
    postId: string;
    /**
     * Optionally expand the results by adding additional information. <br>`stats` - Adds statistics
     * about the post(s). <br>`free_web_content` - Adds the web HTML rendered to a free reader.
     * <br>`free_email_content` - Adds the email HTML rendered to a free reader.
     * <br>`free_rss_content` - Adds the RSS feed HTML. <br>`premium_web_content` - Adds the web
     * HTML rendered to a premium reader. <br>`premium_email_content` - Adds the email HTML rendered
     * to a premium reader.
     */
    expand?: PostExpandField[];
    /**
     * Scope any expanded content output to the specified premium tiers.<br> This takes in an array
     * of Display Names of the premium tiers.<br> Note: This is case insensitive.
     */
    premiumTiers?: string[];
    /** Bearer authentication */
    authorization: string;
  };

  export class Show12Error extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Declared<"error4", Error>
      | Declared<"error5", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<Show12Error> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error3", decode: { kind: "json", schema: errorSchema } },
      { on: 429, kind: "error4", decode: { kind: "json", schema: errorSchema } },
      { on: 500, kind: "error5", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type TestSendRequest = {
    /** The prefixed ID of the publication object */
    publicationId: string;
    /** The prefixed ID of the post object */
    postId: string;
    /** Bearer authentication */
    authorization: string;
    body?: PublicationsPostsTestSendsRequest;
  };

  export class TestSendError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Declared<"error4", Error>
      | Declared<"error5", Error>
      | Declared<"error6", Error>
      | Declared<"error7", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<TestSendError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 403, kind: "error3", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error4", decode: { kind: "json", schema: errorSchema } },
      { on: 422, kind: "error5", decode: { kind: "json", schema: errorSchema } },
      { on: 429, kind: "error6", decode: { kind: "json", schema: errorSchema } },
      { on: 500, kind: "error7", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type Update3Request = {
    /** The prefixed ID of the publication object */
    publicationId: string;
    /** The prefixed ID of the post to update */
    postId: string;
    /** Bearer authentication */
    authorization: string;
    body?: PublicationsPostsRequest1;
  };

  export class Update3Error extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Declared<"error4", Error>
      | Declared<"error5", Error>
      | Declared<"error6", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<Update3Error> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 403, kind: "error3", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error4", decode: { kind: "json", schema: errorSchema } },
      { on: 429, kind: "error5", decode: { kind: "json", schema: errorSchema } },
      { on: 500, kind: "error6", decode: { kind: "json", schema: errorSchema } },
    ];
  }
}
