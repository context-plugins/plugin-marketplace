from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .error7_odds_relay_service_api import Error7OddsRelayServiceApi, Error7OddsRelayServiceApiDict


class Error401OddsRelayServiceApi(SdkBaseModel):
    error: Error7OddsRelayServiceApi


class Error401OddsRelayServiceApiDict(TypedDict):
    error: Error7OddsRelayServiceApiDict
