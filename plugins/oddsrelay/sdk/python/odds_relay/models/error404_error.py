from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .error4_odds_relay_discovery_api import Error4OddsRelayDiscoveryApi, Error4OddsRelayDiscoveryApiDict


class Error404Error(SdkBaseModel):
    error: Error4OddsRelayDiscoveryApi


class Error404ErrorDict(TypedDict):
    error: Error4OddsRelayDiscoveryApiDict
