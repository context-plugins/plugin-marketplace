from __future__ import annotations

from collections.abc import Sequence
from functools import cached_property
from types import TracebackType

from typing_extensions import Self

from .apis.articles_api import ArticlesApi
from .apis.calendar_events import CalendarEvents
from .apis.categories import Categories
from .apis.companies_api import CompaniesApi
from .apis.countries_api import CountriesApi
from .apis.event_types import EventTypes
from .apis.events import Events
from .apis.exchanges_api import ExchangesApi
from .apis.health import Health
from .apis.indices_api import IndicesApi
from .apis.meta import Meta
from .apis.search_api import SearchApi
from .apis.sources import Sources
from .apis.stories_api import StoriesApi
from .apis.watchlists import Watchlists
from .auth import AuthSchemes
from .base_client import DEFAULT_TIMEOUT, BaseNordicFinancialNewsClient
from .core import (
    OPERATING_SYSTEM,
    PYTHON_RUNTIME,
    BearerAuthScheme,
    HttpClient,
    Httpx2Client,
    LoggingOptionsOrDict,
    RawClient,
    RetryOptionsOrDict,
    SdkHook,
    SdkHooksDict,
    no_auth,
    param,
)


class NordicFinancialNewsClient(BaseNordicFinancialNewsClient[RawClient]):
    def __init__(
        self,
        *,
        base_url: str | None = None,
        timeout: float = DEFAULT_TIMEOUT,
        retry_options: int | RetryOptionsOrDict | None = None,
        logging_options: LoggingOptionsOrDict | None = None,
        hooks: Sequence[SdkHook] | SdkHooksDict | None = None,
        custom_http_client: HttpClient | None = None,
        bearer_auth: str | None = None,
    ) -> None:
        super().__init__(
            base_url=base_url, timeout=timeout, retry_options=retry_options, logging_options=logging_options
        )
        self._raw_client = RawClient(
            http_client=custom_http_client if custom_http_client is not None else Httpx2Client(timeout=timeout),
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
        self._auth = AuthSchemes(bearer_auth=BearerAuthScheme(bearer_auth) if bearer_auth is not None else no_auth)

    @cached_property
    def articles_api(self) -> ArticlesApi:
        return ArticlesApi(self._raw_client, self._server, self._auth)

    @cached_property
    def calendar_events(self) -> CalendarEvents:
        return CalendarEvents(self._raw_client, self._server, self._auth)

    @cached_property
    def categories(self) -> Categories:
        return Categories(self._raw_client, self._server, self._auth)

    @cached_property
    def companies_api(self) -> CompaniesApi:
        return CompaniesApi(self._raw_client, self._server, self._auth)

    @cached_property
    def countries_api(self) -> CountriesApi:
        return CountriesApi(self._raw_client, self._server, self._auth)

    @cached_property
    def event_types(self) -> EventTypes:
        return EventTypes(self._raw_client, self._server, self._auth)

    @cached_property
    def events(self) -> Events:
        return Events(self._raw_client, self._server, self._auth)

    @cached_property
    def exchanges_api(self) -> ExchangesApi:
        return ExchangesApi(self._raw_client, self._server, self._auth)

    @cached_property
    def health(self) -> Health:
        return Health(self._raw_client, self._server)

    @cached_property
    def indices_api(self) -> IndicesApi:
        return IndicesApi(self._raw_client, self._server, self._auth)

    @cached_property
    def meta(self) -> Meta:
        return Meta(self._raw_client, self._server, self._auth)

    @cached_property
    def search_api(self) -> SearchApi:
        return SearchApi(self._raw_client, self._server, self._auth)

    @cached_property
    def sources(self) -> Sources:
        return Sources(self._raw_client, self._server, self._auth)

    @cached_property
    def stories_api(self) -> StoriesApi:
        return StoriesApi(self._raw_client, self._server, self._auth)

    @cached_property
    def watchlists(self) -> Watchlists:
        return Watchlists(self._raw_client, self._server, self._auth)

    def close(self) -> None:
        self._raw_client.http_client.close()

    def __enter__(self) -> Self:
        return self

    def __exit__(
        self, exc_type: type[BaseException] | None, exc: BaseException | None, exc_tb: TracebackType | None
    ) -> None:
        self.close()


Client = NordicFinancialNewsClient
