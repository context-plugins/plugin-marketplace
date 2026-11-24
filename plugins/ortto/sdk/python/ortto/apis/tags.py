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
from ..errors.get_tags_error import GetTagsErrorBody, get_tags_error_mapper
from ..models.tags_get_request import TagsGetRequest, TagsGetRequestDict
from ..models.tags_get_response import TagsGetResponse
from ..server.server import Server


class Tags:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = TagsWithRawResponse(client, server, auth)

    def get_tags(
        self,
        *,
        body: TagsGetRequest | TagsGetRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> TagsGetResponse:
        """Retrieves the tags configured on the account. An empty body returns all tags; an optional search term filters
        the result.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            List of tags.

        Raises:
            ApiError: Missing or invalid API key. ``error`` is ``Error | RawError``."""
        return unwrap(self._with_raw_response.get_tags(body=body, request_options=request_options))

    @property
    def with_raw_response(self) -> TagsWithRawResponse:
        return self._with_raw_response


class AsyncTags:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncTagsWithRawResponse(client, server, auth)

    async def get_tags(
        self,
        *,
        body: TagsGetRequest | TagsGetRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> TagsGetResponse:
        """Retrieves the tags configured on the account. An empty body returns all tags; an optional search term filters
        the result.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            List of tags.

        Raises:
            ApiError: Missing or invalid API key. ``error`` is ``Error | RawError``."""
        return unwrap(await self._with_raw_response.get_tags(body=body, request_options=request_options))

    @property
    def with_raw_response(self) -> AsyncTagsWithRawResponse:
        return self._with_raw_response


class TagsWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def get_tags(
        self,
        *,
        body: TagsGetRequest | TagsGetRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[TagsGetResponse, GetTagsErrorBody]:
        """Retrieves the tags configured on the account. An empty body returns all tags; an optional search term filters
        the result.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/tags/get"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[TagsGetRequest | TagsGetRequestDict | None](body),
            auth_scheme=self._auth.api_key_auth,
            decoder=json_decoder[TagsGetResponse],
            error_mapper=get_tags_error_mapper,
            request_options=request_options,
        )


class AsyncTagsWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def get_tags(
        self,
        *,
        body: TagsGetRequest | TagsGetRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[TagsGetResponse, GetTagsErrorBody]:
        """Retrieves the tags configured on the account. An empty body returns all tags; an optional search term filters
        the result.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/tags/get"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[TagsGetRequest | TagsGetRequestDict | None](body),
            auth_scheme=self._auth.api_key_auth,
            decoder=async_json_decoder[TagsGetResponse],
            error_mapper=get_tags_error_mapper,
            request_options=request_options,
        )
