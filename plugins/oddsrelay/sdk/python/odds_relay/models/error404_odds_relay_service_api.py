from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .error import Error, ErrorDict


class Error404OddsRelayServiceApi(SdkBaseModel):
    error: Error


class Error404OddsRelayServiceApiDict(TypedDict):
    error: ErrorDict
