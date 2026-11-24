from __future__ import annotations

from collections.abc import Sequence
from functools import cached_property
from types import TracebackType

from typing_extensions import Self

from .apis.monitors import AsyncMonitors
from .apis.qualify import AsyncQualify
from .apis.screen import AsyncScreen
from .apis.search import AsyncSearch
from .apis.signal_api import AsyncSignalApi
from .apis.verify import AsyncVerify
from .auth import AsyncAuthSchemes
from .base_client import DEFAULT_TIMEOUT, BaseJidClient
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


class AsyncJidClient(BaseJidClient[AsyncRawClient]):
    def __init__(
        self,
        *,
        base_url: str | None = None,
        timeout: float = DEFAULT_TIMEOUT,
        retry_options: int | RetryOptionsOrDict | None = None,
        logging_options: LoggingOptionsOrDict | None = None,
        hooks: Sequence[AsyncSdkHook] | AsyncSdkHooksDict | None = None,
        custom_async_http_client: AsyncHttpClient | None = None,
        bearer: str | None = None,
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
                param[str]("User-Agent", "JidClient/1.3.0 Python"),
                param[str]("X-APIMatic-Lang", "Python"),
                param[str]("X-APIMatic-Package-Version", "1.3.0"),
                param[str]("X-APIMatic-Gen-Version", "4.0.0"),
                param[str]("X-APIMatic-OS", OPERATING_SYSTEM),
                param[str]("X-APIMatic-Runtime", PYTHON_RUNTIME),
            ],
        )
        self._auth = AsyncAuthSchemes(bearer=BearerAuthScheme(bearer) if bearer is not None else no_auth)

    @cached_property
    def monitors(self) -> AsyncMonitors:
        return AsyncMonitors(self._raw_client, self._server, self._auth)

    @cached_property
    def search(self) -> AsyncSearch:
        return AsyncSearch(self._raw_client, self._server)

    @cached_property
    def signal_api(self) -> AsyncSignalApi:
        return AsyncSignalApi(self._raw_client, self._server)

    @cached_property
    def verify(self) -> AsyncVerify:
        return AsyncVerify(self._raw_client, self._server)

    @cached_property
    def qualify(self) -> AsyncQualify:
        return AsyncQualify(self._raw_client, self._server, self._auth)

    @cached_property
    def screen(self) -> AsyncScreen:
        return AsyncScreen(self._raw_client, self._server)

    async def aclose(self) -> None:
        await self._raw_client.http_client.aclose()

    async def __aenter__(self) -> Self:
        return self

    async def __aexit__(
        self, exc_type: type[BaseException] | None, exc: BaseException | None, exc_tb: TracebackType | None
    ) -> None:
        await self.aclose()


AsyncClient = AsyncJidClient
