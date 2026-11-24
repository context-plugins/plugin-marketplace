from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .result8 import Result8, Result8Dict


class GoogleProductResponse2(SdkBaseModel):
    success: bool
    result: Result8


class GoogleProductResponse2Dict(TypedDict):
    success: bool
    result: Result8Dict
