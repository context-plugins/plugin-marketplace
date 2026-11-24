from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .result7 import Result7, Result7Dict


class GoogleNewsMonitorResponse(SdkBaseModel):
    success: bool
    result: Result7
    """Google News results data"""


class GoogleNewsMonitorResponseDict(TypedDict):
    success: bool
    result: Result7Dict
