from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .result15 import Result15, Result15Dict


class AiModeMonitorResponse3(SdkBaseModel):
    success: bool
    result: Result15
    """AI Mode response data"""


class AiModeMonitorResponse3Dict(TypedDict):
    success: bool
    result: Result15Dict
