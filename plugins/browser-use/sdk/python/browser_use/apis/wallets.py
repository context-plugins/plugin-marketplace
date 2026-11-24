from __future__ import annotations

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
    unwrap,
)
from ..errors.get_stripe_link_status_stripe_link_get_error import (
    GetStripeLinkStatusStripeLinkGetErrorBody,
    get_stripe_link_status_stripe_link_get_error_mapper,
)
from ..errors.list_agentcard_wallets_agentcard_wallets_get_error import (
    ListAgentcardWalletsAgentcardWalletsGetErrorBody,
    list_agentcard_wallets_agentcard_wallets_get_error_mapper,
)
from ..models.agent_card_wallet_list_response import AgentCardWalletListResponse
from ..models.stripe_link_status_response import StripeLinkStatusResponse
from ..server.server import Server


class Wallets:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = WalletsWithRawResponse(client, server, auth)

    def get_stripe_link_status_stripe_link_get(
        self, *, request_options: RequestOptionsOrDict | None = None
    ) -> StripeLinkStatusResponse:
        """The project's active Stripe Link wallet connection, if any.

        Read-only: connecting happens in the cloud UI. A run opts into paying with it by passing ``connection_id`` as
        RunCreateRequest.stripe_link_connection_id, which is validated again there against this same project.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Validation Error ``error`` is ``HttpValidationError | RawError``."""
        return unwrap(self._with_raw_response.get_stripe_link_status_stripe_link_get(request_options=request_options))

    def list_agentcard_wallets_agentcard_wallets_get(
        self, *, request_options: RequestOptionsOrDict | None = None
    ) -> AgentCardWalletListResponse:
        """The project's active AgentCard wallets, newest first.

        Read-only: funding is admin-only during the beta. The UI uses this to offer a wallet on the composer, which is
        how a run opts into spending — the id then rides RunCreateRequest.agentcard_wallet_id and is validated again
        there against this same project.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Validation Error ``error`` is ``HttpValidationError | RawError``."""
        return unwrap(
            self._with_raw_response.list_agentcard_wallets_agentcard_wallets_get(request_options=request_options)
        )

    @property
    def with_raw_response(self) -> WalletsWithRawResponse:
        return self._with_raw_response


class AsyncWallets:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncWalletsWithRawResponse(client, server, auth)

    async def get_stripe_link_status_stripe_link_get(
        self, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> StripeLinkStatusResponse:
        """The project's active Stripe Link wallet connection, if any.

        Read-only: connecting happens in the cloud UI. A run opts into paying with it by passing ``connection_id`` as
        RunCreateRequest.stripe_link_connection_id, which is validated again there against this same project.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Validation Error ``error`` is ``HttpValidationError | RawError``."""
        return unwrap(
            await self._with_raw_response.get_stripe_link_status_stripe_link_get(request_options=request_options)
        )

    async def list_agentcard_wallets_agentcard_wallets_get(
        self, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> AgentCardWalletListResponse:
        """The project's active AgentCard wallets, newest first.

        Read-only: funding is admin-only during the beta. The UI uses this to offer a wallet on the composer, which is
        how a run opts into spending — the id then rides RunCreateRequest.agentcard_wallet_id and is validated again
        there against this same project.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Validation Error ``error`` is ``HttpValidationError | RawError``."""
        return unwrap(
            await self._with_raw_response.list_agentcard_wallets_agentcard_wallets_get(request_options=request_options)
        )

    @property
    def with_raw_response(self) -> AsyncWalletsWithRawResponse:
        return self._with_raw_response


class WalletsWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def get_stripe_link_status_stripe_link_get(
        self, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[StripeLinkStatusResponse, GetStripeLinkStatusStripeLinkGetErrorBody]:
        """The project's active Stripe Link wallet connection, if any.

        Read-only: connecting happens in the cloud UI. A run opts into paying with it by passing ``connection_id`` as
        RunCreateRequest.stripe_link_connection_id, which is validated again there against this same project.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/stripe-link"),
            auth_scheme=self._auth.api_key_header,
            decoder=json_decoder[StripeLinkStatusResponse],
            error_mapper=get_stripe_link_status_stripe_link_get_error_mapper,
            request_options=request_options,
        )

    def list_agentcard_wallets_agentcard_wallets_get(
        self, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[AgentCardWalletListResponse, ListAgentcardWalletsAgentcardWalletsGetErrorBody]:
        """The project's active AgentCard wallets, newest first.

        Read-only: funding is admin-only during the beta. The UI uses this to offer a wallet on the composer, which is
        how a run opts into spending — the id then rides RunCreateRequest.agentcard_wallet_id and is validated again
        there against this same project.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/agentcard/wallets"),
            auth_scheme=self._auth.api_key_header,
            decoder=json_decoder[AgentCardWalletListResponse],
            error_mapper=list_agentcard_wallets_agentcard_wallets_get_error_mapper,
            request_options=request_options,
        )


class AsyncWalletsWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def get_stripe_link_status_stripe_link_get(
        self, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[StripeLinkStatusResponse, GetStripeLinkStatusStripeLinkGetErrorBody]:
        """The project's active Stripe Link wallet connection, if any.

        Read-only: connecting happens in the cloud UI. A run opts into paying with it by passing ``connection_id`` as
        RunCreateRequest.stripe_link_connection_id, which is validated again there against this same project.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/stripe-link"),
            auth_scheme=self._auth.api_key_header,
            decoder=async_json_decoder[StripeLinkStatusResponse],
            error_mapper=get_stripe_link_status_stripe_link_get_error_mapper,
            request_options=request_options,
        )

    async def list_agentcard_wallets_agentcard_wallets_get(
        self, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[AgentCardWalletListResponse, ListAgentcardWalletsAgentcardWalletsGetErrorBody]:
        """The project's active AgentCard wallets, newest first.

        Read-only: funding is admin-only during the beta. The UI uses this to offer a wallet on the composer, which is
        how a run opts into spending — the id then rides RunCreateRequest.agentcard_wallet_id and is validated again
        there against this same project.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/agentcard/wallets"),
            auth_scheme=self._auth.api_key_header,
            decoder=async_json_decoder[AgentCardWalletListResponse],
            error_mapper=list_agentcard_wallets_agentcard_wallets_get_error_mapper,
            request_options=request_options,
        )
