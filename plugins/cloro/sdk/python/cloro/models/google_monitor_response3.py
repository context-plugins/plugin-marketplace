from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .result13 import Result13, Result13Dict


class GoogleMonitorResponse3(SdkBaseModel):
    success: bool
    result: Result13
    """Google search results data"""


class GoogleMonitorResponse3Dict(TypedDict):
    success: bool
    result: Result13Dict
