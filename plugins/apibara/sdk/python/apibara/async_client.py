from __future__ import annotations

from collections.abc import Sequence
from functools import cached_property
from types import TracebackType

from typing_extensions import Self

from .apis.change_stream import AsyncChangeStream
from .apis.filters import AsyncFilters
from .apis.image_proxy import AsyncImageProxy
from .apis.locations import AsyncLocations
from .apis.market import AsyncMarket
from .apis.related_vehicles import AsyncRelatedVehicles
from .apis.shipping import AsyncShipping
from .apis.url_tools import AsyncUrlTools
from .apis.usage import AsyncUsage
from .apis.vehicle_auction import AsyncVehicleAuction
from .apis.vehicle_history import AsyncVehicleHistory
from .apis.vehicles import AsyncVehicles
from .auth import AsyncAuthSchemes
from .base_client import DEFAULT_TIMEOUT, BaseApibaraClient
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


class AsyncApibaraClient(BaseApibaraClient[AsyncRawClient]):
    def __init__(
        self,
        *,
        base_url: str | None = None,
        timeout: float = DEFAULT_TIMEOUT,
        retry_options: int | RetryOptionsOrDict | None = None,
        logging_options: LoggingOptionsOrDict | None = None,
        hooks: Sequence[AsyncSdkHook] | AsyncSdkHooksDict | None = None,
        custom_async_http_client: AsyncHttpClient | None = None,
        api_key_auth: str | None = None,
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
                param[str]("User-Agent", "ApibaraClient/1.1.2 Python"),
                param[str]("X-APIMatic-Lang", "Python"),
                param[str]("X-APIMatic-Package-Version", "1.1.2"),
                param[str]("X-APIMatic-Gen-Version", "4.0.0"),
                param[str]("X-APIMatic-OS", OPERATING_SYSTEM),
                param[str]("X-APIMatic-Runtime", PYTHON_RUNTIME),
            ],
        )
        self._auth = AsyncAuthSchemes(
            api_key_auth=ApiKeyHeaderScheme("X-API-Key", api_key_auth) if api_key_auth is not None else no_auth
        )

    @cached_property
    def change_stream(self) -> AsyncChangeStream:
        return AsyncChangeStream(self._raw_client, self._server, self._auth)

    @cached_property
    def filters(self) -> AsyncFilters:
        return AsyncFilters(self._raw_client, self._server, self._auth)

    @cached_property
    def image_proxy(self) -> AsyncImageProxy:
        return AsyncImageProxy(self._raw_client, self._server, self._auth)

    @cached_property
    def locations(self) -> AsyncLocations:
        return AsyncLocations(self._raw_client, self._server, self._auth)

    @cached_property
    def market(self) -> AsyncMarket:
        return AsyncMarket(self._raw_client, self._server, self._auth)

    @cached_property
    def related_vehicles(self) -> AsyncRelatedVehicles:
        return AsyncRelatedVehicles(self._raw_client, self._server, self._auth)

    @cached_property
    def shipping(self) -> AsyncShipping:
        return AsyncShipping(self._raw_client, self._server, self._auth)

    @cached_property
    def url_tools(self) -> AsyncUrlTools:
        return AsyncUrlTools(self._raw_client, self._server, self._auth)

    @cached_property
    def usage(self) -> AsyncUsage:
        return AsyncUsage(self._raw_client, self._server, self._auth)

    @cached_property
    def vehicle_auction(self) -> AsyncVehicleAuction:
        return AsyncVehicleAuction(self._raw_client, self._server, self._auth)

    @cached_property
    def vehicle_history(self) -> AsyncVehicleHistory:
        return AsyncVehicleHistory(self._raw_client, self._server, self._auth)

    @cached_property
    def vehicles(self) -> AsyncVehicles:
        return AsyncVehicles(self._raw_client, self._server, self._auth)

    async def aclose(self) -> None:
        await self._raw_client.http_client.aclose()

    async def __aenter__(self) -> Self:
        return self

    async def __aexit__(
        self, exc_type: type[BaseException] | None, exc: BaseException | None, exc_tb: TracebackType | None
    ) -> None:
        await self.aclose()


AsyncClient = AsyncApibaraClient
