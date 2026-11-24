from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .result2 import Result2, Result2Dict


class PerplexityMonitorResponse(SdkBaseModel):
    success: bool
    result: Result2
    """Perplexity response data"""


class PerplexityMonitorResponseDict(TypedDict):
    success: bool
    result: Result2Dict
