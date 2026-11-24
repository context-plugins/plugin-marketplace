from __future__ import annotations

from ..core import (
    ApiResult,
    AsyncRawClient,
    AsyncRequestOptionsOrDict,
    BaseRawResponse,
    RawClient,
    RawError,
    RequestOptionsOrDict,
    async_json_decoder,
    json_decoder,
    param,
    raw_error_response,
    unwrap,
)
from ..models.ig_hashtag_search_response import IgHashtagSearchResponse
from ..models.media_list import MediaList
from ..server.server import Server


class Hashtags:
    def __init__(self, client: RawClient, server: Server) -> None:
        self._with_raw_response = HashtagsWithRawResponse(client, server)

    def get_hashtag_recent_media(
        self,
        hashtag_id: str,
        user_id: str,
        access_token: str,
        *,
        fields: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> MediaList:
        """Get the most recently published media tagged with a specific hashtag.

        Args:
            hashtag_id: Value sent with the request.
            user_id: Value sent with the request.
            access_token: Value sent with the request.
            fields: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Recent media for the hashtag.

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(
            self._with_raw_response.get_hashtag_recent_media(
                hashtag_id, user_id, access_token, fields=fields, request_options=request_options
            ),
        )

    def get_hashtag_top_media(
        self,
        hashtag_id: str,
        user_id: str,
        access_token: str,
        *,
        fields: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> MediaList:
        """Get the most popular media tagged with a specific hashtag.

        Args:
            hashtag_id: Value sent with the request.
            user_id: Value sent with the request.
            access_token: Value sent with the request.
            fields: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Top media for the hashtag.

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(
            self._with_raw_response.get_hashtag_top_media(
                hashtag_id, user_id, access_token, fields=fields, request_options=request_options
            ),
        )

    def search_hashtag(
        self, q: str, user_id: str, access_token: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> IgHashtagSearchResponse:
        """Search for a hashtag by name and get its ID.

        Args:
            q: The hashtag to search for (without
            user_id: The ID of the user making the request.
            access_token: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Hashtag search results.

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.search_hashtag(q, user_id, access_token, request_options=request_options))

    @property
    def with_raw_response(self) -> HashtagsWithRawResponse:
        return self._with_raw_response


class AsyncHashtags:
    def __init__(self, client: AsyncRawClient, server: Server) -> None:
        self._with_raw_response = AsyncHashtagsWithRawResponse(client, server)

    async def get_hashtag_recent_media(
        self,
        hashtag_id: str,
        user_id: str,
        access_token: str,
        *,
        fields: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> MediaList:
        """Get the most recently published media tagged with a specific hashtag.

        Args:
            hashtag_id: Value sent with the request.
            user_id: Value sent with the request.
            access_token: Value sent with the request.
            fields: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Recent media for the hashtag.

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.get_hashtag_recent_media(
                hashtag_id, user_id, access_token, fields=fields, request_options=request_options
            ),
        )

    async def get_hashtag_top_media(
        self,
        hashtag_id: str,
        user_id: str,
        access_token: str,
        *,
        fields: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> MediaList:
        """Get the most popular media tagged with a specific hashtag.

        Args:
            hashtag_id: Value sent with the request.
            user_id: Value sent with the request.
            access_token: Value sent with the request.
            fields: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Top media for the hashtag.

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.get_hashtag_top_media(
                hashtag_id, user_id, access_token, fields=fields, request_options=request_options
            ),
        )

    async def search_hashtag(
        self, q: str, user_id: str, access_token: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> IgHashtagSearchResponse:
        """Search for a hashtag by name and get its ID.

        Args:
            q: The hashtag to search for (without
            user_id: The ID of the user making the request.
            access_token: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Hashtag search results.

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.search_hashtag(q, user_id, access_token, request_options=request_options)
        )

    @property
    def with_raw_response(self) -> AsyncHashtagsWithRawResponse:
        return self._with_raw_response


class HashtagsWithRawResponse(BaseRawResponse[RawClient, Server]):
    def get_hashtag_recent_media(
        self,
        hashtag_id: str,
        user_id: str,
        access_token: str,
        *,
        fields: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[MediaList, RawError]:
        """Get the most recently published media tagged with a specific hashtag.

        Args:
            hashtag_id: Value sent with the request.
            user_id: Value sent with the request.
            access_token: Value sent with the request.
            fields: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/{hashtag_id}/recent_media"),
            path_params=[param[str]("hashtag_id", hashtag_id)],
            query_params=[
                param[str]("user_id", user_id),
                param[str]("access_token", access_token),
                param[str | None]("fields", fields),
            ],
            decoder=json_decoder[MediaList],
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    def get_hashtag_top_media(
        self,
        hashtag_id: str,
        user_id: str,
        access_token: str,
        *,
        fields: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[MediaList, RawError]:
        """Get the most popular media tagged with a specific hashtag.

        Args:
            hashtag_id: Value sent with the request.
            user_id: Value sent with the request.
            access_token: Value sent with the request.
            fields: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/{hashtag_id}/top_media"),
            path_params=[param[str]("hashtag_id", hashtag_id)],
            query_params=[
                param[str]("user_id", user_id),
                param[str]("access_token", access_token),
                param[str | None]("fields", fields),
            ],
            decoder=json_decoder[MediaList],
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    def search_hashtag(
        self, q: str, user_id: str, access_token: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[IgHashtagSearchResponse, RawError]:
        """Search for a hashtag by name and get its ID.

        Args:
            q: The hashtag to search for (without
            user_id: The ID of the user making the request.
            access_token: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/ig_hashtag_search"),
            query_params=[param[str]("q", q), param[str]("user_id", user_id), param[str]("access_token", access_token)],
            decoder=json_decoder[IgHashtagSearchResponse],
            error_mapper=raw_error_response,
            request_options=request_options,
        )


class AsyncHashtagsWithRawResponse(BaseRawResponse[AsyncRawClient, Server]):
    async def get_hashtag_recent_media(
        self,
        hashtag_id: str,
        user_id: str,
        access_token: str,
        *,
        fields: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[MediaList, RawError]:
        """Get the most recently published media tagged with a specific hashtag.

        Args:
            hashtag_id: Value sent with the request.
            user_id: Value sent with the request.
            access_token: Value sent with the request.
            fields: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/{hashtag_id}/recent_media"),
            path_params=[param[str]("hashtag_id", hashtag_id)],
            query_params=[
                param[str]("user_id", user_id),
                param[str]("access_token", access_token),
                param[str | None]("fields", fields),
            ],
            decoder=async_json_decoder[MediaList],
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    async def get_hashtag_top_media(
        self,
        hashtag_id: str,
        user_id: str,
        access_token: str,
        *,
        fields: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[MediaList, RawError]:
        """Get the most popular media tagged with a specific hashtag.

        Args:
            hashtag_id: Value sent with the request.
            user_id: Value sent with the request.
            access_token: Value sent with the request.
            fields: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/{hashtag_id}/top_media"),
            path_params=[param[str]("hashtag_id", hashtag_id)],
            query_params=[
                param[str]("user_id", user_id),
                param[str]("access_token", access_token),
                param[str | None]("fields", fields),
            ],
            decoder=async_json_decoder[MediaList],
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    async def search_hashtag(
        self, q: str, user_id: str, access_token: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[IgHashtagSearchResponse, RawError]:
        """Search for a hashtag by name and get its ID.

        Args:
            q: The hashtag to search for (without
            user_id: The ID of the user making the request.
            access_token: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/ig_hashtag_search"),
            query_params=[param[str]("q", q), param[str]("user_id", user_id), param[str]("access_token", access_token)],
            decoder=async_json_decoder[IgHashtagSearchResponse],
            error_mapper=raw_error_response,
            request_options=request_options,
        )
