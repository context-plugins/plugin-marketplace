from __future__ import annotations

from typing import Any
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
from ..errors.delete_group_error import DeleteGroupErrorBody, delete_group_error_mapper
from ..models.delete_group_request import DeleteGroupRequest, DeleteGroupRequestDict
from ..server.server import Server


class DeleteGroup:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = DeleteGroupWithRawResponse(client, server, auth)

    def delete_group(
        self,
        *,
        body: DeleteGroupRequest | DeleteGroupRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> Any:
        """Deletes a group resource.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InvalidRequestException ThrottledException ``error`` is ``InvalidRequestException |
                ThrottledException | RawError``."""
        return unwrap(self._with_raw_response.delete_group(body=body, request_options=request_options))

    @property
    def with_raw_response(self) -> DeleteGroupWithRawResponse:
        return self._with_raw_response


class AsyncDeleteGroup:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncDeleteGroupWithRawResponse(client, server, auth)

    async def delete_group(
        self,
        *,
        body: DeleteGroupRequest | DeleteGroupRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> Any:
        """Deletes a group resource.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InvalidRequestException ThrottledException ``error`` is ``InvalidRequestException |
                ThrottledException | RawError``."""
        return unwrap(await self._with_raw_response.delete_group(body=body, request_options=request_options))

    @property
    def with_raw_response(self) -> AsyncDeleteGroupWithRawResponse:
        return self._with_raw_response


class DeleteGroupWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def delete_group(
        self,
        *,
        body: DeleteGroupRequest | DeleteGroupRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[Any, DeleteGroupErrorBody]:
        """Deletes a group resource.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/DeleteGroup"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[DeleteGroupRequest | DeleteGroupRequestDict | None](body),
            auth_scheme=self._auth.sigv4,
            decoder=json_decoder[Any],
            error_mapper=delete_group_error_mapper,
            request_options=request_options,
        )


class AsyncDeleteGroupWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def delete_group(
        self,
        *,
        body: DeleteGroupRequest | DeleteGroupRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[Any, DeleteGroupErrorBody]:
        """Deletes a group resource.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/DeleteGroup"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[DeleteGroupRequest | DeleteGroupRequestDict | None](body),
            auth_scheme=self._auth.sigv4,
            decoder=async_json_decoder[Any],
            error_mapper=delete_group_error_mapper,
            request_options=request_options,
        )
