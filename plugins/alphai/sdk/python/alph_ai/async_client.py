from __future__ import annotations

from collections.abc import Sequence
from functools import cached_property
from types import TracebackType

from typing_extensions import Self

from .apis.calendar import AsyncCalendar
from .apis.coverage_api import AsyncCoverageApi
from .apis.news import AsyncNews
from .apis.radar import AsyncRadar
from .apis.stories import AsyncStories
from .apis.symbols import AsyncSymbols
from .auth import AsyncAuthSchemes
from .base_client import DEFAULT_TIMEOUT, BaseAlphAiClient
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


class AsyncAlphAiClient(BaseAlphAiClient[AsyncRawClient]):
    def __init__(
        self,
        *,
        base_url: str | None = None,
        timeout: float = DEFAULT_TIMEOUT,
        retry_options: int | RetryOptionsOrDict | None = None,
        logging_options: LoggingOptionsOrDict | None = None,
        hooks: Sequence[AsyncSdkHook] | AsyncSdkHooksDict | None = None,
        custom_async_http_client: AsyncHttpClient | None = None,
        api_key: str | None = None,
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
                param[str]("User-Agent", "AlphAiClient/1.52.0 Python"),
                param[str]("X-APIMatic-Lang", "Python"),
                param[str]("X-APIMatic-Package-Version", "1.52.0"),
                param[str]("X-APIMatic-Gen-Version", "4.0.0"),
                param[str]("X-APIMatic-OS", OPERATING_SYSTEM),
                param[str]("X-APIMatic-Runtime", PYTHON_RUNTIME),
            ],
        )
        self._auth = AsyncAuthSchemes(api_key=BearerAuthScheme(api_key) if api_key is not None else no_auth)

    @cached_property
    def calendar(self) -> AsyncCalendar:
        return AsyncCalendar(self._raw_client, self._server, self._auth)

    @cached_property
    def coverage_api(self) -> AsyncCoverageApi:
        return AsyncCoverageApi(self._raw_client, self._server, self._auth)

    @cached_property
    def news(self) -> AsyncNews:
        return AsyncNews(self._raw_client, self._server, self._auth)

    @cached_property
    def radar(self) -> AsyncRadar:
        return AsyncRadar(self._raw_client, self._server, self._auth)

    @cached_property
    def stories(self) -> AsyncStories:
        return AsyncStories(self._raw_client, self._server, self._auth)

    @cached_property
    def symbols(self) -> AsyncSymbols:
        return AsyncSymbols(self._raw_client, self._server, self._auth)

    async def aclose(self) -> None:
        await self._raw_client.http_client.aclose()

    async def __aenter__(self) -> Self:
        return self

    async def __aexit__(
        self, exc_type: type[BaseException] | None, exc: BaseException | None, exc_tb: TracebackType | None
    ) -> None:
        await self.aclose()


AsyncClient = AsyncAlphAiClient
