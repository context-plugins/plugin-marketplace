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
from ..errors.create_sync_token_error import CreateSyncTokenErrorBody, create_sync_token_error_mapper
from ..errors.list_connector_tokens_error import ListConnectorTokensErrorBody, list_connector_tokens_error_mapper
from ..errors.list_sync_tokens_error import ListSyncTokensErrorBody, list_sync_tokens_error_mapper
from ..errors.revoke_connector_token_error import RevokeConnectorTokenErrorBody, revoke_connector_token_error_mapper
from ..errors.revoke_sync_token_error import RevokeSyncTokenErrorBody, revoke_sync_token_error_mapper
from ..models.api_v1_manage_sync_tokens_request import ApiV1ManageSyncTokensRequest, ApiV1ManageSyncTokensRequestDict
from ..models.api_v1_manage_sync_tokens_response import ApiV1ManageSyncTokensResponse
from ..models.api_v1_manage_sync_tokens_response1 import ApiV1ManageSyncTokensResponse1
from ..models.api_v1_manage_sync_tokens_response2 import ApiV1ManageSyncTokensResponse2
from ..models.api_v1_manage_tokens_response import ApiV1ManageTokensResponse
from ..models.api_v1_manage_tokens_response1 import ApiV1ManageTokensResponse1
from ..models.confirm_target import ConfirmTarget, ConfirmTargetDict
from ..server.server import Server


class Credentials:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = CredentialsWithRawResponse(client, server, auth)

    def create_sync_token(
        self,
        *,
        body: ApiV1ManageSyncTokensRequest | ApiV1ManageSyncTokensRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiV1ManageSyncTokensResponse1:
        """Mint a stage-only deployment credential. It can stage code-defined schema changes and nothing else: it can
        never publish, read responses, or manage the workspace. The plaintext is returned EXACTLY ONCE. The token is
        bound to the human who minted the key; if that account was removed or demoted, minting is refused with 403.
        Scope: workspace:manage.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The minted token, shown once.

        Raises:
            ApiError: Invalid request (e.g. a body on a GET/DELETE, or a missing required query parameter). Missing,
                malformed, unknown, revoked, or expired key. The key is valid but lacks the required scope. No such
                resource in this project (returned instead of 403 for ids in other projects). The request was understood
                but refused in this state — an unmet precondition, or a confirm value that did not match. Nothing was
                changed. The request body exceeded the 16 KiB management cap. Per-key (120/min), per-workspace
                (240/min), or per-IP (300/min) rate limit exceeded. Retry after the Retry-After header. ``error`` is
                ``Error | RawError``."""
        return unwrap(self._with_raw_response.create_sync_token(body=body, request_options=request_options))

    def list_connector_tokens(
        self, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiV1ManageTokensResponse:
        """Every ``fcli_`` credential bound to the key's project — CLI logins, Zapier and n8n connectors, and agent
        handoffs — as metadata only. Bearers are stored as hashes and can never be listed. Tier A. Scope:
        workspace:manage.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The project's connector tokens, newest first.

        Raises:
            ApiError: Invalid request (e.g. a body on a GET/DELETE, or a missing required query parameter). Missing,
                malformed, unknown, revoked, or expired key. The key is valid but lacks the required scope. No such
                resource in this project (returned instead of 403 for ids in other projects). Per-key (120/min),
                per-workspace (240/min), or per-IP (300/min) rate limit exceeded. Retry after the Retry-After header.
                ``error`` is ``Error | RawError``."""
        return unwrap(self._with_raw_response.list_connector_tokens(request_options=request_options))

    def list_sync_tokens(self, *, request_options: RequestOptionsOrDict | None = None) -> ApiV1ManageSyncTokensResponse:
        """The project's ``fsync_`` deployment credentials, as metadata only — a sync token's plaintext is never
        persisted. Scope: workspace:manage.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The project's sync tokens, newest first.

        Raises:
            ApiError: Invalid request (e.g. a body on a GET/DELETE, or a missing required query parameter). Missing,
                malformed, unknown, revoked, or expired key. The key is valid but lacks the required scope. No such
                resource in this project (returned instead of 403 for ids in other projects). Per-key (120/min),
                per-workspace (240/min), or per-IP (300/min) rate limit exceeded. Retry after the Retry-After header.
                ``error`` is ``Error | RawError``."""
        return unwrap(self._with_raw_response.list_sync_tokens(request_options=request_options))

    def revoke_connector_token(
        self, id_: str, body: ConfirmTarget | ConfirmTargetDict, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiV1ManageTokensResponse1:
        """Revoke one connector token. Anything using it stops working immediately, so this is destructive (Tier C):
        ``confirm`` must equal the token id. An id outside the key's project 404s. Scope: workspace:manage.

        Args:
            id_: A token id from the connector-token listing.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The token was revoked.

        Raises:
            ApiError: Invalid request (e.g. a body on a GET/DELETE, or a missing required query parameter). Missing,
                malformed, unknown, revoked, or expired key. The key is valid but lacks the required scope. No such
                resource in this project (returned instead of 403 for ids in other projects). The request was understood
                but refused in this state — an unmet precondition, or a confirm value that did not match. Nothing was
                changed. The request body exceeded the 16 KiB management cap. Per-key (120/min), per-workspace
                (240/min), or per-IP (300/min) rate limit exceeded. Retry after the Retry-After header. ``error`` is
                ``Error | RawError``."""
        return unwrap(self._with_raw_response.revoke_connector_token(id_, body, request_options=request_options))

    def revoke_sync_token(
        self, id_: str, body: ConfirmTarget | ConfirmTargetDict, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiV1ManageSyncTokensResponse2:
        """Revoke one sync token; deployments using it stop staging. Destructive (Tier C): ``confirm`` must equal the
        token id. The delete holds the project's code-sync lock, so an in-flight sync either completes or the revocation
        wins before it can revalidate its bearer. Scope: workspace:manage.

        Args:
            id_: A sync token id from the sync-token listing.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The token was revoked.

        Raises:
            ApiError: Invalid request (e.g. a body on a GET/DELETE, or a missing required query parameter). Missing,
                malformed, unknown, revoked, or expired key. The key is valid but lacks the required scope. No such
                resource in this project (returned instead of 403 for ids in other projects). The request was understood
                but refused in this state — an unmet precondition, or a confirm value that did not match. Nothing was
                changed. The request body exceeded the 16 KiB management cap. Per-key (120/min), per-workspace
                (240/min), or per-IP (300/min) rate limit exceeded. Retry after the Retry-After header. ``error`` is
                ``Error | RawError``."""
        return unwrap(self._with_raw_response.revoke_sync_token(id_, body, request_options=request_options))

    @property
    def with_raw_response(self) -> CredentialsWithRawResponse:
        return self._with_raw_response


class AsyncCredentials:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncCredentialsWithRawResponse(client, server, auth)

    async def create_sync_token(
        self,
        *,
        body: ApiV1ManageSyncTokensRequest | ApiV1ManageSyncTokensRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiV1ManageSyncTokensResponse1:
        """Mint a stage-only deployment credential. It can stage code-defined schema changes and nothing else: it can
        never publish, read responses, or manage the workspace. The plaintext is returned EXACTLY ONCE. The token is
        bound to the human who minted the key; if that account was removed or demoted, minting is refused with 403.
        Scope: workspace:manage.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The minted token, shown once.

        Raises:
            ApiError: Invalid request (e.g. a body on a GET/DELETE, or a missing required query parameter). Missing,
                malformed, unknown, revoked, or expired key. The key is valid but lacks the required scope. No such
                resource in this project (returned instead of 403 for ids in other projects). The request was understood
                but refused in this state — an unmet precondition, or a confirm value that did not match. Nothing was
                changed. The request body exceeded the 16 KiB management cap. Per-key (120/min), per-workspace
                (240/min), or per-IP (300/min) rate limit exceeded. Retry after the Retry-After header. ``error`` is
                ``Error | RawError``."""
        return unwrap(await self._with_raw_response.create_sync_token(body=body, request_options=request_options))

    async def list_connector_tokens(
        self, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiV1ManageTokensResponse:
        """Every ``fcli_`` credential bound to the key's project — CLI logins, Zapier and n8n connectors, and agent
        handoffs — as metadata only. Bearers are stored as hashes and can never be listed. Tier A. Scope:
        workspace:manage.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The project's connector tokens, newest first.

        Raises:
            ApiError: Invalid request (e.g. a body on a GET/DELETE, or a missing required query parameter). Missing,
                malformed, unknown, revoked, or expired key. The key is valid but lacks the required scope. No such
                resource in this project (returned instead of 403 for ids in other projects). Per-key (120/min),
                per-workspace (240/min), or per-IP (300/min) rate limit exceeded. Retry after the Retry-After header.
                ``error`` is ``Error | RawError``."""
        return unwrap(await self._with_raw_response.list_connector_tokens(request_options=request_options))

    async def list_sync_tokens(
        self, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiV1ManageSyncTokensResponse:
        """The project's ``fsync_`` deployment credentials, as metadata only — a sync token's plaintext is never
        persisted. Scope: workspace:manage.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The project's sync tokens, newest first.

        Raises:
            ApiError: Invalid request (e.g. a body on a GET/DELETE, or a missing required query parameter). Missing,
                malformed, unknown, revoked, or expired key. The key is valid but lacks the required scope. No such
                resource in this project (returned instead of 403 for ids in other projects). Per-key (120/min),
                per-workspace (240/min), or per-IP (300/min) rate limit exceeded. Retry after the Retry-After header.
                ``error`` is ``Error | RawError``."""
        return unwrap(await self._with_raw_response.list_sync_tokens(request_options=request_options))

    async def revoke_connector_token(
        self,
        id_: str,
        body: ConfirmTarget | ConfirmTargetDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiV1ManageTokensResponse1:
        """Revoke one connector token. Anything using it stops working immediately, so this is destructive (Tier C):
        ``confirm`` must equal the token id. An id outside the key's project 404s. Scope: workspace:manage.

        Args:
            id_: A token id from the connector-token listing.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The token was revoked.

        Raises:
            ApiError: Invalid request (e.g. a body on a GET/DELETE, or a missing required query parameter). Missing,
                malformed, unknown, revoked, or expired key. The key is valid but lacks the required scope. No such
                resource in this project (returned instead of 403 for ids in other projects). The request was understood
                but refused in this state — an unmet precondition, or a confirm value that did not match. Nothing was
                changed. The request body exceeded the 16 KiB management cap. Per-key (120/min), per-workspace
                (240/min), or per-IP (300/min) rate limit exceeded. Retry after the Retry-After header. ``error`` is
                ``Error | RawError``."""
        return unwrap(await self._with_raw_response.revoke_connector_token(id_, body, request_options=request_options))

    async def revoke_sync_token(
        self,
        id_: str,
        body: ConfirmTarget | ConfirmTargetDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiV1ManageSyncTokensResponse2:
        """Revoke one sync token; deployments using it stop staging. Destructive (Tier C): ``confirm`` must equal the
        token id. The delete holds the project's code-sync lock, so an in-flight sync either completes or the revocation
        wins before it can revalidate its bearer. Scope: workspace:manage.

        Args:
            id_: A sync token id from the sync-token listing.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The token was revoked.

        Raises:
            ApiError: Invalid request (e.g. a body on a GET/DELETE, or a missing required query parameter). Missing,
                malformed, unknown, revoked, or expired key. The key is valid but lacks the required scope. No such
                resource in this project (returned instead of 403 for ids in other projects). The request was understood
                but refused in this state — an unmet precondition, or a confirm value that did not match. Nothing was
                changed. The request body exceeded the 16 KiB management cap. Per-key (120/min), per-workspace
                (240/min), or per-IP (300/min) rate limit exceeded. Retry after the Retry-After header. ``error`` is
                ``Error | RawError``."""
        return unwrap(await self._with_raw_response.revoke_sync_token(id_, body, request_options=request_options))

    @property
    def with_raw_response(self) -> AsyncCredentialsWithRawResponse:
        return self._with_raw_response


class CredentialsWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def create_sync_token(
        self,
        *,
        body: ApiV1ManageSyncTokensRequest | ApiV1ManageSyncTokensRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ApiV1ManageSyncTokensResponse1, CreateSyncTokenErrorBody]:
        """Mint a stage-only deployment credential. It can stage code-defined schema changes and nothing else: it can
        never publish, read responses, or manage the workspace. The plaintext is returned EXACTLY ONCE. The token is
        bound to the human who minted the key; if that account was removed or demoted, minting is refused with 403.
        Scope: workspace:manage.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/api/v1/manage/sync-tokens"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ApiV1ManageSyncTokensRequest | ApiV1ManageSyncTokensRequestDict | None](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[ApiV1ManageSyncTokensResponse1],
            error_mapper=create_sync_token_error_mapper,
            request_options=request_options,
        )

    def list_connector_tokens(
        self, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[ApiV1ManageTokensResponse, ListConnectorTokensErrorBody]:
        """Every ``fcli_`` credential bound to the key's project — CLI logins, Zapier and n8n connectors, and agent
        handoffs — as metadata only. Bearers are stored as hashes and can never be listed. Tier A. Scope:
        workspace:manage.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v1/manage/tokens"),
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[ApiV1ManageTokensResponse],
            error_mapper=list_connector_tokens_error_mapper,
            request_options=request_options,
        )

    def list_sync_tokens(
        self, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[ApiV1ManageSyncTokensResponse, ListSyncTokensErrorBody]:
        """The project's ``fsync_`` deployment credentials, as metadata only — a sync token's plaintext is never
        persisted. Scope: workspace:manage.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v1/manage/sync-tokens"),
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[ApiV1ManageSyncTokensResponse],
            error_mapper=list_sync_tokens_error_mapper,
            request_options=request_options,
        )

    def revoke_connector_token(
        self, id_: str, body: ConfirmTarget | ConfirmTargetDict, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[ApiV1ManageTokensResponse1, RevokeConnectorTokenErrorBody]:
        """Revoke one connector token. Anything using it stops working immediately, so this is destructive (Tier C):
        ``confirm`` must equal the token id. An id outside the key's project 404s. Scope: workspace:manage.

        Args:
            id_: A token id from the connector-token listing.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/api/v1/manage/tokens/{id}"),
            path_params=[param[str]("id", id_)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ConfirmTarget | ConfirmTargetDict](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[ApiV1ManageTokensResponse1],
            error_mapper=revoke_connector_token_error_mapper,
            request_options=request_options,
        )

    def revoke_sync_token(
        self, id_: str, body: ConfirmTarget | ConfirmTargetDict, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[ApiV1ManageSyncTokensResponse2, RevokeSyncTokenErrorBody]:
        """Revoke one sync token; deployments using it stop staging. Destructive (Tier C): ``confirm`` must equal the
        token id. The delete holds the project's code-sync lock, so an in-flight sync either completes or the revocation
        wins before it can revalidate its bearer. Scope: workspace:manage.

        Args:
            id_: A sync token id from the sync-token listing.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/api/v1/manage/sync-tokens/{id}"),
            path_params=[param[str]("id", id_)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ConfirmTarget | ConfirmTargetDict](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[ApiV1ManageSyncTokensResponse2],
            error_mapper=revoke_sync_token_error_mapper,
            request_options=request_options,
        )


class AsyncCredentialsWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def create_sync_token(
        self,
        *,
        body: ApiV1ManageSyncTokensRequest | ApiV1ManageSyncTokensRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ApiV1ManageSyncTokensResponse1, CreateSyncTokenErrorBody]:
        """Mint a stage-only deployment credential. It can stage code-defined schema changes and nothing else: it can
        never publish, read responses, or manage the workspace. The plaintext is returned EXACTLY ONCE. The token is
        bound to the human who minted the key; if that account was removed or demoted, minting is refused with 403.
        Scope: workspace:manage.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/api/v1/manage/sync-tokens"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ApiV1ManageSyncTokensRequest | ApiV1ManageSyncTokensRequestDict | None](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[ApiV1ManageSyncTokensResponse1],
            error_mapper=create_sync_token_error_mapper,
            request_options=request_options,
        )

    async def list_connector_tokens(
        self, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[ApiV1ManageTokensResponse, ListConnectorTokensErrorBody]:
        """Every ``fcli_`` credential bound to the key's project — CLI logins, Zapier and n8n connectors, and agent
        handoffs — as metadata only. Bearers are stored as hashes and can never be listed. Tier A. Scope:
        workspace:manage.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v1/manage/tokens"),
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[ApiV1ManageTokensResponse],
            error_mapper=list_connector_tokens_error_mapper,
            request_options=request_options,
        )

    async def list_sync_tokens(
        self, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[ApiV1ManageSyncTokensResponse, ListSyncTokensErrorBody]:
        """The project's ``fsync_`` deployment credentials, as metadata only — a sync token's plaintext is never
        persisted. Scope: workspace:manage.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v1/manage/sync-tokens"),
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[ApiV1ManageSyncTokensResponse],
            error_mapper=list_sync_tokens_error_mapper,
            request_options=request_options,
        )

    async def revoke_connector_token(
        self,
        id_: str,
        body: ConfirmTarget | ConfirmTargetDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ApiV1ManageTokensResponse1, RevokeConnectorTokenErrorBody]:
        """Revoke one connector token. Anything using it stops working immediately, so this is destructive (Tier C):
        ``confirm`` must equal the token id. An id outside the key's project 404s. Scope: workspace:manage.

        Args:
            id_: A token id from the connector-token listing.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/api/v1/manage/tokens/{id}"),
            path_params=[param[str]("id", id_)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ConfirmTarget | ConfirmTargetDict](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[ApiV1ManageTokensResponse1],
            error_mapper=revoke_connector_token_error_mapper,
            request_options=request_options,
        )

    async def revoke_sync_token(
        self,
        id_: str,
        body: ConfirmTarget | ConfirmTargetDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ApiV1ManageSyncTokensResponse2, RevokeSyncTokenErrorBody]:
        """Revoke one sync token; deployments using it stop staging. Destructive (Tier C): ``confirm`` must equal the
        token id. The delete holds the project's code-sync lock, so an in-flight sync either completes or the revocation
        wins before it can revalidate its bearer. Scope: workspace:manage.

        Args:
            id_: A sync token id from the sync-token listing.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/api/v1/manage/sync-tokens/{id}"),
            path_params=[param[str]("id", id_)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ConfirmTarget | ConfirmTargetDict](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[ApiV1ManageSyncTokensResponse2],
            error_mapper=revoke_sync_token_error_mapper,
            request_options=request_options,
        )
