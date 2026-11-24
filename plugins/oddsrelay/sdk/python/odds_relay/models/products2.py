from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .bookmaker_odds_relay_service_api import BookmakerOddsRelayServiceApi, BookmakerOddsRelayServiceApiDict
from .exchange import Exchange, ExchangeDict


class Products2(SdkBaseModel):
    bookmakers: list[BookmakerOddsRelayServiceApi]
    exchanges: list[Exchange]


class Products2Dict(TypedDict):
    bookmakers: list[BookmakerOddsRelayServiceApiDict]
    exchanges: list[ExchangeDict]
