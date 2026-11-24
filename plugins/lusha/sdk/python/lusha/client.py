from __future__ import annotations

from collections.abc import Sequence
from functools import cached_property
from types import TracebackType

from typing_extensions import Self

from .apis.account import Account
from .apis.account_management import AccountManagement
from .apis.buying_group import BuyingGroup
from .apis.companies_tables import CompaniesTables
from .apis.company_filters_api import CompanyFiltersApi
from .apis.contact_filters_api import ContactFiltersApi
from .apis.contacts_tables import ContactsTables
from .apis.enrich import Enrich
from .apis.enrichment import Enrichment
from .apis.filters_api import FiltersApi
from .apis.lookalikes import Lookalikes
from .apis.prospecting import Prospecting
from .apis.prospecting_search_enrich import ProspectingSearchEnrich
from .apis.search import Search
from .apis.search_enrich import SearchEnrich
from .apis.signals_api import SignalsApi
from .apis.webhooks_api import WebhooksApi
from .apis.website_visits import WebsiteVisits
from .auth import AuthSchemes
from .base_client import DEFAULT_TIMEOUT, BaseLushaClient
from .core import (
    OPERATING_SYSTEM,
    PYTHON_RUNTIME,
    ApiKeyHeaderScheme,
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


class LushaClient(BaseLushaClient[RawClient]):
    def __init__(
        self,
        *,
        base_url: str | None = None,
        timeout: float = DEFAULT_TIMEOUT,
        retry_options: int | RetryOptionsOrDict | None = None,
        logging_options: LoggingOptionsOrDict | None = None,
        hooks: Sequence[SdkHook] | SdkHooksDict | None = None,
        custom_http_client: HttpClient | None = None,
        api_key_auth: str | None = None,
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
                param[str]("User-Agent", "LushaClient/1.0 Python"),
                param[str]("X-APIMatic-Lang", "Python"),
                param[str]("X-APIMatic-Package-Version", "1.0"),
                param[str]("X-APIMatic-Gen-Version", "4.0.0"),
                param[str]("X-APIMatic-OS", OPERATING_SYSTEM),
                param[str]("X-APIMatic-Runtime", PYTHON_RUNTIME),
            ],
        )
        self._auth = AuthSchemes(
            api_key_auth=ApiKeyHeaderScheme("api_key", api_key_auth) if api_key_auth is not None else no_auth
        )

    @cached_property
    def account(self) -> Account:
        return Account(self._raw_client, self._server, self._auth)

    @cached_property
    def account_management(self) -> AccountManagement:
        return AccountManagement(self._raw_client, self._server, self._auth)

    @cached_property
    def buying_group(self) -> BuyingGroup:
        return BuyingGroup(self._raw_client, self._server, self._auth)

    @cached_property
    def companies_tables(self) -> CompaniesTables:
        return CompaniesTables(self._raw_client, self._server, self._auth)

    @cached_property
    def company_filters_api(self) -> CompanyFiltersApi:
        return CompanyFiltersApi(self._raw_client, self._server, self._auth)

    @cached_property
    def contact_filters_api(self) -> ContactFiltersApi:
        return ContactFiltersApi(self._raw_client, self._server, self._auth)

    @cached_property
    def contacts_tables(self) -> ContactsTables:
        return ContactsTables(self._raw_client, self._server, self._auth)

    @cached_property
    def enrich(self) -> Enrich:
        return Enrich(self._raw_client, self._server, self._auth)

    @cached_property
    def enrichment(self) -> Enrichment:
        return Enrichment(self._raw_client, self._server, self._auth)

    @cached_property
    def filters_api(self) -> FiltersApi:
        return FiltersApi(self._raw_client, self._server, self._auth)

    @cached_property
    def lookalikes(self) -> Lookalikes:
        return Lookalikes(self._raw_client, self._server, self._auth)

    @cached_property
    def prospecting(self) -> Prospecting:
        return Prospecting(self._raw_client, self._server, self._auth)

    @cached_property
    def prospecting_search_enrich(self) -> ProspectingSearchEnrich:
        return ProspectingSearchEnrich(self._raw_client, self._server, self._auth)

    @cached_property
    def search(self) -> Search:
        return Search(self._raw_client, self._server, self._auth)

    @cached_property
    def search_enrich(self) -> SearchEnrich:
        return SearchEnrich(self._raw_client, self._server, self._auth)

    @cached_property
    def signals_api(self) -> SignalsApi:
        return SignalsApi(self._raw_client, self._server, self._auth)

    @cached_property
    def webhooks_api(self) -> WebhooksApi:
        return WebhooksApi(self._raw_client, self._server, self._auth)

    @cached_property
    def website_visits(self) -> WebsiteVisits:
        return WebsiteVisits(self._raw_client, self._server, self._auth)

    def close(self) -> None:
        self._raw_client.http_client.close()

    def __enter__(self) -> Self:
        return self

    def __exit__(
        self, exc_type: type[BaseException] | None, exc: BaseException | None, exc_tb: TracebackType | None
    ) -> None:
        self.close()


Client = LushaClient
