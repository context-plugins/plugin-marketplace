from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .result4 import Result4, Result4Dict


class GrokMonitorResponse(SdkBaseModel):
    success: bool
    result: Result4
    """Grok response data"""


class GrokMonitorResponseDict(TypedDict):
    success: bool
    result: Result4Dict
