from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .error6 import Error6, Error6Dict


class Error429OddsRelayServiceApi(SdkBaseModel):
    error: Error6


class Error429OddsRelayServiceApiDict(TypedDict):
    error: Error6Dict
