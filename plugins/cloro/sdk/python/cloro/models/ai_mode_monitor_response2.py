from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .result10 import Result10, Result10Dict


class AiModeMonitorResponse2(SdkBaseModel):
    success: bool
    result: Result10
    """AI Mode response data"""


class AiModeMonitorResponse2Dict(TypedDict):
    success: bool
    result: Result10Dict
