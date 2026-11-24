from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .metrics import Metrics, MetricsDict


class Item(SdkBaseModel):
    name: Optional[str] = UNSET
    """The job name"""

    metrics: Optional[Metrics] = UNSET
    """Job metrics"""


class ItemDict(TypedDict):
    name: NotRequired[str]
    metrics: NotRequired[MetricsDict]
