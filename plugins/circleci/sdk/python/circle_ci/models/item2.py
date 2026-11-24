from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, RFC3339DateTime, SdkBaseModel
from .metrics1 import Metrics1, Metrics1Dict


class Item2(SdkBaseModel):
    name: Optional[str] = UNSET
    """The workflow name"""

    metrics: Optional[Metrics1] = UNSET
    """Workflow metrics"""

    window_start: Optional[RFC3339DateTime] = UNSET
    """Start of the reporting window"""

    window_end: Optional[RFC3339DateTime] = UNSET
    """End of the reporting window"""


class Item2Dict(TypedDict):
    name: NotRequired[str]
    metrics: NotRequired[Metrics1Dict]
    window_start: NotRequired[RFC3339DateTime]
    window_end: NotRequired[RFC3339DateTime]
