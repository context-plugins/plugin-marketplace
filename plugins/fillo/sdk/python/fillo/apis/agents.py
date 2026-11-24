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
from ..errors.list_agent_grants_error import ListAgentGrantsErrorBody, list_agent_grants_error_mapper
from ..errors.revoke_agent_grant_error import RevokeAgentGrantErrorBody, revoke_agent_grant_error_mapper
from ..models.api_v1_manage_agents_response import ApiV1ManageAgentsResponse
from ..models.api_v1_manage_agents_response1 import ApiV1ManageAgentsResponse1
from ..models.confirm_target import ConfirmTarget, ConfirmTargetDict
from ..server.server import Server


class Agents:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = AgentsWithRawResponse(client, server, auth)

    def list_agent_grants(self, *, request_options: RequestOptionsOrDict | None = None) -> ApiV1ManageAgentsResponse:
        """The MCP clients currently authorized against the key's project, with the same ids Settings → Agents shows and
        each grant's approval policy. Never returns key material. Tier A. Scope: workspace:manage.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The project's MCP grants.

        Raises:
            ApiError: Invalid request (e.g. a body on a GET/DELETE, or a missing required query parameter). Missing,
                malformed, unknown, revoked, or expired key. The key is valid but lacks the required scope. No such
                resource in this project (returned instead of 403 for ids in other projects). Per-key (120/min),
                per-workspace (240/min), or per-IP (300/min) rate limit exceeded. Retry after the Retry-After header.
                ``error`` is ``Error | RawError``."""
        return unwrap(self._with_raw_response.list_agent_grants(request_options=request_options))

    def revoke_agent_grant(
        self, id_: str, body: ConfirmTarget | ConfirmTargetDict, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiV1ManageAgentsResponse1:
        """Disconnect one MCP client. Its bearer stops working immediately and the human has to authorize it again from
        their agent, so this is destructive (Tier C): ``confirm`` must equal the grant id. An id outside the key's
        project 404s. Scope: workspace:manage.

        Args:
            id_: A grant id from the MCP client listing.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The client was disconnected.

        Raises:
            ApiError: Invalid request (e.g. a body on a GET/DELETE, or a missing required query parameter). Missing,
                malformed, unknown, revoked, or expired key. The key is valid but lacks the required scope. No such
                resource in this project (returned instead of 403 for ids in other projects). The request was understood
                but refused in this state — an unmet precondition, or a confirm value that did not match. Nothing was
                changed. The request body exceeded the 16 KiB management cap. Per-key (120/min), per-workspace
                (240/min), or per-IP (300/min) rate limit exceeded. Retry after the Retry-After header. ``error`` is
                ``Error | RawError``."""
        return unwrap(self._with_raw_response.revoke_agent_grant(id_, body, request_options=request_options))

    @property
    def with_raw_response(self) -> AgentsWithRawResponse:
        return self._with_raw_response


class AsyncAgents:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncAgentsWithRawResponse(client, server, auth)

    async def list_agent_grants(
        self, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiV1ManageAgentsResponse:
        """The MCP clients currently authorized against the key's project, with the same ids Settings → Agents shows and
        each grant's approval policy. Never returns key material. Tier A. Scope: workspace:manage.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The project's MCP grants.

        Raises:
            ApiError: Invalid request (e.g. a body on a GET/DELETE, or a missing required query parameter). Missing,
                malformed, unknown, revoked, or expired key. The key is valid but lacks the required scope. No such
                resource in this project (returned instead of 403 for ids in other projects). Per-key (120/min),
                per-workspace (240/min), or per-IP (300/min) rate limit exceeded. Retry after the Retry-After header.
                ``error`` is ``Error | RawError``."""
        return unwrap(await self._with_raw_response.list_agent_grants(request_options=request_options))

    async def revoke_agent_grant(
        self,
        id_: str,
        body: ConfirmTarget | ConfirmTargetDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiV1ManageAgentsResponse1:
        """Disconnect one MCP client. Its bearer stops working immediately and the human has to authorize it again from
        their agent, so this is destructive (Tier C): ``confirm`` must equal the grant id. An id outside the key's
        project 404s. Scope: workspace:manage.

        Args:
            id_: A grant id from the MCP client listing.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The client was disconnected.

        Raises:
            ApiError: Invalid request (e.g. a body on a GET/DELETE, or a missing required query parameter). Missing,
                malformed, unknown, revoked, or expired key. The key is valid but lacks the required scope. No such
                resource in this project (returned instead of 403 for ids in other projects). The request was understood
                but refused in this state — an unmet precondition, or a confirm value that did not match. Nothing was
                changed. The request body exceeded the 16 KiB management cap. Per-key (120/min), per-workspace
                (240/min), or per-IP (300/min) rate limit exceeded. Retry after the Retry-After header. ``error`` is
                ``Error | RawError``."""
        return unwrap(await self._with_raw_response.revoke_agent_grant(id_, body, request_options=request_options))

    @property
    def with_raw_response(self) -> AsyncAgentsWithRawResponse:
        return self._with_raw_response


class AgentsWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def list_agent_grants(
        self, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[ApiV1ManageAgentsResponse, ListAgentGrantsErrorBody]:
        """The MCP clients currently authorized against the key's project, with the same ids Settings → Agents shows and
        each grant's approval policy. Never returns key material. Tier A. Scope: workspace:manage.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v1/manage/agents"),
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[ApiV1ManageAgentsResponse],
            error_mapper=list_agent_grants_error_mapper,
            request_options=request_options,
        )

    def revoke_agent_grant(
        self, id_: str, body: ConfirmTarget | ConfirmTargetDict, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[ApiV1ManageAgentsResponse1, RevokeAgentGrantErrorBody]:
        """Disconnect one MCP client. Its bearer stops working immediately and the human has to authorize it again from
        their agent, so this is destructive (Tier C): ``confirm`` must equal the grant id. An id outside the key's
        project 404s. Scope: workspace:manage.

        Args:
            id_: A grant id from the MCP client listing.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/api/v1/manage/agents/{id}"),
            path_params=[param[str]("id", id_)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ConfirmTarget | ConfirmTargetDict](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[ApiV1ManageAgentsResponse1],
            error_mapper=revoke_agent_grant_error_mapper,
            request_options=request_options,
        )


class AsyncAgentsWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def list_agent_grants(
        self, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[ApiV1ManageAgentsResponse, ListAgentGrantsErrorBody]:
        """The MCP clients currently authorized against the key's project, with the same ids Settings → Agents shows and
        each grant's approval policy. Never returns key material. Tier A. Scope: workspace:manage.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v1/manage/agents"),
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[ApiV1ManageAgentsResponse],
            error_mapper=list_agent_grants_error_mapper,
            request_options=request_options,
        )

    async def revoke_agent_grant(
        self,
        id_: str,
        body: ConfirmTarget | ConfirmTargetDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ApiV1ManageAgentsResponse1, RevokeAgentGrantErrorBody]:
        """Disconnect one MCP client. Its bearer stops working immediately and the human has to authorize it again from
        their agent, so this is destructive (Tier C): ``confirm`` must equal the grant id. An id outside the key's
        project 404s. Scope: workspace:manage.

        Args:
            id_: A grant id from the MCP client listing.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/api/v1/manage/agents/{id}"),
            path_params=[param[str]("id", id_)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ConfirmTarget | ConfirmTargetDict](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[ApiV1ManageAgentsResponse1],
            error_mapper=revoke_agent_grant_error_mapper,
            request_options=request_options,
        )
