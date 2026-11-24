from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .unions.result111 import Result111, Result111Dict


class ChatGptMonitorResponse2(SdkBaseModel):
    success: bool
    result: Result111
    """ChatGPT's response data. An array, with one response for each prompt in order, when ``prompt`` is an array."""


class ChatGptMonitorResponse2Dict(TypedDict):
    success: bool
    result: Result111Dict
