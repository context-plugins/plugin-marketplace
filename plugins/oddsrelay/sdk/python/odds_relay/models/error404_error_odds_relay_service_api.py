from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .error import Error, ErrorDict


class Error404ErrorOddsRelayServiceApi(SdkBaseModel):
    error: Error


class Error404ErrorOddsRelayServiceApiDict(TypedDict):
    error: ErrorDict
