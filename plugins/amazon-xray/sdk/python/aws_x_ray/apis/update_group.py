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
from ..errors.update_group_error import UpdateGroupErrorBody, update_group_error_mapper
from ..models.update_group_request import UpdateGroupRequest, UpdateGroupRequestDict
from ..models.update_group_result import UpdateGroupResult
from ..server.server import Server


class UpdateGroup:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = UpdateGroupWithRawResponse(client, server, auth)

    def update_group(
        self,
        *,
        body: UpdateGroupRequest | UpdateGroupRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> UpdateGroupResult:
        """Updates a group resource.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InvalidRequestException ThrottledException ``error`` is ``InvalidRequestException |
                ThrottledException | RawError``."""
        return unwrap(self._with_raw_response.update_group(body=body, request_options=request_options))

    @property
    def with_raw_response(self) -> UpdateGroupWithRawResponse:
        return self._with_raw_response


class AsyncUpdateGroup:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncUpdateGroupWithRawResponse(client, server, auth)

    async def update_group(
        self,
        *,
        body: UpdateGroupRequest | UpdateGroupRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> UpdateGroupResult:
        """Updates a group resource.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InvalidRequestException ThrottledException ``error`` is ``InvalidRequestException |
                ThrottledException | RawError``."""
        return unwrap(await self._with_raw_response.update_group(body=body, request_options=request_options))

    @property
    def with_raw_response(self) -> AsyncUpdateGroupWithRawResponse:
        return self._with_raw_response


class UpdateGroupWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def update_group(
        self,
        *,
        body: UpdateGroupRequest | UpdateGroupRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[UpdateGroupResult, UpdateGroupErrorBody]:
        """Updates a group resource.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/UpdateGroup"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[UpdateGroupRequest | UpdateGroupRequestDict | None](body),
            auth_scheme=self._auth.sigv4,
            decoder=json_decoder[UpdateGroupResult],
            error_mapper=update_group_error_mapper,
            request_options=request_options,
        )


class AsyncUpdateGroupWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def update_group(
        self,
        *,
        body: UpdateGroupRequest | UpdateGroupRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[UpdateGroupResult, UpdateGroupErrorBody]:
        """Updates a group resource.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/UpdateGroup"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[UpdateGroupRequest | UpdateGroupRequestDict | None](body),
            auth_scheme=self._auth.sigv4,
            decoder=async_json_decoder[UpdateGroupResult],
            error_mapper=update_group_error_mapper,
            request_options=request_options,
        )
