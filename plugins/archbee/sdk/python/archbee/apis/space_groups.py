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
from ..errors.create_space_group_error import CreateSpaceGroupErrorBody, create_space_group_error_mapper
from ..errors.delete_space_group_error import DeleteSpaceGroupErrorBody, delete_space_group_error_mapper
from ..models.space_group_create_request import SpaceGroupCreateRequest, SpaceGroupCreateRequestDict
from ..models.space_group_create_response import SpaceGroupCreateResponse
from ..models.space_group_delete_request import SpaceGroupDeleteRequest, SpaceGroupDeleteRequestDict
from ..models.space_group_delete_response import SpaceGroupDeleteResponse
from ..server.server import Server


class SpaceGroups:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = SpaceGroupsWithRawResponse(client, server, auth)

    def create_space_group(
        self,
        body: SpaceGroupCreateRequest | SpaceGroupCreateRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> SpaceGroupCreateResponse:
        """Create a new space group with desired fields, return the space group.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Process status

        Raises:
            ApiError: Invalid request ``error`` is ``SpaceGroupCreate400Error1 | RawError``."""
        return unwrap(self._with_raw_response.create_space_group(body, request_options=request_options))

    def delete_space_group(
        self,
        body: SpaceGroupDeleteRequest | SpaceGroupDeleteRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> SpaceGroupDeleteResponse:
        """Delete Archbee space group with given spaceGroupId.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Process status

        Raises:
            ApiError: Invalid request ``error`` is ``SpaceGroupDelete400Error1 | RawError``."""
        return unwrap(self._with_raw_response.delete_space_group(body, request_options=request_options))

    @property
    def with_raw_response(self) -> SpaceGroupsWithRawResponse:
        return self._with_raw_response


class AsyncSpaceGroups:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncSpaceGroupsWithRawResponse(client, server, auth)

    async def create_space_group(
        self,
        body: SpaceGroupCreateRequest | SpaceGroupCreateRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> SpaceGroupCreateResponse:
        """Create a new space group with desired fields, return the space group.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Process status

        Raises:
            ApiError: Invalid request ``error`` is ``SpaceGroupCreate400Error1 | RawError``."""
        return unwrap(await self._with_raw_response.create_space_group(body, request_options=request_options))

    async def delete_space_group(
        self,
        body: SpaceGroupDeleteRequest | SpaceGroupDeleteRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> SpaceGroupDeleteResponse:
        """Delete Archbee space group with given spaceGroupId.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Process status

        Raises:
            ApiError: Invalid request ``error`` is ``SpaceGroupDelete400Error1 | RawError``."""
        return unwrap(await self._with_raw_response.delete_space_group(body, request_options=request_options))

    @property
    def with_raw_response(self) -> AsyncSpaceGroupsWithRawResponse:
        return self._with_raw_response


class SpaceGroupsWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def create_space_group(
        self,
        body: SpaceGroupCreateRequest | SpaceGroupCreateRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[SpaceGroupCreateResponse, CreateSpaceGroupErrorBody]:
        """Create a new space group with desired fields, return the space group.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/space-group/create"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[SpaceGroupCreateRequest | SpaceGroupCreateRequestDict](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[SpaceGroupCreateResponse],
            error_mapper=create_space_group_error_mapper,
            request_options=request_options,
        )

    def delete_space_group(
        self,
        body: SpaceGroupDeleteRequest | SpaceGroupDeleteRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[SpaceGroupDeleteResponse, DeleteSpaceGroupErrorBody]:
        """Delete Archbee space group with given spaceGroupId.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/space-group/delete"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[SpaceGroupDeleteRequest | SpaceGroupDeleteRequestDict](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[SpaceGroupDeleteResponse],
            error_mapper=delete_space_group_error_mapper,
            request_options=request_options,
        )


class AsyncSpaceGroupsWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def create_space_group(
        self,
        body: SpaceGroupCreateRequest | SpaceGroupCreateRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[SpaceGroupCreateResponse, CreateSpaceGroupErrorBody]:
        """Create a new space group with desired fields, return the space group.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/space-group/create"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[SpaceGroupCreateRequest | SpaceGroupCreateRequestDict](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[SpaceGroupCreateResponse],
            error_mapper=create_space_group_error_mapper,
            request_options=request_options,
        )

    async def delete_space_group(
        self,
        body: SpaceGroupDeleteRequest | SpaceGroupDeleteRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[SpaceGroupDeleteResponse, DeleteSpaceGroupErrorBody]:
        """Delete Archbee space group with given spaceGroupId.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/space-group/delete"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[SpaceGroupDeleteRequest | SpaceGroupDeleteRequestDict](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[SpaceGroupDeleteResponse],
            error_mapper=delete_space_group_error_mapper,
            request_options=request_options,
        )
