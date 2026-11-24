from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .error2 import Error2, Error2Dict


class Error503ErrorOddsRelayServiceApi(SdkBaseModel):
    error: Error2


class Error503ErrorOddsRelayServiceApiDict(TypedDict):
    error: Error2Dict
