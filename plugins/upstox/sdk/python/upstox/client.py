from __future__ import annotations

from collections.abc import Sequence
from functools import cached_property
from types import TracebackType

from typing_extensions import Self

from .apis.charge import Charge
from .apis.events_controller_v2 import EventsControllerV2
from .apis.expired_instrument import ExpiredInstrument
from .apis.fundamentals import Fundamentals
from .apis.history import History
from .apis.history_v3 import HistoryV3
from .apis.instruments import Instruments
from .apis.ipo import Ipo
from .apis.login import Login
from .apis.market_holidays_and_timings import MarketHolidaysAndTimings
from .apis.market_quote import MarketQuote
from .apis.market_quote_v3 import MarketQuoteV3
from .apis.mutual_fund import MutualFund
from .apis.news import News
from .apis.options import Options
from .apis.order import Order
from .apis.payments import Payments
from .apis.portfolio import Portfolio
from .apis.post_trade import PostTrade
from .apis.trade_profit_and_loss import TradeProfitAndLoss
from .apis.user import User
from .apis.websocket import Websocket
from .auth import AuthSchemes, Oauth2Scope
from .base_client import DEFAULT_TIMEOUT, BaseUpstoxClient
from .core import (
    OPERATING_SYSTEM,
    PYTHON_RUNTIME,
    AuthorizationCodeCredentials,
    AuthorizationCodeCredentialsOrDict,
    AuthorizationCodeTokenSource,
    HttpClient,
    Httpx2Client,
    LoggingOptionsOrDict,
    OAuth2RefreshableScheme,
    RawClient,
    RefreshableTokenSource,
    RetryOptionsOrDict,
    SdkHook,
    SdkHooksDict,
    client_secret_basic,
    no_auth,
    param,
)


class UpstoxClient(BaseUpstoxClient[RawClient]):
    def __init__(
        self,
        *,
        base_url: str | None = None,
        timeout: float = DEFAULT_TIMEOUT,
        retry_options: int | RetryOptionsOrDict | None = None,
        logging_options: LoggingOptionsOrDict | None = None,
        hooks: Sequence[SdkHook] | SdkHooksDict | None = None,
        custom_http_client: HttpClient | None = None,
        oauth2: AuthorizationCodeCredentialsOrDict[Oauth2Scope] | None = None,
        oauth2_token_source: RefreshableTokenSource[AuthorizationCodeCredentials[Oauth2Scope]] | None = None,
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
                param[str]("User-Agent", "UpstoxClient/v0 Python"),
                param[str]("X-APIMatic-Lang", "Python"),
                param[str]("X-APIMatic-Package-Version", "v0"),
                param[str]("X-APIMatic-Gen-Version", "4.0.0"),
                param[str]("X-APIMatic-OS", OPERATING_SYSTEM),
                param[str]("X-APIMatic-Runtime", PYTHON_RUNTIME),
            ],
        )
        self._auth = AuthSchemes(
            oauth2=(
                OAuth2RefreshableScheme(
                    credentials=AuthorizationCodeCredentials[Oauth2Scope].coerce(oauth2),
                    source=(
                        oauth2_token_source
                        if oauth2_token_source is not None
                        else AuthorizationCodeTokenSource[Oauth2Scope](
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
    def charge(self) -> Charge:
        return Charge(self._raw_client, self._server, self._auth)

    @cached_property
    def expired_instrument(self) -> ExpiredInstrument:
        return ExpiredInstrument(self._raw_client, self._server, self._auth)

    @cached_property
    def fundamentals(self) -> Fundamentals:
        return Fundamentals(self._raw_client, self._server, self._auth)

    @cached_property
    def history(self) -> History:
        return History(self._raw_client, self._server)

    @cached_property
    def history_v3(self) -> HistoryV3:
        return HistoryV3(self._raw_client, self._server)

    @cached_property
    def ipo(self) -> Ipo:
        return Ipo(self._raw_client, self._server, self._auth)

    @cached_property
    def instruments(self) -> Instruments:
        return Instruments(self._raw_client, self._server, self._auth)

    @cached_property
    def login(self) -> Login:
        return Login(self._raw_client, self._server, self._auth)

    @cached_property
    def market_holidays_and_timings(self) -> MarketHolidaysAndTimings:
        return MarketHolidaysAndTimings(self._raw_client, self._server, self._auth)

    @cached_property
    def market_quote(self) -> MarketQuote:
        return MarketQuote(self._raw_client, self._server, self._auth)

    @cached_property
    def market_quote_v3(self) -> MarketQuoteV3:
        return MarketQuoteV3(self._raw_client, self._server, self._auth)

    @cached_property
    def mutual_fund(self) -> MutualFund:
        return MutualFund(self._raw_client, self._server, self._auth)

    @cached_property
    def news(self) -> News:
        return News(self._raw_client, self._server, self._auth)

    @cached_property
    def options(self) -> Options:
        return Options(self._raw_client, self._server, self._auth)

    @cached_property
    def order(self) -> Order:
        return Order(self._raw_client, self._server, self._auth)

    @cached_property
    def payments(self) -> Payments:
        return Payments(self._raw_client, self._server, self._auth)

    @cached_property
    def portfolio(self) -> Portfolio:
        return Portfolio(self._raw_client, self._server, self._auth)

    @cached_property
    def post_trade(self) -> PostTrade:
        return PostTrade(self._raw_client, self._server, self._auth)

    @cached_property
    def trade_profit_and_loss(self) -> TradeProfitAndLoss:
        return TradeProfitAndLoss(self._raw_client, self._server, self._auth)

    @cached_property
    def user(self) -> User:
        return User(self._raw_client, self._server, self._auth)

    @cached_property
    def websocket(self) -> Websocket:
        return Websocket(self._raw_client, self._server, self._auth)

    @cached_property
    def events_controller_v2(self) -> EventsControllerV2:
        return EventsControllerV2(self._raw_client, self._server)

    def close(self) -> None:
        self._raw_client.http_client.close()

    def __enter__(self) -> Self:
        return self

    def __exit__(
        self, exc_type: type[BaseException] | None, exc: BaseException | None, exc_tb: TracebackType | None
    ) -> None:
        self.close()


Client = UpstoxClient
