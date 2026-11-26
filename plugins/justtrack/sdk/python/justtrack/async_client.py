from __future__ import annotations

from collections.abc import Sequence
from functools import cached_property
from types import TracebackType

from typing_extensions import Self

from .apis.app_events import AsyncAppEvents
from .apis.app_partner_connection_api import AsyncAppPartnerConnectionApi
from .apis.apps import AsyncApps
from .apis.bids import AsyncBids
from .apis.campaigns import AsyncCampaigns
from .apis.partner_configurations import AsyncPartnerConfigurations
from .apis.partners import AsyncPartners
from .auth import AsyncAuthSchemes
from .base_client import DEFAULT_TIMEOUT, BaseJusttrackClient
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
from .server.server_config import ServerConfigOrDict


class AsyncJusttrackClient(BaseJusttrackClient[AsyncRawClient]):
    def __init__(
        self,
        *,
        server_config: ServerConfigOrDict | None = None,
        timeout: float = DEFAULT_TIMEOUT,
        retry_options: int | RetryOptionsOrDict | None = None,
        logging_options: LoggingOptionsOrDict | None = None,
        hooks: Sequence[AsyncSdkHook] | AsyncSdkHooksDict | None = None,
        custom_async_http_client: AsyncHttpClient | None = None,
        api_key_auth: str | None = None,
    ) -> None:
        super().__init__(
            server_config=server_config, timeout=timeout, retry_options=retry_options, logging_options=logging_options
        )
        self._raw_client = AsyncRawClient(
            http_client=(
                custom_async_http_client if custom_async_http_client is not None else AsyncHttpx2Client(timeout=timeout)
            ),
            retry_options=self._retry_options,
            logging_options=self._logging_options,
            hooks=hooks if hooks is not None else [],
            global_headers=[
                param[str]("User-Agent", "JusttrackClient/v1.0.0 Python"),
                param[str]("X-APIMatic-Lang", "Python"),
                param[str]("X-APIMatic-Package-Version", "v1.0.0"),
                param[str]("X-APIMatic-Gen-Version", "4.0.0"),
                param[str]("X-APIMatic-OS", OPERATING_SYSTEM),
                param[str]("X-APIMatic-Runtime", PYTHON_RUNTIME),
            ],
        )
        self._auth = AsyncAuthSchemes(
            api_key_auth=ApiKeyHeaderScheme("X-API-Key", api_key_auth) if api_key_auth is not None else no_auth
        )

    @cached_property
    def app_events(self) -> AsyncAppEvents:
        return AsyncAppEvents(self._raw_client, self._server, self._auth)

    @cached_property
    def app_partner_connection_api(self) -> AsyncAppPartnerConnectionApi:
        return AsyncAppPartnerConnectionApi(self._raw_client, self._server, self._auth)

    @cached_property
    def apps(self) -> AsyncApps:
        return AsyncApps(self._raw_client, self._server, self._auth)

    @cached_property
    def bids(self) -> AsyncBids:
        return AsyncBids(self._raw_client, self._server, self._auth)

    @cached_property
    def campaigns(self) -> AsyncCampaigns:
        return AsyncCampaigns(self._raw_client, self._server, self._auth)

    @cached_property
    def partner_configurations(self) -> AsyncPartnerConfigurations:
        return AsyncPartnerConfigurations(self._raw_client, self._server, self._auth)

    @cached_property
    def partners(self) -> AsyncPartners:
        return AsyncPartners(self._raw_client, self._server, self._auth)

    async def aclose(self) -> None:
        await self._raw_client.http_client.aclose()

    async def __aenter__(self) -> Self:
        return self

    async def __aexit__(
        self, exc_type: type[BaseException] | None, exc: BaseException | None, exc_tb: TracebackType | None
    ) -> None:
        await self.aclose()


AsyncClient = AsyncJusttrackClient
