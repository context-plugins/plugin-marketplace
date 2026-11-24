from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .result import Result, ResultDict


class CopilotMonitorResponse(SdkBaseModel):
    success: bool
    result: Result
    """Copilot response data"""


class CopilotMonitorResponseDict(TypedDict):
    success: bool
    result: ResultDict
