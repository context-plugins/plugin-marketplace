from __future__ import annotations

from collections.abc import Sequence
from functools import cached_property
from types import TracebackType

from typing_extensions import Self

from .apis.internet_gateways import AsyncInternetGateways
from .apis.nat_gateways import AsyncNatGateways
from .apis.network_ac_ls import AsyncNetworkAcLs
from .apis.route_tables import AsyncRouteTables
from .apis.subnets import AsyncSubnets
from .apis.vp_cs import AsyncVpCs
from .auth import AsyncAuthSchemes
from .base_client import DEFAULT_TIMEOUT, BaseAmazonVpcClient
from .core import (
    OPERATING_SYSTEM,
    PYTHON_RUNTIME,
    ApiKeyHeaderScheme,
    AsyncHttpClient,
    AsyncHttpx2Client,
    AsyncRawClient,
    AsyncSdkHook,
    AsyncSdkHooksDict,
    LoggingOptionsOrDict,
    RetryOptionsOrDict,
    no_auth,
    param,
)


class AsyncAmazonVpcClient(BaseAmazonVpcClient[AsyncRawClient]):
    def __init__(
        self,
        *,
        base_url: str | None = None,
        timeout: float = DEFAULT_TIMEOUT,
        retry_options: int | RetryOptionsOrDict | None = None,
        logging_options: LoggingOptionsOrDict | None = None,
        hooks: Sequence[AsyncSdkHook] | AsyncSdkHooksDict | None = None,
        custom_async_http_client: AsyncHttpClient | None = None,
        sigv4_auth: str | None = None,
    ) -> None:
        super().__init__(
            base_url=base_url, timeout=timeout, retry_options=retry_options, logging_options=logging_options
        )
        self._raw_client = AsyncRawClient(
            http_client=(
                custom_async_http_client if custom_async_http_client is not None else AsyncHttpx2Client(timeout=timeout)
            ),
            retry_options=self._retry_options,
            logging_options=self._logging_options,
            hooks=hooks if hooks is not None else [],
            global_headers=[
                param[str]("User-Agent", "AmazonVpcClient/0.1.0 Python"),
                param[str]("X-APIMatic-Lang", "Python"),
                param[str]("X-APIMatic-Package-Version", "0.1.0"),
                param[str]("X-APIMatic-Gen-Version", "4.0.0"),
                param[str]("X-APIMatic-OS", OPERATING_SYSTEM),
                param[str]("X-APIMatic-Runtime", PYTHON_RUNTIME),
            ],
        )
        self._auth = AsyncAuthSchemes(
            sigv4_auth=ApiKeyHeaderScheme("Authorization", sigv4_auth) if sigv4_auth is not None else no_auth
        )

    @cached_property
    def internet_gateways(self) -> AsyncInternetGateways:
        return AsyncInternetGateways(self._raw_client, self._server, self._auth)

    @cached_property
    def nat_gateways(self) -> AsyncNatGateways:
        return AsyncNatGateways(self._raw_client, self._server, self._auth)

    @cached_property
    def network_ac_ls(self) -> AsyncNetworkAcLs:
        return AsyncNetworkAcLs(self._raw_client, self._server, self._auth)

    @cached_property
    def route_tables(self) -> AsyncRouteTables:
        return AsyncRouteTables(self._raw_client, self._server, self._auth)

    @cached_property
    def subnets(self) -> AsyncSubnets:
        return AsyncSubnets(self._raw_client, self._server, self._auth)

    @cached_property
    def vp_cs(self) -> AsyncVpCs:
        return AsyncVpCs(self._raw_client, self._server, self._auth)

    async def aclose(self) -> None:
        await self._raw_client.http_client.aclose()

    async def __aenter__(self) -> Self:
        return self

    async def __aexit__(
        self, exc_type: type[BaseException] | None, exc: BaseException | None, exc_tb: TracebackType | None
    ) -> None:
        await self.aclose()


AsyncClient = AsyncAmazonVpcClient
