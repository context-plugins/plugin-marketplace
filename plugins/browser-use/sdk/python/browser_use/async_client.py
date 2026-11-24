from __future__ import annotations

from collections.abc import Sequence
from functools import cached_property
from types import TracebackType

from typing_extensions import Self

from .apis.browsers import AsyncBrowsers
from .apis.extensions import AsyncExtensions
from .apis.integrations import AsyncIntegrations
from .apis.profiles import AsyncProfiles
from .apis.runs import AsyncRuns
from .apis.sessions import AsyncSessions
from .apis.wallets import AsyncWallets
from .apis.workspaces import AsyncWorkspaces
from .auth import AsyncAuthSchemes
from .base_client import DEFAULT_TIMEOUT, BaseBrowserUseClient
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


class AsyncBrowserUseClient(BaseBrowserUseClient[AsyncRawClient]):
    def __init__(
        self,
        *,
        base_url: str | None = None,
        timeout: float = DEFAULT_TIMEOUT,
        retry_options: int | RetryOptionsOrDict | None = None,
        logging_options: LoggingOptionsOrDict | None = None,
        hooks: Sequence[AsyncSdkHook] | AsyncSdkHooksDict | None = None,
        custom_async_http_client: AsyncHttpClient | None = None,
        api_key_header: str | None = None,
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
                param[str]("User-Agent", "BrowserUseClient/4.0.0 Python"),
                param[str]("X-APIMatic-Lang", "Python"),
                param[str]("X-APIMatic-Package-Version", "4.0.0"),
                param[str]("X-APIMatic-Gen-Version", "4.0.0"),
                param[str]("X-APIMatic-OS", OPERATING_SYSTEM),
                param[str]("X-APIMatic-Runtime", PYTHON_RUNTIME),
            ],
        )
        self._auth = AsyncAuthSchemes(
            api_key_header=(
                ApiKeyHeaderScheme("X-Browser-Use-API-Key", api_key_header) if api_key_header is not None else no_auth
            ),
        )

    @cached_property
    def browsers(self) -> AsyncBrowsers:
        return AsyncBrowsers(self._raw_client, self._server, self._auth)

    @cached_property
    def extensions(self) -> AsyncExtensions:
        return AsyncExtensions(self._raw_client, self._server, self._auth)

    @cached_property
    def integrations(self) -> AsyncIntegrations:
        return AsyncIntegrations(self._raw_client, self._server, self._auth)

    @cached_property
    def profiles(self) -> AsyncProfiles:
        return AsyncProfiles(self._raw_client, self._server, self._auth)

    @cached_property
    def runs(self) -> AsyncRuns:
        return AsyncRuns(self._raw_client, self._server, self._auth)

    @cached_property
    def sessions(self) -> AsyncSessions:
        return AsyncSessions(self._raw_client, self._server, self._auth)

    @cached_property
    def wallets(self) -> AsyncWallets:
        return AsyncWallets(self._raw_client, self._server, self._auth)

    @cached_property
    def workspaces(self) -> AsyncWorkspaces:
        return AsyncWorkspaces(self._raw_client, self._server, self._auth)

    async def aclose(self) -> None:
        await self._raw_client.http_client.aclose()

    async def __aenter__(self) -> Self:
        return self

    async def __aexit__(
        self, exc_type: type[BaseException] | None, exc: BaseException | None, exc_tb: TracebackType | None
    ) -> None:
        await self.aclose()


AsyncClient = AsyncBrowserUseClient
