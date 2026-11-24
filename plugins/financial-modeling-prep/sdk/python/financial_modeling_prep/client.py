from __future__ import annotations

from collections.abc import Sequence
from functools import cached_property
from types import TracebackType

from typing_extensions import Self

from .apis.balance_sheet_statement import BalanceSheetStatement
from .apis.cash_flow_statement import CashFlowStatement
from .apis.historical_price_full import HistoricalPriceFull
from .apis.income_statement_api import IncomeStatementApi
from .apis.insider_trading import InsiderTrading
from .apis.profile import Profile
from .apis.quote_api import QuoteApi
from .apis.ratios import Ratios
from .apis.search import Search
from .apis.stock import Stock
from .auth import AuthSchemes
from .base_client import DEFAULT_TIMEOUT, BaseFinancialModelingPrepClient
from .core import (
    OPERATING_SYSTEM,
    PYTHON_RUNTIME,
    ApiKeyQueryScheme,
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


class FinancialModelingPrepClient(BaseFinancialModelingPrepClient[RawClient]):
    def __init__(
        self,
        *,
        base_url: str | None = None,
        timeout: float = DEFAULT_TIMEOUT,
        retry_options: int | RetryOptionsOrDict | None = None,
        logging_options: LoggingOptionsOrDict | None = None,
        hooks: Sequence[SdkHook] | SdkHooksDict | None = None,
        custom_http_client: HttpClient | None = None,
        api_key_query: str | None = None,
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
                param[str]("User-Agent", "FinancialModelingPrepClient/3.0.0 Python"),
                param[str]("X-APIMatic-Lang", "Python"),
                param[str]("X-APIMatic-Package-Version", "3.0.0"),
                param[str]("X-APIMatic-Gen-Version", "4.0.0"),
                param[str]("X-APIMatic-OS", OPERATING_SYSTEM),
                param[str]("X-APIMatic-Runtime", PYTHON_RUNTIME),
            ],
        )
        self._auth = AuthSchemes(
            api_key_query=ApiKeyQueryScheme("apikey", api_key_query) if api_key_query is not None else no_auth
        )

    @cached_property
    def balance_sheet_statement(self) -> BalanceSheetStatement:
        return BalanceSheetStatement(self._raw_client, self._server, self._auth)

    @cached_property
    def cash_flow_statement(self) -> CashFlowStatement:
        return CashFlowStatement(self._raw_client, self._server, self._auth)

    @cached_property
    def historical_price_full(self) -> HistoricalPriceFull:
        return HistoricalPriceFull(self._raw_client, self._server, self._auth)

    @cached_property
    def income_statement_api(self) -> IncomeStatementApi:
        return IncomeStatementApi(self._raw_client, self._server, self._auth)

    @cached_property
    def insider_trading(self) -> InsiderTrading:
        return InsiderTrading(self._raw_client, self._server, self._auth)

    @cached_property
    def profile(self) -> Profile:
        return Profile(self._raw_client, self._server, self._auth)

    @cached_property
    def quote_api(self) -> QuoteApi:
        return QuoteApi(self._raw_client, self._server, self._auth)

    @cached_property
    def ratios(self) -> Ratios:
        return Ratios(self._raw_client, self._server, self._auth)

    @cached_property
    def search(self) -> Search:
        return Search(self._raw_client, self._server, self._auth)

    @cached_property
    def stock(self) -> Stock:
        return Stock(self._raw_client, self._server, self._auth)

    def close(self) -> None:
        self._raw_client.http_client.close()

    def __enter__(self) -> Self:
        return self

    def __exit__(
        self, exc_type: type[BaseException] | None, exc: BaseException | None, exc_tb: TracebackType | None
    ) -> None:
        self.close()


Client = FinancialModelingPrepClient
