from __future__ import annotations

from collections.abc import Sequence
from functools import cached_property
from types import TracebackType

from typing_extensions import Self

from .apis.apps import AsyncApps
from .apis.bitlinks_api import AsyncBitlinksApi
from .apis.bs_ds import AsyncBsDs
from .apis.campaigns_api import AsyncCampaignsApi
from .apis.custom_bitlinks import AsyncCustomBitlinks
from .apis.groups_api import AsyncGroupsApi
from .apis.organizations_api import AsyncOrganizationsApi
from .apis.qr_codes import AsyncQrCodes
from .apis.user_api import AsyncUserApi
from .apis.webhooks_api import AsyncWebhooksApi
from .auth import AsyncAuthSchemes
from .base_client import DEFAULT_TIMEOUT, BaseBitlyClient
from .core import (
    OPERATING_SYSTEM,
    PYTHON_RUNTIME,
    AsyncHttpClient,
    AsyncHttpx2Client,
    AsyncRawClient,
    AsyncSdkHook,
    AsyncSdkHooksDict,
    BearerAuthScheme,
    LoggingOptionsOrDict,
    RetryOptionsOrDict,
    no_auth,
    param,
)


class AsyncBitlyClient(BaseBitlyClient[AsyncRawClient]):
    def __init__(
        self,
        *,
        base_url: str | None = None,
        timeout: float = DEFAULT_TIMEOUT,
        retry_options: int | RetryOptionsOrDict | None = None,
        logging_options: LoggingOptionsOrDict | None = None,
        hooks: Sequence[AsyncSdkHook] | AsyncSdkHooksDict | None = None,
        custom_async_http_client: AsyncHttpClient | None = None,
        bearer_auth: str | None = None,
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
                param[str]("User-Agent", "BitlyClient/4.0.0 Python"),
                param[str]("X-APIMatic-Lang", "Python"),
                param[str]("X-APIMatic-Package-Version", "4.0.0"),
                param[str]("X-APIMatic-Gen-Version", "4.0.0"),
                param[str]("X-APIMatic-OS", OPERATING_SYSTEM),
                param[str]("X-APIMatic-Runtime", PYTHON_RUNTIME),
            ],
        )
        self._auth = AsyncAuthSchemes(bearer_auth=BearerAuthScheme(bearer_auth) if bearer_auth is not None else no_auth)

    @cached_property
    def apps(self) -> AsyncApps:
        return AsyncApps(self._raw_client, self._server, self._auth)

    @cached_property
    def bs_ds(self) -> AsyncBsDs:
        return AsyncBsDs(self._raw_client, self._server, self._auth)

    @cached_property
    def bitlinks_api(self) -> AsyncBitlinksApi:
        return AsyncBitlinksApi(self._raw_client, self._server, self._auth)

    @cached_property
    def campaigns_api(self) -> AsyncCampaignsApi:
        return AsyncCampaignsApi(self._raw_client, self._server, self._auth)

    @cached_property
    def custom_bitlinks(self) -> AsyncCustomBitlinks:
        return AsyncCustomBitlinks(self._raw_client, self._server, self._auth)

    @cached_property
    def groups_api(self) -> AsyncGroupsApi:
        return AsyncGroupsApi(self._raw_client, self._server, self._auth)

    @cached_property
    def organizations_api(self) -> AsyncOrganizationsApi:
        return AsyncOrganizationsApi(self._raw_client, self._server, self._auth)

    @cached_property
    def qr_codes(self) -> AsyncQrCodes:
        return AsyncQrCodes(self._raw_client, self._server, self._auth)

    @cached_property
    def user_api(self) -> AsyncUserApi:
        return AsyncUserApi(self._raw_client, self._server, self._auth)

    @cached_property
    def webhooks_api(self) -> AsyncWebhooksApi:
        return AsyncWebhooksApi(self._raw_client, self._server, self._auth)

    async def aclose(self) -> None:
        await self._raw_client.http_client.aclose()

    async def __aenter__(self) -> Self:
        return self

    async def __aexit__(
        self, exc_type: type[BaseException] | None, exc: BaseException | None, exc_tb: TracebackType | None
    ) -> None:
        await self.aclose()


AsyncClient = AsyncBitlyClient
