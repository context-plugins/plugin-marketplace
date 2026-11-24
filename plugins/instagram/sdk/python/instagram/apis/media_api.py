from __future__ import annotations

from uuid import UUID, uuid4

from ..core import (
    ApiResult,
    AsyncRawClient,
    AsyncRequestOptionsOrDict,
    BaseRawResponse,
    RawClient,
    RawError,
    RequestOptionsOrDict,
    async_json_decoder,
    json_body,
    json_decoder,
    param,
    raw_error_response,
    unwrap,
)
from ..models.media import Media
from ..models.media_list import MediaList
from ..models.request_instagram_graph_media_api import RequestInstagramGraphMediaApi, RequestInstagramGraphMediaApiDict
from ..models.response import Response
from ..models.success_response import SuccessResponse
from ..server.server import Server


class MediaApi:
    def __init__(self, client: RawClient, server: Server) -> None:
        self._with_raw_response = MediaApiWithRawResponse(client, server)

    def delete_media(
        self, media_id: str, access_token: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> Response:
        """Delete an Instagram media object (post, story, reel, or carousel).

        Args:
            media_id: Value sent with the request.
            access_token: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Media deleted.

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.delete_media(media_id, access_token, request_options=request_options))

    def get_media(
        self,
        media_id: str,
        access_token: str,
        *,
        fields: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> Media:
        """Get fields on an Instagram photo, video, story, reel, or album.

        Args:
            media_id: The IG Media ID.
            access_token: Value sent with the request.
            fields: Comma-separated list of fields.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Media object.

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(
            self._with_raw_response.get_media(media_id, access_token, fields=fields, request_options=request_options)
        )

    def get_media_children(
        self,
        media_id: str,
        access_token: str,
        *,
        fields: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> MediaList:
        """Get media objects within a carousel album.

        Args:
            media_id: Value sent with the request.
            access_token: Value sent with the request.
            fields: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            List of child media.

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(
            self._with_raw_response.get_media_children(
                media_id, access_token, fields=fields, request_options=request_options
            ),
        )

    def get_user_media(
        self,
        user_id: str,
        access_token: str,
        *,
        fields: str | None = None,
        limit: int | None = None,
        after: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> MediaList:
        """Get a collection of IG Media objects published on the account.

        Args:
            user_id: The Instagram user ID.
            access_token: Value sent with the request.
            fields: Comma-separated list of fields.
            limit: Maximum number of results per page.
            after: Cursor for pagination.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            List of media objects.

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(
            self._with_raw_response.get_user_media(
                user_id, access_token, fields=fields, limit=limit, after=after, request_options=request_options
            ),
        )

    def get_user_stories(
        self,
        user_id: str,
        access_token: str,
        *,
        fields: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> MediaList:
        """Get a collection of story IG Media objects on the account.

        Args:
            user_id: Value sent with the request.
            access_token: Value sent with the request.
            fields: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            List of story media.

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(
            self._with_raw_response.get_user_stories(
                user_id, access_token, fields=fields, request_options=request_options
            ),
        )

    def update_media(
        self,
        media_id: str,
        *,
        body: RequestInstagramGraphMediaApi | RequestInstagramGraphMediaApiDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> SuccessResponse:
        """Enable or disable comments on a media object.

        Args:
            media_id: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Update success.

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.update_media(media_id, body=body, request_options=request_options))

    @property
    def with_raw_response(self) -> MediaApiWithRawResponse:
        return self._with_raw_response


class AsyncMediaApi:
    def __init__(self, client: AsyncRawClient, server: Server) -> None:
        self._with_raw_response = AsyncMediaApiWithRawResponse(client, server)

    async def delete_media(
        self, media_id: str, access_token: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> Response:
        """Delete an Instagram media object (post, story, reel, or carousel).

        Args:
            media_id: Value sent with the request.
            access_token: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Media deleted.

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.delete_media(media_id, access_token, request_options=request_options)
        )

    async def get_media(
        self,
        media_id: str,
        access_token: str,
        *,
        fields: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> Media:
        """Get fields on an Instagram photo, video, story, reel, or album.

        Args:
            media_id: The IG Media ID.
            access_token: Value sent with the request.
            fields: Comma-separated list of fields.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Media object.

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.get_media(
                media_id, access_token, fields=fields, request_options=request_options
            ),
        )

    async def get_media_children(
        self,
        media_id: str,
        access_token: str,
        *,
        fields: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> MediaList:
        """Get media objects within a carousel album.

        Args:
            media_id: Value sent with the request.
            access_token: Value sent with the request.
            fields: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            List of child media.

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.get_media_children(
                media_id, access_token, fields=fields, request_options=request_options
            ),
        )

    async def get_user_media(
        self,
        user_id: str,
        access_token: str,
        *,
        fields: str | None = None,
        limit: int | None = None,
        after: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> MediaList:
        """Get a collection of IG Media objects published on the account.

        Args:
            user_id: The Instagram user ID.
            access_token: Value sent with the request.
            fields: Comma-separated list of fields.
            limit: Maximum number of results per page.
            after: Cursor for pagination.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            List of media objects.

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.get_user_media(
                user_id, access_token, fields=fields, limit=limit, after=after, request_options=request_options
            ),
        )

    async def get_user_stories(
        self,
        user_id: str,
        access_token: str,
        *,
        fields: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> MediaList:
        """Get a collection of story IG Media objects on the account.

        Args:
            user_id: Value sent with the request.
            access_token: Value sent with the request.
            fields: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            List of story media.

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.get_user_stories(
                user_id, access_token, fields=fields, request_options=request_options
            ),
        )

    async def update_media(
        self,
        media_id: str,
        *,
        body: RequestInstagramGraphMediaApi | RequestInstagramGraphMediaApiDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> SuccessResponse:
        """Enable or disable comments on a media object.

        Args:
            media_id: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Update success.

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.update_media(media_id, body=body, request_options=request_options))

    @property
    def with_raw_response(self) -> AsyncMediaApiWithRawResponse:
        return self._with_raw_response


class MediaApiWithRawResponse(BaseRawResponse[RawClient, Server]):
    def delete_media(
        self, media_id: str, access_token: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[Response, RawError]:
        """Delete an Instagram media object (post, story, reel, or carousel).

        Args:
            media_id: Value sent with the request.
            access_token: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/{media_id}"),
            path_params=[param[str]("media_id", media_id)],
            query_params=[param[str]("access_token", access_token)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            decoder=json_decoder[Response],
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    def get_media(
        self,
        media_id: str,
        access_token: str,
        *,
        fields: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[Media, RawError]:
        """Get fields on an Instagram photo, video, story, reel, or album.

        Args:
            media_id: The IG Media ID.
            access_token: Value sent with the request.
            fields: Comma-separated list of fields.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/{media_id}"),
            path_params=[param[str]("media_id", media_id)],
            query_params=[param[str]("access_token", access_token), param[str | None]("fields", fields)],
            decoder=json_decoder[Media],
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    def get_media_children(
        self,
        media_id: str,
        access_token: str,
        *,
        fields: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[MediaList, RawError]:
        """Get media objects within a carousel album.

        Args:
            media_id: Value sent with the request.
            access_token: Value sent with the request.
            fields: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/{media_id}/children"),
            path_params=[param[str]("media_id", media_id)],
            query_params=[param[str]("access_token", access_token), param[str | None]("fields", fields)],
            decoder=json_decoder[MediaList],
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    def get_user_media(
        self,
        user_id: str,
        access_token: str,
        *,
        fields: str | None = None,
        limit: int | None = None,
        after: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[MediaList, RawError]:
        """Get a collection of IG Media objects published on the account.

        Args:
            user_id: The Instagram user ID.
            access_token: Value sent with the request.
            fields: Comma-separated list of fields.
            limit: Maximum number of results per page.
            after: Cursor for pagination.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/{user_id}/media"),
            path_params=[param[str]("user_id", user_id)],
            query_params=[
                param[str]("access_token", access_token),
                param[str | None]("fields", fields),
                param[int | None]("limit", limit),
                param[str | None]("after", after),
            ],
            decoder=json_decoder[MediaList],
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    def get_user_stories(
        self,
        user_id: str,
        access_token: str,
        *,
        fields: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[MediaList, RawError]:
        """Get a collection of story IG Media objects on the account.

        Args:
            user_id: Value sent with the request.
            access_token: Value sent with the request.
            fields: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/{user_id}/stories"),
            path_params=[param[str]("user_id", user_id)],
            query_params=[param[str]("access_token", access_token), param[str | None]("fields", fields)],
            decoder=json_decoder[MediaList],
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    def update_media(
        self,
        media_id: str,
        *,
        body: RequestInstagramGraphMediaApi | RequestInstagramGraphMediaApiDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[SuccessResponse, RawError]:
        """Enable or disable comments on a media object.

        Args:
            media_id: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/{media_id}"),
            path_params=[param[str]("media_id", media_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[RequestInstagramGraphMediaApi | RequestInstagramGraphMediaApiDict | None](body),
            decoder=json_decoder[SuccessResponse],
            error_mapper=raw_error_response,
            request_options=request_options,
        )


class AsyncMediaApiWithRawResponse(BaseRawResponse[AsyncRawClient, Server]):
    async def delete_media(
        self, media_id: str, access_token: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[Response, RawError]:
        """Delete an Instagram media object (post, story, reel, or carousel).

        Args:
            media_id: Value sent with the request.
            access_token: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/{media_id}"),
            path_params=[param[str]("media_id", media_id)],
            query_params=[param[str]("access_token", access_token)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            decoder=async_json_decoder[Response],
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    async def get_media(
        self,
        media_id: str,
        access_token: str,
        *,
        fields: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[Media, RawError]:
        """Get fields on an Instagram photo, video, story, reel, or album.

        Args:
            media_id: The IG Media ID.
            access_token: Value sent with the request.
            fields: Comma-separated list of fields.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/{media_id}"),
            path_params=[param[str]("media_id", media_id)],
            query_params=[param[str]("access_token", access_token), param[str | None]("fields", fields)],
            decoder=async_json_decoder[Media],
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    async def get_media_children(
        self,
        media_id: str,
        access_token: str,
        *,
        fields: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[MediaList, RawError]:
        """Get media objects within a carousel album.

        Args:
            media_id: Value sent with the request.
            access_token: Value sent with the request.
            fields: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/{media_id}/children"),
            path_params=[param[str]("media_id", media_id)],
            query_params=[param[str]("access_token", access_token), param[str | None]("fields", fields)],
            decoder=async_json_decoder[MediaList],
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    async def get_user_media(
        self,
        user_id: str,
        access_token: str,
        *,
        fields: str | None = None,
        limit: int | None = None,
        after: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[MediaList, RawError]:
        """Get a collection of IG Media objects published on the account.

        Args:
            user_id: The Instagram user ID.
            access_token: Value sent with the request.
            fields: Comma-separated list of fields.
            limit: Maximum number of results per page.
            after: Cursor for pagination.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/{user_id}/media"),
            path_params=[param[str]("user_id", user_id)],
            query_params=[
                param[str]("access_token", access_token),
                param[str | None]("fields", fields),
                param[int | None]("limit", limit),
                param[str | None]("after", after),
            ],
            decoder=async_json_decoder[MediaList],
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    async def get_user_stories(
        self,
        user_id: str,
        access_token: str,
        *,
        fields: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[MediaList, RawError]:
        """Get a collection of story IG Media objects on the account.

        Args:
            user_id: Value sent with the request.
            access_token: Value sent with the request.
            fields: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/{user_id}/stories"),
            path_params=[param[str]("user_id", user_id)],
            query_params=[param[str]("access_token", access_token), param[str | None]("fields", fields)],
            decoder=async_json_decoder[MediaList],
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    async def update_media(
        self,
        media_id: str,
        *,
        body: RequestInstagramGraphMediaApi | RequestInstagramGraphMediaApiDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[SuccessResponse, RawError]:
        """Enable or disable comments on a media object.

        Args:
            media_id: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/{media_id}"),
            path_params=[param[str]("media_id", media_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[RequestInstagramGraphMediaApi | RequestInstagramGraphMediaApiDict | None](body),
            decoder=async_json_decoder[SuccessResponse],
            error_mapper=raw_error_response,
            request_options=request_options,
        )
