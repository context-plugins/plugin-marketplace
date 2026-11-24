from __future__ import annotations

from ..auth import AsyncAuthSchemes, AuthSchemes
from ..core import (
    ApiResult,
    AsyncRawClient,
    AsyncRequestOptionsOrDict,
    RawClient,
    RequestOptionsOrDict,
    SecuredRawResponse,
    async_json_decoder,
    json_decoder,
    param,
    unwrap,
)
from ..errors.get_external_link_stories_error import (
    GetExternalLinkStoriesErrorBody,
    get_external_link_stories_error_mapper,
)
from ..models.story_slim import StorySlim
from ..server.server import Server


class ExternalLink:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = ExternalLinkWithRawResponse(client, server, auth)

    def get_external_link_stories(
        self, external_link: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> list[StorySlim]:
        """Get Stories which have a given External Link associated with them.

        Args:
            external_link: The external link associated with one or more stories.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Resource

        Raises:
            ApiError: Schema mismatch Resource does not exist Unprocessable ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.get_external_link_stories(external_link, request_options=request_options))

    @property
    def with_raw_response(self) -> ExternalLinkWithRawResponse:
        return self._with_raw_response


class AsyncExternalLink:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncExternalLinkWithRawResponse(client, server, auth)

    async def get_external_link_stories(
        self, external_link: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> list[StorySlim]:
        """Get Stories which have a given External Link associated with them.

        Args:
            external_link: The external link associated with one or more stories.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Resource

        Raises:
            ApiError: Schema mismatch Resource does not exist Unprocessable ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.get_external_link_stories(external_link, request_options=request_options)
        )

    @property
    def with_raw_response(self) -> AsyncExternalLinkWithRawResponse:
        return self._with_raw_response


class ExternalLinkWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def get_external_link_stories(
        self, external_link: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[list[StorySlim], GetExternalLinkStoriesErrorBody]:
        """Get Stories which have a given External Link associated with them.

        Args:
            external_link: The external link associated with one or more stories.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v3/external-link/stories"),
            query_params=[param[str]("external_link", external_link)],
            auth_scheme=self._auth.api_token,
            decoder=json_decoder[list[StorySlim]],
            error_mapper=get_external_link_stories_error_mapper,
            request_options=request_options,
        )


class AsyncExternalLinkWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def get_external_link_stories(
        self, external_link: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[list[StorySlim], GetExternalLinkStoriesErrorBody]:
        """Get Stories which have a given External Link associated with them.

        Args:
            external_link: The external link associated with one or more stories.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v3/external-link/stories"),
            query_params=[param[str]("external_link", external_link)],
            auth_scheme=self._auth.api_token,
            decoder=async_json_decoder[list[StorySlim]],
            error_mapper=get_external_link_stories_error_mapper,
            request_options=request_options,
        )
