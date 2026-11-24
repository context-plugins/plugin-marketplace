from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .result14 import Result14, Result14Dict


class BingAiModeMonitorResponse(SdkBaseModel):
    success: bool
    result: Result14
    """Bing AI Mode response data"""


class BingAiModeMonitorResponseDict(TypedDict):
    success: bool
    result: Result14Dict
