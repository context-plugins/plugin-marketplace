from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .result3 import Result3, Result3Dict


class GoogleMonitorResponse(SdkBaseModel):
    success: bool
    result: Result3
    """Google search results data"""


class GoogleMonitorResponseDict(TypedDict):
    success: bool
    result: Result3Dict
