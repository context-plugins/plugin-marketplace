from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .error_odds_relay_discovery_api import ErrorOddsRelayDiscoveryApi, ErrorOddsRelayDiscoveryApiDict


class Error500ErrorOddsRelayDiscoveryApi(SdkBaseModel):
    error: ErrorOddsRelayDiscoveryApi


class Error500ErrorOddsRelayDiscoveryApiDict(TypedDict):
    error: ErrorOddsRelayDiscoveryApiDict
