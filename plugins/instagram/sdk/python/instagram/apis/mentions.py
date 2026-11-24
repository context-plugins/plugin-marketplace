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
from ..models.media_list import MediaList
from ..server.server import Server


class Mentions:
    def __init__(self, client: RawClient, server: Server) -> None:
        self._with_raw_response = MentionsWithRawResponse(client, server)

    def get_user_tags(
        self,
        user_id: str,
        access_token: str,
        *,
        fields: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> MediaList:
        """Get IG Media objects where the user has been tagged by other users.

        Args:
            user_id: Value sent with the request.
            access_token: Value sent with the request.
            fields: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            List of tagged media.

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(
            self._with_raw_response.get_user_tags(user_id, access_token, fields=fields, request_options=request_options)
        )

    @property
    def with_raw_response(self) -> MentionsWithRawResponse:
        return self._with_raw_response


class AsyncMentions:
    def __init__(self, client: AsyncRawClient, server: Server) -> None:
        self._with_raw_response = AsyncMentionsWithRawResponse(client, server)

    async def get_user_tags(
        self,
        user_id: str,
        access_token: str,
        *,
        fields: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> MediaList:
        """Get IG Media objects where the user has been tagged by other users.

        Args:
            user_id: Value sent with the request.
            access_token: Value sent with the request.
            fields: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            List of tagged media.

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.get_user_tags(
                user_id, access_token, fields=fields, request_options=request_options
            ),
        )

    @property
    def with_raw_response(self) -> AsyncMentionsWithRawResponse:
        return self._with_raw_response


class MentionsWithRawResponse(BaseRawResponse[RawClient, Server]):
    def get_user_tags(
        self,
        user_id: str,
        access_token: str,
        *,
        fields: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[MediaList, RawError]:
        """Get IG Media objects where the user has been tagged by other users.

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
            url_template=self._server.default("/{user_id}/tags"),
            path_params=[param[str]("user_id", user_id)],
            query_params=[param[str]("access_token", access_token), param[str | None]("fields", fields)],
            decoder=json_decoder[MediaList],
            error_mapper=raw_error_response,
            request_options=request_options,
        )


class AsyncMentionsWithRawResponse(BaseRawResponse[AsyncRawClient, Server]):
    async def get_user_tags(
        self,
        user_id: str,
        access_token: str,
        *,
        fields: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[MediaList, RawError]:
        """Get IG Media objects where the user has been tagged by other users.

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
            url_template=self._server.default("/{user_id}/tags"),
            path_params=[param[str]("user_id", user_id)],
            query_params=[param[str]("access_token", access_token), param[str | None]("fields", fields)],
            decoder=async_json_decoder[MediaList],
            error_mapper=raw_error_response,
            request_options=request_options,
        )
