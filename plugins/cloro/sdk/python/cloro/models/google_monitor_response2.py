from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .result9 import Result9, Result9Dict


class GoogleMonitorResponse2(SdkBaseModel):
    success: bool
    result: Result9
    """Google search results data"""


class GoogleMonitorResponse2Dict(TypedDict):
    success: bool
    result: Result9Dict
