from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class Fees(SdkBaseModel):
    cleaning: float
    service: float
    taxes: float


class FeesDict(TypedDict):
    cleaning: float
    service: float
    taxes: float
