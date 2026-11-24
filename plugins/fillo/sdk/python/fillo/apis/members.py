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
from ..errors.cancel_workspace_invitation_error import (
    CancelWorkspaceInvitationErrorBody,
    cancel_workspace_invitation_error_mapper,
)
from ..errors.invite_workspace_member_error import InviteWorkspaceMemberErrorBody, invite_workspace_member_error_mapper
from ..errors.list_workspace_members_error import ListWorkspaceMembersErrorBody, list_workspace_members_error_mapper
from ..errors.remove_workspace_member_error import RemoveWorkspaceMemberErrorBody, remove_workspace_member_error_mapper
from ..errors.set_member_role_error import SetMemberRoleErrorBody, set_member_role_error_mapper
from ..models.api_v1_manage_members_invites_request import (
    ApiV1ManageMembersInvitesRequest,
    ApiV1ManageMembersInvitesRequestDict,
)
from ..models.api_v1_manage_members_invites_response import ApiV1ManageMembersInvitesResponse
from ..models.api_v1_manage_members_invites_response1 import ApiV1ManageMembersInvitesResponse1
from ..models.api_v1_manage_members_request import ApiV1ManageMembersRequest, ApiV1ManageMembersRequestDict
from ..models.api_v1_manage_members_response import ApiV1ManageMembersResponse
from ..models.api_v1_manage_members_response1 import ApiV1ManageMembersResponse1
from ..models.confirm_target import ConfirmTarget, ConfirmTargetDict
from ..models.workspace_members import WorkspaceMembers
from ..server.server import Server


class Members:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = MembersWithRawResponse(client, server, auth)

    def cancel_workspace_invitation(
        self, id_: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiV1ManageMembersInvitesResponse1:
        """Cancel a pending invitation. The invite link stops working immediately, and inviting the address again starts
        fresh, which keeps this routine (Tier A). The key acts as the human who minted it, exactly as the other member
        routes do, and the id is scoped to the key's workspace first, so an invitation belonging to another workspace
        404s indistinguishably from an unknown one. Scope: members:manage.

        Args:
            id_: A pending invitation id from the members listing.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The invitation was cancelled.

        Raises:
            ApiError: Invalid request (e.g. a body on a GET/DELETE, or a missing required query parameter). Missing,
                malformed, unknown, revoked, or expired key. The key is valid but lacks the required scope. No such
                resource in this project (returned instead of 403 for ids in other projects). The request was understood
                but refused in this state — an unmet precondition, or a confirm value that did not match. Nothing was
                changed. Per-key (120/min), per-workspace (240/min), or per-IP (300/min) rate limit exceeded. Retry
                after the Retry-After header. ``error`` is ``Error | RawError``."""
        return unwrap(self._with_raw_response.cancel_workspace_invitation(id_, request_options=request_options))

    def invite_workspace_member(
        self,
        body: ApiV1ManageMembersInvitesRequest | ApiV1ManageMembersInvitesRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiV1ManageMembersInvitesResponse:
        """Invite someone to the workspace by email, with an optional role (defaults to member). They receive an email
        and can join with that role, which makes this outward-facing (Tier B). An ``fsk_`` key has no session, so it
        acts as the human who minted it: their live role is the anti-escalation ceiling — a key can never invite above
        what its creator could grant today — and a key whose creator was removed or demoted is refused with 403. Scope:
        members:manage.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The created invitation.

        Raises:
            ApiError: Invalid request (e.g. a body on a GET/DELETE, or a missing required query parameter). Missing,
                malformed, unknown, revoked, or expired key. The key is valid but lacks the required scope. No such
                resource in this project (returned instead of 403 for ids in other projects). The request was understood
                but refused in this state — an unmet precondition, or a confirm value that did not match. Nothing was
                changed. The request body exceeded the 16 KiB management cap. Per-key (120/min), per-workspace
                (240/min), or per-IP (300/min) rate limit exceeded. Retry after the Retry-After header. ``error`` is
                ``Error | RawError``."""
        return unwrap(self._with_raw_response.invite_workspace_member(body, request_options=request_options))

    def list_workspace_members(self, *, request_options: RequestOptionsOrDict | None = None) -> WorkspaceMembers:
        """The workspace's members and its pending, unexpired invitations, so an agent can resolve the id or email the
        member endpoints need. Never returns credentials. Tier A. Scope: members:manage.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Members and pending invitations.

        Raises:
            ApiError: Invalid request (e.g. a body on a GET/DELETE, or a missing required query parameter). Missing,
                malformed, unknown, revoked, or expired key. The key is valid but lacks the required scope. No such
                resource in this project (returned instead of 403 for ids in other projects). Per-key (120/min),
                per-workspace (240/min), or per-IP (300/min) rate limit exceeded. Retry after the Retry-After header.
                ``error`` is ``Error | RawError``."""
        return unwrap(self._with_raw_response.list_workspace_members(request_options=request_options))

    def remove_workspace_member(
        self, id_: str, body: ConfirmTarget | ConfirmTargetDict, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiV1ManageMembersResponse1:
        """Remove someone from the workspace. They lose access to every project immediately and re-inviting them starts
        over, so this is destructive (Tier C): ``confirm`` must equal the member's email address — the one
        human-readable id a manager can verify. The key acts as the human who minted it, and the workspace's last owner
        can never be removed. Scope: members:manage.

        Args:
            id_: A member id or email address inside the key's workspace.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The member was removed.

        Raises:
            ApiError: Invalid request (e.g. a body on a GET/DELETE, or a missing required query parameter). Missing,
                malformed, unknown, revoked, or expired key. The key is valid but lacks the required scope. No such
                resource in this project (returned instead of 403 for ids in other projects). The request was understood
                but refused in this state — an unmet precondition, or a confirm value that did not match. Nothing was
                changed. The request body exceeded the 16 KiB management cap. Per-key (120/min), per-workspace
                (240/min), or per-IP (300/min) rate limit exceeded. Retry after the Retry-After header. ``error`` is
                ``Error | RawError``."""
        return unwrap(self._with_raw_response.remove_workspace_member(id_, body, request_options=request_options))

    def set_member_role(
        self,
        id_: str,
        body: ApiV1ManageMembersRequest | ApiV1ManageMembersRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiV1ManageMembersResponse:
        """Change a member's workspace role. Their access changes immediately across every project, which makes this
        outward-facing (Tier B). An ``fsk_`` key has no session, so it acts as the human who minted it: their live role
        is the anti-escalation ceiling, a key whose creator was removed or demoted is refused with 403, and the
        workspace's last owner can never be demoted. Scope: members:manage.

        Args:
            id_: A member id or email address inside the key's workspace.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The member's new role.

        Raises:
            ApiError: Invalid request (e.g. a body on a GET/DELETE, or a missing required query parameter). Missing,
                malformed, unknown, revoked, or expired key. The key is valid but lacks the required scope. No such
                resource in this project (returned instead of 403 for ids in other projects). The request was understood
                but refused in this state — an unmet precondition, or a confirm value that did not match. Nothing was
                changed. The request body exceeded the 16 KiB management cap. Per-key (120/min), per-workspace
                (240/min), or per-IP (300/min) rate limit exceeded. Retry after the Retry-After header. ``error`` is
                ``Error | RawError``."""
        return unwrap(self._with_raw_response.set_member_role(id_, body, request_options=request_options))

    @property
    def with_raw_response(self) -> MembersWithRawResponse:
        return self._with_raw_response


class AsyncMembers:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncMembersWithRawResponse(client, server, auth)

    async def cancel_workspace_invitation(
        self, id_: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiV1ManageMembersInvitesResponse1:
        """Cancel a pending invitation. The invite link stops working immediately, and inviting the address again starts
        fresh, which keeps this routine (Tier A). The key acts as the human who minted it, exactly as the other member
        routes do, and the id is scoped to the key's workspace first, so an invitation belonging to another workspace
        404s indistinguishably from an unknown one. Scope: members:manage.

        Args:
            id_: A pending invitation id from the members listing.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The invitation was cancelled.

        Raises:
            ApiError: Invalid request (e.g. a body on a GET/DELETE, or a missing required query parameter). Missing,
                malformed, unknown, revoked, or expired key. The key is valid but lacks the required scope. No such
                resource in this project (returned instead of 403 for ids in other projects). The request was understood
                but refused in this state — an unmet precondition, or a confirm value that did not match. Nothing was
                changed. Per-key (120/min), per-workspace (240/min), or per-IP (300/min) rate limit exceeded. Retry
                after the Retry-After header. ``error`` is ``Error | RawError``."""
        return unwrap(await self._with_raw_response.cancel_workspace_invitation(id_, request_options=request_options))

    async def invite_workspace_member(
        self,
        body: ApiV1ManageMembersInvitesRequest | ApiV1ManageMembersInvitesRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiV1ManageMembersInvitesResponse:
        """Invite someone to the workspace by email, with an optional role (defaults to member). They receive an email
        and can join with that role, which makes this outward-facing (Tier B). An ``fsk_`` key has no session, so it
        acts as the human who minted it: their live role is the anti-escalation ceiling — a key can never invite above
        what its creator could grant today — and a key whose creator was removed or demoted is refused with 403. Scope:
        members:manage.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The created invitation.

        Raises:
            ApiError: Invalid request (e.g. a body on a GET/DELETE, or a missing required query parameter). Missing,
                malformed, unknown, revoked, or expired key. The key is valid but lacks the required scope. No such
                resource in this project (returned instead of 403 for ids in other projects). The request was understood
                but refused in this state — an unmet precondition, or a confirm value that did not match. Nothing was
                changed. The request body exceeded the 16 KiB management cap. Per-key (120/min), per-workspace
                (240/min), or per-IP (300/min) rate limit exceeded. Retry after the Retry-After header. ``error`` is
                ``Error | RawError``."""
        return unwrap(await self._with_raw_response.invite_workspace_member(body, request_options=request_options))

    async def list_workspace_members(
        self, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> WorkspaceMembers:
        """The workspace's members and its pending, unexpired invitations, so an agent can resolve the id or email the
        member endpoints need. Never returns credentials. Tier A. Scope: members:manage.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Members and pending invitations.

        Raises:
            ApiError: Invalid request (e.g. a body on a GET/DELETE, or a missing required query parameter). Missing,
                malformed, unknown, revoked, or expired key. The key is valid but lacks the required scope. No such
                resource in this project (returned instead of 403 for ids in other projects). Per-key (120/min),
                per-workspace (240/min), or per-IP (300/min) rate limit exceeded. Retry after the Retry-After header.
                ``error`` is ``Error | RawError``."""
        return unwrap(await self._with_raw_response.list_workspace_members(request_options=request_options))

    async def remove_workspace_member(
        self,
        id_: str,
        body: ConfirmTarget | ConfirmTargetDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiV1ManageMembersResponse1:
        """Remove someone from the workspace. They lose access to every project immediately and re-inviting them starts
        over, so this is destructive (Tier C): ``confirm`` must equal the member's email address — the one
        human-readable id a manager can verify. The key acts as the human who minted it, and the workspace's last owner
        can never be removed. Scope: members:manage.

        Args:
            id_: A member id or email address inside the key's workspace.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The member was removed.

        Raises:
            ApiError: Invalid request (e.g. a body on a GET/DELETE, or a missing required query parameter). Missing,
                malformed, unknown, revoked, or expired key. The key is valid but lacks the required scope. No such
                resource in this project (returned instead of 403 for ids in other projects). The request was understood
                but refused in this state — an unmet precondition, or a confirm value that did not match. Nothing was
                changed. The request body exceeded the 16 KiB management cap. Per-key (120/min), per-workspace
                (240/min), or per-IP (300/min) rate limit exceeded. Retry after the Retry-After header. ``error`` is
                ``Error | RawError``."""
        return unwrap(await self._with_raw_response.remove_workspace_member(id_, body, request_options=request_options))

    async def set_member_role(
        self,
        id_: str,
        body: ApiV1ManageMembersRequest | ApiV1ManageMembersRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiV1ManageMembersResponse:
        """Change a member's workspace role. Their access changes immediately across every project, which makes this
        outward-facing (Tier B). An ``fsk_`` key has no session, so it acts as the human who minted it: their live role
        is the anti-escalation ceiling, a key whose creator was removed or demoted is refused with 403, and the
        workspace's last owner can never be demoted. Scope: members:manage.

        Args:
            id_: A member id or email address inside the key's workspace.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The member's new role.

        Raises:
            ApiError: Invalid request (e.g. a body on a GET/DELETE, or a missing required query parameter). Missing,
                malformed, unknown, revoked, or expired key. The key is valid but lacks the required scope. No such
                resource in this project (returned instead of 403 for ids in other projects). The request was understood
                but refused in this state — an unmet precondition, or a confirm value that did not match. Nothing was
                changed. The request body exceeded the 16 KiB management cap. Per-key (120/min), per-workspace
                (240/min), or per-IP (300/min) rate limit exceeded. Retry after the Retry-After header. ``error`` is
                ``Error | RawError``."""
        return unwrap(await self._with_raw_response.set_member_role(id_, body, request_options=request_options))

    @property
    def with_raw_response(self) -> AsyncMembersWithRawResponse:
        return self._with_raw_response


class MembersWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def cancel_workspace_invitation(
        self, id_: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[ApiV1ManageMembersInvitesResponse1, CancelWorkspaceInvitationErrorBody]:
        """Cancel a pending invitation. The invite link stops working immediately, and inviting the address again starts
        fresh, which keeps this routine (Tier A). The key acts as the human who minted it, exactly as the other member
        routes do, and the id is scoped to the key's workspace first, so an invitation belonging to another workspace
        404s indistinguishably from an unknown one. Scope: members:manage.

        Args:
            id_: A pending invitation id from the members listing.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/api/v1/manage/members/invites/{id}"),
            path_params=[param[str]("id", id_)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[ApiV1ManageMembersInvitesResponse1],
            error_mapper=cancel_workspace_invitation_error_mapper,
            request_options=request_options,
        )

    def invite_workspace_member(
        self,
        body: ApiV1ManageMembersInvitesRequest | ApiV1ManageMembersInvitesRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ApiV1ManageMembersInvitesResponse, InviteWorkspaceMemberErrorBody]:
        """Invite someone to the workspace by email, with an optional role (defaults to member). They receive an email
        and can join with that role, which makes this outward-facing (Tier B). An ``fsk_`` key has no session, so it
        acts as the human who minted it: their live role is the anti-escalation ceiling — a key can never invite above
        what its creator could grant today — and a key whose creator was removed or demoted is refused with 403. Scope:
        members:manage.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/api/v1/manage/members/invites"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ApiV1ManageMembersInvitesRequest | ApiV1ManageMembersInvitesRequestDict](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[ApiV1ManageMembersInvitesResponse],
            error_mapper=invite_workspace_member_error_mapper,
            request_options=request_options,
        )

    def list_workspace_members(
        self, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[WorkspaceMembers, ListWorkspaceMembersErrorBody]:
        """The workspace's members and its pending, unexpired invitations, so an agent can resolve the id or email the
        member endpoints need. Never returns credentials. Tier A. Scope: members:manage.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v1/manage/members"),
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[WorkspaceMembers],
            error_mapper=list_workspace_members_error_mapper,
            request_options=request_options,
        )

    def remove_workspace_member(
        self, id_: str, body: ConfirmTarget | ConfirmTargetDict, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[ApiV1ManageMembersResponse1, RemoveWorkspaceMemberErrorBody]:
        """Remove someone from the workspace. They lose access to every project immediately and re-inviting them starts
        over, so this is destructive (Tier C): ``confirm`` must equal the member's email address — the one
        human-readable id a manager can verify. The key acts as the human who minted it, and the workspace's last owner
        can never be removed. Scope: members:manage.

        Args:
            id_: A member id or email address inside the key's workspace.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/api/v1/manage/members/{id}"),
            path_params=[param[str]("id", id_)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ConfirmTarget | ConfirmTargetDict](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[ApiV1ManageMembersResponse1],
            error_mapper=remove_workspace_member_error_mapper,
            request_options=request_options,
        )

    def set_member_role(
        self,
        id_: str,
        body: ApiV1ManageMembersRequest | ApiV1ManageMembersRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ApiV1ManageMembersResponse, SetMemberRoleErrorBody]:
        """Change a member's workspace role. Their access changes immediately across every project, which makes this
        outward-facing (Tier B). An ``fsk_`` key has no session, so it acts as the human who minted it: their live role
        is the anti-escalation ceiling, a key whose creator was removed or demoted is refused with 403, and the
        workspace's last owner can never be demoted. Scope: members:manage.

        Args:
            id_: A member id or email address inside the key's workspace.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="PATCH",
            url_template=self._server.default("/api/v1/manage/members/{id}"),
            path_params=[param[str]("id", id_)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ApiV1ManageMembersRequest | ApiV1ManageMembersRequestDict](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[ApiV1ManageMembersResponse],
            error_mapper=set_member_role_error_mapper,
            request_options=request_options,
        )


class AsyncMembersWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def cancel_workspace_invitation(
        self, id_: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[ApiV1ManageMembersInvitesResponse1, CancelWorkspaceInvitationErrorBody]:
        """Cancel a pending invitation. The invite link stops working immediately, and inviting the address again starts
        fresh, which keeps this routine (Tier A). The key acts as the human who minted it, exactly as the other member
        routes do, and the id is scoped to the key's workspace first, so an invitation belonging to another workspace
        404s indistinguishably from an unknown one. Scope: members:manage.

        Args:
            id_: A pending invitation id from the members listing.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/api/v1/manage/members/invites/{id}"),
            path_params=[param[str]("id", id_)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[ApiV1ManageMembersInvitesResponse1],
            error_mapper=cancel_workspace_invitation_error_mapper,
            request_options=request_options,
        )

    async def invite_workspace_member(
        self,
        body: ApiV1ManageMembersInvitesRequest | ApiV1ManageMembersInvitesRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ApiV1ManageMembersInvitesResponse, InviteWorkspaceMemberErrorBody]:
        """Invite someone to the workspace by email, with an optional role (defaults to member). They receive an email
        and can join with that role, which makes this outward-facing (Tier B). An ``fsk_`` key has no session, so it
        acts as the human who minted it: their live role is the anti-escalation ceiling — a key can never invite above
        what its creator could grant today — and a key whose creator was removed or demoted is refused with 403. Scope:
        members:manage.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/api/v1/manage/members/invites"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ApiV1ManageMembersInvitesRequest | ApiV1ManageMembersInvitesRequestDict](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[ApiV1ManageMembersInvitesResponse],
            error_mapper=invite_workspace_member_error_mapper,
            request_options=request_options,
        )

    async def list_workspace_members(
        self, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[WorkspaceMembers, ListWorkspaceMembersErrorBody]:
        """The workspace's members and its pending, unexpired invitations, so an agent can resolve the id or email the
        member endpoints need. Never returns credentials. Tier A. Scope: members:manage.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v1/manage/members"),
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[WorkspaceMembers],
            error_mapper=list_workspace_members_error_mapper,
            request_options=request_options,
        )

    async def remove_workspace_member(
        self,
        id_: str,
        body: ConfirmTarget | ConfirmTargetDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ApiV1ManageMembersResponse1, RemoveWorkspaceMemberErrorBody]:
        """Remove someone from the workspace. They lose access to every project immediately and re-inviting them starts
        over, so this is destructive (Tier C): ``confirm`` must equal the member's email address — the one
        human-readable id a manager can verify. The key acts as the human who minted it, and the workspace's last owner
        can never be removed. Scope: members:manage.

        Args:
            id_: A member id or email address inside the key's workspace.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/api/v1/manage/members/{id}"),
            path_params=[param[str]("id", id_)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ConfirmTarget | ConfirmTargetDict](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[ApiV1ManageMembersResponse1],
            error_mapper=remove_workspace_member_error_mapper,
            request_options=request_options,
        )

    async def set_member_role(
        self,
        id_: str,
        body: ApiV1ManageMembersRequest | ApiV1ManageMembersRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ApiV1ManageMembersResponse, SetMemberRoleErrorBody]:
        """Change a member's workspace role. Their access changes immediately across every project, which makes this
        outward-facing (Tier B). An ``fsk_`` key has no session, so it acts as the human who minted it: their live role
        is the anti-escalation ceiling, a key whose creator was removed or demoted is refused with 403, and the
        workspace's last owner can never be demoted. Scope: members:manage.

        Args:
            id_: A member id or email address inside the key's workspace.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="PATCH",
            url_template=self._server.default("/api/v1/manage/members/{id}"),
            path_params=[param[str]("id", id_)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ApiV1ManageMembersRequest | ApiV1ManageMembersRequestDict](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[ApiV1ManageMembersResponse],
            error_mapper=set_member_role_error_mapper,
            request_options=request_options,
        )
