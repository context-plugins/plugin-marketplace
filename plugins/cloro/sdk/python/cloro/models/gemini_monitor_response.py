from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .result1 import Result1, Result1Dict


class GeminiMonitorResponse(SdkBaseModel):
    success: bool
    result: Result1
    """Gemini response data"""


class GeminiMonitorResponseDict(TypedDict):
    success: bool
    result: Result1Dict
