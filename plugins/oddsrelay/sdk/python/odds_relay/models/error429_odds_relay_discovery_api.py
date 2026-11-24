from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .error1_odds_relay_discovery_api import Error1OddsRelayDiscoveryApi, Error1OddsRelayDiscoveryApiDict


class Error429OddsRelayDiscoveryApi(SdkBaseModel):
    error: Error1OddsRelayDiscoveryApi


class Error429OddsRelayDiscoveryApiDict(TypedDict):
    error: Error1OddsRelayDiscoveryApiDict
