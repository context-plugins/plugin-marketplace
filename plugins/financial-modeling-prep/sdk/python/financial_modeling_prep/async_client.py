from __future__ import annotations

from collections.abc import Sequence
from functools import cached_property
from types import TracebackType

from typing_extensions import Self

from .apis.balance_sheet_statement import AsyncBalanceSheetStatement
from .apis.cash_flow_statement import AsyncCashFlowStatement
from .apis.historical_price_full import AsyncHistoricalPriceFull
from .apis.income_statement_api import AsyncIncomeStatementApi
from .apis.insider_trading import AsyncInsiderTrading
from .apis.profile import AsyncProfile
from .apis.quote_api import AsyncQuoteApi
from .apis.ratios import AsyncRatios
from .apis.search import AsyncSearch
from .apis.stock import AsyncStock
from .auth import AsyncAuthSchemes
from .base_client import DEFAULT_TIMEOUT, BaseFinancialModelingPrepClient
from .core import (
    OPERATING_SYSTEM,
    PYTHON_RUNTIME,
    ApiKeyQueryScheme,
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


class AsyncFinancialModelingPrepClient(BaseFinancialModelingPrepClient[AsyncRawClient]):
    def __init__(
        self,
        *,
        base_url: str | None = None,
        timeout: float = DEFAULT_TIMEOUT,
        retry_options: int | RetryOptionsOrDict | None = None,
        logging_options: LoggingOptionsOrDict | None = None,
        hooks: Sequence[AsyncSdkHook] | AsyncSdkHooksDict | None = None,
        custom_async_http_client: AsyncHttpClient | None = None,
        api_key_query: str | None = None,
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
                param[str]("User-Agent", "FinancialModelingPrepClient/3.0.0 Python"),
                param[str]("X-APIMatic-Lang", "Python"),
                param[str]("X-APIMatic-Package-Version", "3.0.0"),
                param[str]("X-APIMatic-Gen-Version", "4.0.0"),
                param[str]("X-APIMatic-OS", OPERATING_SYSTEM),
                param[str]("X-APIMatic-Runtime", PYTHON_RUNTIME),
            ],
        )
        self._auth = AsyncAuthSchemes(
            api_key_query=ApiKeyQueryScheme("apikey", api_key_query) if api_key_query is not None else no_auth
        )

    @cached_property
    def balance_sheet_statement(self) -> AsyncBalanceSheetStatement:
        return AsyncBalanceSheetStatement(self._raw_client, self._server, self._auth)

    @cached_property
    def cash_flow_statement(self) -> AsyncCashFlowStatement:
        return AsyncCashFlowStatement(self._raw_client, self._server, self._auth)

    @cached_property
    def historical_price_full(self) -> AsyncHistoricalPriceFull:
        return AsyncHistoricalPriceFull(self._raw_client, self._server, self._auth)

    @cached_property
    def income_statement_api(self) -> AsyncIncomeStatementApi:
        return AsyncIncomeStatementApi(self._raw_client, self._server, self._auth)

    @cached_property
    def insider_trading(self) -> AsyncInsiderTrading:
        return AsyncInsiderTrading(self._raw_client, self._server, self._auth)

    @cached_property
    def profile(self) -> AsyncProfile:
        return AsyncProfile(self._raw_client, self._server, self._auth)

    @cached_property
    def quote_api(self) -> AsyncQuoteApi:
        return AsyncQuoteApi(self._raw_client, self._server, self._auth)

    @cached_property
    def ratios(self) -> AsyncRatios:
        return AsyncRatios(self._raw_client, self._server, self._auth)

    @cached_property
    def search(self) -> AsyncSearch:
        return AsyncSearch(self._raw_client, self._server, self._auth)

    @cached_property
    def stock(self) -> AsyncStock:
        return AsyncStock(self._raw_client, self._server, self._auth)

    async def aclose(self) -> None:
        await self._raw_client.http_client.aclose()

    async def __aenter__(self) -> Self:
        return self

    async def __aexit__(
        self, exc_type: type[BaseException] | None, exc: BaseException | None, exc_tb: TracebackType | None
    ) -> None:
        await self.aclose()


AsyncClient = AsyncFinancialModelingPrepClient
