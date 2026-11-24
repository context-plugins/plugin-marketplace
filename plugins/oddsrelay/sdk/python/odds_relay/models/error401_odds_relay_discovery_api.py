from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .error3_odds_relay_discovery_api import Error3OddsRelayDiscoveryApi, Error3OddsRelayDiscoveryApiDict


class Error401OddsRelayDiscoveryApi(SdkBaseModel):
    error: Error3OddsRelayDiscoveryApi


class Error401OddsRelayDiscoveryApiDict(TypedDict):
    error: Error3OddsRelayDiscoveryApiDict
