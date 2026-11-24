from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .result6 import Result6, Result6Dict


class ChatGptMonitorResponse(SdkBaseModel):
    success: bool
    result: Result6
    """ChatGPT's response data"""


class ChatGptMonitorResponseDict(TypedDict):
    success: bool
    result: Result6Dict
