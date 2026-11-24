from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .result11 import Result11, Result11Dict


class GoogleNewsMonitorResponse2(SdkBaseModel):
    success: bool
    result: Result11
    """Google News results data"""


class GoogleNewsMonitorResponse2Dict(TypedDict):
    success: bool
    result: Result11Dict
