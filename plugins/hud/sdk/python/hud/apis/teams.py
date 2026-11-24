from __future__ import annotations

from uuid import UUID, uuid4

from ..core import (
    ApiResult,
    AsyncRawClient,
    AsyncRequestOptionsOrDict,
    BaseRawResponse,
    RawClient,
    RequestOptionsOrDict,
    async_json_decoder,
    json_body,
    json_decoder,
    param,
    unwrap,
)
from ..errors.invite_team_members_v2_team_invitations_post_error import (
    InviteTeamMembersV2TeamInvitationsPostErrorBody,
    invite_team_members_v2_team_invitations_post_error_mapper,
)
from ..errors.list_team_invitations_v2_team_invitations_get_error import (
    ListTeamInvitationsV2TeamInvitationsGetErrorBody,
    list_team_invitations_v2_team_invitations_get_error_mapper,
)
from ..errors.list_team_members_v2_team_members_get_error import (
    ListTeamMembersV2TeamMembersGetErrorBody,
    list_team_members_v2_team_members_get_error_mapper,
)
from ..errors.remove_team_members_v2_team_members_batch_remove_post_error import (
    RemoveTeamMembersV2TeamMembersBatchRemovePostErrorBody,
    remove_team_members_v2_team_members_batch_remove_post_error_mapper,
)
from ..errors.revoke_team_invitations_v2_team_invitations_batch_revoke_post_error import (
    RevokeTeamInvitationsV2TeamInvitationsBatchRevokePostErrorBody,
    revoke_team_invitations_v2_team_invitations_batch_revoke_post_error_mapper,
)
from ..errors.update_team_member_roles_v2_team_members_batch_role_post_error import (
    UpdateTeamMemberRolesV2TeamMembersBatchRolePostErrorBody,
    update_team_member_roles_v2_team_members_batch_role_post_error_mapper,
)
from ..models.team_invitation_revoke_request import TeamInvitationRevokeRequest, TeamInvitationRevokeRequestDict
from ..models.team_invitation_revoke_response import TeamInvitationRevokeResponse
from ..models.team_invitations_response import TeamInvitationsResponse
from ..models.team_invite_request import TeamInviteRequest, TeamInviteRequestDict
from ..models.team_invite_response import TeamInviteResponse
from ..models.team_member_batch_response import TeamMemberBatchResponse
from ..models.team_member_remove_request import TeamMemberRemoveRequest, TeamMemberRemoveRequestDict
from ..models.team_member_role_update_request import TeamMemberRoleUpdateRequest, TeamMemberRoleUpdateRequestDict
from ..models.team_members_response import TeamMembersResponse
from ..server.server import Server


class Teams:
    def __init__(self, client: RawClient, server: Server) -> None:
        self._with_raw_response = TeamsWithRawResponse(client, server)

    def invite_team_members_v2_team_invitations_post(
        self, body: TeamInviteRequest | TeamInviteRequestDict, *, request_options: RequestOptionsOrDict | None = None
    ) -> TeamInviteResponse:
        """Invite email addresses to the caller's team; admin only.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Invalid or malformed request Missing or invalid credentials Caller may not access this resource
                Referenced entity does not exist Resource already exists An upstream provider is unavailable Validation
                Error Rate limit exceeded; wait at least Retry-After seconds The server is at capacity; retry after
                Retry-After seconds ``error`` is ``ErrorResponse | HttpValidationError | RawError``."""
        return unwrap(
            self._with_raw_response.invite_team_members_v2_team_invitations_post(body, request_options=request_options)
        )

    def list_team_invitations_v2_team_invitations_get(
        self, *, request_options: RequestOptionsOrDict | None = None
    ) -> TeamInvitationsResponse:
        """List the caller team's pending invitations; admin only.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Invalid or malformed request Missing or invalid credentials Caller may not access this resource
                Referenced entity does not exist Resource already exists An upstream provider is unavailable Rate limit
                exceeded; wait at least Retry-After seconds The server is at capacity; retry after Retry-After seconds
                ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(
            self._with_raw_response.list_team_invitations_v2_team_invitations_get(request_options=request_options)
        )

    def list_team_members_v2_team_members_get(
        self, *, request_options: RequestOptionsOrDict | None = None
    ) -> TeamMembersResponse:
        """List the members of the caller's team.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Invalid or malformed request Missing or invalid credentials Caller may not access this resource
                Referenced entity does not exist Resource already exists Rate limit exceeded; wait at least Retry-After
                seconds The server is at capacity; retry after Retry-After seconds ``error`` is ``ErrorResponse |
                RawError``."""
        return unwrap(self._with_raw_response.list_team_members_v2_team_members_get(request_options=request_options))

    def remove_team_members_v2_team_members_batch_remove_post(
        self,
        body: TeamMemberRemoveRequest | TeamMemberRemoveRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> TeamMemberBatchResponse:
        """Remove other members from the caller's team and revoke their API keys; admin only.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Invalid or malformed request Missing or invalid credentials Caller may not access this resource
                Referenced entity does not exist Resource already exists An upstream provider is unavailable Validation
                Error Rate limit exceeded; wait at least Retry-After seconds The server is at capacity; retry after
                Retry-After seconds ``error`` is ``ErrorResponse | HttpValidationError | RawError``."""
        return unwrap(
            self._with_raw_response.remove_team_members_v2_team_members_batch_remove_post(
                body, request_options=request_options
            ),
        )

    def revoke_team_invitations_v2_team_invitations_batch_revoke_post(
        self,
        body: TeamInvitationRevokeRequest | TeamInvitationRevokeRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> TeamInvitationRevokeResponse:
        """Revoke pending invitations to the caller's team; admin only.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Invalid or malformed request Missing or invalid credentials Caller may not access this resource
                Referenced entity does not exist Resource already exists An upstream provider is unavailable Validation
                Error Rate limit exceeded; wait at least Retry-After seconds The server is at capacity; retry after
                Retry-After seconds ``error`` is ``ErrorResponse | HttpValidationError | RawError``."""
        return unwrap(
            self._with_raw_response.revoke_team_invitations_v2_team_invitations_batch_revoke_post(
                body, request_options=request_options
            ),
        )

    def update_team_member_roles_v2_team_members_batch_role_post(
        self,
        body: TeamMemberRoleUpdateRequest | TeamMemberRoleUpdateRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> TeamMemberBatchResponse:
        """Set the role of other members of the caller's team; admin only.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Invalid or malformed request Missing or invalid credentials Caller may not access this resource
                Referenced entity does not exist Resource already exists An upstream provider is unavailable Validation
                Error Rate limit exceeded; wait at least Retry-After seconds The server is at capacity; retry after
                Retry-After seconds ``error`` is ``ErrorResponse | HttpValidationError | RawError``."""
        return unwrap(
            self._with_raw_response.update_team_member_roles_v2_team_members_batch_role_post(
                body, request_options=request_options
            ),
        )

    @property
    def with_raw_response(self) -> TeamsWithRawResponse:
        return self._with_raw_response


class AsyncTeams:
    def __init__(self, client: AsyncRawClient, server: Server) -> None:
        self._with_raw_response = AsyncTeamsWithRawResponse(client, server)

    async def invite_team_members_v2_team_invitations_post(
        self,
        body: TeamInviteRequest | TeamInviteRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> TeamInviteResponse:
        """Invite email addresses to the caller's team; admin only.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Invalid or malformed request Missing or invalid credentials Caller may not access this resource
                Referenced entity does not exist Resource already exists An upstream provider is unavailable Validation
                Error Rate limit exceeded; wait at least Retry-After seconds The server is at capacity; retry after
                Retry-After seconds ``error`` is ``ErrorResponse | HttpValidationError | RawError``."""
        return unwrap(
            await self._with_raw_response.invite_team_members_v2_team_invitations_post(
                body, request_options=request_options
            ),
        )

    async def list_team_invitations_v2_team_invitations_get(
        self, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> TeamInvitationsResponse:
        """List the caller team's pending invitations; admin only.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Invalid or malformed request Missing or invalid credentials Caller may not access this resource
                Referenced entity does not exist Resource already exists An upstream provider is unavailable Rate limit
                exceeded; wait at least Retry-After seconds The server is at capacity; retry after Retry-After seconds
                ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(
            await self._with_raw_response.list_team_invitations_v2_team_invitations_get(request_options=request_options)
        )

    async def list_team_members_v2_team_members_get(
        self, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> TeamMembersResponse:
        """List the members of the caller's team.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Invalid or malformed request Missing or invalid credentials Caller may not access this resource
                Referenced entity does not exist Resource already exists Rate limit exceeded; wait at least Retry-After
                seconds The server is at capacity; retry after Retry-After seconds ``error`` is ``ErrorResponse |
                RawError``."""
        return unwrap(
            await self._with_raw_response.list_team_members_v2_team_members_get(request_options=request_options)
        )

    async def remove_team_members_v2_team_members_batch_remove_post(
        self,
        body: TeamMemberRemoveRequest | TeamMemberRemoveRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> TeamMemberBatchResponse:
        """Remove other members from the caller's team and revoke their API keys; admin only.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Invalid or malformed request Missing or invalid credentials Caller may not access this resource
                Referenced entity does not exist Resource already exists An upstream provider is unavailable Validation
                Error Rate limit exceeded; wait at least Retry-After seconds The server is at capacity; retry after
                Retry-After seconds ``error`` is ``ErrorResponse | HttpValidationError | RawError``."""
        return unwrap(
            await self._with_raw_response.remove_team_members_v2_team_members_batch_remove_post(
                body, request_options=request_options
            ),
        )

    async def revoke_team_invitations_v2_team_invitations_batch_revoke_post(
        self,
        body: TeamInvitationRevokeRequest | TeamInvitationRevokeRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> TeamInvitationRevokeResponse:
        """Revoke pending invitations to the caller's team; admin only.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Invalid or malformed request Missing or invalid credentials Caller may not access this resource
                Referenced entity does not exist Resource already exists An upstream provider is unavailable Validation
                Error Rate limit exceeded; wait at least Retry-After seconds The server is at capacity; retry after
                Retry-After seconds ``error`` is ``ErrorResponse | HttpValidationError | RawError``."""
        return unwrap(
            await self._with_raw_response.revoke_team_invitations_v2_team_invitations_batch_revoke_post(
                body, request_options=request_options
            ),
        )

    async def update_team_member_roles_v2_team_members_batch_role_post(
        self,
        body: TeamMemberRoleUpdateRequest | TeamMemberRoleUpdateRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> TeamMemberBatchResponse:
        """Set the role of other members of the caller's team; admin only.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Invalid or malformed request Missing or invalid credentials Caller may not access this resource
                Referenced entity does not exist Resource already exists An upstream provider is unavailable Validation
                Error Rate limit exceeded; wait at least Retry-After seconds The server is at capacity; retry after
                Retry-After seconds ``error`` is ``ErrorResponse | HttpValidationError | RawError``."""
        return unwrap(
            await self._with_raw_response.update_team_member_roles_v2_team_members_batch_role_post(
                body, request_options=request_options
            ),
        )

    @property
    def with_raw_response(self) -> AsyncTeamsWithRawResponse:
        return self._with_raw_response


class TeamsWithRawResponse(BaseRawResponse[RawClient, Server]):
    def invite_team_members_v2_team_invitations_post(
        self, body: TeamInviteRequest | TeamInviteRequestDict, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[TeamInviteResponse, InviteTeamMembersV2TeamInvitationsPostErrorBody]:
        """Invite email addresses to the caller's team; admin only.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v2/team/invitations"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[TeamInviteRequest | TeamInviteRequestDict](body),
            decoder=json_decoder[TeamInviteResponse],
            error_mapper=invite_team_members_v2_team_invitations_post_error_mapper,
            request_options=request_options,
        )

    def list_team_invitations_v2_team_invitations_get(
        self, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[TeamInvitationsResponse, ListTeamInvitationsV2TeamInvitationsGetErrorBody]:
        """List the caller team's pending invitations; admin only.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v2/team/invitations"),
            decoder=json_decoder[TeamInvitationsResponse],
            error_mapper=list_team_invitations_v2_team_invitations_get_error_mapper,
            request_options=request_options,
        )

    def list_team_members_v2_team_members_get(
        self, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[TeamMembersResponse, ListTeamMembersV2TeamMembersGetErrorBody]:
        """List the members of the caller's team.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v2/team/members"),
            decoder=json_decoder[TeamMembersResponse],
            error_mapper=list_team_members_v2_team_members_get_error_mapper,
            request_options=request_options,
        )

    def remove_team_members_v2_team_members_batch_remove_post(
        self,
        body: TeamMemberRemoveRequest | TeamMemberRemoveRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[TeamMemberBatchResponse, RemoveTeamMembersV2TeamMembersBatchRemovePostErrorBody]:
        """Remove other members from the caller's team and revoke their API keys; admin only.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v2/team/members/batch-remove"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[TeamMemberRemoveRequest | TeamMemberRemoveRequestDict](body),
            decoder=json_decoder[TeamMemberBatchResponse],
            error_mapper=remove_team_members_v2_team_members_batch_remove_post_error_mapper,
            request_options=request_options,
        )

    def revoke_team_invitations_v2_team_invitations_batch_revoke_post(
        self,
        body: TeamInvitationRevokeRequest | TeamInvitationRevokeRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[TeamInvitationRevokeResponse, RevokeTeamInvitationsV2TeamInvitationsBatchRevokePostErrorBody]:
        """Revoke pending invitations to the caller's team; admin only.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v2/team/invitations/batch-revoke"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[TeamInvitationRevokeRequest | TeamInvitationRevokeRequestDict](body),
            decoder=json_decoder[TeamInvitationRevokeResponse],
            error_mapper=revoke_team_invitations_v2_team_invitations_batch_revoke_post_error_mapper,
            request_options=request_options,
        )

    def update_team_member_roles_v2_team_members_batch_role_post(
        self,
        body: TeamMemberRoleUpdateRequest | TeamMemberRoleUpdateRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[TeamMemberBatchResponse, UpdateTeamMemberRolesV2TeamMembersBatchRolePostErrorBody]:
        """Set the role of other members of the caller's team; admin only.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v2/team/members/batch-role"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[TeamMemberRoleUpdateRequest | TeamMemberRoleUpdateRequestDict](body),
            decoder=json_decoder[TeamMemberBatchResponse],
            error_mapper=update_team_member_roles_v2_team_members_batch_role_post_error_mapper,
            request_options=request_options,
        )


class AsyncTeamsWithRawResponse(BaseRawResponse[AsyncRawClient, Server]):
    async def invite_team_members_v2_team_invitations_post(
        self,
        body: TeamInviteRequest | TeamInviteRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[TeamInviteResponse, InviteTeamMembersV2TeamInvitationsPostErrorBody]:
        """Invite email addresses to the caller's team; admin only.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v2/team/invitations"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[TeamInviteRequest | TeamInviteRequestDict](body),
            decoder=async_json_decoder[TeamInviteResponse],
            error_mapper=invite_team_members_v2_team_invitations_post_error_mapper,
            request_options=request_options,
        )

    async def list_team_invitations_v2_team_invitations_get(
        self, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[TeamInvitationsResponse, ListTeamInvitationsV2TeamInvitationsGetErrorBody]:
        """List the caller team's pending invitations; admin only.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v2/team/invitations"),
            decoder=async_json_decoder[TeamInvitationsResponse],
            error_mapper=list_team_invitations_v2_team_invitations_get_error_mapper,
            request_options=request_options,
        )

    async def list_team_members_v2_team_members_get(
        self, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[TeamMembersResponse, ListTeamMembersV2TeamMembersGetErrorBody]:
        """List the members of the caller's team.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v2/team/members"),
            decoder=async_json_decoder[TeamMembersResponse],
            error_mapper=list_team_members_v2_team_members_get_error_mapper,
            request_options=request_options,
        )

    async def remove_team_members_v2_team_members_batch_remove_post(
        self,
        body: TeamMemberRemoveRequest | TeamMemberRemoveRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[TeamMemberBatchResponse, RemoveTeamMembersV2TeamMembersBatchRemovePostErrorBody]:
        """Remove other members from the caller's team and revoke their API keys; admin only.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v2/team/members/batch-remove"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[TeamMemberRemoveRequest | TeamMemberRemoveRequestDict](body),
            decoder=async_json_decoder[TeamMemberBatchResponse],
            error_mapper=remove_team_members_v2_team_members_batch_remove_post_error_mapper,
            request_options=request_options,
        )

    async def revoke_team_invitations_v2_team_invitations_batch_revoke_post(
        self,
        body: TeamInvitationRevokeRequest | TeamInvitationRevokeRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[TeamInvitationRevokeResponse, RevokeTeamInvitationsV2TeamInvitationsBatchRevokePostErrorBody]:
        """Revoke pending invitations to the caller's team; admin only.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v2/team/invitations/batch-revoke"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[TeamInvitationRevokeRequest | TeamInvitationRevokeRequestDict](body),
            decoder=async_json_decoder[TeamInvitationRevokeResponse],
            error_mapper=revoke_team_invitations_v2_team_invitations_batch_revoke_post_error_mapper,
            request_options=request_options,
        )

    async def update_team_member_roles_v2_team_members_batch_role_post(
        self,
        body: TeamMemberRoleUpdateRequest | TeamMemberRoleUpdateRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[TeamMemberBatchResponse, UpdateTeamMemberRolesV2TeamMembersBatchRolePostErrorBody]:
        """Set the role of other members of the caller's team; admin only.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v2/team/members/batch-role"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[TeamMemberRoleUpdateRequest | TeamMemberRoleUpdateRequestDict](body),
            decoder=async_json_decoder[TeamMemberBatchResponse],
            error_mapper=update_team_member_roles_v2_team_members_batch_role_post_error_mapper,
            request_options=request_options,
        )
