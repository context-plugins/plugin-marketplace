from __future__ import annotations

from ..auth import AsyncAuthSchemes, AuthSchemes
from ..core import (
    AnySchemes,
    ApiResult,
    AsyncAnySchemes,
    AsyncRawClient,
    AsyncRequestOptionsOrDict,
    RawClient,
    RawError,
    RequestOptionsOrDict,
    SecuredRawResponse,
    async_json_decoder,
    json_decoder,
    param,
    raw_error_response,
    unwrap,
)
from ..models.domain import Domain
from ..models.sub_accounts_domains_response import SubAccountsDomainsResponse
from ..server.server import Server


class Domains:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = DomainsWithRawResponse(client, server, auth)

    def get_domain(self, domain_id: str, *, request_options: RequestOptionsOrDict | None = None) -> Domain:
        """Send a ``GET`` request.

        Args:
            domain_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Domain

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.get_domain(domain_id, request_options=request_options))

    def list_domains_for_sub_account(
        self, sub_account_id: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> SubAccountsDomainsResponse:
        """Send a ``GET`` request.

        Args:
            sub_account_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Domain collection

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(
            self._with_raw_response.list_domains_for_sub_account(sub_account_id, request_options=request_options)
        )

    @property
    def with_raw_response(self) -> DomainsWithRawResponse:
        return self._with_raw_response


class AsyncDomains:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncDomainsWithRawResponse(client, server, auth)

    async def get_domain(self, domain_id: str, *, request_options: AsyncRequestOptionsOrDict | None = None) -> Domain:
        """Send a ``GET`` request.

        Args:
            domain_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Domain

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.get_domain(domain_id, request_options=request_options))

    async def list_domains_for_sub_account(
        self, sub_account_id: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> SubAccountsDomainsResponse:
        """Send a ``GET`` request.

        Args:
            sub_account_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Domain collection

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.list_domains_for_sub_account(sub_account_id, request_options=request_options)
        )

    @property
    def with_raw_response(self) -> AsyncDomainsWithRawResponse:
        return self._with_raw_response


class DomainsWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def get_domain(
        self, domain_id: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[Domain, RawError]:
        """Send a ``GET`` request.

        Args:
            domain_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/domains/{domain_id}"),
            path_params=[param[str]("domain_id", domain_id)],
            auth_scheme=AnySchemes(self._auth.api_key_auth, self._auth.oauth2),
            decoder=json_decoder[Domain],
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    def list_domains_for_sub_account(
        self, sub_account_id: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[SubAccountsDomainsResponse, RawError]:
        """Send a ``GET`` request.

        Args:
            sub_account_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/sub_accounts/{sub_account_id}/domains"),
            path_params=[param[str]("sub_account_id", sub_account_id)],
            auth_scheme=AnySchemes(self._auth.api_key_auth, self._auth.oauth2),
            decoder=json_decoder[SubAccountsDomainsResponse],
            error_mapper=raw_error_response,
            request_options=request_options,
        )


class AsyncDomainsWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def get_domain(
        self, domain_id: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[Domain, RawError]:
        """Send a ``GET`` request.

        Args:
            domain_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/domains/{domain_id}"),
            path_params=[param[str]("domain_id", domain_id)],
            auth_scheme=AsyncAnySchemes(self._auth.api_key_auth, self._auth.oauth2),
            decoder=async_json_decoder[Domain],
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    async def list_domains_for_sub_account(
        self, sub_account_id: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[SubAccountsDomainsResponse, RawError]:
        """Send a ``GET`` request.

        Args:
            sub_account_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/sub_accounts/{sub_account_id}/domains"),
            path_params=[param[str]("sub_account_id", sub_account_id)],
            auth_scheme=AsyncAnySchemes(self._auth.api_key_auth, self._auth.oauth2),
            decoder=async_json_decoder[SubAccountsDomainsResponse],
            error_mapper=raw_error_response,
            request_options=request_options,
        )
