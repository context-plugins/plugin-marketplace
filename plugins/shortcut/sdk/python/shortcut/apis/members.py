from __future__ import annotations

from uuid import UUID

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
from ..errors.get_member_error import GetMemberErrorBody, get_member_error_mapper
from ..errors.list_members_error import ListMembersErrorBody, list_members_error_mapper
from ..models.member import Member
from ..server.server import Server


class Members:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = MembersWithRawResponse(client, server, auth)

    def get_member(
        self,
        member_public_id: UUID,
        *,
        org_public_id: UUID | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> Member:
        """Returns information about a Member.

        Args:
            member_public_id: The Member's unique ID.
            org_public_id: The unique ID of the Organization to limit the lookup to.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Resource

        Raises:
            ApiError: Schema mismatch Resource does not exist Unprocessable ``error`` is ``RawError``."""
        return unwrap(
            self._with_raw_response.get_member(
                member_public_id, org_public_id=org_public_id, request_options=request_options
            ),
        )

    def list_members(
        self,
        *,
        org_public_id: UUID | None = None,
        disabled: bool | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> list[Member]:
        """Returns information about members of the Workspace.

        Args:
            org_public_id: The unique ID of the Organization to limit the list to.
            disabled: Filter members by their disabled state. If true, return only disabled members. If false, return
                only enabled members.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Resource

        Raises:
            ApiError: Schema mismatch Resource does not exist Unprocessable ``error`` is ``RawError``."""
        return unwrap(
            self._with_raw_response.list_members(
                org_public_id=org_public_id, disabled=disabled, request_options=request_options
            ),
        )

    @property
    def with_raw_response(self) -> MembersWithRawResponse:
        return self._with_raw_response


class AsyncMembers:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncMembersWithRawResponse(client, server, auth)

    async def get_member(
        self,
        member_public_id: UUID,
        *,
        org_public_id: UUID | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> Member:
        """Returns information about a Member.

        Args:
            member_public_id: The Member's unique ID.
            org_public_id: The unique ID of the Organization to limit the lookup to.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Resource

        Raises:
            ApiError: Schema mismatch Resource does not exist Unprocessable ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.get_member(
                member_public_id, org_public_id=org_public_id, request_options=request_options
            ),
        )

    async def list_members(
        self,
        *,
        org_public_id: UUID | None = None,
        disabled: bool | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> list[Member]:
        """Returns information about members of the Workspace.

        Args:
            org_public_id: The unique ID of the Organization to limit the list to.
            disabled: Filter members by their disabled state. If true, return only disabled members. If false, return
                only enabled members.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Resource

        Raises:
            ApiError: Schema mismatch Resource does not exist Unprocessable ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.list_members(
                org_public_id=org_public_id, disabled=disabled, request_options=request_options
            ),
        )

    @property
    def with_raw_response(self) -> AsyncMembersWithRawResponse:
        return self._with_raw_response


class MembersWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def get_member(
        self,
        member_public_id: UUID,
        *,
        org_public_id: UUID | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[Member, GetMemberErrorBody]:
        """Returns information about a Member.

        Args:
            member_public_id: The Member's unique ID.
            org_public_id: The unique ID of the Organization to limit the lookup to.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v3/members/{member-public-id}"),
            path_params=[param[UUID]("member-public-id", member_public_id)],
            query_params=[param[UUID | None]("org-public-id", org_public_id)],
            auth_scheme=self._auth.api_token,
            decoder=json_decoder[Member],
            error_mapper=get_member_error_mapper,
            request_options=request_options,
        )

    def list_members(
        self,
        *,
        org_public_id: UUID | None = None,
        disabled: bool | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[list[Member], ListMembersErrorBody]:
        """Returns information about members of the Workspace.

        Args:
            org_public_id: The unique ID of the Organization to limit the list to.
            disabled: Filter members by their disabled state. If true, return only disabled members. If false, return
                only enabled members.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v3/members"),
            query_params=[param[UUID | None]("org-public-id", org_public_id), param[bool | None]("disabled", disabled)],
            auth_scheme=self._auth.api_token,
            decoder=json_decoder[list[Member]],
            error_mapper=list_members_error_mapper,
            request_options=request_options,
        )


class AsyncMembersWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def get_member(
        self,
        member_public_id: UUID,
        *,
        org_public_id: UUID | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[Member, GetMemberErrorBody]:
        """Returns information about a Member.

        Args:
            member_public_id: The Member's unique ID.
            org_public_id: The unique ID of the Organization to limit the lookup to.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v3/members/{member-public-id}"),
            path_params=[param[UUID]("member-public-id", member_public_id)],
            query_params=[param[UUID | None]("org-public-id", org_public_id)],
            auth_scheme=self._auth.api_token,
            decoder=async_json_decoder[Member],
            error_mapper=get_member_error_mapper,
            request_options=request_options,
        )

    async def list_members(
        self,
        *,
        org_public_id: UUID | None = None,
        disabled: bool | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[list[Member], ListMembersErrorBody]:
        """Returns information about members of the Workspace.

        Args:
            org_public_id: The unique ID of the Organization to limit the list to.
            disabled: Filter members by their disabled state. If true, return only disabled members. If false, return
                only enabled members.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v3/members"),
            query_params=[param[UUID | None]("org-public-id", org_public_id), param[bool | None]("disabled", disabled)],
            auth_scheme=self._auth.api_token,
            decoder=async_json_decoder[list[Member]],
            error_mapper=list_members_error_mapper,
            request_options=request_options,
        )
