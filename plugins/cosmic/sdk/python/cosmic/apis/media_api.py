from __future__ import annotations

from uuid import UUID, uuid4

from ..auth import AsyncAuthSchemes, AuthSchemes
from ..core import (
    ApiResult,
    AsyncRawClient,
    AsyncRequestOptionsOrDict,
    RawClient,
    RequestOptionsOrDict,
    SecuredRawResponse,
    async_json_decoder,
    json_body,
    json_decoder,
    param,
    unwrap,
)
from ..errors.delete_media_error import DeleteMediaErrorBody, delete_media_error_mapper
from ..errors.get_media_error import GetMediaErrorBody, get_media_error_mapper
from ..errors.list_media_error import ListMediaErrorBody, list_media_error_mapper
from ..errors.update_media_error import UpdateMediaErrorBody, update_media_error_mapper
from ..models.enums.sort import SortOrStr
from ..models.media_list_response import MediaListResponse
from ..models.media_response import MediaResponse
from ..models.media_update import MediaUpdate, MediaUpdateDict
from ..models.message_response import MessageResponse
from ..server.server import Server


class MediaApi:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = MediaApiWithRawResponse(client, server, auth)

    def delete_media(
        self,
        slug: str,
        media_id: str,
        *,
        trigger_webhook: bool | None = False,
        request_options: RequestOptionsOrDict | None = None,
    ) -> MessageResponse:
        """Delete a media item from the Bucket. The file is removed from storage and the CDN caches are purged, so its
        URL stops working. Objects and Metafields that reference the media are not updated automatically: clear those
        references yourself. This is destructive and not reversible through the API.

        Args:
            slug: The Bucket slug. Found under Bucket > Settings in the dashboard.
            media_id: The media id.
            trigger_webhook: Set to ``true`` to fire the corresponding webhook for this action.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The media item was deleted.

        Raises:
            ApiError: The access key is missing or incorrect. The Bucket needs to be upgraded before it can be used
                again. The addressed resource does not exist in this Bucket. Note that this covers a resource missing
                from a route that exists; an unrecognized route answers 200 with a ``Route not found`` body instead, as
                described in the API description above. Too many requests hit the API too quickly. Back off and retry.
                Something went wrong on the Cosmic side. ``error`` is ``Error | RawError``."""
        return unwrap(
            self._with_raw_response.delete_media(
                slug, media_id, trigger_webhook=trigger_webhook, request_options=request_options
            ),
        )

    def get_media(
        self,
        slug: str,
        media_id: str,
        *,
        read_key: str | None = None,
        props: str | None = None,
        use_cache: bool | None = True,
        pretty: bool | None = False,
        request_options: RequestOptionsOrDict | None = None,
    ) -> MediaResponse:
        """Retrieve a single media item by its id. To fetch by file name instead, query the media list endpoint with
        ``query={"name":"..."}``.

        Args:
            slug: The Bucket slug. Found under Bucket > Settings in the dashboard.
            media_id: The media id.
            read_key: The Bucket read key. Required unless the Bucket has no read key configured.
            props: Comma-separated list of properties to return, including nested metadata paths. Omit to return
                everything. Narrowing ``props`` is the main way to keep responses under the 6 MB response cap and to
                reduce latency.
            use_cache: Set to ``false`` to bypass the cache and read through to the database. Guarantees you see writes
                you just made, at the cost of higher latency.
            pretty: Set to ``true`` to indent the JSON response for human reading. Increases response size.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The requested media item.

        Raises:
            ApiError: The request was invalid, most often a malformed ``query`` or a Metafield value that failed
                validation. The access key is missing or incorrect. The Bucket needs to be upgraded before it can be
                used again. The addressed resource does not exist in this Bucket. Note that this covers a resource
                missing from a route that exists; an unrecognized route answers 200 with a ``Route not found`` body
                instead, as described in the API description above. Too many requests hit the API too quickly. Back off
                and retry. Something went wrong on the Cosmic side. ``error`` is ``Error | RawError``."""
        return unwrap(
            self._with_raw_response.get_media(
                slug,
                media_id,
                read_key=read_key,
                props=props,
                use_cache=use_cache,
                pretty=pretty,
                request_options=request_options,
            ),
        )

    def list_media(
        self,
        slug: str,
        *,
        read_key: str | None = None,
        query: str | None = None,
        props: str | None = None,
        sort: SortOrStr | None = None,
        limit: int | None = 1000,
        skip: int | None = 0,
        use_cache: bool | None = True,
        pretty: bool | None = False,
        request_options: RequestOptionsOrDict | None = None,
    ) -> MediaListResponse:
        """Query media in the Bucket. This is also how you fetch a single media item by name: pass
        ``query={"name":"7f9403a32f29-toucan.jpg"}``.

        The ``name`` of a media item is the value you assign to a File or Image Metafield when creating or updating an
        Object. Upload is not part of this host: ``POST /v3/buckets/{slug}/media`` is served by
        ``https://workers.cosmicjs.com``.

        Args:
            slug: The Bucket slug. Found under Bucket > Settings in the dashboard.
            read_key: The Bucket read key. Required unless the Bucket has no read key configured.
            query: A URL-encoded JSON object used to filter results. Follows MongoDB comparison (``$eq``, ``$gt``,
                ``$gte``, ``$lt``, ``$lte``, ``$in``, ``$all``, ``$ne``, ``$nin``), evaluation (``$regex`` with
                ``$options``), and logical (``$and``, ``$or``, ``$not``, ``$nor``) operators. Query Object Relationship
                Metafields by the related Object's ``id``, not its ``slug``.
            props: Comma-separated list of properties to return, including nested metadata paths. Omit to return
                everything. Narrowing ``props`` is the main way to keep responses under the 6 MB response cap and to
                reduce latency.
            sort: Sort order. Prefix with ``-`` for descending.
            limit: Maximum number of results to return.
            skip: Offset pagination: number of results to skip. Use ``after`` instead for large collections. Only one of
                ``skip`` and ``after`` may be used.
            use_cache: Set to ``false`` to bypass the cache and read through to the database. Guarantees you see writes
                you just made, at the cost of higher latency.
            pretty: Set to ``true`` to indent the JSON response for human reading. Increases response size.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The matching media.

        Raises:
            ApiError: The request was invalid, most often a malformed ``query`` or a Metafield value that failed
                validation. The access key is missing or incorrect. The Bucket needs to be upgraded before it can be
                used again. The addressed resource does not exist in this Bucket. Note that this covers a resource
                missing from a route that exists; an unrecognized route answers 200 with a ``Route not found`` body
                instead, as described in the API description above. The response exceeded the 6 MB limit. Narrow
                ``props``, lower ``limit``, or paginate. Too many requests hit the API too quickly. Back off and retry.
                Something went wrong on the Cosmic side. ``error`` is ``Error | RawError``."""
        return unwrap(
            self._with_raw_response.list_media(
                slug,
                read_key=read_key,
                query=query,
                props=props,
                sort=sort,
                limit=limit,
                skip=skip,
                use_cache=use_cache,
                pretty=pretty,
                request_options=request_options,
            ),
        )

    def update_media(
        self,
        slug: str,
        media_id: str,
        body: MediaUpdate | MediaUpdateDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> MediaResponse:
        """Update the folder, alt text, or user metadata on a media item. The underlying file is not replaced: to change
        the file, upload a new one via ``https://workers.cosmicjs.com`` and repoint the referencing Metafields.

        Args:
            slug: The Bucket slug. Found under Bucket > Settings in the dashboard.
            media_id: The media id.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The updated media item.

        Raises:
            ApiError: The request was invalid, most often a malformed ``query`` or a Metafield value that failed
                validation. The access key is missing or incorrect. The Bucket needs to be upgraded before it can be
                used again. The addressed resource does not exist in this Bucket. Note that this covers a resource
                missing from a route that exists; an unrecognized route answers 200 with a ``Route not found`` body
                instead, as described in the API description above. Too many requests hit the API too quickly. Back off
                and retry. Something went wrong on the Cosmic side. ``error`` is ``Error | RawError``."""
        return unwrap(self._with_raw_response.update_media(slug, media_id, body, request_options=request_options))

    @property
    def with_raw_response(self) -> MediaApiWithRawResponse:
        return self._with_raw_response


class AsyncMediaApi:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncMediaApiWithRawResponse(client, server, auth)

    async def delete_media(
        self,
        slug: str,
        media_id: str,
        *,
        trigger_webhook: bool | None = False,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> MessageResponse:
        """Delete a media item from the Bucket. The file is removed from storage and the CDN caches are purged, so its
        URL stops working. Objects and Metafields that reference the media are not updated automatically: clear those
        references yourself. This is destructive and not reversible through the API.

        Args:
            slug: The Bucket slug. Found under Bucket > Settings in the dashboard.
            media_id: The media id.
            trigger_webhook: Set to ``true`` to fire the corresponding webhook for this action.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The media item was deleted.

        Raises:
            ApiError: The access key is missing or incorrect. The Bucket needs to be upgraded before it can be used
                again. The addressed resource does not exist in this Bucket. Note that this covers a resource missing
                from a route that exists; an unrecognized route answers 200 with a ``Route not found`` body instead, as
                described in the API description above. Too many requests hit the API too quickly. Back off and retry.
                Something went wrong on the Cosmic side. ``error`` is ``Error | RawError``."""
        return unwrap(
            await self._with_raw_response.delete_media(
                slug, media_id, trigger_webhook=trigger_webhook, request_options=request_options
            ),
        )

    async def get_media(
        self,
        slug: str,
        media_id: str,
        *,
        read_key: str | None = None,
        props: str | None = None,
        use_cache: bool | None = True,
        pretty: bool | None = False,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> MediaResponse:
        """Retrieve a single media item by its id. To fetch by file name instead, query the media list endpoint with
        ``query={"name":"..."}``.

        Args:
            slug: The Bucket slug. Found under Bucket > Settings in the dashboard.
            media_id: The media id.
            read_key: The Bucket read key. Required unless the Bucket has no read key configured.
            props: Comma-separated list of properties to return, including nested metadata paths. Omit to return
                everything. Narrowing ``props`` is the main way to keep responses under the 6 MB response cap and to
                reduce latency.
            use_cache: Set to ``false`` to bypass the cache and read through to the database. Guarantees you see writes
                you just made, at the cost of higher latency.
            pretty: Set to ``true`` to indent the JSON response for human reading. Increases response size.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The requested media item.

        Raises:
            ApiError: The request was invalid, most often a malformed ``query`` or a Metafield value that failed
                validation. The access key is missing or incorrect. The Bucket needs to be upgraded before it can be
                used again. The addressed resource does not exist in this Bucket. Note that this covers a resource
                missing from a route that exists; an unrecognized route answers 200 with a ``Route not found`` body
                instead, as described in the API description above. Too many requests hit the API too quickly. Back off
                and retry. Something went wrong on the Cosmic side. ``error`` is ``Error | RawError``."""
        return unwrap(
            await self._with_raw_response.get_media(
                slug,
                media_id,
                read_key=read_key,
                props=props,
                use_cache=use_cache,
                pretty=pretty,
                request_options=request_options,
            ),
        )

    async def list_media(
        self,
        slug: str,
        *,
        read_key: str | None = None,
        query: str | None = None,
        props: str | None = None,
        sort: SortOrStr | None = None,
        limit: int | None = 1000,
        skip: int | None = 0,
        use_cache: bool | None = True,
        pretty: bool | None = False,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> MediaListResponse:
        """Query media in the Bucket. This is also how you fetch a single media item by name: pass
        ``query={"name":"7f9403a32f29-toucan.jpg"}``.

        The ``name`` of a media item is the value you assign to a File or Image Metafield when creating or updating an
        Object. Upload is not part of this host: ``POST /v3/buckets/{slug}/media`` is served by
        ``https://workers.cosmicjs.com``.

        Args:
            slug: The Bucket slug. Found under Bucket > Settings in the dashboard.
            read_key: The Bucket read key. Required unless the Bucket has no read key configured.
            query: A URL-encoded JSON object used to filter results. Follows MongoDB comparison (``$eq``, ``$gt``,
                ``$gte``, ``$lt``, ``$lte``, ``$in``, ``$all``, ``$ne``, ``$nin``), evaluation (``$regex`` with
                ``$options``), and logical (``$and``, ``$or``, ``$not``, ``$nor``) operators. Query Object Relationship
                Metafields by the related Object's ``id``, not its ``slug``.
            props: Comma-separated list of properties to return, including nested metadata paths. Omit to return
                everything. Narrowing ``props`` is the main way to keep responses under the 6 MB response cap and to
                reduce latency.
            sort: Sort order. Prefix with ``-`` for descending.
            limit: Maximum number of results to return.
            skip: Offset pagination: number of results to skip. Use ``after`` instead for large collections. Only one of
                ``skip`` and ``after`` may be used.
            use_cache: Set to ``false`` to bypass the cache and read through to the database. Guarantees you see writes
                you just made, at the cost of higher latency.
            pretty: Set to ``true`` to indent the JSON response for human reading. Increases response size.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The matching media.

        Raises:
            ApiError: The request was invalid, most often a malformed ``query`` or a Metafield value that failed
                validation. The access key is missing or incorrect. The Bucket needs to be upgraded before it can be
                used again. The addressed resource does not exist in this Bucket. Note that this covers a resource
                missing from a route that exists; an unrecognized route answers 200 with a ``Route not found`` body
                instead, as described in the API description above. The response exceeded the 6 MB limit. Narrow
                ``props``, lower ``limit``, or paginate. Too many requests hit the API too quickly. Back off and retry.
                Something went wrong on the Cosmic side. ``error`` is ``Error | RawError``."""
        return unwrap(
            await self._with_raw_response.list_media(
                slug,
                read_key=read_key,
                query=query,
                props=props,
                sort=sort,
                limit=limit,
                skip=skip,
                use_cache=use_cache,
                pretty=pretty,
                request_options=request_options,
            ),
        )

    async def update_media(
        self,
        slug: str,
        media_id: str,
        body: MediaUpdate | MediaUpdateDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> MediaResponse:
        """Update the folder, alt text, or user metadata on a media item. The underlying file is not replaced: to change
        the file, upload a new one via ``https://workers.cosmicjs.com`` and repoint the referencing Metafields.

        Args:
            slug: The Bucket slug. Found under Bucket > Settings in the dashboard.
            media_id: The media id.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The updated media item.

        Raises:
            ApiError: The request was invalid, most often a malformed ``query`` or a Metafield value that failed
                validation. The access key is missing or incorrect. The Bucket needs to be upgraded before it can be
                used again. The addressed resource does not exist in this Bucket. Note that this covers a resource
                missing from a route that exists; an unrecognized route answers 200 with a ``Route not found`` body
                instead, as described in the API description above. Too many requests hit the API too quickly. Back off
                and retry. Something went wrong on the Cosmic side. ``error`` is ``Error | RawError``."""
        return unwrap(await self._with_raw_response.update_media(slug, media_id, body, request_options=request_options))

    @property
    def with_raw_response(self) -> AsyncMediaApiWithRawResponse:
        return self._with_raw_response


class MediaApiWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def delete_media(
        self,
        slug: str,
        media_id: str,
        *,
        trigger_webhook: bool | None = False,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[MessageResponse, DeleteMediaErrorBody]:
        """Delete a media item from the Bucket. The file is removed from storage and the CDN caches are purged, so its
        URL stops working. Objects and Metafields that reference the media are not updated automatically: clear those
        references yourself. This is destructive and not reversible through the API.

        Args:
            slug: The Bucket slug. Found under Bucket > Settings in the dashboard.
            media_id: The media id.
            trigger_webhook: Set to ``true`` to fire the corresponding webhook for this action.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/buckets/{slug}/media/{media_id}"),
            path_params=[param[str]("slug", slug), param[str]("media_id", media_id)],
            query_params=[param[bool | None]("trigger_webhook", trigger_webhook)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.write_key,
            decoder=json_decoder[MessageResponse],
            error_mapper=delete_media_error_mapper,
            request_options=request_options,
        )

    def get_media(
        self,
        slug: str,
        media_id: str,
        *,
        read_key: str | None = None,
        props: str | None = None,
        use_cache: bool | None = True,
        pretty: bool | None = False,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[MediaResponse, GetMediaErrorBody]:
        """Retrieve a single media item by its id. To fetch by file name instead, query the media list endpoint with
        ``query={"name":"..."}``.

        Args:
            slug: The Bucket slug. Found under Bucket > Settings in the dashboard.
            media_id: The media id.
            read_key: The Bucket read key. Required unless the Bucket has no read key configured.
            props: Comma-separated list of properties to return, including nested metadata paths. Omit to return
                everything. Narrowing ``props`` is the main way to keep responses under the 6 MB response cap and to
                reduce latency.
            use_cache: Set to ``false`` to bypass the cache and read through to the database. Guarantees you see writes
                you just made, at the cost of higher latency.
            pretty: Set to ``true`` to indent the JSON response for human reading. Increases response size.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/buckets/{slug}/media/{media_id}"),
            path_params=[param[str]("slug", slug), param[str]("media_id", media_id)],
            query_params=[
                param[str | None]("read_key", read_key),
                param[str | None]("props", props),
                param[bool | None]("useCache", use_cache),
                param[bool | None]("pretty", pretty),
            ],
            auth_scheme=self._auth.read_key,
            decoder=json_decoder[MediaResponse],
            error_mapper=get_media_error_mapper,
            request_options=request_options,
        )

    def list_media(
        self,
        slug: str,
        *,
        read_key: str | None = None,
        query: str | None = None,
        props: str | None = None,
        sort: SortOrStr | None = None,
        limit: int | None = 1000,
        skip: int | None = 0,
        use_cache: bool | None = True,
        pretty: bool | None = False,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[MediaListResponse, ListMediaErrorBody]:
        """Query media in the Bucket. This is also how you fetch a single media item by name: pass
        ``query={"name":"7f9403a32f29-toucan.jpg"}``.

        The ``name`` of a media item is the value you assign to a File or Image Metafield when creating or updating an
        Object. Upload is not part of this host: ``POST /v3/buckets/{slug}/media`` is served by
        ``https://workers.cosmicjs.com``.

        Args:
            slug: The Bucket slug. Found under Bucket > Settings in the dashboard.
            read_key: The Bucket read key. Required unless the Bucket has no read key configured.
            query: A URL-encoded JSON object used to filter results. Follows MongoDB comparison (``$eq``, ``$gt``,
                ``$gte``, ``$lt``, ``$lte``, ``$in``, ``$all``, ``$ne``, ``$nin``), evaluation (``$regex`` with
                ``$options``), and logical (``$and``, ``$or``, ``$not``, ``$nor``) operators. Query Object Relationship
                Metafields by the related Object's ``id``, not its ``slug``.
            props: Comma-separated list of properties to return, including nested metadata paths. Omit to return
                everything. Narrowing ``props`` is the main way to keep responses under the 6 MB response cap and to
                reduce latency.
            sort: Sort order. Prefix with ``-`` for descending.
            limit: Maximum number of results to return.
            skip: Offset pagination: number of results to skip. Use ``after`` instead for large collections. Only one of
                ``skip`` and ``after`` may be used.
            use_cache: Set to ``false`` to bypass the cache and read through to the database. Guarantees you see writes
                you just made, at the cost of higher latency.
            pretty: Set to ``true`` to indent the JSON response for human reading. Increases response size.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/buckets/{slug}/media"),
            path_params=[param[str]("slug", slug)],
            query_params=[
                param[str | None]("read_key", read_key),
                param[str | None]("query", query),
                param[str | None]("props", props),
                param[SortOrStr | None]("sort", sort),
                param[int | None]("limit", limit),
                param[int | None]("skip", skip),
                param[bool | None]("useCache", use_cache),
                param[bool | None]("pretty", pretty),
            ],
            auth_scheme=self._auth.read_key,
            decoder=json_decoder[MediaListResponse],
            error_mapper=list_media_error_mapper,
            request_options=request_options,
        )

    def update_media(
        self,
        slug: str,
        media_id: str,
        body: MediaUpdate | MediaUpdateDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[MediaResponse, UpdateMediaErrorBody]:
        """Update the folder, alt text, or user metadata on a media item. The underlying file is not replaced: to change
        the file, upload a new one via ``https://workers.cosmicjs.com`` and repoint the referencing Metafields.

        Args:
            slug: The Bucket slug. Found under Bucket > Settings in the dashboard.
            media_id: The media id.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="PATCH",
            url_template=self._server.default("/buckets/{slug}/media/{media_id}"),
            path_params=[param[str]("slug", slug), param[str]("media_id", media_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[MediaUpdate | MediaUpdateDict](body),
            auth_scheme=self._auth.write_key,
            decoder=json_decoder[MediaResponse],
            error_mapper=update_media_error_mapper,
            request_options=request_options,
        )


class AsyncMediaApiWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def delete_media(
        self,
        slug: str,
        media_id: str,
        *,
        trigger_webhook: bool | None = False,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[MessageResponse, DeleteMediaErrorBody]:
        """Delete a media item from the Bucket. The file is removed from storage and the CDN caches are purged, so its
        URL stops working. Objects and Metafields that reference the media are not updated automatically: clear those
        references yourself. This is destructive and not reversible through the API.

        Args:
            slug: The Bucket slug. Found under Bucket > Settings in the dashboard.
            media_id: The media id.
            trigger_webhook: Set to ``true`` to fire the corresponding webhook for this action.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/buckets/{slug}/media/{media_id}"),
            path_params=[param[str]("slug", slug), param[str]("media_id", media_id)],
            query_params=[param[bool | None]("trigger_webhook", trigger_webhook)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.write_key,
            decoder=async_json_decoder[MessageResponse],
            error_mapper=delete_media_error_mapper,
            request_options=request_options,
        )

    async def get_media(
        self,
        slug: str,
        media_id: str,
        *,
        read_key: str | None = None,
        props: str | None = None,
        use_cache: bool | None = True,
        pretty: bool | None = False,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[MediaResponse, GetMediaErrorBody]:
        """Retrieve a single media item by its id. To fetch by file name instead, query the media list endpoint with
        ``query={"name":"..."}``.

        Args:
            slug: The Bucket slug. Found under Bucket > Settings in the dashboard.
            media_id: The media id.
            read_key: The Bucket read key. Required unless the Bucket has no read key configured.
            props: Comma-separated list of properties to return, including nested metadata paths. Omit to return
                everything. Narrowing ``props`` is the main way to keep responses under the 6 MB response cap and to
                reduce latency.
            use_cache: Set to ``false`` to bypass the cache and read through to the database. Guarantees you see writes
                you just made, at the cost of higher latency.
            pretty: Set to ``true`` to indent the JSON response for human reading. Increases response size.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/buckets/{slug}/media/{media_id}"),
            path_params=[param[str]("slug", slug), param[str]("media_id", media_id)],
            query_params=[
                param[str | None]("read_key", read_key),
                param[str | None]("props", props),
                param[bool | None]("useCache", use_cache),
                param[bool | None]("pretty", pretty),
            ],
            auth_scheme=self._auth.read_key,
            decoder=async_json_decoder[MediaResponse],
            error_mapper=get_media_error_mapper,
            request_options=request_options,
        )

    async def list_media(
        self,
        slug: str,
        *,
        read_key: str | None = None,
        query: str | None = None,
        props: str | None = None,
        sort: SortOrStr | None = None,
        limit: int | None = 1000,
        skip: int | None = 0,
        use_cache: bool | None = True,
        pretty: bool | None = False,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[MediaListResponse, ListMediaErrorBody]:
        """Query media in the Bucket. This is also how you fetch a single media item by name: pass
        ``query={"name":"7f9403a32f29-toucan.jpg"}``.

        The ``name`` of a media item is the value you assign to a File or Image Metafield when creating or updating an
        Object. Upload is not part of this host: ``POST /v3/buckets/{slug}/media`` is served by
        ``https://workers.cosmicjs.com``.

        Args:
            slug: The Bucket slug. Found under Bucket > Settings in the dashboard.
            read_key: The Bucket read key. Required unless the Bucket has no read key configured.
            query: A URL-encoded JSON object used to filter results. Follows MongoDB comparison (``$eq``, ``$gt``,
                ``$gte``, ``$lt``, ``$lte``, ``$in``, ``$all``, ``$ne``, ``$nin``), evaluation (``$regex`` with
                ``$options``), and logical (``$and``, ``$or``, ``$not``, ``$nor``) operators. Query Object Relationship
                Metafields by the related Object's ``id``, not its ``slug``.
            props: Comma-separated list of properties to return, including nested metadata paths. Omit to return
                everything. Narrowing ``props`` is the main way to keep responses under the 6 MB response cap and to
                reduce latency.
            sort: Sort order. Prefix with ``-`` for descending.
            limit: Maximum number of results to return.
            skip: Offset pagination: number of results to skip. Use ``after`` instead for large collections. Only one of
                ``skip`` and ``after`` may be used.
            use_cache: Set to ``false`` to bypass the cache and read through to the database. Guarantees you see writes
                you just made, at the cost of higher latency.
            pretty: Set to ``true`` to indent the JSON response for human reading. Increases response size.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/buckets/{slug}/media"),
            path_params=[param[str]("slug", slug)],
            query_params=[
                param[str | None]("read_key", read_key),
                param[str | None]("query", query),
                param[str | None]("props", props),
                param[SortOrStr | None]("sort", sort),
                param[int | None]("limit", limit),
                param[int | None]("skip", skip),
                param[bool | None]("useCache", use_cache),
                param[bool | None]("pretty", pretty),
            ],
            auth_scheme=self._auth.read_key,
            decoder=async_json_decoder[MediaListResponse],
            error_mapper=list_media_error_mapper,
            request_options=request_options,
        )

    async def update_media(
        self,
        slug: str,
        media_id: str,
        body: MediaUpdate | MediaUpdateDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[MediaResponse, UpdateMediaErrorBody]:
        """Update the folder, alt text, or user metadata on a media item. The underlying file is not replaced: to change
        the file, upload a new one via ``https://workers.cosmicjs.com`` and repoint the referencing Metafields.

        Args:
            slug: The Bucket slug. Found under Bucket > Settings in the dashboard.
            media_id: The media id.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="PATCH",
            url_template=self._server.default("/buckets/{slug}/media/{media_id}"),
            path_params=[param[str]("slug", slug), param[str]("media_id", media_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[MediaUpdate | MediaUpdateDict](body),
            auth_scheme=self._auth.write_key,
            decoder=async_json_decoder[MediaResponse],
            error_mapper=update_media_error_mapper,
            request_options=request_options,
        )
