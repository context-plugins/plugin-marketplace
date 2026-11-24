from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .item import Item, ItemDict


class InsightsJobMetrics(SdkBaseModel):
    items: Optional[list[Item]] = UNSET
    """List of job metric summaries"""

    next_page_token: Optional[str] = UNSET
    """Token for retrieving the next page"""


class InsightsJobMetricsDict(TypedDict):
    items: NotRequired[list[ItemDict]]
    next_page_token: NotRequired[str]
