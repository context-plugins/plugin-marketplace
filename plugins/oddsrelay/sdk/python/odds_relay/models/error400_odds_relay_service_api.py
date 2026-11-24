from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .error3_odds_relay_service_api import Error3OddsRelayServiceApi, Error3OddsRelayServiceApiDict


class Error400OddsRelayServiceApi(SdkBaseModel):
    error: Error3OddsRelayServiceApi


class Error400OddsRelayServiceApiDict(TypedDict):
    error: Error3OddsRelayServiceApiDict
