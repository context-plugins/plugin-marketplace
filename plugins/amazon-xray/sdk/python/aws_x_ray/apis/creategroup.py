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
from ..errors.create_group_error import CreateGroupErrorBody, create_group_error_mapper
from ..models.create_group_request import CreateGroupRequest, CreateGroupRequestDict
from ..models.create_group_result import CreateGroupResult
from ..server.server import Server


class Creategroup:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = CreategroupWithRawResponse(client, server, auth)

    def create_group(
        self,
        *,
        body: CreateGroupRequest | CreateGroupRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> CreateGroupResult:
        """Creates a group resource with a name and a filter expression.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InvalidRequestException ThrottledException ``error`` is ``InvalidRequestException |
                ThrottledException | RawError``."""
        return unwrap(self._with_raw_response.create_group(body=body, request_options=request_options))

    @property
    def with_raw_response(self) -> CreategroupWithRawResponse:
        return self._with_raw_response


class AsyncCreategroup:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncCreategroupWithRawResponse(client, server, auth)

    async def create_group(
        self,
        *,
        body: CreateGroupRequest | CreateGroupRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> CreateGroupResult:
        """Creates a group resource with a name and a filter expression.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InvalidRequestException ThrottledException ``error`` is ``InvalidRequestException |
                ThrottledException | RawError``."""
        return unwrap(await self._with_raw_response.create_group(body=body, request_options=request_options))

    @property
    def with_raw_response(self) -> AsyncCreategroupWithRawResponse:
        return self._with_raw_response


class CreategroupWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def create_group(
        self,
        *,
        body: CreateGroupRequest | CreateGroupRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[CreateGroupResult, CreateGroupErrorBody]:
        """Creates a group resource with a name and a filter expression.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/CreateGroup"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[CreateGroupRequest | CreateGroupRequestDict | None](body),
            auth_scheme=self._auth.sigv4,
            decoder=json_decoder[CreateGroupResult],
            error_mapper=create_group_error_mapper,
            request_options=request_options,
        )


class AsyncCreategroupWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def create_group(
        self,
        *,
        body: CreateGroupRequest | CreateGroupRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[CreateGroupResult, CreateGroupErrorBody]:
        """Creates a group resource with a name and a filter expression.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/CreateGroup"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[CreateGroupRequest | CreateGroupRequestDict | None](body),
            auth_scheme=self._auth.sigv4,
            decoder=async_json_decoder[CreateGroupResult],
            error_mapper=create_group_error_mapper,
            request_options=request_options,
        )
