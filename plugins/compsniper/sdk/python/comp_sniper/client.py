from __future__ import annotations

from collections.abc import Sequence
from functools import cached_property
from types import TracebackType

from typing_extensions import Self

from .apis.account import Account
from .apis.best_offer_prices import BestOfferPrices
from .apis.bulk_search import BulkSearch
from .apis.cards import Cards
from .apis.depop import Depop
from .apis.grailed import Grailed
from .apis.mercari import Mercari
from .apis.poshmark import Poshmark
from .apis.psa import Psa
from .apis.scrape import Scrape
from .apis.shipping_rates import ShippingRates
from .apis.sold_history import SoldHistory
from .apis.summary import Summary
from .apis.tc_gplayer import TcGplayer
from .auth import AuthSchemes
from .base_client import DEFAULT_TIMEOUT, BaseCompSniperClient
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


class CompSniperClient(BaseCompSniperClient[RawClient]):
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
                param[str]("User-Agent", "CompSniperClient/2.3.0 Python"),
                param[str]("X-APIMatic-Lang", "Python"),
                param[str]("X-APIMatic-Package-Version", "2.3.0"),
                param[str]("X-APIMatic-Gen-Version", "4.0.0"),
                param[str]("X-APIMatic-OS", OPERATING_SYSTEM),
                param[str]("X-APIMatic-Runtime", PYTHON_RUNTIME),
            ],
        )
        self._auth = AuthSchemes(bearer_auth=BearerAuthScheme(bearer_auth) if bearer_auth is not None else no_auth)

    @cached_property
    def account(self) -> Account:
        return Account(self._raw_client, self._server, self._auth)

    @cached_property
    def best_offer_prices(self) -> BestOfferPrices:
        return BestOfferPrices(self._raw_client, self._server, self._auth)

    @cached_property
    def bulk_search(self) -> BulkSearch:
        return BulkSearch(self._raw_client, self._server, self._auth)

    @cached_property
    def cards(self) -> Cards:
        return Cards(self._raw_client, self._server, self._auth)

    @cached_property
    def depop(self) -> Depop:
        return Depop(self._raw_client, self._server, self._auth)

    @cached_property
    def grailed(self) -> Grailed:
        return Grailed(self._raw_client, self._server, self._auth)

    @cached_property
    def mercari(self) -> Mercari:
        return Mercari(self._raw_client, self._server, self._auth)

    @cached_property
    def psa(self) -> Psa:
        return Psa(self._raw_client, self._server, self._auth)

    @cached_property
    def poshmark(self) -> Poshmark:
        return Poshmark(self._raw_client, self._server, self._auth)

    @cached_property
    def scrape(self) -> Scrape:
        return Scrape(self._raw_client, self._server, self._auth)

    @cached_property
    def shipping_rates(self) -> ShippingRates:
        return ShippingRates(self._raw_client, self._server, self._auth)

    @cached_property
    def sold_history(self) -> SoldHistory:
        return SoldHistory(self._raw_client, self._server, self._auth)

    @cached_property
    def summary(self) -> Summary:
        return Summary(self._raw_client, self._server, self._auth)

    @cached_property
    def tc_gplayer(self) -> TcGplayer:
        return TcGplayer(self._raw_client, self._server, self._auth)

    def close(self) -> None:
        self._raw_client.http_client.close()

    def __enter__(self) -> Self:
        return self

    def __exit__(
        self, exc_type: type[BaseException] | None, exc: BaseException | None, exc_tb: TracebackType | None
    ) -> None:
        self.close()


Client = CompSniperClient
