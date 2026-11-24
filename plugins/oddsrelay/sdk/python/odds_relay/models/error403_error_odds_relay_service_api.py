from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .error1 import Error1, Error1Dict


class Error403ErrorOddsRelayServiceApi(SdkBaseModel):
    error: Error1


class Error403ErrorOddsRelayServiceApiDict(TypedDict):
    error: Error1Dict
