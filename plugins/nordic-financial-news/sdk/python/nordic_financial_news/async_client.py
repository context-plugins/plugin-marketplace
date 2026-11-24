from __future__ import annotations

from collections.abc import Sequence
from functools import cached_property
from types import TracebackType

from typing_extensions import Self

from .apis.articles_api import AsyncArticlesApi
from .apis.calendar_events import AsyncCalendarEvents
from .apis.categories import AsyncCategories
from .apis.companies_api import AsyncCompaniesApi
from .apis.countries_api import AsyncCountriesApi
from .apis.event_types import AsyncEventTypes
from .apis.events import AsyncEvents
from .apis.exchanges_api import AsyncExchangesApi
from .apis.health import AsyncHealth
from .apis.indices_api import AsyncIndicesApi
from .apis.meta import AsyncMeta
from .apis.search_api import AsyncSearchApi
from .apis.sources import AsyncSources
from .apis.stories_api import AsyncStoriesApi
from .apis.watchlists import AsyncWatchlists
from .auth import AsyncAuthSchemes
from .base_client import DEFAULT_TIMEOUT, BaseNordicFinancialNewsClient
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


class AsyncNordicFinancialNewsClient(BaseNordicFinancialNewsClient[AsyncRawClient]):
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
                param[str]("User-Agent", "NordicFinancialNewsClient/v1.0 Python"),
                param[str]("X-APIMatic-Lang", "Python"),
                param[str]("X-APIMatic-Package-Version", "v1.0"),
                param[str]("X-APIMatic-Gen-Version", "4.0.0"),
                param[str]("X-APIMatic-OS", OPERATING_SYSTEM),
                param[str]("X-APIMatic-Runtime", PYTHON_RUNTIME),
            ],
        )
        self._auth = AsyncAuthSchemes(bearer_auth=BearerAuthScheme(bearer_auth) if bearer_auth is not None else no_auth)

    @cached_property
    def articles_api(self) -> AsyncArticlesApi:
        return AsyncArticlesApi(self._raw_client, self._server, self._auth)

    @cached_property
    def calendar_events(self) -> AsyncCalendarEvents:
        return AsyncCalendarEvents(self._raw_client, self._server, self._auth)

    @cached_property
    def categories(self) -> AsyncCategories:
        return AsyncCategories(self._raw_client, self._server, self._auth)

    @cached_property
    def companies_api(self) -> AsyncCompaniesApi:
        return AsyncCompaniesApi(self._raw_client, self._server, self._auth)

    @cached_property
    def countries_api(self) -> AsyncCountriesApi:
        return AsyncCountriesApi(self._raw_client, self._server, self._auth)

    @cached_property
    def event_types(self) -> AsyncEventTypes:
        return AsyncEventTypes(self._raw_client, self._server, self._auth)

    @cached_property
    def events(self) -> AsyncEvents:
        return AsyncEvents(self._raw_client, self._server, self._auth)

    @cached_property
    def exchanges_api(self) -> AsyncExchangesApi:
        return AsyncExchangesApi(self._raw_client, self._server, self._auth)

    @cached_property
    def health(self) -> AsyncHealth:
        return AsyncHealth(self._raw_client, self._server)

    @cached_property
    def indices_api(self) -> AsyncIndicesApi:
        return AsyncIndicesApi(self._raw_client, self._server, self._auth)

    @cached_property
    def meta(self) -> AsyncMeta:
        return AsyncMeta(self._raw_client, self._server, self._auth)

    @cached_property
    def search_api(self) -> AsyncSearchApi:
        return AsyncSearchApi(self._raw_client, self._server, self._auth)

    @cached_property
    def sources(self) -> AsyncSources:
        return AsyncSources(self._raw_client, self._server, self._auth)

    @cached_property
    def stories_api(self) -> AsyncStoriesApi:
        return AsyncStoriesApi(self._raw_client, self._server, self._auth)

    @cached_property
    def watchlists(self) -> AsyncWatchlists:
        return AsyncWatchlists(self._raw_client, self._server, self._auth)

    async def aclose(self) -> None:
        await self._raw_client.http_client.aclose()

    async def __aenter__(self) -> Self:
        return self

    async def __aexit__(
        self, exc_type: type[BaseException] | None, exc: BaseException | None, exc_tb: TracebackType | None
    ) -> None:
        await self.aclose()


AsyncClient = AsyncNordicFinancialNewsClient
