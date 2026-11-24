from __future__ import annotations

from collections.abc import Sequence
from functools import cached_property
from types import TracebackType

from typing_extensions import Self

from .apis.account import AsyncAccount
from .apis.account_management import AsyncAccountManagement
from .apis.buying_group import AsyncBuyingGroup
from .apis.companies_tables import AsyncCompaniesTables
from .apis.company_filters_api import AsyncCompanyFiltersApi
from .apis.contact_filters_api import AsyncContactFiltersApi
from .apis.contacts_tables import AsyncContactsTables
from .apis.enrich import AsyncEnrich
from .apis.enrichment import AsyncEnrichment
from .apis.filters_api import AsyncFiltersApi
from .apis.lookalikes import AsyncLookalikes
from .apis.prospecting import AsyncProspecting
from .apis.prospecting_search_enrich import AsyncProspectingSearchEnrich
from .apis.search import AsyncSearch
from .apis.search_enrich import AsyncSearchEnrich
from .apis.signals_api import AsyncSignalsApi
from .apis.webhooks_api import AsyncWebhooksApi
from .apis.website_visits import AsyncWebsiteVisits
from .auth import AsyncAuthSchemes
from .base_client import DEFAULT_TIMEOUT, BaseLushaClient
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


class AsyncLushaClient(BaseLushaClient[AsyncRawClient]):
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
                param[str]("User-Agent", "LushaClient/1.0 Python"),
                param[str]("X-APIMatic-Lang", "Python"),
                param[str]("X-APIMatic-Package-Version", "1.0"),
                param[str]("X-APIMatic-Gen-Version", "4.0.0"),
                param[str]("X-APIMatic-OS", OPERATING_SYSTEM),
                param[str]("X-APIMatic-Runtime", PYTHON_RUNTIME),
            ],
        )
        self._auth = AsyncAuthSchemes(
            api_key_auth=ApiKeyHeaderScheme("api_key", api_key_auth) if api_key_auth is not None else no_auth
        )

    @cached_property
    def account(self) -> AsyncAccount:
        return AsyncAccount(self._raw_client, self._server, self._auth)

    @cached_property
    def account_management(self) -> AsyncAccountManagement:
        return AsyncAccountManagement(self._raw_client, self._server, self._auth)

    @cached_property
    def buying_group(self) -> AsyncBuyingGroup:
        return AsyncBuyingGroup(self._raw_client, self._server, self._auth)

    @cached_property
    def companies_tables(self) -> AsyncCompaniesTables:
        return AsyncCompaniesTables(self._raw_client, self._server, self._auth)

    @cached_property
    def company_filters_api(self) -> AsyncCompanyFiltersApi:
        return AsyncCompanyFiltersApi(self._raw_client, self._server, self._auth)

    @cached_property
    def contact_filters_api(self) -> AsyncContactFiltersApi:
        return AsyncContactFiltersApi(self._raw_client, self._server, self._auth)

    @cached_property
    def contacts_tables(self) -> AsyncContactsTables:
        return AsyncContactsTables(self._raw_client, self._server, self._auth)

    @cached_property
    def enrich(self) -> AsyncEnrich:
        return AsyncEnrich(self._raw_client, self._server, self._auth)

    @cached_property
    def enrichment(self) -> AsyncEnrichment:
        return AsyncEnrichment(self._raw_client, self._server, self._auth)

    @cached_property
    def filters_api(self) -> AsyncFiltersApi:
        return AsyncFiltersApi(self._raw_client, self._server, self._auth)

    @cached_property
    def lookalikes(self) -> AsyncLookalikes:
        return AsyncLookalikes(self._raw_client, self._server, self._auth)

    @cached_property
    def prospecting(self) -> AsyncProspecting:
        return AsyncProspecting(self._raw_client, self._server, self._auth)

    @cached_property
    def prospecting_search_enrich(self) -> AsyncProspectingSearchEnrich:
        return AsyncProspectingSearchEnrich(self._raw_client, self._server, self._auth)

    @cached_property
    def search(self) -> AsyncSearch:
        return AsyncSearch(self._raw_client, self._server, self._auth)

    @cached_property
    def search_enrich(self) -> AsyncSearchEnrich:
        return AsyncSearchEnrich(self._raw_client, self._server, self._auth)

    @cached_property
    def signals_api(self) -> AsyncSignalsApi:
        return AsyncSignalsApi(self._raw_client, self._server, self._auth)

    @cached_property
    def webhooks_api(self) -> AsyncWebhooksApi:
        return AsyncWebhooksApi(self._raw_client, self._server, self._auth)

    @cached_property
    def website_visits(self) -> AsyncWebsiteVisits:
        return AsyncWebsiteVisits(self._raw_client, self._server, self._auth)

    async def aclose(self) -> None:
        await self._raw_client.http_client.aclose()

    async def __aenter__(self) -> Self:
        return self

    async def __aexit__(
        self, exc_type: type[BaseException] | None, exc: BaseException | None, exc_tb: TracebackType | None
    ) -> None:
        await self.aclose()


AsyncClient = AsyncLushaClient
