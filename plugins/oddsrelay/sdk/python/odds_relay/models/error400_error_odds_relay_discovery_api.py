from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .error6_odds_relay_discovery_api import Error6OddsRelayDiscoveryApi, Error6OddsRelayDiscoveryApiDict


class Error400ErrorOddsRelayDiscoveryApi(SdkBaseModel):
    error: Error6OddsRelayDiscoveryApi


class Error400ErrorOddsRelayDiscoveryApiDict(TypedDict):
    error: Error6OddsRelayDiscoveryApiDict
