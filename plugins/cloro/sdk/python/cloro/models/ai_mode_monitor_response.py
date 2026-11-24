from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .result5 import Result5, Result5Dict


class AiModeMonitorResponse(SdkBaseModel):
    success: bool
    result: Result5
    """AI Mode response data"""


class AiModeMonitorResponseDict(TypedDict):
    success: bool
    result: Result5Dict
