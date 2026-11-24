from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .error4_odds_relay_service_api import Error4OddsRelayServiceApi, Error4OddsRelayServiceApiDict


class Error500OddsRelayServiceApi(SdkBaseModel):
    error: Error4OddsRelayServiceApi


class Error500OddsRelayServiceApiDict(TypedDict):
    error: Error4OddsRelayServiceApiDict
