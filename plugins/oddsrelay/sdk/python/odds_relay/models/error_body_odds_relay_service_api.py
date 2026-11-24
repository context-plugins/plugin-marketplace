from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .error5_odds_relay_service_api import Error5OddsRelayServiceApi, Error5OddsRelayServiceApiDict


class ErrorBodyOddsRelayServiceApi(SdkBaseModel):
    """Every JSON 4xx and 5xx this API writes."""

    error: Error5OddsRelayServiceApi


class ErrorBodyOddsRelayServiceApiDict(TypedDict):
    error: Error5OddsRelayServiceApiDict
