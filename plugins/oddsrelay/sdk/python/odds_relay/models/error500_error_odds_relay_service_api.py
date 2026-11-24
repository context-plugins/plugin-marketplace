from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .error4_odds_relay_service_api import Error4OddsRelayServiceApi, Error4OddsRelayServiceApiDict


class Error500ErrorOddsRelayServiceApi(SdkBaseModel):
    error: Error4OddsRelayServiceApi


class Error500ErrorOddsRelayServiceApiDict(TypedDict):
    error: Error4OddsRelayServiceApiDict
