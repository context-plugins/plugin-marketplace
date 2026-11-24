from __future__ import annotations

from collections.abc import Sequence
from functools import cached_property
from types import TracebackType

from typing_extensions import Self

from .apis.account import AsyncAccount
from .apis.best_offer_prices import AsyncBestOfferPrices
from .apis.bulk_search import AsyncBulkSearch
from .apis.cards import AsyncCards
from .apis.depop import AsyncDepop
from .apis.grailed import AsyncGrailed
from .apis.mercari import AsyncMercari
from .apis.poshmark import AsyncPoshmark
from .apis.psa import AsyncPsa
from .apis.scrape import AsyncScrape
from .apis.shipping_rates import AsyncShippingRates
from .apis.sold_history import AsyncSoldHistory
from .apis.summary import AsyncSummary
from .apis.tc_gplayer import AsyncTcGplayer
from .auth import AsyncAuthSchemes
from .base_client import DEFAULT_TIMEOUT, BaseCompSniperClient
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


class AsyncCompSniperClient(BaseCompSniperClient[AsyncRawClient]):
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
                param[str]("User-Agent", "CompSniperClient/2.3.0 Python"),
                param[str]("X-APIMatic-Lang", "Python"),
                param[str]("X-APIMatic-Package-Version", "2.3.0"),
                param[str]("X-APIMatic-Gen-Version", "4.0.0"),
                param[str]("X-APIMatic-OS", OPERATING_SYSTEM),
                param[str]("X-APIMatic-Runtime", PYTHON_RUNTIME),
            ],
        )
        self._auth = AsyncAuthSchemes(bearer_auth=BearerAuthScheme(bearer_auth) if bearer_auth is not None else no_auth)

    @cached_property
    def account(self) -> AsyncAccount:
        return AsyncAccount(self._raw_client, self._server, self._auth)

    @cached_property
    def best_offer_prices(self) -> AsyncBestOfferPrices:
        return AsyncBestOfferPrices(self._raw_client, self._server, self._auth)

    @cached_property
    def bulk_search(self) -> AsyncBulkSearch:
        return AsyncBulkSearch(self._raw_client, self._server, self._auth)

    @cached_property
    def cards(self) -> AsyncCards:
        return AsyncCards(self._raw_client, self._server, self._auth)

    @cached_property
    def depop(self) -> AsyncDepop:
        return AsyncDepop(self._raw_client, self._server, self._auth)

    @cached_property
    def grailed(self) -> AsyncGrailed:
        return AsyncGrailed(self._raw_client, self._server, self._auth)

    @cached_property
    def mercari(self) -> AsyncMercari:
        return AsyncMercari(self._raw_client, self._server, self._auth)

    @cached_property
    def psa(self) -> AsyncPsa:
        return AsyncPsa(self._raw_client, self._server, self._auth)

    @cached_property
    def poshmark(self) -> AsyncPoshmark:
        return AsyncPoshmark(self._raw_client, self._server, self._auth)

    @cached_property
    def scrape(self) -> AsyncScrape:
        return AsyncScrape(self._raw_client, self._server, self._auth)

    @cached_property
    def shipping_rates(self) -> AsyncShippingRates:
        return AsyncShippingRates(self._raw_client, self._server, self._auth)

    @cached_property
    def sold_history(self) -> AsyncSoldHistory:
        return AsyncSoldHistory(self._raw_client, self._server, self._auth)

    @cached_property
    def summary(self) -> AsyncSummary:
        return AsyncSummary(self._raw_client, self._server, self._auth)

    @cached_property
    def tc_gplayer(self) -> AsyncTcGplayer:
        return AsyncTcGplayer(self._raw_client, self._server, self._auth)

    async def aclose(self) -> None:
        await self._raw_client.http_client.aclose()

    async def __aenter__(self) -> Self:
        return self

    async def __aexit__(
        self, exc_type: type[BaseException] | None, exc: BaseException | None, exc_tb: TracebackType | None
    ) -> None:
        await self.aclose()


AsyncClient = AsyncCompSniperClient
