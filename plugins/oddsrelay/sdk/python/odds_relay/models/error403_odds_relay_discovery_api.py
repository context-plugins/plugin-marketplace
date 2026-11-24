from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .error2_odds_relay_discovery_api import Error2OddsRelayDiscoveryApi, Error2OddsRelayDiscoveryApiDict


class Error403OddsRelayDiscoveryApi(SdkBaseModel):
    error: Error2OddsRelayDiscoveryApi


class Error403OddsRelayDiscoveryApiDict(TypedDict):
    error: Error2OddsRelayDiscoveryApiDict
