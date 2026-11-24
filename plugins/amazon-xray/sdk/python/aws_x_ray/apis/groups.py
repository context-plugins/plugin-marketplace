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
from ..errors.get_groups_error import GetGroupsErrorBody, get_groups_error_mapper
from ..models.get_groups_result import GetGroupsResult
from ..models.groups_request import GroupsRequest, GroupsRequestDict
from ..server.server import Server


class Groups:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = GroupsWithRawResponse(client, server, auth)

    def get_groups(
        self,
        *,
        body: GroupsRequest | GroupsRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> GetGroupsResult:
        """Retrieves all active group details.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InvalidRequestException ThrottledException ``error`` is ``InvalidRequestException |
                ThrottledException | RawError``."""
        return unwrap(self._with_raw_response.get_groups(body=body, request_options=request_options))

    @property
    def with_raw_response(self) -> GroupsWithRawResponse:
        return self._with_raw_response


class AsyncGroups:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncGroupsWithRawResponse(client, server, auth)

    async def get_groups(
        self,
        *,
        body: GroupsRequest | GroupsRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> GetGroupsResult:
        """Retrieves all active group details.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InvalidRequestException ThrottledException ``error`` is ``InvalidRequestException |
                ThrottledException | RawError``."""
        return unwrap(await self._with_raw_response.get_groups(body=body, request_options=request_options))

    @property
    def with_raw_response(self) -> AsyncGroupsWithRawResponse:
        return self._with_raw_response


class GroupsWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def get_groups(
        self,
        *,
        body: GroupsRequest | GroupsRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[GetGroupsResult, GetGroupsErrorBody]:
        """Retrieves all active group details.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/Groups"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[GroupsRequest | GroupsRequestDict | None](body),
            auth_scheme=self._auth.sigv4,
            decoder=json_decoder[GetGroupsResult],
            error_mapper=get_groups_error_mapper,
            request_options=request_options,
        )


class AsyncGroupsWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def get_groups(
        self,
        *,
        body: GroupsRequest | GroupsRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[GetGroupsResult, GetGroupsErrorBody]:
        """Retrieves all active group details.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/Groups"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[GroupsRequest | GroupsRequestDict | None](body),
            auth_scheme=self._auth.sigv4,
            decoder=async_json_decoder[GetGroupsResult],
            error_mapper=get_groups_error_mapper,
            request_options=request_options,
        )
