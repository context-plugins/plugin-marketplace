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
from ..errors.get_member_error import GetMemberErrorBody, get_member_error_mapper
from ..errors.list_members_error import ListMembersErrorBody, list_members_error_mapper
from ..errors.list_organizations_error import ListOrganizationsErrorBody, list_organizations_error_mapper
from ..errors.update_member_error import UpdateMemberErrorBody, update_member_error_mapper
from ..models.enums.role import RoleOrStr
from ..models.enums.seat import SeatOrStr
from ..models.member_list import MemberList
from ..models.member_update import MemberUpdate, MemberUpdateDict
from ..models.member_update_result import MemberUpdateResult
from ..models.organization_list import OrganizationList
from ..models.organization_member import OrganizationMember
from ..server.server import Server


class Organizations:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = OrganizationsWithRawResponse(client, server, auth)

    def get_member(
        self, org: str, github_user_id: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> OrganizationMember:
        """Send a ``GET`` request.

        Args:
            org: GitHub organization login, such as acme.
            github_user_id: Numeric GitHub user ID of the member.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK

        Raises:
            ApiError: The request is invalid. The API key is missing or invalid. Your cubic access does not allow this.
                The organization or member was not found. The rate limit is exhausted. Retry after the Retry-After
                header. Unexpected error. Temporarily unavailable. Retry shortly. ``error`` is ``Error | RawError``."""
        return unwrap(self._with_raw_response.get_member(org, github_user_id, request_options=request_options))

    def list_members(
        self,
        org: str,
        *,
        search: str | None = None,
        role: RoleOrStr | None = None,
        seat: SeatOrStr | None = None,
        cursor: str | None = None,
        limit: int | None = 20,
        request_options: RequestOptionsOrDict | None = None,
    ) -> MemberList:
        """Send a ``GET`` request.

        Args:
            org: GitHub organization login, such as acme.
            search: Match part of a GitHub login.
            role: Value sent with the request.
            seat: true for members with a seat, false for members without one.
            cursor: The nextCursor from the previous page.
            limit: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK

        Raises:
            ApiError: The request is invalid. The API key is missing or invalid. Your cubic access does not allow this.
                The organization or member was not found. The rate limit is exhausted. Retry after the Retry-After
                header. Unexpected error. Temporarily unavailable. Retry shortly. ``error`` is ``Error | RawError``."""
        return unwrap(
            self._with_raw_response.list_members(
                org, search=search, role=role, seat=seat, cursor=cursor, limit=limit, request_options=request_options
            ),
        )

    def list_organizations(
        self, *, cursor: str | None = None, limit: int | None = 20, request_options: RequestOptionsOrDict | None = None
    ) -> OrganizationList:
        """An organization API key lists only its own organization.

        Args:
            cursor: The nextCursor from the previous page.
            limit: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK

        Raises:
            ApiError: The request is invalid. The API key is missing or invalid. The rate limit is exhausted. Retry
                after the Retry-After header. Unexpected error. Temporarily unavailable. Retry shortly. ``error`` is
                ``Error | RawError``."""
        return unwrap(
            self._with_raw_response.list_organizations(cursor=cursor, limit=limit, request_options=request_options)
        )

    def update_member(
        self,
        org: str,
        github_user_id: str,
        body: MemberUpdate | MemberUpdateDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> MemberUpdateResult:
        """Needs an organization admin or an organization API key with Admin access, and an active paid subscription. It
        never buys seats. Turning a seat off does not remove access to cubic. To remove someone, remove them from the
        GitHub organization.

        Args:
            org: GitHub organization login, such as acme.
            github_user_id: Numeric GitHub user ID of the member.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK

        Raises:
            ApiError: The request is invalid. The API key is missing or invalid. Your cubic access does not allow this.
                The organization or member was not found. The change conflicts with the current member, seat, or billing
                state. This change is not allowed for this member. The rate limit is exhausted. Retry after the
                Retry-After header. Unexpected error. Temporarily unavailable. Retry shortly. ``error`` is ``Error |
                RawError``."""
        return unwrap(self._with_raw_response.update_member(org, github_user_id, body, request_options=request_options))

    @property
    def with_raw_response(self) -> OrganizationsWithRawResponse:
        return self._with_raw_response


class AsyncOrganizations:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncOrganizationsWithRawResponse(client, server, auth)

    async def get_member(
        self, org: str, github_user_id: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> OrganizationMember:
        """Send a ``GET`` request.

        Args:
            org: GitHub organization login, such as acme.
            github_user_id: Numeric GitHub user ID of the member.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK

        Raises:
            ApiError: The request is invalid. The API key is missing or invalid. Your cubic access does not allow this.
                The organization or member was not found. The rate limit is exhausted. Retry after the Retry-After
                header. Unexpected error. Temporarily unavailable. Retry shortly. ``error`` is ``Error | RawError``."""
        return unwrap(await self._with_raw_response.get_member(org, github_user_id, request_options=request_options))

    async def list_members(
        self,
        org: str,
        *,
        search: str | None = None,
        role: RoleOrStr | None = None,
        seat: SeatOrStr | None = None,
        cursor: str | None = None,
        limit: int | None = 20,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> MemberList:
        """Send a ``GET`` request.

        Args:
            org: GitHub organization login, such as acme.
            search: Match part of a GitHub login.
            role: Value sent with the request.
            seat: true for members with a seat, false for members without one.
            cursor: The nextCursor from the previous page.
            limit: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK

        Raises:
            ApiError: The request is invalid. The API key is missing or invalid. Your cubic access does not allow this.
                The organization or member was not found. The rate limit is exhausted. Retry after the Retry-After
                header. Unexpected error. Temporarily unavailable. Retry shortly. ``error`` is ``Error | RawError``."""
        return unwrap(
            await self._with_raw_response.list_members(
                org, search=search, role=role, seat=seat, cursor=cursor, limit=limit, request_options=request_options
            ),
        )

    async def list_organizations(
        self,
        *,
        cursor: str | None = None,
        limit: int | None = 20,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> OrganizationList:
        """An organization API key lists only its own organization.

        Args:
            cursor: The nextCursor from the previous page.
            limit: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK

        Raises:
            ApiError: The request is invalid. The API key is missing or invalid. The rate limit is exhausted. Retry
                after the Retry-After header. Unexpected error. Temporarily unavailable. Retry shortly. ``error`` is
                ``Error | RawError``."""
        return unwrap(
            await self._with_raw_response.list_organizations(
                cursor=cursor, limit=limit, request_options=request_options
            ),
        )

    async def update_member(
        self,
        org: str,
        github_user_id: str,
        body: MemberUpdate | MemberUpdateDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> MemberUpdateResult:
        """Needs an organization admin or an organization API key with Admin access, and an active paid subscription. It
        never buys seats. Turning a seat off does not remove access to cubic. To remove someone, remove them from the
        GitHub organization.

        Args:
            org: GitHub organization login, such as acme.
            github_user_id: Numeric GitHub user ID of the member.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK

        Raises:
            ApiError: The request is invalid. The API key is missing or invalid. Your cubic access does not allow this.
                The organization or member was not found. The change conflicts with the current member, seat, or billing
                state. This change is not allowed for this member. The rate limit is exhausted. Retry after the
                Retry-After header. Unexpected error. Temporarily unavailable. Retry shortly. ``error`` is ``Error |
                RawError``."""
        return unwrap(
            await self._with_raw_response.update_member(org, github_user_id, body, request_options=request_options)
        )

    @property
    def with_raw_response(self) -> AsyncOrganizationsWithRawResponse:
        return self._with_raw_response


class OrganizationsWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def get_member(
        self, org: str, github_user_id: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[OrganizationMember, GetMemberErrorBody]:
        """Send a ``GET`` request.

        Args:
            org: GitHub organization login, such as acme.
            github_user_id: Numeric GitHub user ID of the member.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v1/organizations/{org}/members/{githubUserId}"),
            path_params=[param[str]("org", org), param[str]("githubUserId", github_user_id)],
            auth_scheme=self._auth.analytics_api_key,
            decoder=json_decoder[OrganizationMember],
            error_mapper=get_member_error_mapper,
            request_options=request_options,
        )

    def list_members(
        self,
        org: str,
        *,
        search: str | None = None,
        role: RoleOrStr | None = None,
        seat: SeatOrStr | None = None,
        cursor: str | None = None,
        limit: int | None = 20,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[MemberList, ListMembersErrorBody]:
        """Send a ``GET`` request.

        Args:
            org: GitHub organization login, such as acme.
            search: Match part of a GitHub login.
            role: Value sent with the request.
            seat: true for members with a seat, false for members without one.
            cursor: The nextCursor from the previous page.
            limit: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v1/organizations/{org}/members"),
            path_params=[param[str]("org", org)],
            query_params=[
                param[str | None]("search", search),
                param[RoleOrStr | None]("role", role),
                param[SeatOrStr | None]("seat", seat),
                param[str | None]("cursor", cursor),
                param[int | None]("limit", limit),
            ],
            auth_scheme=self._auth.analytics_api_key,
            decoder=json_decoder[MemberList],
            error_mapper=list_members_error_mapper,
            request_options=request_options,
        )

    def list_organizations(
        self, *, cursor: str | None = None, limit: int | None = 20, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[OrganizationList, ListOrganizationsErrorBody]:
        """An organization API key lists only its own organization.

        Args:
            cursor: The nextCursor from the previous page.
            limit: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v1/organizations"),
            query_params=[param[str | None]("cursor", cursor), param[int | None]("limit", limit)],
            auth_scheme=self._auth.analytics_api_key,
            decoder=json_decoder[OrganizationList],
            error_mapper=list_organizations_error_mapper,
            request_options=request_options,
        )

    def update_member(
        self,
        org: str,
        github_user_id: str,
        body: MemberUpdate | MemberUpdateDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[MemberUpdateResult, UpdateMemberErrorBody]:
        """Needs an organization admin or an organization API key with Admin access, and an active paid subscription. It
        never buys seats. Turning a seat off does not remove access to cubic. To remove someone, remove them from the
        GitHub organization.

        Args:
            org: GitHub organization login, such as acme.
            github_user_id: Numeric GitHub user ID of the member.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="PATCH",
            url_template=self._server.default("/api/v1/organizations/{org}/members/{githubUserId}"),
            path_params=[param[str]("org", org), param[str]("githubUserId", github_user_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[MemberUpdate | MemberUpdateDict](body),
            auth_scheme=self._auth.analytics_api_key,
            decoder=json_decoder[MemberUpdateResult],
            error_mapper=update_member_error_mapper,
            request_options=request_options,
        )


class AsyncOrganizationsWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def get_member(
        self, org: str, github_user_id: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[OrganizationMember, GetMemberErrorBody]:
        """Send a ``GET`` request.

        Args:
            org: GitHub organization login, such as acme.
            github_user_id: Numeric GitHub user ID of the member.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v1/organizations/{org}/members/{githubUserId}"),
            path_params=[param[str]("org", org), param[str]("githubUserId", github_user_id)],
            auth_scheme=self._auth.analytics_api_key,
            decoder=async_json_decoder[OrganizationMember],
            error_mapper=get_member_error_mapper,
            request_options=request_options,
        )

    async def list_members(
        self,
        org: str,
        *,
        search: str | None = None,
        role: RoleOrStr | None = None,
        seat: SeatOrStr | None = None,
        cursor: str | None = None,
        limit: int | None = 20,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[MemberList, ListMembersErrorBody]:
        """Send a ``GET`` request.

        Args:
            org: GitHub organization login, such as acme.
            search: Match part of a GitHub login.
            role: Value sent with the request.
            seat: true for members with a seat, false for members without one.
            cursor: The nextCursor from the previous page.
            limit: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v1/organizations/{org}/members"),
            path_params=[param[str]("org", org)],
            query_params=[
                param[str | None]("search", search),
                param[RoleOrStr | None]("role", role),
                param[SeatOrStr | None]("seat", seat),
                param[str | None]("cursor", cursor),
                param[int | None]("limit", limit),
            ],
            auth_scheme=self._auth.analytics_api_key,
            decoder=async_json_decoder[MemberList],
            error_mapper=list_members_error_mapper,
            request_options=request_options,
        )

    async def list_organizations(
        self,
        *,
        cursor: str | None = None,
        limit: int | None = 20,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[OrganizationList, ListOrganizationsErrorBody]:
        """An organization API key lists only its own organization.

        Args:
            cursor: The nextCursor from the previous page.
            limit: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v1/organizations"),
            query_params=[param[str | None]("cursor", cursor), param[int | None]("limit", limit)],
            auth_scheme=self._auth.analytics_api_key,
            decoder=async_json_decoder[OrganizationList],
            error_mapper=list_organizations_error_mapper,
            request_options=request_options,
        )

    async def update_member(
        self,
        org: str,
        github_user_id: str,
        body: MemberUpdate | MemberUpdateDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[MemberUpdateResult, UpdateMemberErrorBody]:
        """Needs an organization admin or an organization API key with Admin access, and an active paid subscription. It
        never buys seats. Turning a seat off does not remove access to cubic. To remove someone, remove them from the
        GitHub organization.

        Args:
            org: GitHub organization login, such as acme.
            github_user_id: Numeric GitHub user ID of the member.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="PATCH",
            url_template=self._server.default("/api/v1/organizations/{org}/members/{githubUserId}"),
            path_params=[param[str]("org", org), param[str]("githubUserId", github_user_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[MemberUpdate | MemberUpdateDict](body),
            auth_scheme=self._auth.analytics_api_key,
            decoder=async_json_decoder[MemberUpdateResult],
            error_mapper=update_member_error_mapper,
            request_options=request_options,
        )
