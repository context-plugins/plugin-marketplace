from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .result8 import Result8, Result8Dict


class GoogleProductResponse(SdkBaseModel):
    success: bool
    result: Result8


class GoogleProductResponseDict(TypedDict):
    success: bool
    result: Result8Dict
