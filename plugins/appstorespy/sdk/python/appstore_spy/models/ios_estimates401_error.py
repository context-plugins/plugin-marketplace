from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class IosEstimates401Error(SdkBaseModel):
    message: str
    code: int


class IosEstimates401ErrorDict(TypedDict):
    message: str
    code: int
