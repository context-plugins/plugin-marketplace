from __future__ import annotations

from uuid import UUID, uuid4

from ..core import (
    ApiResult,
    AsyncRawClient,
    AsyncRequestOptionsOrDict,
    BaseRawResponse,
    RawClient,
    RequestOptionsOrDict,
    async_json_decoder,
    json_body,
    json_decoder,
    param,
    unwrap,
)
from ..errors.aggregate_stats_error import AggregateStatsErrorBody, aggregate_stats_error_mapper
from ..errors.create8_error import Create8ErrorBody, create8_error_mapper
from ..errors.delete3_error import Delete3ErrorBody, delete3_error_mapper
from ..errors.index17_error import Index17ErrorBody, index17_error_mapper
from ..errors.preview_error import PreviewErrorBody, preview_error_mapper
from ..errors.show12_error import Show12ErrorBody, show12_error_mapper
from ..errors.test_send_error import TestSendErrorBody, test_send_error_mapper
from ..errors.update3_error import Update3ErrorBody, update3_error_mapper
from ..models.enums.post_audience_filter import PostAudienceFilter, PostAudienceFilterOrStr
from ..models.enums.post_expand_field import PostExpandFieldOrStr
from ..models.enums.post_order_by import PostOrderBy, PostOrderByOrStr
from ..models.enums.post_platform_filter import PostPlatformFilter, PostPlatformFilterOrStr
from ..models.enums.post_status_filter import PostStatusFilter, PostStatusFilterOrStr
from ..models.enums.posts_list_request_hidden_from_feed import (
    PostsListRequestHiddenFromFeed,
    PostsListRequestHiddenFromFeedOrStr,
)
from ..models.enums.request_direction import RequestDirection, RequestDirectionOrStr
from ..models.post_processing import PostProcessing
from ..models.posts_aggregate_stats_response import PostsAggregateStatsResponse
from ..models.posts_create_response import PostsCreateResponse
from ..models.posts_get_response import PostsGetResponse
from ..models.posts_list_response import PostsListResponse
from ..models.posts_preview_response import PostsPreviewResponse
from ..models.posts_test_send_response import PostsTestSendResponse
from ..models.publications_posts_request import PublicationsPostsRequest, PublicationsPostsRequestDict
from ..models.publications_posts_request1 import PublicationsPostsRequest1, PublicationsPostsRequest1Dict
from ..models.publications_posts_test_sends_request import (
    PublicationsPostsTestSendsRequest,
    PublicationsPostsTestSendsRequestDict,
)
from ..server.server import Server


class Posts:
    def __init__(self, client: RawClient, server: Server) -> None:
        self._with_raw_response = PostsWithRawResponse(client, server)

    def aggregate_stats(
        self,
        publication_id: str,
        authorization: str,
        *,
        audience: PostAudienceFilterOrStr | None = PostAudienceFilter.ALL,
        platform: PostPlatformFilterOrStr | None = PostPlatformFilter.ALL,
        status: PostStatusFilterOrStr | None = PostStatusFilter.ALL,
        content_tags: list[str] | None = None,
        authors: list[str] | None = None,
        hidden_from_feed: PostsListRequestHiddenFromFeedOrStr | None = PostsListRequestHiddenFromFeed.ALL,
        request_options: RequestOptionsOrDict | None = None,
    ) -> PostsAggregateStatsResponse:
        """Retrieve aggregate stats for all posts

        Args:
            publication_id: The prefixed ID of the publication object
            authorization: Bearer authentication
            audience: Optionally filter the results by audience
            platform: Optionally filter the results by platform.<br>``web`` - Posts only published to web.<br>``email``
                - Posts only published to email.<br>``both`` - Posts published to email and web.<br>``all`` - Does not
                restrict results by platform.
            status: Optionally filter the results by the status of the post.<br>``draft`` - not been
                scheduled.<br>``confirmed`` - The post will be active after the ``scheduled_at``.<br>``archived`` - The
                post is no longer active.<br>``all`` - Does not restrict results by status.
            content_tags: Optionally filter posts by content_tags. Adding a content tag will return any post with that
                content tag associated to it.<br>Example: Filtering for ``content_tags: ["sales","closing"]`` will
                return results of posts that have *either* sales or closing content_tags.
            authors: Optionally filter posts by their authors. Adding an author name will return any post with that
                author associated to it (case-insensitive).<br><br><b>Example:</b> Filtering for ``authors: ["John
                Doe","Jane Smith"]`` will return results of posts that have *either* John Doe or Jane Smith as authors.
            hidden_from_feed: Optionally filter the results by the ``hidden_from_feed`` attribute of the
                post.<br>``all`` - Does not restrict results by ``hidden_from_feed``.<br>``true`` - Only return posts
                hidden from the feed.<br>``false`` - Only return posts that are visible on the feed.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK

        Raises:
            ApiError: Bad Request Unauthorized. The API key or OAuth access token is missing, invalid, or expired.
                Resource Not Found Rate Limit Exceeded Internal Server Error ``error`` is ``Error | RawError``."""
        return unwrap(
            self._with_raw_response.aggregate_stats(
                publication_id,
                authorization,
                audience=audience,
                platform=platform,
                status=status,
                content_tags=content_tags,
                authors=authors,
                hidden_from_feed=hidden_from_feed,
                request_options=request_options,
            ),
        )

    def create8(
        self,
        publication_id: str,
        authorization: str,
        *,
        body: PublicationsPostsRequest | PublicationsPostsRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> PostsCreateResponse:
        """This endpoint is available to publications on the Max and Enterprise plans.

        Create a post for a specific publication. For a detailed walkthrough including setup, testing workflows, and
        working with custom HTML and templates, see the Using the Send API and Create Post Endpoint guide.

        ## Asynchronous creation

        Post creation is processed in the background. This endpoint returns ``201`` immediately with the post's ``id``,
        but the post is not finished being created at that moment. The returned ``id`` is stable — it is the same id the
        post will have once creation completes.

        If you fetch the post (``GET /publications/{publicationId}/posts/{postId}``) right away, it may not exist yet.
        In that case the fetch returns ``202`` (still being created) — wait briefly and retry, honoring the
        ``Retry-After`` header. If background creation fails, the fetch returns ``404`` with the error code
        ``POST_CREATION_FAILED``, so you should stop retrying, verify your request, and try creating the post again.

        ## Content methods

        There are three ways to provide content for a post. You must provide either ``blocks`` or ``body_content``, but
        not both.

        ### 1. Blocks

        Use the ``blocks`` field to build your post with structured content blocks such as paragraphs, images, headings,
        buttons, tables, and more. Each block has a ``type`` and its own set of properties. This method gives you
        fine-grained control over individual content elements and supports features like visual settings, visibility
        settings, and dynamic content targeting.

        ### 2. Raw HTML (``body_content``)

        Use the ``body_content`` field to provide a single string of raw HTML. The HTML is wrapped in an ``htmlSnippet``
        block internally. This is useful when you have pre-built HTML content or are migrating from another platform.

        ### 3. HTML blocks within blocks

        Use ``type: html`` blocks inside the ``blocks`` array to embed raw HTML snippets alongside other structured
        blocks. This lets you mix structured content (paragraphs, images, etc.) with custom HTML where needed.

        ## CSS and styling guardrails

        beehiiv processes all HTML content through a sanitization pipeline. When using ``body_content`` or ``html``
        blocks, be aware of the following:

        - **`` tags are removed.** All `` block elements are stripped during sanitization. Do not rely on embedded
            stylesheets.
        - **`` tags are removed.** External stylesheet references are not allowed.
        - **Inline styles are preserved.** Styles applied directly to elements via the ``style`` attribute (e.g., `
        `) are kept intact.
        - **CSS classes have no effect.** While class attributes are not stripped, no corresponding stylesheets are
            loaded to apply them.
        - **beehiiv's email template wraps your content.** Your HTML is rendered inside beehiiv's email table structure,
            which applies its own layout and spacing. This may affect the appearance of your content.
        - **Use inline styles for all visual styling.** Since `` and `` tags are removed, inline styles on individual
            elements are the only reliable way to control appearance.

        Args:
            publication_id: The prefixed ID of the publication object
            authorization: Bearer authentication
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Created

        Raises:
            ApiError: Bad Request Unauthorized. The API key or OAuth access token is missing, invalid, or expired.
                Forbidden Resource Not Found Rate Limit Exceeded Internal Server Error ``error`` is ``Error |
                RawError``."""
        return unwrap(
            self._with_raw_response.create8(publication_id, authorization, body=body, request_options=request_options)
        )

    def delete3(
        self,
        publication_id: str,
        post_id: str,
        authorization: str,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> PostProcessing:
        """Delete or Archive a post. Any post that has been confirmed will have it's status changed to ``archived``.
        Posts in the ``draft`` status will be permanently deleted.

        Args:
            publication_id: The prefixed ID of the publication object
            post_id: The prefixed ID of the post object
            authorization: Bearer authentication
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The post was created via the Send API and is still being processed in the background. Wait briefly and
            retry, honoring the ``Retry-After`` header.

        Raises:
            ApiError: Bad Request Unauthorized. The API key or OAuth access token is missing, invalid, or expired.
                Resource Not Found Rate Limit Exceeded Internal Server Error ``error`` is ``Error | RawError``."""
        return unwrap(
            self._with_raw_response.delete3(publication_id, post_id, authorization, request_options=request_options)
        )

    def index17(
        self,
        publication_id: str,
        authorization: str,
        *,
        expand: list[PostExpandFieldOrStr] | None = None,
        audience: PostAudienceFilterOrStr | None = PostAudienceFilter.ALL,
        platform: PostPlatformFilterOrStr | None = PostPlatformFilter.ALL,
        status: PostStatusFilterOrStr | None = PostStatusFilter.ALL,
        content_tags: list[str] | None = None,
        slugs: list[str] | None = None,
        authors: list[str] | None = None,
        premium_tiers: list[str] | None = None,
        limit: int | None = None,
        page: int | None = None,
        order_by: PostOrderByOrStr | None = PostOrderBy.CREATED,
        direction: RequestDirectionOrStr | None = RequestDirection.ASC,
        hidden_from_feed: PostsListRequestHiddenFromFeedOrStr | None = PostsListRequestHiddenFromFeed.ALL,
        request_options: RequestOptionsOrDict | None = None,
    ) -> PostsListResponse:
        """Retrieve all posts belonging to a specific publication

        Args:
            publication_id: The prefixed ID of the publication object
            authorization: Bearer authentication
            expand: Optionally expand the results by adding additional information. <br>``stats`` - Adds statistics
                about the post(s). <br>``free_web_content`` - Adds the web HTML rendered to a free reader.
                <br>``free_email_content`` - Adds the email HTML rendered to a free reader. <br>``free_rss_content`` -
                Adds the RSS feed HTML. <br>``premium_web_content`` - Adds the web HTML rendered to a premium reader.
                <br>``premium_email_content`` - Adds the email HTML rendered to a premium reader.
            audience: Optionally filter the results by audience
            platform: Optionally filter the results by platform.<br>``web`` - Posts only published to web.<br>``email``
                - Posts only published to email.<br>``both`` - Posts published to email and web.<br>``all`` - Does not
                restrict results by platform.
            status: Optionally filter the results by the status of the post.<br>``draft`` - not been
                scheduled.<br>``confirmed`` - The post will be active after the ``scheduled_at``.<br>``archived`` - The
                post is no longer active.<br>``all`` - Does not restrict results by status.
            content_tags: Optionally filter posts by content_tags. Adding a content tag will return any post with that
                content tag associated to it.<br><br><b>Example</b>: Filtering for ``content_tags: ["sales","closing"]``
                will return results of posts that have *either* ``sales`` or ``closing`` content_tags.
            slugs: Optionally filter posts by their slugs. Adding a slug will return any post with that exact slug
                associated to it.<br><br><b>Example:</b> Filtering for ``slugs: ["my-first-post","another-post"]`` will
                return results of posts that have *either* ``my-first-post`` or ``another-post`` as their slug.
            authors: Optionally filter posts by their authors. Adding an author name will return any post with that
                author associated to it (case-insensitive).<br><br><b>Example:</b> Filtering for ``authors: ["John
                Doe","Jane Smith"]`` will return results of posts that have *either* John Doe or Jane Smith as authors.
            premium_tiers: Optionally filter posts by audience based on premium tiers.<br> This takes in an array of
                Display Names of the premium tiers.<br> It will also scope any expanded content output to the specified
                premium tiers.<br> Note: This is case insensitive.
            limit: A limit on the number of objects to be returned. The limit can range between 1 and 100, and the
                default is 10.
            page: Pagination returns the results in pages. Each page contains the number of results specified by the
                ``limit`` (default: 10).<br>If not specified, results 1-10 from page 1 will be returned.
            order_by: The field that the results are sorted by. Defaults to created<br> ``created`` - The time in which
                the post was first created.<br> ``publish_date`` - The time the post was set to be published.<br>
                ``displayed_date`` - The time displayed in place of the ``publish_date``. If no ``displayed_date`` was
                set, it will default to the ``publish_date``
            direction: The direction that the results are sorted in. Defaults to asc<br> ``asc`` - Ascending, sorts from
                smallest to largest.<br> ``desc`` - Descending, sorts from largest to smallest.
            hidden_from_feed: Optionally filter the results by the ``hidden_from_feed`` attribute of the
                post.<br>``all`` - Does not restrict results by ``hidden_from_feed``.<br>``true`` - Only return posts
                hidden from the feed.<br>``false`` - Only return posts that are visible on the feed.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK

        Raises:
            ApiError: Bad Request Unauthorized. The API key or OAuth access token is missing, invalid, or expired.
                Resource Not Found Rate Limit Exceeded Internal Server Error ``error`` is ``Error | RawError``."""
        return unwrap(
            self._with_raw_response.index17(
                publication_id,
                authorization,
                expand=expand,
                audience=audience,
                platform=platform,
                status=status,
                content_tags=content_tags,
                slugs=slugs,
                authors=authors,
                premium_tiers=premium_tiers,
                limit=limit,
                page=page,
                order_by=order_by,
                direction=direction,
                hidden_from_feed=hidden_from_feed,
                request_options=request_options,
            ),
        )

    def preview(
        self,
        publication_id: str,
        post_id: str,
        authorization: str,
        *,
        platform: str | None = None,
        subscriber_type: str | None = None,
        tier_ids: list[str] | None = None,
        subscriber_id: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> PostsPreviewResponse:
        """Generate a URL to preview a post as a given audience. The returned ``preview_url`` renders the post in the
        beehiiv app and requires a beehiiv session with access to the publication - it is not itself an HTML-returning
        endpoint.

        Args:
            publication_id: The prefixed ID of the publication object
            post_id: The prefixed ID of the post object
            authorization: Bearer authentication
            platform: ``email`` (default) or ``web``.
            subscriber_type: ``free`` (default) or ``premium``. ``premium`` requires ``tier_ids`` to be present. Ignored
                if ``subscriber_id`` is present.
            tier_ids: One or more premium tier IDs to preview as. Only used when ``subscriber_type`` is ``premium``.
                Ignored if ``subscriber_id`` is present.
            subscriber_id: Preview using a specific subscriber's real tier memberships. Takes precedence over
                ``subscriber_type``/``tier_ids`` when present.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK

        Raises:
            ApiError: Bad Request Unauthorized. The API key or OAuth access token is missing, invalid, or expired.
                Forbidden Resource Not Found Unprocessable Entity Rate Limit Exceeded Internal Server Error ``error`` is
                ``Error | RawError``."""
        return unwrap(
            self._with_raw_response.preview(
                publication_id,
                post_id,
                authorization,
                platform=platform,
                subscriber_type=subscriber_type,
                tier_ids=tier_ids,
                subscriber_id=subscriber_id,
                request_options=request_options,
            ),
        )

    def show12(
        self,
        publication_id: str,
        post_id: str,
        authorization: str,
        *,
        expand: list[PostExpandFieldOrStr] | None = None,
        premium_tiers: list[str] | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> PostsGetResponse:
        """Retrieve a single Post belonging to a specific publication.

        Posts created via the Send API are built asynchronously, so a recently created post may not exist yet. When the
        post is still being created, this endpoint returns ``202`` (still being created) with a ``Retry-After`` header —
        wait briefly and retry. If background creation failed, it returns ``404`` with the error code
        ``POST_CREATION_FAILED``, indicating the post will never become available; verify your request and try creating
        it again.

        Args:
            publication_id: The prefixed ID of the publication object
            post_id: The prefixed ID of the post object
            authorization: Bearer authentication
            expand: Optionally expand the results by adding additional information. <br>``stats`` - Adds statistics
                about the post(s). <br>``free_web_content`` - Adds the web HTML rendered to a free reader.
                <br>``free_email_content`` - Adds the email HTML rendered to a free reader. <br>``free_rss_content`` -
                Adds the RSS feed HTML. <br>``premium_web_content`` - Adds the web HTML rendered to a premium reader.
                <br>``premium_email_content`` - Adds the email HTML rendered to a premium reader.
            premium_tiers: Scope any expanded content output to the specified premium tiers.<br> This takes in an array
                of Display Names of the premium tiers.<br> Note: This is case insensitive.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK

        Raises:
            ApiError: Bad Request Unauthorized. The API key or OAuth access token is missing, invalid, or expired.
                Resource Not Found Rate Limit Exceeded Internal Server Error ``error`` is ``Error | RawError``."""
        return unwrap(
            self._with_raw_response.show12(
                publication_id,
                post_id,
                authorization,
                expand=expand,
                premium_tiers=premium_tiers,
                request_options=request_options,
            ),
        )

    def test_send(
        self,
        publication_id: str,
        post_id: str,
        authorization: str,
        *,
        body: PublicationsPostsTestSendsRequest | PublicationsPostsTestSendsRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> PostsTestSendResponse:
        """Send a test email for a specific post to one or more email addresses. Returns the number of remaining test
        sends for the day and the time at which the limit resets.

        Args:
            publication_id: The prefixed ID of the publication object
            post_id: The prefixed ID of the post object
            authorization: Bearer authentication
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK

        Raises:
            ApiError: Bad Request Unauthorized. The API key or OAuth access token is missing, invalid, or expired.
                Forbidden Resource Not Found Unprocessable Entity Rate Limit Exceeded Internal Server Error ``error`` is
                ``Error | RawError``."""
        return unwrap(
            self._with_raw_response.test_send(
                publication_id, post_id, authorization, body=body, request_options=request_options
            ),
        )

    def update3(
        self,
        publication_id: str,
        post_id: str,
        authorization: str,
        *,
        body: PublicationsPostsRequest1 | PublicationsPostsRequest1Dict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> PostsGetResponse:
        """This endpoint is available to publications on the Max and Enterprise plans.

        Update an existing post for a specific publication. Only the fields provided in the request body will be updated
        — all other fields remain unchanged. For a detailed walkthrough of content methods and working with custom HTML,
        see the Using the Send API and Create Post Endpoint guide.

        To update post content, provide either ``blocks`` or ``body_content`` (not both). If neither is provided, the
        existing content is preserved. The same content methods and CSS guardrails described in the create endpoint
        apply here.

        Args:
            publication_id: The prefixed ID of the publication object
            post_id: The prefixed ID of the post to update
            authorization: Bearer authentication
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Updated

        Raises:
            ApiError: Bad Request Unauthorized. The API key or OAuth access token is missing, invalid, or expired.
                Forbidden Resource Not Found Rate Limit Exceeded Internal Server Error ``error`` is ``Error |
                RawError``."""
        return unwrap(
            self._with_raw_response.update3(
                publication_id, post_id, authorization, body=body, request_options=request_options
            ),
        )

    @property
    def with_raw_response(self) -> PostsWithRawResponse:
        return self._with_raw_response


class AsyncPosts:
    def __init__(self, client: AsyncRawClient, server: Server) -> None:
        self._with_raw_response = AsyncPostsWithRawResponse(client, server)

    async def aggregate_stats(
        self,
        publication_id: str,
        authorization: str,
        *,
        audience: PostAudienceFilterOrStr | None = PostAudienceFilter.ALL,
        platform: PostPlatformFilterOrStr | None = PostPlatformFilter.ALL,
        status: PostStatusFilterOrStr | None = PostStatusFilter.ALL,
        content_tags: list[str] | None = None,
        authors: list[str] | None = None,
        hidden_from_feed: PostsListRequestHiddenFromFeedOrStr | None = PostsListRequestHiddenFromFeed.ALL,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> PostsAggregateStatsResponse:
        """Retrieve aggregate stats for all posts

        Args:
            publication_id: The prefixed ID of the publication object
            authorization: Bearer authentication
            audience: Optionally filter the results by audience
            platform: Optionally filter the results by platform.<br>``web`` - Posts only published to web.<br>``email``
                - Posts only published to email.<br>``both`` - Posts published to email and web.<br>``all`` - Does not
                restrict results by platform.
            status: Optionally filter the results by the status of the post.<br>``draft`` - not been
                scheduled.<br>``confirmed`` - The post will be active after the ``scheduled_at``.<br>``archived`` - The
                post is no longer active.<br>``all`` - Does not restrict results by status.
            content_tags: Optionally filter posts by content_tags. Adding a content tag will return any post with that
                content tag associated to it.<br>Example: Filtering for ``content_tags: ["sales","closing"]`` will
                return results of posts that have *either* sales or closing content_tags.
            authors: Optionally filter posts by their authors. Adding an author name will return any post with that
                author associated to it (case-insensitive).<br><br><b>Example:</b> Filtering for ``authors: ["John
                Doe","Jane Smith"]`` will return results of posts that have *either* John Doe or Jane Smith as authors.
            hidden_from_feed: Optionally filter the results by the ``hidden_from_feed`` attribute of the
                post.<br>``all`` - Does not restrict results by ``hidden_from_feed``.<br>``true`` - Only return posts
                hidden from the feed.<br>``false`` - Only return posts that are visible on the feed.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK

        Raises:
            ApiError: Bad Request Unauthorized. The API key or OAuth access token is missing, invalid, or expired.
                Resource Not Found Rate Limit Exceeded Internal Server Error ``error`` is ``Error | RawError``."""
        return unwrap(
            await self._with_raw_response.aggregate_stats(
                publication_id,
                authorization,
                audience=audience,
                platform=platform,
                status=status,
                content_tags=content_tags,
                authors=authors,
                hidden_from_feed=hidden_from_feed,
                request_options=request_options,
            ),
        )

    async def create8(
        self,
        publication_id: str,
        authorization: str,
        *,
        body: PublicationsPostsRequest | PublicationsPostsRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> PostsCreateResponse:
        """This endpoint is available to publications on the Max and Enterprise plans.

        Create a post for a specific publication. For a detailed walkthrough including setup, testing workflows, and
        working with custom HTML and templates, see the Using the Send API and Create Post Endpoint guide.

        ## Asynchronous creation

        Post creation is processed in the background. This endpoint returns ``201`` immediately with the post's ``id``,
        but the post is not finished being created at that moment. The returned ``id`` is stable — it is the same id the
        post will have once creation completes.

        If you fetch the post (``GET /publications/{publicationId}/posts/{postId}``) right away, it may not exist yet.
        In that case the fetch returns ``202`` (still being created) — wait briefly and retry, honoring the
        ``Retry-After`` header. If background creation fails, the fetch returns ``404`` with the error code
        ``POST_CREATION_FAILED``, so you should stop retrying, verify your request, and try creating the post again.

        ## Content methods

        There are three ways to provide content for a post. You must provide either ``blocks`` or ``body_content``, but
        not both.

        ### 1. Blocks

        Use the ``blocks`` field to build your post with structured content blocks such as paragraphs, images, headings,
        buttons, tables, and more. Each block has a ``type`` and its own set of properties. This method gives you
        fine-grained control over individual content elements and supports features like visual settings, visibility
        settings, and dynamic content targeting.

        ### 2. Raw HTML (``body_content``)

        Use the ``body_content`` field to provide a single string of raw HTML. The HTML is wrapped in an ``htmlSnippet``
        block internally. This is useful when you have pre-built HTML content or are migrating from another platform.

        ### 3. HTML blocks within blocks

        Use ``type: html`` blocks inside the ``blocks`` array to embed raw HTML snippets alongside other structured
        blocks. This lets you mix structured content (paragraphs, images, etc.) with custom HTML where needed.

        ## CSS and styling guardrails

        beehiiv processes all HTML content through a sanitization pipeline. When using ``body_content`` or ``html``
        blocks, be aware of the following:

        - **`` tags are removed.** All `` block elements are stripped during sanitization. Do not rely on embedded
            stylesheets.
        - **`` tags are removed.** External stylesheet references are not allowed.
        - **Inline styles are preserved.** Styles applied directly to elements via the ``style`` attribute (e.g., `
        `) are kept intact.
        - **CSS classes have no effect.** While class attributes are not stripped, no corresponding stylesheets are
            loaded to apply them.
        - **beehiiv's email template wraps your content.** Your HTML is rendered inside beehiiv's email table structure,
            which applies its own layout and spacing. This may affect the appearance of your content.
        - **Use inline styles for all visual styling.** Since `` and `` tags are removed, inline styles on individual
            elements are the only reliable way to control appearance.

        Args:
            publication_id: The prefixed ID of the publication object
            authorization: Bearer authentication
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Created

        Raises:
            ApiError: Bad Request Unauthorized. The API key or OAuth access token is missing, invalid, or expired.
                Forbidden Resource Not Found Rate Limit Exceeded Internal Server Error ``error`` is ``Error |
                RawError``."""
        return unwrap(
            await self._with_raw_response.create8(
                publication_id, authorization, body=body, request_options=request_options
            ),
        )

    async def delete3(
        self,
        publication_id: str,
        post_id: str,
        authorization: str,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> PostProcessing:
        """Delete or Archive a post. Any post that has been confirmed will have it's status changed to ``archived``.
        Posts in the ``draft`` status will be permanently deleted.

        Args:
            publication_id: The prefixed ID of the publication object
            post_id: The prefixed ID of the post object
            authorization: Bearer authentication
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The post was created via the Send API and is still being processed in the background. Wait briefly and
            retry, honoring the ``Retry-After`` header.

        Raises:
            ApiError: Bad Request Unauthorized. The API key or OAuth access token is missing, invalid, or expired.
                Resource Not Found Rate Limit Exceeded Internal Server Error ``error`` is ``Error | RawError``."""
        return unwrap(
            await self._with_raw_response.delete3(
                publication_id, post_id, authorization, request_options=request_options
            ),
        )

    async def index17(
        self,
        publication_id: str,
        authorization: str,
        *,
        expand: list[PostExpandFieldOrStr] | None = None,
        audience: PostAudienceFilterOrStr | None = PostAudienceFilter.ALL,
        platform: PostPlatformFilterOrStr | None = PostPlatformFilter.ALL,
        status: PostStatusFilterOrStr | None = PostStatusFilter.ALL,
        content_tags: list[str] | None = None,
        slugs: list[str] | None = None,
        authors: list[str] | None = None,
        premium_tiers: list[str] | None = None,
        limit: int | None = None,
        page: int | None = None,
        order_by: PostOrderByOrStr | None = PostOrderBy.CREATED,
        direction: RequestDirectionOrStr | None = RequestDirection.ASC,
        hidden_from_feed: PostsListRequestHiddenFromFeedOrStr | None = PostsListRequestHiddenFromFeed.ALL,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> PostsListResponse:
        """Retrieve all posts belonging to a specific publication

        Args:
            publication_id: The prefixed ID of the publication object
            authorization: Bearer authentication
            expand: Optionally expand the results by adding additional information. <br>``stats`` - Adds statistics
                about the post(s). <br>``free_web_content`` - Adds the web HTML rendered to a free reader.
                <br>``free_email_content`` - Adds the email HTML rendered to a free reader. <br>``free_rss_content`` -
                Adds the RSS feed HTML. <br>``premium_web_content`` - Adds the web HTML rendered to a premium reader.
                <br>``premium_email_content`` - Adds the email HTML rendered to a premium reader.
            audience: Optionally filter the results by audience
            platform: Optionally filter the results by platform.<br>``web`` - Posts only published to web.<br>``email``
                - Posts only published to email.<br>``both`` - Posts published to email and web.<br>``all`` - Does not
                restrict results by platform.
            status: Optionally filter the results by the status of the post.<br>``draft`` - not been
                scheduled.<br>``confirmed`` - The post will be active after the ``scheduled_at``.<br>``archived`` - The
                post is no longer active.<br>``all`` - Does not restrict results by status.
            content_tags: Optionally filter posts by content_tags. Adding a content tag will return any post with that
                content tag associated to it.<br><br><b>Example</b>: Filtering for ``content_tags: ["sales","closing"]``
                will return results of posts that have *either* ``sales`` or ``closing`` content_tags.
            slugs: Optionally filter posts by their slugs. Adding a slug will return any post with that exact slug
                associated to it.<br><br><b>Example:</b> Filtering for ``slugs: ["my-first-post","another-post"]`` will
                return results of posts that have *either* ``my-first-post`` or ``another-post`` as their slug.
            authors: Optionally filter posts by their authors. Adding an author name will return any post with that
                author associated to it (case-insensitive).<br><br><b>Example:</b> Filtering for ``authors: ["John
                Doe","Jane Smith"]`` will return results of posts that have *either* John Doe or Jane Smith as authors.
            premium_tiers: Optionally filter posts by audience based on premium tiers.<br> This takes in an array of
                Display Names of the premium tiers.<br> It will also scope any expanded content output to the specified
                premium tiers.<br> Note: This is case insensitive.
            limit: A limit on the number of objects to be returned. The limit can range between 1 and 100, and the
                default is 10.
            page: Pagination returns the results in pages. Each page contains the number of results specified by the
                ``limit`` (default: 10).<br>If not specified, results 1-10 from page 1 will be returned.
            order_by: The field that the results are sorted by. Defaults to created<br> ``created`` - The time in which
                the post was first created.<br> ``publish_date`` - The time the post was set to be published.<br>
                ``displayed_date`` - The time displayed in place of the ``publish_date``. If no ``displayed_date`` was
                set, it will default to the ``publish_date``
            direction: The direction that the results are sorted in. Defaults to asc<br> ``asc`` - Ascending, sorts from
                smallest to largest.<br> ``desc`` - Descending, sorts from largest to smallest.
            hidden_from_feed: Optionally filter the results by the ``hidden_from_feed`` attribute of the
                post.<br>``all`` - Does not restrict results by ``hidden_from_feed``.<br>``true`` - Only return posts
                hidden from the feed.<br>``false`` - Only return posts that are visible on the feed.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK

        Raises:
            ApiError: Bad Request Unauthorized. The API key or OAuth access token is missing, invalid, or expired.
                Resource Not Found Rate Limit Exceeded Internal Server Error ``error`` is ``Error | RawError``."""
        return unwrap(
            await self._with_raw_response.index17(
                publication_id,
                authorization,
                expand=expand,
                audience=audience,
                platform=platform,
                status=status,
                content_tags=content_tags,
                slugs=slugs,
                authors=authors,
                premium_tiers=premium_tiers,
                limit=limit,
                page=page,
                order_by=order_by,
                direction=direction,
                hidden_from_feed=hidden_from_feed,
                request_options=request_options,
            ),
        )

    async def preview(
        self,
        publication_id: str,
        post_id: str,
        authorization: str,
        *,
        platform: str | None = None,
        subscriber_type: str | None = None,
        tier_ids: list[str] | None = None,
        subscriber_id: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> PostsPreviewResponse:
        """Generate a URL to preview a post as a given audience. The returned ``preview_url`` renders the post in the
        beehiiv app and requires a beehiiv session with access to the publication - it is not itself an HTML-returning
        endpoint.

        Args:
            publication_id: The prefixed ID of the publication object
            post_id: The prefixed ID of the post object
            authorization: Bearer authentication
            platform: ``email`` (default) or ``web``.
            subscriber_type: ``free`` (default) or ``premium``. ``premium`` requires ``tier_ids`` to be present. Ignored
                if ``subscriber_id`` is present.
            tier_ids: One or more premium tier IDs to preview as. Only used when ``subscriber_type`` is ``premium``.
                Ignored if ``subscriber_id`` is present.
            subscriber_id: Preview using a specific subscriber's real tier memberships. Takes precedence over
                ``subscriber_type``/``tier_ids`` when present.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK

        Raises:
            ApiError: Bad Request Unauthorized. The API key or OAuth access token is missing, invalid, or expired.
                Forbidden Resource Not Found Unprocessable Entity Rate Limit Exceeded Internal Server Error ``error`` is
                ``Error | RawError``."""
        return unwrap(
            await self._with_raw_response.preview(
                publication_id,
                post_id,
                authorization,
                platform=platform,
                subscriber_type=subscriber_type,
                tier_ids=tier_ids,
                subscriber_id=subscriber_id,
                request_options=request_options,
            ),
        )

    async def show12(
        self,
        publication_id: str,
        post_id: str,
        authorization: str,
        *,
        expand: list[PostExpandFieldOrStr] | None = None,
        premium_tiers: list[str] | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> PostsGetResponse:
        """Retrieve a single Post belonging to a specific publication.

        Posts created via the Send API are built asynchronously, so a recently created post may not exist yet. When the
        post is still being created, this endpoint returns ``202`` (still being created) with a ``Retry-After`` header —
        wait briefly and retry. If background creation failed, it returns ``404`` with the error code
        ``POST_CREATION_FAILED``, indicating the post will never become available; verify your request and try creating
        it again.

        Args:
            publication_id: The prefixed ID of the publication object
            post_id: The prefixed ID of the post object
            authorization: Bearer authentication
            expand: Optionally expand the results by adding additional information. <br>``stats`` - Adds statistics
                about the post(s). <br>``free_web_content`` - Adds the web HTML rendered to a free reader.
                <br>``free_email_content`` - Adds the email HTML rendered to a free reader. <br>``free_rss_content`` -
                Adds the RSS feed HTML. <br>``premium_web_content`` - Adds the web HTML rendered to a premium reader.
                <br>``premium_email_content`` - Adds the email HTML rendered to a premium reader.
            premium_tiers: Scope any expanded content output to the specified premium tiers.<br> This takes in an array
                of Display Names of the premium tiers.<br> Note: This is case insensitive.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK

        Raises:
            ApiError: Bad Request Unauthorized. The API key or OAuth access token is missing, invalid, or expired.
                Resource Not Found Rate Limit Exceeded Internal Server Error ``error`` is ``Error | RawError``."""
        return unwrap(
            await self._with_raw_response.show12(
                publication_id,
                post_id,
                authorization,
                expand=expand,
                premium_tiers=premium_tiers,
                request_options=request_options,
            ),
        )

    async def test_send(
        self,
        publication_id: str,
        post_id: str,
        authorization: str,
        *,
        body: PublicationsPostsTestSendsRequest | PublicationsPostsTestSendsRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> PostsTestSendResponse:
        """Send a test email for a specific post to one or more email addresses. Returns the number of remaining test
        sends for the day and the time at which the limit resets.

        Args:
            publication_id: The prefixed ID of the publication object
            post_id: The prefixed ID of the post object
            authorization: Bearer authentication
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK

        Raises:
            ApiError: Bad Request Unauthorized. The API key or OAuth access token is missing, invalid, or expired.
                Forbidden Resource Not Found Unprocessable Entity Rate Limit Exceeded Internal Server Error ``error`` is
                ``Error | RawError``."""
        return unwrap(
            await self._with_raw_response.test_send(
                publication_id, post_id, authorization, body=body, request_options=request_options
            ),
        )

    async def update3(
        self,
        publication_id: str,
        post_id: str,
        authorization: str,
        *,
        body: PublicationsPostsRequest1 | PublicationsPostsRequest1Dict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> PostsGetResponse:
        """This endpoint is available to publications on the Max and Enterprise plans.

        Update an existing post for a specific publication. Only the fields provided in the request body will be updated
        — all other fields remain unchanged. For a detailed walkthrough of content methods and working with custom HTML,
        see the Using the Send API and Create Post Endpoint guide.

        To update post content, provide either ``blocks`` or ``body_content`` (not both). If neither is provided, the
        existing content is preserved. The same content methods and CSS guardrails described in the create endpoint
        apply here.

        Args:
            publication_id: The prefixed ID of the publication object
            post_id: The prefixed ID of the post to update
            authorization: Bearer authentication
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Updated

        Raises:
            ApiError: Bad Request Unauthorized. The API key or OAuth access token is missing, invalid, or expired.
                Forbidden Resource Not Found Rate Limit Exceeded Internal Server Error ``error`` is ``Error |
                RawError``."""
        return unwrap(
            await self._with_raw_response.update3(
                publication_id, post_id, authorization, body=body, request_options=request_options
            ),
        )

    @property
    def with_raw_response(self) -> AsyncPostsWithRawResponse:
        return self._with_raw_response


class PostsWithRawResponse(BaseRawResponse[RawClient, Server]):
    def aggregate_stats(
        self,
        publication_id: str,
        authorization: str,
        *,
        audience: PostAudienceFilterOrStr | None = PostAudienceFilter.ALL,
        platform: PostPlatformFilterOrStr | None = PostPlatformFilter.ALL,
        status: PostStatusFilterOrStr | None = PostStatusFilter.ALL,
        content_tags: list[str] | None = None,
        authors: list[str] | None = None,
        hidden_from_feed: PostsListRequestHiddenFromFeedOrStr | None = PostsListRequestHiddenFromFeed.ALL,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[PostsAggregateStatsResponse, AggregateStatsErrorBody]:
        """Retrieve aggregate stats for all posts

        Args:
            publication_id: The prefixed ID of the publication object
            authorization: Bearer authentication
            audience: Optionally filter the results by audience
            platform: Optionally filter the results by platform.<br>``web`` - Posts only published to web.<br>``email``
                - Posts only published to email.<br>``both`` - Posts published to email and web.<br>``all`` - Does not
                restrict results by platform.
            status: Optionally filter the results by the status of the post.<br>``draft`` - not been
                scheduled.<br>``confirmed`` - The post will be active after the ``scheduled_at``.<br>``archived`` - The
                post is no longer active.<br>``all`` - Does not restrict results by status.
            content_tags: Optionally filter posts by content_tags. Adding a content tag will return any post with that
                content tag associated to it.<br>Example: Filtering for ``content_tags: ["sales","closing"]`` will
                return results of posts that have *either* sales or closing content_tags.
            authors: Optionally filter posts by their authors. Adding an author name will return any post with that
                author associated to it (case-insensitive).<br><br><b>Example:</b> Filtering for ``authors: ["John
                Doe","Jane Smith"]`` will return results of posts that have *either* John Doe or Jane Smith as authors.
            hidden_from_feed: Optionally filter the results by the ``hidden_from_feed`` attribute of the
                post.<br>``all`` - Does not restrict results by ``hidden_from_feed``.<br>``true`` - Only return posts
                hidden from the feed.<br>``false`` - Only return posts that are visible on the feed.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/publications/{publicationId}/posts/aggregate_stats"),
            path_params=[param[str]("publicationId", publication_id)],
            query_params=[
                param[PostAudienceFilterOrStr | None]("audience", audience),
                param[PostPlatformFilterOrStr | None]("platform", platform),
                param[PostStatusFilterOrStr | None]("status", status),
                param[list[str] | None]("content_tags[]", content_tags),
                param[list[str] | None]("authors[]", authors),
                param[PostsListRequestHiddenFromFeedOrStr | None]("hidden_from_feed", hidden_from_feed),
            ],
            headers=[param[str]("Authorization", authorization)],
            decoder=json_decoder[PostsAggregateStatsResponse],
            error_mapper=aggregate_stats_error_mapper,
            request_options=request_options,
        )

    def create8(
        self,
        publication_id: str,
        authorization: str,
        *,
        body: PublicationsPostsRequest | PublicationsPostsRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[PostsCreateResponse, Create8ErrorBody]:
        """This endpoint is available to publications on the Max and Enterprise plans.

        Create a post for a specific publication. For a detailed walkthrough including setup, testing workflows, and
        working with custom HTML and templates, see the Using the Send API and Create Post Endpoint guide.

        ## Asynchronous creation

        Post creation is processed in the background. This endpoint returns ``201`` immediately with the post's ``id``,
        but the post is not finished being created at that moment. The returned ``id`` is stable — it is the same id the
        post will have once creation completes.

        If you fetch the post (``GET /publications/{publicationId}/posts/{postId}``) right away, it may not exist yet.
        In that case the fetch returns ``202`` (still being created) — wait briefly and retry, honoring the
        ``Retry-After`` header. If background creation fails, the fetch returns ``404`` with the error code
        ``POST_CREATION_FAILED``, so you should stop retrying, verify your request, and try creating the post again.

        ## Content methods

        There are three ways to provide content for a post. You must provide either ``blocks`` or ``body_content``, but
        not both.

        ### 1. Blocks

        Use the ``blocks`` field to build your post with structured content blocks such as paragraphs, images, headings,
        buttons, tables, and more. Each block has a ``type`` and its own set of properties. This method gives you
        fine-grained control over individual content elements and supports features like visual settings, visibility
        settings, and dynamic content targeting.

        ### 2. Raw HTML (``body_content``)

        Use the ``body_content`` field to provide a single string of raw HTML. The HTML is wrapped in an ``htmlSnippet``
        block internally. This is useful when you have pre-built HTML content or are migrating from another platform.

        ### 3. HTML blocks within blocks

        Use ``type: html`` blocks inside the ``blocks`` array to embed raw HTML snippets alongside other structured
        blocks. This lets you mix structured content (paragraphs, images, etc.) with custom HTML where needed.

        ## CSS and styling guardrails

        beehiiv processes all HTML content through a sanitization pipeline. When using ``body_content`` or ``html``
        blocks, be aware of the following:

        - **`` tags are removed.** All `` block elements are stripped during sanitization. Do not rely on embedded
            stylesheets.
        - **`` tags are removed.** External stylesheet references are not allowed.
        - **Inline styles are preserved.** Styles applied directly to elements via the ``style`` attribute (e.g., `
        `) are kept intact.
        - **CSS classes have no effect.** While class attributes are not stripped, no corresponding stylesheets are
            loaded to apply them.
        - **beehiiv's email template wraps your content.** Your HTML is rendered inside beehiiv's email table structure,
            which applies its own layout and spacing. This may affect the appearance of your content.
        - **Use inline styles for all visual styling.** Since `` and `` tags are removed, inline styles on individual
            elements are the only reliable way to control appearance.

        Args:
            publication_id: The prefixed ID of the publication object
            authorization: Bearer authentication
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/publications/{publicationId}/posts"),
            path_params=[param[str]("publicationId", publication_id)],
            headers=[param[str]("Authorization", authorization), param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[PublicationsPostsRequest | PublicationsPostsRequestDict | None](body),
            decoder=json_decoder[PostsCreateResponse],
            error_mapper=create8_error_mapper,
            request_options=request_options,
        )

    def delete3(
        self,
        publication_id: str,
        post_id: str,
        authorization: str,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[PostProcessing, Delete3ErrorBody]:
        """Delete or Archive a post. Any post that has been confirmed will have it's status changed to ``archived``.
        Posts in the ``draft`` status will be permanently deleted.

        Args:
            publication_id: The prefixed ID of the publication object
            post_id: The prefixed ID of the post object
            authorization: Bearer authentication
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/publications/{publicationId}/posts/{postId}"),
            path_params=[param[str]("publicationId", publication_id), param[str]("postId", post_id)],
            headers=[param[str]("Authorization", authorization), param[UUID]("Idempotency-Key", uuid4())],
            decoder=json_decoder[PostProcessing],
            error_mapper=delete3_error_mapper,
            request_options=request_options,
        )

    def index17(
        self,
        publication_id: str,
        authorization: str,
        *,
        expand: list[PostExpandFieldOrStr] | None = None,
        audience: PostAudienceFilterOrStr | None = PostAudienceFilter.ALL,
        platform: PostPlatformFilterOrStr | None = PostPlatformFilter.ALL,
        status: PostStatusFilterOrStr | None = PostStatusFilter.ALL,
        content_tags: list[str] | None = None,
        slugs: list[str] | None = None,
        authors: list[str] | None = None,
        premium_tiers: list[str] | None = None,
        limit: int | None = None,
        page: int | None = None,
        order_by: PostOrderByOrStr | None = PostOrderBy.CREATED,
        direction: RequestDirectionOrStr | None = RequestDirection.ASC,
        hidden_from_feed: PostsListRequestHiddenFromFeedOrStr | None = PostsListRequestHiddenFromFeed.ALL,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[PostsListResponse, Index17ErrorBody]:
        """Retrieve all posts belonging to a specific publication

        Args:
            publication_id: The prefixed ID of the publication object
            authorization: Bearer authentication
            expand: Optionally expand the results by adding additional information. <br>``stats`` - Adds statistics
                about the post(s). <br>``free_web_content`` - Adds the web HTML rendered to a free reader.
                <br>``free_email_content`` - Adds the email HTML rendered to a free reader. <br>``free_rss_content`` -
                Adds the RSS feed HTML. <br>``premium_web_content`` - Adds the web HTML rendered to a premium reader.
                <br>``premium_email_content`` - Adds the email HTML rendered to a premium reader.
            audience: Optionally filter the results by audience
            platform: Optionally filter the results by platform.<br>``web`` - Posts only published to web.<br>``email``
                - Posts only published to email.<br>``both`` - Posts published to email and web.<br>``all`` - Does not
                restrict results by platform.
            status: Optionally filter the results by the status of the post.<br>``draft`` - not been
                scheduled.<br>``confirmed`` - The post will be active after the ``scheduled_at``.<br>``archived`` - The
                post is no longer active.<br>``all`` - Does not restrict results by status.
            content_tags: Optionally filter posts by content_tags. Adding a content tag will return any post with that
                content tag associated to it.<br><br><b>Example</b>: Filtering for ``content_tags: ["sales","closing"]``
                will return results of posts that have *either* ``sales`` or ``closing`` content_tags.
            slugs: Optionally filter posts by their slugs. Adding a slug will return any post with that exact slug
                associated to it.<br><br><b>Example:</b> Filtering for ``slugs: ["my-first-post","another-post"]`` will
                return results of posts that have *either* ``my-first-post`` or ``another-post`` as their slug.
            authors: Optionally filter posts by their authors. Adding an author name will return any post with that
                author associated to it (case-insensitive).<br><br><b>Example:</b> Filtering for ``authors: ["John
                Doe","Jane Smith"]`` will return results of posts that have *either* John Doe or Jane Smith as authors.
            premium_tiers: Optionally filter posts by audience based on premium tiers.<br> This takes in an array of
                Display Names of the premium tiers.<br> It will also scope any expanded content output to the specified
                premium tiers.<br> Note: This is case insensitive.
            limit: A limit on the number of objects to be returned. The limit can range between 1 and 100, and the
                default is 10.
            page: Pagination returns the results in pages. Each page contains the number of results specified by the
                ``limit`` (default: 10).<br>If not specified, results 1-10 from page 1 will be returned.
            order_by: The field that the results are sorted by. Defaults to created<br> ``created`` - The time in which
                the post was first created.<br> ``publish_date`` - The time the post was set to be published.<br>
                ``displayed_date`` - The time displayed in place of the ``publish_date``. If no ``displayed_date`` was
                set, it will default to the ``publish_date``
            direction: The direction that the results are sorted in. Defaults to asc<br> ``asc`` - Ascending, sorts from
                smallest to largest.<br> ``desc`` - Descending, sorts from largest to smallest.
            hidden_from_feed: Optionally filter the results by the ``hidden_from_feed`` attribute of the
                post.<br>``all`` - Does not restrict results by ``hidden_from_feed``.<br>``true`` - Only return posts
                hidden from the feed.<br>``false`` - Only return posts that are visible on the feed.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/publications/{publicationId}/posts"),
            path_params=[param[str]("publicationId", publication_id)],
            query_params=[
                param[list[PostExpandFieldOrStr] | None]("expand", expand),
                param[PostAudienceFilterOrStr | None]("audience", audience),
                param[PostPlatformFilterOrStr | None]("platform", platform),
                param[PostStatusFilterOrStr | None]("status", status),
                param[list[str] | None]("content_tags[]", content_tags),
                param[list[str] | None]("slugs[]", slugs),
                param[list[str] | None]("authors[]", authors),
                param[list[str] | None]("premium_tiers", premium_tiers),
                param[int | None]("limit", limit),
                param[int | None]("page", page),
                param[PostOrderByOrStr | None]("order_by", order_by),
                param[RequestDirectionOrStr | None]("direction", direction),
                param[PostsListRequestHiddenFromFeedOrStr | None]("hidden_from_feed", hidden_from_feed),
            ],
            headers=[param[str]("Authorization", authorization)],
            decoder=json_decoder[PostsListResponse],
            error_mapper=index17_error_mapper,
            request_options=request_options,
        )

    def preview(
        self,
        publication_id: str,
        post_id: str,
        authorization: str,
        *,
        platform: str | None = None,
        subscriber_type: str | None = None,
        tier_ids: list[str] | None = None,
        subscriber_id: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[PostsPreviewResponse, PreviewErrorBody]:
        """Generate a URL to preview a post as a given audience. The returned ``preview_url`` renders the post in the
        beehiiv app and requires a beehiiv session with access to the publication - it is not itself an HTML-returning
        endpoint.

        Args:
            publication_id: The prefixed ID of the publication object
            post_id: The prefixed ID of the post object
            authorization: Bearer authentication
            platform: ``email`` (default) or ``web``.
            subscriber_type: ``free`` (default) or ``premium``. ``premium`` requires ``tier_ids`` to be present. Ignored
                if ``subscriber_id`` is present.
            tier_ids: One or more premium tier IDs to preview as. Only used when ``subscriber_type`` is ``premium``.
                Ignored if ``subscriber_id`` is present.
            subscriber_id: Preview using a specific subscriber's real tier memberships. Takes precedence over
                ``subscriber_type``/``tier_ids`` when present.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/publications/{publicationId}/posts/{postId}/preview"),
            path_params=[param[str]("publicationId", publication_id), param[str]("postId", post_id)],
            query_params=[
                param[str | None]("platform", platform),
                param[str | None]("subscriber_type", subscriber_type),
                param[list[str] | None]("tier_ids", tier_ids),
                param[str | None]("subscriber_id", subscriber_id),
            ],
            headers=[param[str]("Authorization", authorization)],
            decoder=json_decoder[PostsPreviewResponse],
            error_mapper=preview_error_mapper,
            request_options=request_options,
        )

    def show12(
        self,
        publication_id: str,
        post_id: str,
        authorization: str,
        *,
        expand: list[PostExpandFieldOrStr] | None = None,
        premium_tiers: list[str] | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[PostsGetResponse, Show12ErrorBody]:
        """Retrieve a single Post belonging to a specific publication.

        Posts created via the Send API are built asynchronously, so a recently created post may not exist yet. When the
        post is still being created, this endpoint returns ``202`` (still being created) with a ``Retry-After`` header —
        wait briefly and retry. If background creation failed, it returns ``404`` with the error code
        ``POST_CREATION_FAILED``, indicating the post will never become available; verify your request and try creating
        it again.

        Args:
            publication_id: The prefixed ID of the publication object
            post_id: The prefixed ID of the post object
            authorization: Bearer authentication
            expand: Optionally expand the results by adding additional information. <br>``stats`` - Adds statistics
                about the post(s). <br>``free_web_content`` - Adds the web HTML rendered to a free reader.
                <br>``free_email_content`` - Adds the email HTML rendered to a free reader. <br>``free_rss_content`` -
                Adds the RSS feed HTML. <br>``premium_web_content`` - Adds the web HTML rendered to a premium reader.
                <br>``premium_email_content`` - Adds the email HTML rendered to a premium reader.
            premium_tiers: Scope any expanded content output to the specified premium tiers.<br> This takes in an array
                of Display Names of the premium tiers.<br> Note: This is case insensitive.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/publications/{publicationId}/posts/{postId}"),
            path_params=[param[str]("publicationId", publication_id), param[str]("postId", post_id)],
            query_params=[
                param[list[PostExpandFieldOrStr] | None]("expand", expand),
                param[list[str] | None]("premium_tiers", premium_tiers),
            ],
            headers=[param[str]("Authorization", authorization)],
            decoder=json_decoder[PostsGetResponse],
            error_mapper=show12_error_mapper,
            request_options=request_options,
        )

    def test_send(
        self,
        publication_id: str,
        post_id: str,
        authorization: str,
        *,
        body: PublicationsPostsTestSendsRequest | PublicationsPostsTestSendsRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[PostsTestSendResponse, TestSendErrorBody]:
        """Send a test email for a specific post to one or more email addresses. Returns the number of remaining test
        sends for the day and the time at which the limit resets.

        Args:
            publication_id: The prefixed ID of the publication object
            post_id: The prefixed ID of the post object
            authorization: Bearer authentication
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/publications/{publicationId}/posts/{postId}/test_sends"),
            path_params=[param[str]("publicationId", publication_id), param[str]("postId", post_id)],
            headers=[param[str]("Authorization", authorization), param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[PublicationsPostsTestSendsRequest | PublicationsPostsTestSendsRequestDict | None](body),
            decoder=json_decoder[PostsTestSendResponse],
            error_mapper=test_send_error_mapper,
            request_options=request_options,
        )

    def update3(
        self,
        publication_id: str,
        post_id: str,
        authorization: str,
        *,
        body: PublicationsPostsRequest1 | PublicationsPostsRequest1Dict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[PostsGetResponse, Update3ErrorBody]:
        """This endpoint is available to publications on the Max and Enterprise plans.

        Update an existing post for a specific publication. Only the fields provided in the request body will be updated
        — all other fields remain unchanged. For a detailed walkthrough of content methods and working with custom HTML,
        see the Using the Send API and Create Post Endpoint guide.

        To update post content, provide either ``blocks`` or ``body_content`` (not both). If neither is provided, the
        existing content is preserved. The same content methods and CSS guardrails described in the create endpoint
        apply here.

        Args:
            publication_id: The prefixed ID of the publication object
            post_id: The prefixed ID of the post to update
            authorization: Bearer authentication
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="PATCH",
            url_template=self._server.default("/publications/{publicationId}/posts/{postId}"),
            path_params=[param[str]("publicationId", publication_id), param[str]("postId", post_id)],
            headers=[param[str]("Authorization", authorization), param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[PublicationsPostsRequest1 | PublicationsPostsRequest1Dict | None](body),
            decoder=json_decoder[PostsGetResponse],
            error_mapper=update3_error_mapper,
            request_options=request_options,
        )


class AsyncPostsWithRawResponse(BaseRawResponse[AsyncRawClient, Server]):
    async def aggregate_stats(
        self,
        publication_id: str,
        authorization: str,
        *,
        audience: PostAudienceFilterOrStr | None = PostAudienceFilter.ALL,
        platform: PostPlatformFilterOrStr | None = PostPlatformFilter.ALL,
        status: PostStatusFilterOrStr | None = PostStatusFilter.ALL,
        content_tags: list[str] | None = None,
        authors: list[str] | None = None,
        hidden_from_feed: PostsListRequestHiddenFromFeedOrStr | None = PostsListRequestHiddenFromFeed.ALL,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[PostsAggregateStatsResponse, AggregateStatsErrorBody]:
        """Retrieve aggregate stats for all posts

        Args:
            publication_id: The prefixed ID of the publication object
            authorization: Bearer authentication
            audience: Optionally filter the results by audience
            platform: Optionally filter the results by platform.<br>``web`` - Posts only published to web.<br>``email``
                - Posts only published to email.<br>``both`` - Posts published to email and web.<br>``all`` - Does not
                restrict results by platform.
            status: Optionally filter the results by the status of the post.<br>``draft`` - not been
                scheduled.<br>``confirmed`` - The post will be active after the ``scheduled_at``.<br>``archived`` - The
                post is no longer active.<br>``all`` - Does not restrict results by status.
            content_tags: Optionally filter posts by content_tags. Adding a content tag will return any post with that
                content tag associated to it.<br>Example: Filtering for ``content_tags: ["sales","closing"]`` will
                return results of posts that have *either* sales or closing content_tags.
            authors: Optionally filter posts by their authors. Adding an author name will return any post with that
                author associated to it (case-insensitive).<br><br><b>Example:</b> Filtering for ``authors: ["John
                Doe","Jane Smith"]`` will return results of posts that have *either* John Doe or Jane Smith as authors.
            hidden_from_feed: Optionally filter the results by the ``hidden_from_feed`` attribute of the
                post.<br>``all`` - Does not restrict results by ``hidden_from_feed``.<br>``true`` - Only return posts
                hidden from the feed.<br>``false`` - Only return posts that are visible on the feed.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/publications/{publicationId}/posts/aggregate_stats"),
            path_params=[param[str]("publicationId", publication_id)],
            query_params=[
                param[PostAudienceFilterOrStr | None]("audience", audience),
                param[PostPlatformFilterOrStr | None]("platform", platform),
                param[PostStatusFilterOrStr | None]("status", status),
                param[list[str] | None]("content_tags[]", content_tags),
                param[list[str] | None]("authors[]", authors),
                param[PostsListRequestHiddenFromFeedOrStr | None]("hidden_from_feed", hidden_from_feed),
            ],
            headers=[param[str]("Authorization", authorization)],
            decoder=async_json_decoder[PostsAggregateStatsResponse],
            error_mapper=aggregate_stats_error_mapper,
            request_options=request_options,
        )

    async def create8(
        self,
        publication_id: str,
        authorization: str,
        *,
        body: PublicationsPostsRequest | PublicationsPostsRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[PostsCreateResponse, Create8ErrorBody]:
        """This endpoint is available to publications on the Max and Enterprise plans.

        Create a post for a specific publication. For a detailed walkthrough including setup, testing workflows, and
        working with custom HTML and templates, see the Using the Send API and Create Post Endpoint guide.

        ## Asynchronous creation

        Post creation is processed in the background. This endpoint returns ``201`` immediately with the post's ``id``,
        but the post is not finished being created at that moment. The returned ``id`` is stable — it is the same id the
        post will have once creation completes.

        If you fetch the post (``GET /publications/{publicationId}/posts/{postId}``) right away, it may not exist yet.
        In that case the fetch returns ``202`` (still being created) — wait briefly and retry, honoring the
        ``Retry-After`` header. If background creation fails, the fetch returns ``404`` with the error code
        ``POST_CREATION_FAILED``, so you should stop retrying, verify your request, and try creating the post again.

        ## Content methods

        There are three ways to provide content for a post. You must provide either ``blocks`` or ``body_content``, but
        not both.

        ### 1. Blocks

        Use the ``blocks`` field to build your post with structured content blocks such as paragraphs, images, headings,
        buttons, tables, and more. Each block has a ``type`` and its own set of properties. This method gives you
        fine-grained control over individual content elements and supports features like visual settings, visibility
        settings, and dynamic content targeting.

        ### 2. Raw HTML (``body_content``)

        Use the ``body_content`` field to provide a single string of raw HTML. The HTML is wrapped in an ``htmlSnippet``
        block internally. This is useful when you have pre-built HTML content or are migrating from another platform.

        ### 3. HTML blocks within blocks

        Use ``type: html`` blocks inside the ``blocks`` array to embed raw HTML snippets alongside other structured
        blocks. This lets you mix structured content (paragraphs, images, etc.) with custom HTML where needed.

        ## CSS and styling guardrails

        beehiiv processes all HTML content through a sanitization pipeline. When using ``body_content`` or ``html``
        blocks, be aware of the following:

        - **`` tags are removed.** All `` block elements are stripped during sanitization. Do not rely on embedded
            stylesheets.
        - **`` tags are removed.** External stylesheet references are not allowed.
        - **Inline styles are preserved.** Styles applied directly to elements via the ``style`` attribute (e.g., `
        `) are kept intact.
        - **CSS classes have no effect.** While class attributes are not stripped, no corresponding stylesheets are
            loaded to apply them.
        - **beehiiv's email template wraps your content.** Your HTML is rendered inside beehiiv's email table structure,
            which applies its own layout and spacing. This may affect the appearance of your content.
        - **Use inline styles for all visual styling.** Since `` and `` tags are removed, inline styles on individual
            elements are the only reliable way to control appearance.

        Args:
            publication_id: The prefixed ID of the publication object
            authorization: Bearer authentication
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/publications/{publicationId}/posts"),
            path_params=[param[str]("publicationId", publication_id)],
            headers=[param[str]("Authorization", authorization), param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[PublicationsPostsRequest | PublicationsPostsRequestDict | None](body),
            decoder=async_json_decoder[PostsCreateResponse],
            error_mapper=create8_error_mapper,
            request_options=request_options,
        )

    async def delete3(
        self,
        publication_id: str,
        post_id: str,
        authorization: str,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[PostProcessing, Delete3ErrorBody]:
        """Delete or Archive a post. Any post that has been confirmed will have it's status changed to ``archived``.
        Posts in the ``draft`` status will be permanently deleted.

        Args:
            publication_id: The prefixed ID of the publication object
            post_id: The prefixed ID of the post object
            authorization: Bearer authentication
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/publications/{publicationId}/posts/{postId}"),
            path_params=[param[str]("publicationId", publication_id), param[str]("postId", post_id)],
            headers=[param[str]("Authorization", authorization), param[UUID]("Idempotency-Key", uuid4())],
            decoder=async_json_decoder[PostProcessing],
            error_mapper=delete3_error_mapper,
            request_options=request_options,
        )

    async def index17(
        self,
        publication_id: str,
        authorization: str,
        *,
        expand: list[PostExpandFieldOrStr] | None = None,
        audience: PostAudienceFilterOrStr | None = PostAudienceFilter.ALL,
        platform: PostPlatformFilterOrStr | None = PostPlatformFilter.ALL,
        status: PostStatusFilterOrStr | None = PostStatusFilter.ALL,
        content_tags: list[str] | None = None,
        slugs: list[str] | None = None,
        authors: list[str] | None = None,
        premium_tiers: list[str] | None = None,
        limit: int | None = None,
        page: int | None = None,
        order_by: PostOrderByOrStr | None = PostOrderBy.CREATED,
        direction: RequestDirectionOrStr | None = RequestDirection.ASC,
        hidden_from_feed: PostsListRequestHiddenFromFeedOrStr | None = PostsListRequestHiddenFromFeed.ALL,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[PostsListResponse, Index17ErrorBody]:
        """Retrieve all posts belonging to a specific publication

        Args:
            publication_id: The prefixed ID of the publication object
            authorization: Bearer authentication
            expand: Optionally expand the results by adding additional information. <br>``stats`` - Adds statistics
                about the post(s). <br>``free_web_content`` - Adds the web HTML rendered to a free reader.
                <br>``free_email_content`` - Adds the email HTML rendered to a free reader. <br>``free_rss_content`` -
                Adds the RSS feed HTML. <br>``premium_web_content`` - Adds the web HTML rendered to a premium reader.
                <br>``premium_email_content`` - Adds the email HTML rendered to a premium reader.
            audience: Optionally filter the results by audience
            platform: Optionally filter the results by platform.<br>``web`` - Posts only published to web.<br>``email``
                - Posts only published to email.<br>``both`` - Posts published to email and web.<br>``all`` - Does not
                restrict results by platform.
            status: Optionally filter the results by the status of the post.<br>``draft`` - not been
                scheduled.<br>``confirmed`` - The post will be active after the ``scheduled_at``.<br>``archived`` - The
                post is no longer active.<br>``all`` - Does not restrict results by status.
            content_tags: Optionally filter posts by content_tags. Adding a content tag will return any post with that
                content tag associated to it.<br><br><b>Example</b>: Filtering for ``content_tags: ["sales","closing"]``
                will return results of posts that have *either* ``sales`` or ``closing`` content_tags.
            slugs: Optionally filter posts by their slugs. Adding a slug will return any post with that exact slug
                associated to it.<br><br><b>Example:</b> Filtering for ``slugs: ["my-first-post","another-post"]`` will
                return results of posts that have *either* ``my-first-post`` or ``another-post`` as their slug.
            authors: Optionally filter posts by their authors. Adding an author name will return any post with that
                author associated to it (case-insensitive).<br><br><b>Example:</b> Filtering for ``authors: ["John
                Doe","Jane Smith"]`` will return results of posts that have *either* John Doe or Jane Smith as authors.
            premium_tiers: Optionally filter posts by audience based on premium tiers.<br> This takes in an array of
                Display Names of the premium tiers.<br> It will also scope any expanded content output to the specified
                premium tiers.<br> Note: This is case insensitive.
            limit: A limit on the number of objects to be returned. The limit can range between 1 and 100, and the
                default is 10.
            page: Pagination returns the results in pages. Each page contains the number of results specified by the
                ``limit`` (default: 10).<br>If not specified, results 1-10 from page 1 will be returned.
            order_by: The field that the results are sorted by. Defaults to created<br> ``created`` - The time in which
                the post was first created.<br> ``publish_date`` - The time the post was set to be published.<br>
                ``displayed_date`` - The time displayed in place of the ``publish_date``. If no ``displayed_date`` was
                set, it will default to the ``publish_date``
            direction: The direction that the results are sorted in. Defaults to asc<br> ``asc`` - Ascending, sorts from
                smallest to largest.<br> ``desc`` - Descending, sorts from largest to smallest.
            hidden_from_feed: Optionally filter the results by the ``hidden_from_feed`` attribute of the
                post.<br>``all`` - Does not restrict results by ``hidden_from_feed``.<br>``true`` - Only return posts
                hidden from the feed.<br>``false`` - Only return posts that are visible on the feed.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/publications/{publicationId}/posts"),
            path_params=[param[str]("publicationId", publication_id)],
            query_params=[
                param[list[PostExpandFieldOrStr] | None]("expand", expand),
                param[PostAudienceFilterOrStr | None]("audience", audience),
                param[PostPlatformFilterOrStr | None]("platform", platform),
                param[PostStatusFilterOrStr | None]("status", status),
                param[list[str] | None]("content_tags[]", content_tags),
                param[list[str] | None]("slugs[]", slugs),
                param[list[str] | None]("authors[]", authors),
                param[list[str] | None]("premium_tiers", premium_tiers),
                param[int | None]("limit", limit),
                param[int | None]("page", page),
                param[PostOrderByOrStr | None]("order_by", order_by),
                param[RequestDirectionOrStr | None]("direction", direction),
                param[PostsListRequestHiddenFromFeedOrStr | None]("hidden_from_feed", hidden_from_feed),
            ],
            headers=[param[str]("Authorization", authorization)],
            decoder=async_json_decoder[PostsListResponse],
            error_mapper=index17_error_mapper,
            request_options=request_options,
        )

    async def preview(
        self,
        publication_id: str,
        post_id: str,
        authorization: str,
        *,
        platform: str | None = None,
        subscriber_type: str | None = None,
        tier_ids: list[str] | None = None,
        subscriber_id: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[PostsPreviewResponse, PreviewErrorBody]:
        """Generate a URL to preview a post as a given audience. The returned ``preview_url`` renders the post in the
        beehiiv app and requires a beehiiv session with access to the publication - it is not itself an HTML-returning
        endpoint.

        Args:
            publication_id: The prefixed ID of the publication object
            post_id: The prefixed ID of the post object
            authorization: Bearer authentication
            platform: ``email`` (default) or ``web``.
            subscriber_type: ``free`` (default) or ``premium``. ``premium`` requires ``tier_ids`` to be present. Ignored
                if ``subscriber_id`` is present.
            tier_ids: One or more premium tier IDs to preview as. Only used when ``subscriber_type`` is ``premium``.
                Ignored if ``subscriber_id`` is present.
            subscriber_id: Preview using a specific subscriber's real tier memberships. Takes precedence over
                ``subscriber_type``/``tier_ids`` when present.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/publications/{publicationId}/posts/{postId}/preview"),
            path_params=[param[str]("publicationId", publication_id), param[str]("postId", post_id)],
            query_params=[
                param[str | None]("platform", platform),
                param[str | None]("subscriber_type", subscriber_type),
                param[list[str] | None]("tier_ids", tier_ids),
                param[str | None]("subscriber_id", subscriber_id),
            ],
            headers=[param[str]("Authorization", authorization)],
            decoder=async_json_decoder[PostsPreviewResponse],
            error_mapper=preview_error_mapper,
            request_options=request_options,
        )

    async def show12(
        self,
        publication_id: str,
        post_id: str,
        authorization: str,
        *,
        expand: list[PostExpandFieldOrStr] | None = None,
        premium_tiers: list[str] | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[PostsGetResponse, Show12ErrorBody]:
        """Retrieve a single Post belonging to a specific publication.

        Posts created via the Send API are built asynchronously, so a recently created post may not exist yet. When the
        post is still being created, this endpoint returns ``202`` (still being created) with a ``Retry-After`` header —
        wait briefly and retry. If background creation failed, it returns ``404`` with the error code
        ``POST_CREATION_FAILED``, indicating the post will never become available; verify your request and try creating
        it again.

        Args:
            publication_id: The prefixed ID of the publication object
            post_id: The prefixed ID of the post object
            authorization: Bearer authentication
            expand: Optionally expand the results by adding additional information. <br>``stats`` - Adds statistics
                about the post(s). <br>``free_web_content`` - Adds the web HTML rendered to a free reader.
                <br>``free_email_content`` - Adds the email HTML rendered to a free reader. <br>``free_rss_content`` -
                Adds the RSS feed HTML. <br>``premium_web_content`` - Adds the web HTML rendered to a premium reader.
                <br>``premium_email_content`` - Adds the email HTML rendered to a premium reader.
            premium_tiers: Scope any expanded content output to the specified premium tiers.<br> This takes in an array
                of Display Names of the premium tiers.<br> Note: This is case insensitive.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/publications/{publicationId}/posts/{postId}"),
            path_params=[param[str]("publicationId", publication_id), param[str]("postId", post_id)],
            query_params=[
                param[list[PostExpandFieldOrStr] | None]("expand", expand),
                param[list[str] | None]("premium_tiers", premium_tiers),
            ],
            headers=[param[str]("Authorization", authorization)],
            decoder=async_json_decoder[PostsGetResponse],
            error_mapper=show12_error_mapper,
            request_options=request_options,
        )

    async def test_send(
        self,
        publication_id: str,
        post_id: str,
        authorization: str,
        *,
        body: PublicationsPostsTestSendsRequest | PublicationsPostsTestSendsRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[PostsTestSendResponse, TestSendErrorBody]:
        """Send a test email for a specific post to one or more email addresses. Returns the number of remaining test
        sends for the day and the time at which the limit resets.

        Args:
            publication_id: The prefixed ID of the publication object
            post_id: The prefixed ID of the post object
            authorization: Bearer authentication
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/publications/{publicationId}/posts/{postId}/test_sends"),
            path_params=[param[str]("publicationId", publication_id), param[str]("postId", post_id)],
            headers=[param[str]("Authorization", authorization), param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[PublicationsPostsTestSendsRequest | PublicationsPostsTestSendsRequestDict | None](body),
            decoder=async_json_decoder[PostsTestSendResponse],
            error_mapper=test_send_error_mapper,
            request_options=request_options,
        )

    async def update3(
        self,
        publication_id: str,
        post_id: str,
        authorization: str,
        *,
        body: PublicationsPostsRequest1 | PublicationsPostsRequest1Dict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[PostsGetResponse, Update3ErrorBody]:
        """This endpoint is available to publications on the Max and Enterprise plans.

        Update an existing post for a specific publication. Only the fields provided in the request body will be updated
        — all other fields remain unchanged. For a detailed walkthrough of content methods and working with custom HTML,
        see the Using the Send API and Create Post Endpoint guide.

        To update post content, provide either ``blocks`` or ``body_content`` (not both). If neither is provided, the
        existing content is preserved. The same content methods and CSS guardrails described in the create endpoint
        apply here.

        Args:
            publication_id: The prefixed ID of the publication object
            post_id: The prefixed ID of the post to update
            authorization: Bearer authentication
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="PATCH",
            url_template=self._server.default("/publications/{publicationId}/posts/{postId}"),
            path_params=[param[str]("publicationId", publication_id), param[str]("postId", post_id)],
            headers=[param[str]("Authorization", authorization), param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[PublicationsPostsRequest1 | PublicationsPostsRequest1Dict | None](body),
            decoder=async_json_decoder[PostsGetResponse],
            error_mapper=update3_error_mapper,
            request_options=request_options,
        )
