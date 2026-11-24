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
from ..errors.disable_identity_verification_error import (
    DisableIdentityVerificationErrorBody,
    disable_identity_verification_error_mapper,
)
from ..errors.enable_identity_verification_error import (
    EnableIdentityVerificationErrorBody,
    enable_identity_verification_error_mapper,
)
from ..errors.get_code_sync_policy_error import GetCodeSyncPolicyErrorBody, get_code_sync_policy_error_mapper
from ..errors.get_identity_verification_error import (
    GetIdentityVerificationErrorBody,
    get_identity_verification_error_mapper,
)
from ..errors.list_allowed_origins_error import ListAllowedOriginsErrorBody, list_allowed_origins_error_mapper
from ..errors.rename_project_error import RenameProjectErrorBody, rename_project_error_mapper
from ..errors.rename_workspace_error import RenameWorkspaceErrorBody, rename_workspace_error_mapper
from ..errors.set_allowed_origins_error import SetAllowedOriginsErrorBody, set_allowed_origins_error_mapper
from ..errors.set_code_sync_policy_error import SetCodeSyncPolicyErrorBody, set_code_sync_policy_error_mapper
from ..models.api_v1_manage_project_code_sync_request import (
    ApiV1ManageProjectCodeSyncRequest,
    ApiV1ManageProjectCodeSyncRequestDict,
)
from ..models.api_v1_manage_project_code_sync_response import ApiV1ManageProjectCodeSyncResponse
from ..models.api_v1_manage_project_identity_response import ApiV1ManageProjectIdentityResponse
from ..models.api_v1_manage_project_identity_response1 import ApiV1ManageProjectIdentityResponse1
from ..models.api_v1_manage_project_identity_response2 import ApiV1ManageProjectIdentityResponse2
from ..models.api_v1_manage_project_origins_request import (
    ApiV1ManageProjectOriginsRequest,
    ApiV1ManageProjectOriginsRequestDict,
)
from ..models.api_v1_manage_project_origins_response import ApiV1ManageProjectOriginsResponse
from ..models.api_v1_manage_project_request import ApiV1ManageProjectRequest, ApiV1ManageProjectRequestDict
from ..models.api_v1_manage_project_response import ApiV1ManageProjectResponse
from ..models.api_v1_manage_workspace_request import ApiV1ManageWorkspaceRequest, ApiV1ManageWorkspaceRequestDict
from ..models.api_v1_manage_workspace_response import ApiV1ManageWorkspaceResponse
from ..models.confirm_target import ConfirmTarget, ConfirmTargetDict
from ..server.server import Server


class WorkspaceApi:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = WorkspaceApiWithRawResponse(client, server, auth)

    def disable_identity_verification(
        self, body: ConfirmTarget | ConfirmTargetDict, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiV1ManageProjectIdentityResponse2:
        """Delete the project identity secret. Forms that hold unverified submissions stop protecting themselves and the
        secret cannot be recovered, so this is destructive (Tier C): ``confirm`` must equal the project's slug (a value
        fetched from the project read, never a word the caller already knows). Forms that still require verified
        respondents block the change with a 409. Scope: workspace:manage; the key acts as the human who minted it.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Identity verification is off.

        Raises:
            ApiError: Invalid request (e.g. a body on a GET/DELETE, or a missing required query parameter). Missing,
                malformed, unknown, revoked, or expired key. The key is valid but lacks the required scope. No such
                resource in this project (returned instead of 403 for ids in other projects). The request was understood
                but refused in this state — an unmet precondition, or a confirm value that did not match. Nothing was
                changed. The request body exceeded the 16 KiB management cap. Per-key (120/min), per-workspace
                (240/min), or per-IP (300/min) rate limit exceeded. Retry after the Retry-After header. ``error`` is
                ``Error | RawError``."""
        return unwrap(self._with_raw_response.disable_identity_verification(body, request_options=request_options))

    def enable_identity_verification(
        self, *, body: Any | None = None, request_options: RequestOptionsOrDict | None = None
    ) -> ApiV1ManageProjectIdentityResponse1:
        """Mint the project identity secret so forms can require signed identify() calls and hold unverified
        submissions. Outward-facing (Tier B). The plaintext is returned EXACTLY ONCE and is never retrievable again.
        Minting into an occupied slot is refused: verification that was already on answers ``minted: false`` with no
        ``secret``, so enabling twice can never read an existing secret back. Scope: workspace:manage; the key acts as
        the human who minted it (403 once they are no longer an owner or admin).

        Args:
            body: No input. Any key is a 400.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Identity verification is on.

        Raises:
            ApiError: Invalid request (e.g. a body on a GET/DELETE, or a missing required query parameter). Missing,
                malformed, unknown, revoked, or expired key. The key is valid but lacks the required scope. No such
                resource in this project (returned instead of 403 for ids in other projects). The request was understood
                but refused in this state — an unmet precondition, or a confirm value that did not match. Nothing was
                changed. The request body exceeded the 16 KiB management cap. Per-key (120/min), per-workspace
                (240/min), or per-IP (300/min) rate limit exceeded. Retry after the Retry-After header. ``error`` is
                ``Error | RawError``."""
        return unwrap(self._with_raw_response.enable_identity_verification(body=body, request_options=request_options))

    def get_code_sync_policy(
        self, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiV1ManageProjectCodeSyncResponse:
        """Report the code-sync policy in force for the key's project: ``publishable_key`` (the browser key may stage
        from an allowed origin) or ``trusted_only`` (an authenticated sync token is required). Tier A. Scope:
        workspace:manage.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The policy in force.

        Raises:
            ApiError: Invalid request (e.g. a body on a GET/DELETE, or a missing required query parameter). Missing,
                malformed, unknown, revoked, or expired key. The key is valid but lacks the required scope. No such
                resource in this project (returned instead of 403 for ids in other projects). Per-key (120/min),
                per-workspace (240/min), or per-IP (300/min) rate limit exceeded. Retry after the Retry-After header.
                ``error`` is ``Error | RawError``."""
        return unwrap(self._with_raw_response.get_code_sync_policy(request_options=request_options))

    def get_identity_verification(
        self, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiV1ManageProjectIdentityResponse:
        """Whether the project verifies respondent identities, and how many forms depend on it. Never returns the
        secret. Scope: workspace:manage.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The project's identity-verification state.

        Raises:
            ApiError: Invalid request (e.g. a body on a GET/DELETE, or a missing required query parameter). Missing,
                malformed, unknown, revoked, or expired key. The key is valid but lacks the required scope. No such
                resource in this project (returned instead of 403 for ids in other projects). Per-key (120/min),
                per-workspace (240/min), or per-IP (300/min) rate limit exceeded. Retry after the Retry-After header.
                ``error`` is ``Error | RawError``."""
        return unwrap(self._with_raw_response.get_identity_verification(request_options=request_options))

    def list_allowed_origins(
        self, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiV1ManageProjectOriginsResponse:
        """The origins the project's publishable key may stage code-defined drafts from. An empty list means any origin.
        Scope: workspace:manage.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The current allow-list.

        Raises:
            ApiError: Invalid request (e.g. a body on a GET/DELETE, or a missing required query parameter). Missing,
                malformed, unknown, revoked, or expired key. The key is valid but lacks the required scope. No such
                resource in this project (returned instead of 403 for ids in other projects). Per-key (120/min),
                per-workspace (240/min), or per-IP (300/min) rate limit exceeded. Retry after the Retry-After header.
                ``error`` is ``Error | RawError``."""
        return unwrap(self._with_raw_response.list_allowed_origins(request_options=request_options))

    def rename_project(
        self,
        body: ApiV1ManageProjectRequest | ApiV1ManageProjectRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiV1ManageProjectResponse:
        """Rename the key's project. The optional ``project`` selector exists for body-shape parity with the CLI and may
        only name the key's own project by id, slug, or name — anything else 404s, including a sibling project in the
        same workspace. Tier A. Scope: workspace:manage.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The renamed project.

        Raises:
            ApiError: Invalid request (e.g. a body on a GET/DELETE, or a missing required query parameter). Missing,
                malformed, unknown, revoked, or expired key. The key is valid but lacks the required scope. No such
                resource in this project (returned instead of 403 for ids in other projects). The request was understood
                but refused in this state — an unmet precondition, or a confirm value that did not match. Nothing was
                changed. The request body exceeded the 16 KiB management cap. Per-key (120/min), per-workspace
                (240/min), or per-IP (300/min) rate limit exceeded. Retry after the Retry-After header. ``error`` is
                ``Error | RawError``."""
        return unwrap(self._with_raw_response.rename_project(body, request_options=request_options))

    def rename_workspace(
        self,
        body: ApiV1ManageWorkspaceRequest | ApiV1ManageWorkspaceRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiV1ManageWorkspaceResponse:
        """Rename the billing workspace. Ids, keys, member access, and every live form URL stay exactly as they are,
        which keeps this routine (Tier A). Scope: workspace:manage.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The renamed workspace.

        Raises:
            ApiError: Invalid request (e.g. a body on a GET/DELETE, or a missing required query parameter). Missing,
                malformed, unknown, revoked, or expired key. The key is valid but lacks the required scope. No such
                resource in this project (returned instead of 403 for ids in other projects). The request body exceeded
                the 16 KiB management cap. Per-key (120/min), per-workspace (240/min), or per-IP (300/min) rate limit
                exceeded. Retry after the Retry-After header. ``error`` is ``Error | RawError``."""
        return unwrap(self._with_raw_response.rename_workspace(body, request_options=request_options))

    def set_allowed_origins(
        self,
        body: ApiV1ManageProjectOriginsRequest | ApiV1ManageProjectOriginsRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiV1ManageProjectOriginsResponse:
        """Replace the whole allow-list. An empty array means any origin may stage with the publishable key, which
        widens who can act — outward-facing (Tier B). Every entry must be a bare http(s) origin, so a path, query, or
        credential in the value is a 400. Scope: workspace:manage.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The stored allow-list.

        Raises:
            ApiError: Invalid request (e.g. a body on a GET/DELETE, or a missing required query parameter). Missing,
                malformed, unknown, revoked, or expired key. The key is valid but lacks the required scope. No such
                resource in this project (returned instead of 403 for ids in other projects). The request body exceeded
                the 16 KiB management cap. Per-key (120/min), per-workspace (240/min), or per-IP (300/min) rate limit
                exceeded. Retry after the Retry-After header. ``error`` is ``Error | RawError``."""
        return unwrap(self._with_raw_response.set_allowed_origins(body, request_options=request_options))

    def set_code_sync_policy(
        self,
        body: ApiV1ManageProjectCodeSyncRequest | ApiV1ManageProjectCodeSyncRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiV1ManageProjectCodeSyncResponse:
        """Choose who may stage code-defined schemas for this project: ``publishable_key`` lets the browser key stage
        from an allowed origin, ``trusted_only`` requires an authenticated sync token. This changes who can act, so it
        is outward-facing (Tier B). The write takes the project's code-sync lock, so it is serialized against in-flight
        syncs. Scope: workspace:manage.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The policy now in force.

        Raises:
            ApiError: Invalid request (e.g. a body on a GET/DELETE, or a missing required query parameter). Missing,
                malformed, unknown, revoked, or expired key. The key is valid but lacks the required scope. No such
                resource in this project (returned instead of 403 for ids in other projects). The request body exceeded
                the 16 KiB management cap. Per-key (120/min), per-workspace (240/min), or per-IP (300/min) rate limit
                exceeded. Retry after the Retry-After header. ``error`` is ``Error | RawError``."""
        return unwrap(self._with_raw_response.set_code_sync_policy(body, request_options=request_options))

    @property
    def with_raw_response(self) -> WorkspaceApiWithRawResponse:
        return self._with_raw_response


class AsyncWorkspaceApi:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncWorkspaceApiWithRawResponse(client, server, auth)

    async def disable_identity_verification(
        self, body: ConfirmTarget | ConfirmTargetDict, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiV1ManageProjectIdentityResponse2:
        """Delete the project identity secret. Forms that hold unverified submissions stop protecting themselves and the
        secret cannot be recovered, so this is destructive (Tier C): ``confirm`` must equal the project's slug (a value
        fetched from the project read, never a word the caller already knows). Forms that still require verified
        respondents block the change with a 409. Scope: workspace:manage; the key acts as the human who minted it.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Identity verification is off.

        Raises:
            ApiError: Invalid request (e.g. a body on a GET/DELETE, or a missing required query parameter). Missing,
                malformed, unknown, revoked, or expired key. The key is valid but lacks the required scope. No such
                resource in this project (returned instead of 403 for ids in other projects). The request was understood
                but refused in this state — an unmet precondition, or a confirm value that did not match. Nothing was
                changed. The request body exceeded the 16 KiB management cap. Per-key (120/min), per-workspace
                (240/min), or per-IP (300/min) rate limit exceeded. Retry after the Retry-After header. ``error`` is
                ``Error | RawError``."""
        return unwrap(
            await self._with_raw_response.disable_identity_verification(body, request_options=request_options)
        )

    async def enable_identity_verification(
        self, *, body: Any | None = None, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiV1ManageProjectIdentityResponse1:
        """Mint the project identity secret so forms can require signed identify() calls and hold unverified
        submissions. Outward-facing (Tier B). The plaintext is returned EXACTLY ONCE and is never retrievable again.
        Minting into an occupied slot is refused: verification that was already on answers ``minted: false`` with no
        ``secret``, so enabling twice can never read an existing secret back. Scope: workspace:manage; the key acts as
        the human who minted it (403 once they are no longer an owner or admin).

        Args:
            body: No input. Any key is a 400.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Identity verification is on.

        Raises:
            ApiError: Invalid request (e.g. a body on a GET/DELETE, or a missing required query parameter). Missing,
                malformed, unknown, revoked, or expired key. The key is valid but lacks the required scope. No such
                resource in this project (returned instead of 403 for ids in other projects). The request was understood
                but refused in this state — an unmet precondition, or a confirm value that did not match. Nothing was
                changed. The request body exceeded the 16 KiB management cap. Per-key (120/min), per-workspace
                (240/min), or per-IP (300/min) rate limit exceeded. Retry after the Retry-After header. ``error`` is
                ``Error | RawError``."""
        return unwrap(
            await self._with_raw_response.enable_identity_verification(body=body, request_options=request_options)
        )

    async def get_code_sync_policy(
        self, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiV1ManageProjectCodeSyncResponse:
        """Report the code-sync policy in force for the key's project: ``publishable_key`` (the browser key may stage
        from an allowed origin) or ``trusted_only`` (an authenticated sync token is required). Tier A. Scope:
        workspace:manage.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The policy in force.

        Raises:
            ApiError: Invalid request (e.g. a body on a GET/DELETE, or a missing required query parameter). Missing,
                malformed, unknown, revoked, or expired key. The key is valid but lacks the required scope. No such
                resource in this project (returned instead of 403 for ids in other projects). Per-key (120/min),
                per-workspace (240/min), or per-IP (300/min) rate limit exceeded. Retry after the Retry-After header.
                ``error`` is ``Error | RawError``."""
        return unwrap(await self._with_raw_response.get_code_sync_policy(request_options=request_options))

    async def get_identity_verification(
        self, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiV1ManageProjectIdentityResponse:
        """Whether the project verifies respondent identities, and how many forms depend on it. Never returns the
        secret. Scope: workspace:manage.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The project's identity-verification state.

        Raises:
            ApiError: Invalid request (e.g. a body on a GET/DELETE, or a missing required query parameter). Missing,
                malformed, unknown, revoked, or expired key. The key is valid but lacks the required scope. No such
                resource in this project (returned instead of 403 for ids in other projects). Per-key (120/min),
                per-workspace (240/min), or per-IP (300/min) rate limit exceeded. Retry after the Retry-After header.
                ``error`` is ``Error | RawError``."""
        return unwrap(await self._with_raw_response.get_identity_verification(request_options=request_options))

    async def list_allowed_origins(
        self, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiV1ManageProjectOriginsResponse:
        """The origins the project's publishable key may stage code-defined drafts from. An empty list means any origin.
        Scope: workspace:manage.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The current allow-list.

        Raises:
            ApiError: Invalid request (e.g. a body on a GET/DELETE, or a missing required query parameter). Missing,
                malformed, unknown, revoked, or expired key. The key is valid but lacks the required scope. No such
                resource in this project (returned instead of 403 for ids in other projects). Per-key (120/min),
                per-workspace (240/min), or per-IP (300/min) rate limit exceeded. Retry after the Retry-After header.
                ``error`` is ``Error | RawError``."""
        return unwrap(await self._with_raw_response.list_allowed_origins(request_options=request_options))

    async def rename_project(
        self,
        body: ApiV1ManageProjectRequest | ApiV1ManageProjectRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiV1ManageProjectResponse:
        """Rename the key's project. The optional ``project`` selector exists for body-shape parity with the CLI and may
        only name the key's own project by id, slug, or name — anything else 404s, including a sibling project in the
        same workspace. Tier A. Scope: workspace:manage.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The renamed project.

        Raises:
            ApiError: Invalid request (e.g. a body on a GET/DELETE, or a missing required query parameter). Missing,
                malformed, unknown, revoked, or expired key. The key is valid but lacks the required scope. No such
                resource in this project (returned instead of 403 for ids in other projects). The request was understood
                but refused in this state — an unmet precondition, or a confirm value that did not match. Nothing was
                changed. The request body exceeded the 16 KiB management cap. Per-key (120/min), per-workspace
                (240/min), or per-IP (300/min) rate limit exceeded. Retry after the Retry-After header. ``error`` is
                ``Error | RawError``."""
        return unwrap(await self._with_raw_response.rename_project(body, request_options=request_options))

    async def rename_workspace(
        self,
        body: ApiV1ManageWorkspaceRequest | ApiV1ManageWorkspaceRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiV1ManageWorkspaceResponse:
        """Rename the billing workspace. Ids, keys, member access, and every live form URL stay exactly as they are,
        which keeps this routine (Tier A). Scope: workspace:manage.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The renamed workspace.

        Raises:
            ApiError: Invalid request (e.g. a body on a GET/DELETE, or a missing required query parameter). Missing,
                malformed, unknown, revoked, or expired key. The key is valid but lacks the required scope. No such
                resource in this project (returned instead of 403 for ids in other projects). The request body exceeded
                the 16 KiB management cap. Per-key (120/min), per-workspace (240/min), or per-IP (300/min) rate limit
                exceeded. Retry after the Retry-After header. ``error`` is ``Error | RawError``."""
        return unwrap(await self._with_raw_response.rename_workspace(body, request_options=request_options))

    async def set_allowed_origins(
        self,
        body: ApiV1ManageProjectOriginsRequest | ApiV1ManageProjectOriginsRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiV1ManageProjectOriginsResponse:
        """Replace the whole allow-list. An empty array means any origin may stage with the publishable key, which
        widens who can act — outward-facing (Tier B). Every entry must be a bare http(s) origin, so a path, query, or
        credential in the value is a 400. Scope: workspace:manage.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The stored allow-list.

        Raises:
            ApiError: Invalid request (e.g. a body on a GET/DELETE, or a missing required query parameter). Missing,
                malformed, unknown, revoked, or expired key. The key is valid but lacks the required scope. No such
                resource in this project (returned instead of 403 for ids in other projects). The request body exceeded
                the 16 KiB management cap. Per-key (120/min), per-workspace (240/min), or per-IP (300/min) rate limit
                exceeded. Retry after the Retry-After header. ``error`` is ``Error | RawError``."""
        return unwrap(await self._with_raw_response.set_allowed_origins(body, request_options=request_options))

    async def set_code_sync_policy(
        self,
        body: ApiV1ManageProjectCodeSyncRequest | ApiV1ManageProjectCodeSyncRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiV1ManageProjectCodeSyncResponse:
        """Choose who may stage code-defined schemas for this project: ``publishable_key`` lets the browser key stage
        from an allowed origin, ``trusted_only`` requires an authenticated sync token. This changes who can act, so it
        is outward-facing (Tier B). The write takes the project's code-sync lock, so it is serialized against in-flight
        syncs. Scope: workspace:manage.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The policy now in force.

        Raises:
            ApiError: Invalid request (e.g. a body on a GET/DELETE, or a missing required query parameter). Missing,
                malformed, unknown, revoked, or expired key. The key is valid but lacks the required scope. No such
                resource in this project (returned instead of 403 for ids in other projects). The request body exceeded
                the 16 KiB management cap. Per-key (120/min), per-workspace (240/min), or per-IP (300/min) rate limit
                exceeded. Retry after the Retry-After header. ``error`` is ``Error | RawError``."""
        return unwrap(await self._with_raw_response.set_code_sync_policy(body, request_options=request_options))

    @property
    def with_raw_response(self) -> AsyncWorkspaceApiWithRawResponse:
        return self._with_raw_response


class WorkspaceApiWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def disable_identity_verification(
        self, body: ConfirmTarget | ConfirmTargetDict, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[ApiV1ManageProjectIdentityResponse2, DisableIdentityVerificationErrorBody]:
        """Delete the project identity secret. Forms that hold unverified submissions stop protecting themselves and the
        secret cannot be recovered, so this is destructive (Tier C): ``confirm`` must equal the project's slug (a value
        fetched from the project read, never a word the caller already knows). Forms that still require verified
        respondents block the change with a 409. Scope: workspace:manage; the key acts as the human who minted it.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/api/v1/manage/project/identity"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ConfirmTarget | ConfirmTargetDict](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[ApiV1ManageProjectIdentityResponse2],
            error_mapper=disable_identity_verification_error_mapper,
            request_options=request_options,
        )

    def enable_identity_verification(
        self, *, body: Any | None = None, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[ApiV1ManageProjectIdentityResponse1, EnableIdentityVerificationErrorBody]:
        """Mint the project identity secret so forms can require signed identify() calls and hold unverified
        submissions. Outward-facing (Tier B). The plaintext is returned EXACTLY ONCE and is never retrievable again.
        Minting into an occupied slot is refused: verification that was already on answers ``minted: false`` with no
        ``secret``, so enabling twice can never read an existing secret back. Scope: workspace:manage; the key acts as
        the human who minted it (403 once they are no longer an owner or admin).

        Args:
            body: No input. Any key is a 400.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/api/v1/manage/project/identity"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[Any | None](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[ApiV1ManageProjectIdentityResponse1],
            error_mapper=enable_identity_verification_error_mapper,
            request_options=request_options,
        )

    def get_code_sync_policy(
        self, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[ApiV1ManageProjectCodeSyncResponse, GetCodeSyncPolicyErrorBody]:
        """Report the code-sync policy in force for the key's project: ``publishable_key`` (the browser key may stage
        from an allowed origin) or ``trusted_only`` (an authenticated sync token is required). Tier A. Scope:
        workspace:manage.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v1/manage/project/code-sync"),
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[ApiV1ManageProjectCodeSyncResponse],
            error_mapper=get_code_sync_policy_error_mapper,
            request_options=request_options,
        )

    def get_identity_verification(
        self, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[ApiV1ManageProjectIdentityResponse, GetIdentityVerificationErrorBody]:
        """Whether the project verifies respondent identities, and how many forms depend on it. Never returns the
        secret. Scope: workspace:manage.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v1/manage/project/identity"),
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[ApiV1ManageProjectIdentityResponse],
            error_mapper=get_identity_verification_error_mapper,
            request_options=request_options,
        )

    def list_allowed_origins(
        self, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[ApiV1ManageProjectOriginsResponse, ListAllowedOriginsErrorBody]:
        """The origins the project's publishable key may stage code-defined drafts from. An empty list means any origin.
        Scope: workspace:manage.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v1/manage/project/origins"),
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[ApiV1ManageProjectOriginsResponse],
            error_mapper=list_allowed_origins_error_mapper,
            request_options=request_options,
        )

    def rename_project(
        self,
        body: ApiV1ManageProjectRequest | ApiV1ManageProjectRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ApiV1ManageProjectResponse, RenameProjectErrorBody]:
        """Rename the key's project. The optional ``project`` selector exists for body-shape parity with the CLI and may
        only name the key's own project by id, slug, or name — anything else 404s, including a sibling project in the
        same workspace. Tier A. Scope: workspace:manage.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="PATCH",
            url_template=self._server.default("/api/v1/manage/project"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ApiV1ManageProjectRequest | ApiV1ManageProjectRequestDict](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[ApiV1ManageProjectResponse],
            error_mapper=rename_project_error_mapper,
            request_options=request_options,
        )

    def rename_workspace(
        self,
        body: ApiV1ManageWorkspaceRequest | ApiV1ManageWorkspaceRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ApiV1ManageWorkspaceResponse, RenameWorkspaceErrorBody]:
        """Rename the billing workspace. Ids, keys, member access, and every live form URL stay exactly as they are,
        which keeps this routine (Tier A). Scope: workspace:manage.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="PATCH",
            url_template=self._server.default("/api/v1/manage/workspace"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ApiV1ManageWorkspaceRequest | ApiV1ManageWorkspaceRequestDict](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[ApiV1ManageWorkspaceResponse],
            error_mapper=rename_workspace_error_mapper,
            request_options=request_options,
        )

    def set_allowed_origins(
        self,
        body: ApiV1ManageProjectOriginsRequest | ApiV1ManageProjectOriginsRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ApiV1ManageProjectOriginsResponse, SetAllowedOriginsErrorBody]:
        """Replace the whole allow-list. An empty array means any origin may stage with the publishable key, which
        widens who can act — outward-facing (Tier B). Every entry must be a bare http(s) origin, so a path, query, or
        credential in the value is a 400. Scope: workspace:manage.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="PUT",
            url_template=self._server.default("/api/v1/manage/project/origins"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ApiV1ManageProjectOriginsRequest | ApiV1ManageProjectOriginsRequestDict](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[ApiV1ManageProjectOriginsResponse],
            error_mapper=set_allowed_origins_error_mapper,
            request_options=request_options,
        )

    def set_code_sync_policy(
        self,
        body: ApiV1ManageProjectCodeSyncRequest | ApiV1ManageProjectCodeSyncRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ApiV1ManageProjectCodeSyncResponse, SetCodeSyncPolicyErrorBody]:
        """Choose who may stage code-defined schemas for this project: ``publishable_key`` lets the browser key stage
        from an allowed origin, ``trusted_only`` requires an authenticated sync token. This changes who can act, so it
        is outward-facing (Tier B). The write takes the project's code-sync lock, so it is serialized against in-flight
        syncs. Scope: workspace:manage.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="PATCH",
            url_template=self._server.default("/api/v1/manage/project/code-sync"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ApiV1ManageProjectCodeSyncRequest | ApiV1ManageProjectCodeSyncRequestDict](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[ApiV1ManageProjectCodeSyncResponse],
            error_mapper=set_code_sync_policy_error_mapper,
            request_options=request_options,
        )


class AsyncWorkspaceApiWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def disable_identity_verification(
        self, body: ConfirmTarget | ConfirmTargetDict, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[ApiV1ManageProjectIdentityResponse2, DisableIdentityVerificationErrorBody]:
        """Delete the project identity secret. Forms that hold unverified submissions stop protecting themselves and the
        secret cannot be recovered, so this is destructive (Tier C): ``confirm`` must equal the project's slug (a value
        fetched from the project read, never a word the caller already knows). Forms that still require verified
        respondents block the change with a 409. Scope: workspace:manage; the key acts as the human who minted it.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/api/v1/manage/project/identity"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ConfirmTarget | ConfirmTargetDict](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[ApiV1ManageProjectIdentityResponse2],
            error_mapper=disable_identity_verification_error_mapper,
            request_options=request_options,
        )

    async def enable_identity_verification(
        self, *, body: Any | None = None, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[ApiV1ManageProjectIdentityResponse1, EnableIdentityVerificationErrorBody]:
        """Mint the project identity secret so forms can require signed identify() calls and hold unverified
        submissions. Outward-facing (Tier B). The plaintext is returned EXACTLY ONCE and is never retrievable again.
        Minting into an occupied slot is refused: verification that was already on answers ``minted: false`` with no
        ``secret``, so enabling twice can never read an existing secret back. Scope: workspace:manage; the key acts as
        the human who minted it (403 once they are no longer an owner or admin).

        Args:
            body: No input. Any key is a 400.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/api/v1/manage/project/identity"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[Any | None](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[ApiV1ManageProjectIdentityResponse1],
            error_mapper=enable_identity_verification_error_mapper,
            request_options=request_options,
        )

    async def get_code_sync_policy(
        self, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[ApiV1ManageProjectCodeSyncResponse, GetCodeSyncPolicyErrorBody]:
        """Report the code-sync policy in force for the key's project: ``publishable_key`` (the browser key may stage
        from an allowed origin) or ``trusted_only`` (an authenticated sync token is required). Tier A. Scope:
        workspace:manage.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v1/manage/project/code-sync"),
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[ApiV1ManageProjectCodeSyncResponse],
            error_mapper=get_code_sync_policy_error_mapper,
            request_options=request_options,
        )

    async def get_identity_verification(
        self, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[ApiV1ManageProjectIdentityResponse, GetIdentityVerificationErrorBody]:
        """Whether the project verifies respondent identities, and how many forms depend on it. Never returns the
        secret. Scope: workspace:manage.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v1/manage/project/identity"),
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[ApiV1ManageProjectIdentityResponse],
            error_mapper=get_identity_verification_error_mapper,
            request_options=request_options,
        )

    async def list_allowed_origins(
        self, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[ApiV1ManageProjectOriginsResponse, ListAllowedOriginsErrorBody]:
        """The origins the project's publishable key may stage code-defined drafts from. An empty list means any origin.
        Scope: workspace:manage.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v1/manage/project/origins"),
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[ApiV1ManageProjectOriginsResponse],
            error_mapper=list_allowed_origins_error_mapper,
            request_options=request_options,
        )

    async def rename_project(
        self,
        body: ApiV1ManageProjectRequest | ApiV1ManageProjectRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ApiV1ManageProjectResponse, RenameProjectErrorBody]:
        """Rename the key's project. The optional ``project`` selector exists for body-shape parity with the CLI and may
        only name the key's own project by id, slug, or name — anything else 404s, including a sibling project in the
        same workspace. Tier A. Scope: workspace:manage.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="PATCH",
            url_template=self._server.default("/api/v1/manage/project"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ApiV1ManageProjectRequest | ApiV1ManageProjectRequestDict](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[ApiV1ManageProjectResponse],
            error_mapper=rename_project_error_mapper,
            request_options=request_options,
        )

    async def rename_workspace(
        self,
        body: ApiV1ManageWorkspaceRequest | ApiV1ManageWorkspaceRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ApiV1ManageWorkspaceResponse, RenameWorkspaceErrorBody]:
        """Rename the billing workspace. Ids, keys, member access, and every live form URL stay exactly as they are,
        which keeps this routine (Tier A). Scope: workspace:manage.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="PATCH",
            url_template=self._server.default("/api/v1/manage/workspace"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ApiV1ManageWorkspaceRequest | ApiV1ManageWorkspaceRequestDict](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[ApiV1ManageWorkspaceResponse],
            error_mapper=rename_workspace_error_mapper,
            request_options=request_options,
        )

    async def set_allowed_origins(
        self,
        body: ApiV1ManageProjectOriginsRequest | ApiV1ManageProjectOriginsRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ApiV1ManageProjectOriginsResponse, SetAllowedOriginsErrorBody]:
        """Replace the whole allow-list. An empty array means any origin may stage with the publishable key, which
        widens who can act — outward-facing (Tier B). Every entry must be a bare http(s) origin, so a path, query, or
        credential in the value is a 400. Scope: workspace:manage.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="PUT",
            url_template=self._server.default("/api/v1/manage/project/origins"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ApiV1ManageProjectOriginsRequest | ApiV1ManageProjectOriginsRequestDict](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[ApiV1ManageProjectOriginsResponse],
            error_mapper=set_allowed_origins_error_mapper,
            request_options=request_options,
        )

    async def set_code_sync_policy(
        self,
        body: ApiV1ManageProjectCodeSyncRequest | ApiV1ManageProjectCodeSyncRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ApiV1ManageProjectCodeSyncResponse, SetCodeSyncPolicyErrorBody]:
        """Choose who may stage code-defined schemas for this project: ``publishable_key`` lets the browser key stage
        from an allowed origin, ``trusted_only`` requires an authenticated sync token. This changes who can act, so it
        is outward-facing (Tier B). The write takes the project's code-sync lock, so it is serialized against in-flight
        syncs. Scope: workspace:manage.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="PATCH",
            url_template=self._server.default("/api/v1/manage/project/code-sync"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ApiV1ManageProjectCodeSyncRequest | ApiV1ManageProjectCodeSyncRequestDict](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[ApiV1ManageProjectCodeSyncResponse],
            error_mapper=set_code_sync_policy_error_mapper,
            request_options=request_options,
        )
