from __future__ import annotations

from collections.abc import Sequence
from functools import cached_property
from types import TracebackType

from typing_extensions import Self

from .apis.ai_advanced_search import AsyncAiAdvancedSearch
from .apis.contact_points import AsyncContactPoints
from .apis.monitors import AsyncMonitors
from .apis.news_stories import AsyncNewsStories
from .apis.source_groups import AsyncSourceGroups
from .apis.supplemental_endpoints import AsyncSupplementalEndpoints
from .apis.utilities import AsyncUtilities
from .apis.watchlists import AsyncWatchlists
from .apis.wikipedia import AsyncWikipedia
from .auth import AsyncAuthSchemes
from .base_client import DEFAULT_TIMEOUT, BasePerigonClient
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


class AsyncPerigonClient(BasePerigonClient[AsyncRawClient]):
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
                param[str]("User-Agent", "PerigonClient/1.0.0 Python"),
                param[str]("X-APIMatic-Lang", "Python"),
                param[str]("X-APIMatic-Package-Version", "1.0.0"),
                param[str]("X-APIMatic-Gen-Version", "4.0.0"),
                param[str]("X-APIMatic-OS", OPERATING_SYSTEM),
                param[str]("X-APIMatic-Runtime", PYTHON_RUNTIME),
            ],
        )
        self._auth = AsyncAuthSchemes(
            api_key_auth=BearerAuthScheme(api_key_auth) if api_key_auth is not None else no_auth
        )

    @cached_property
    def ai_advanced_search(self) -> AsyncAiAdvancedSearch:
        return AsyncAiAdvancedSearch(self._raw_client, self._server, self._auth)

    @cached_property
    def contact_points(self) -> AsyncContactPoints:
        return AsyncContactPoints(self._raw_client, self._server, self._auth)

    @cached_property
    def monitors(self) -> AsyncMonitors:
        return AsyncMonitors(self._raw_client, self._server, self._auth)

    @cached_property
    def news_stories(self) -> AsyncNewsStories:
        return AsyncNewsStories(self._raw_client, self._server, self._auth)

    @cached_property
    def source_groups(self) -> AsyncSourceGroups:
        return AsyncSourceGroups(self._raw_client, self._server, self._auth)

    @cached_property
    def supplemental_endpoints(self) -> AsyncSupplementalEndpoints:
        return AsyncSupplementalEndpoints(self._raw_client, self._server, self._auth)

    @cached_property
    def utilities(self) -> AsyncUtilities:
        return AsyncUtilities(self._raw_client, self._server, self._auth)

    @cached_property
    def watchlists(self) -> AsyncWatchlists:
        return AsyncWatchlists(self._raw_client, self._server, self._auth)

    @cached_property
    def wikipedia(self) -> AsyncWikipedia:
        return AsyncWikipedia(self._raw_client, self._server, self._auth)

    async def aclose(self) -> None:
        await self._raw_client.http_client.aclose()

    async def __aenter__(self) -> Self:
        return self

    async def __aexit__(
        self, exc_type: type[BaseException] | None, exc: BaseException | None, exc_tb: TracebackType | None
    ) -> None:
        await self.aclose()


AsyncClient = AsyncPerigonClient
