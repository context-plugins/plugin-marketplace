from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .error5_odds_relay_discovery_api import Error5OddsRelayDiscoveryApi, Error5OddsRelayDiscoveryApiDict


class Error503ErrorOddsRelayDiscoveryApi(SdkBaseModel):
    error: Error5OddsRelayDiscoveryApi


class Error503ErrorOddsRelayDiscoveryApiDict(TypedDict):
    error: Error5OddsRelayDiscoveryApiDict
