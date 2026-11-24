from __future__ import annotations

from collections.abc import Sequence
from functools import cached_property
from types import TracebackType

from typing_extensions import Self

from .apis.charge import AsyncCharge
from .apis.events_controller_v2 import AsyncEventsControllerV2
from .apis.expired_instrument import AsyncExpiredInstrument
from .apis.fundamentals import AsyncFundamentals
from .apis.history import AsyncHistory
from .apis.history_v3 import AsyncHistoryV3
from .apis.instruments import AsyncInstruments
from .apis.ipo import AsyncIpo
from .apis.login import AsyncLogin
from .apis.market_holidays_and_timings import AsyncMarketHolidaysAndTimings
from .apis.market_quote import AsyncMarketQuote
from .apis.market_quote_v3 import AsyncMarketQuoteV3
from .apis.mutual_fund import AsyncMutualFund
from .apis.news import AsyncNews
from .apis.options import AsyncOptions
from .apis.order import AsyncOrder
from .apis.payments import AsyncPayments
from .apis.portfolio import AsyncPortfolio
from .apis.post_trade import AsyncPostTrade
from .apis.trade_profit_and_loss import AsyncTradeProfitAndLoss
from .apis.user import AsyncUser
from .apis.websocket import AsyncWebsocket
from .auth import AsyncAuthSchemes, Oauth2Scope
from .base_client import DEFAULT_TIMEOUT, BaseUpstoxClient
from .core import (
    OPERATING_SYSTEM,
    PYTHON_RUNTIME,
    AsyncAuthorizationCodeCredentials,
    AsyncAuthorizationCodeCredentialsOrDict,
    AsyncAuthorizationCodeTokenSource,
    AsyncHttpClient,
    AsyncHttpx2Client,
    AsyncOAuth2RefreshableScheme,
    AsyncRawClient,
    AsyncRefreshableTokenSource,
    AsyncSdkHook,
    AsyncSdkHooksDict,
    LoggingOptionsOrDict,
    RetryOptionsOrDict,
    client_secret_basic,
    no_auth,
    param,
)


class AsyncUpstoxClient(BaseUpstoxClient[AsyncRawClient]):
    def __init__(
        self,
        *,
        base_url: str | None = None,
        timeout: float = DEFAULT_TIMEOUT,
        retry_options: int | RetryOptionsOrDict | None = None,
        logging_options: LoggingOptionsOrDict | None = None,
        hooks: Sequence[AsyncSdkHook] | AsyncSdkHooksDict | None = None,
        custom_async_http_client: AsyncHttpClient | None = None,
        oauth2: AsyncAuthorizationCodeCredentialsOrDict[Oauth2Scope] | None = None,
        oauth2_token_source: AsyncRefreshableTokenSource[AsyncAuthorizationCodeCredentials[Oauth2Scope]] | None = None,
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
                param[str]("User-Agent", "UpstoxClient/v0 Python"),
                param[str]("X-APIMatic-Lang", "Python"),
                param[str]("X-APIMatic-Package-Version", "v0"),
                param[str]("X-APIMatic-Gen-Version", "4.0.0"),
                param[str]("X-APIMatic-OS", OPERATING_SYSTEM),
                param[str]("X-APIMatic-Runtime", PYTHON_RUNTIME),
            ],
        )
        self._auth = AsyncAuthSchemes(
            oauth2=(
                AsyncOAuth2RefreshableScheme(
                    credentials=AsyncAuthorizationCodeCredentials[Oauth2Scope].coerce(oauth2),
                    source=(
                        oauth2_token_source
                        if oauth2_token_source is not None
                        else AsyncAuthorizationCodeTokenSource[Oauth2Scope](
                            client=self._raw_client,
                            authorization_url=self._server.default("/v2/login/authorization/dialog"),
                            token_url=self._server.default("/v2/login/authorization/token"),
                            refresh_url=self._server.default("/v2/login/authorization/token"),
                            placement=client_secret_basic,
                        )
                    ),
                )
                if oauth2 is not None
                else no_auth
            ),
        )

    @cached_property
    def charge(self) -> AsyncCharge:
        return AsyncCharge(self._raw_client, self._server, self._auth)

    @cached_property
    def expired_instrument(self) -> AsyncExpiredInstrument:
        return AsyncExpiredInstrument(self._raw_client, self._server, self._auth)

    @cached_property
    def fundamentals(self) -> AsyncFundamentals:
        return AsyncFundamentals(self._raw_client, self._server, self._auth)

    @cached_property
    def history(self) -> AsyncHistory:
        return AsyncHistory(self._raw_client, self._server)

    @cached_property
    def history_v3(self) -> AsyncHistoryV3:
        return AsyncHistoryV3(self._raw_client, self._server)

    @cached_property
    def ipo(self) -> AsyncIpo:
        return AsyncIpo(self._raw_client, self._server, self._auth)

    @cached_property
    def instruments(self) -> AsyncInstruments:
        return AsyncInstruments(self._raw_client, self._server, self._auth)

    @cached_property
    def login(self) -> AsyncLogin:
        return AsyncLogin(self._raw_client, self._server, self._auth)

    @cached_property
    def market_holidays_and_timings(self) -> AsyncMarketHolidaysAndTimings:
        return AsyncMarketHolidaysAndTimings(self._raw_client, self._server, self._auth)

    @cached_property
    def market_quote(self) -> AsyncMarketQuote:
        return AsyncMarketQuote(self._raw_client, self._server, self._auth)

    @cached_property
    def market_quote_v3(self) -> AsyncMarketQuoteV3:
        return AsyncMarketQuoteV3(self._raw_client, self._server, self._auth)

    @cached_property
    def mutual_fund(self) -> AsyncMutualFund:
        return AsyncMutualFund(self._raw_client, self._server, self._auth)

    @cached_property
    def news(self) -> AsyncNews:
        return AsyncNews(self._raw_client, self._server, self._auth)

    @cached_property
    def options(self) -> AsyncOptions:
        return AsyncOptions(self._raw_client, self._server, self._auth)

    @cached_property
    def order(self) -> AsyncOrder:
        return AsyncOrder(self._raw_client, self._server, self._auth)

    @cached_property
    def payments(self) -> AsyncPayments:
        return AsyncPayments(self._raw_client, self._server, self._auth)

    @cached_property
    def portfolio(self) -> AsyncPortfolio:
        return AsyncPortfolio(self._raw_client, self._server, self._auth)

    @cached_property
    def post_trade(self) -> AsyncPostTrade:
        return AsyncPostTrade(self._raw_client, self._server, self._auth)

    @cached_property
    def trade_profit_and_loss(self) -> AsyncTradeProfitAndLoss:
        return AsyncTradeProfitAndLoss(self._raw_client, self._server, self._auth)

    @cached_property
    def user(self) -> AsyncUser:
        return AsyncUser(self._raw_client, self._server, self._auth)

    @cached_property
    def websocket(self) -> AsyncWebsocket:
        return AsyncWebsocket(self._raw_client, self._server, self._auth)

    @cached_property
    def events_controller_v2(self) -> AsyncEventsControllerV2:
        return AsyncEventsControllerV2(self._raw_client, self._server)

    async def aclose(self) -> None:
        await self._raw_client.http_client.aclose()

    async def __aenter__(self) -> Self:
        return self

    async def __aexit__(
        self, exc_type: type[BaseException] | None, exc: BaseException | None, exc_tb: TracebackType | None
    ) -> None:
        await self.aclose()


AsyncClient = AsyncUpstoxClient
