from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .item2 import Item2, Item2Dict


class InsightsWorkflowMetrics(SdkBaseModel):
    items: Optional[list[Item2]] = UNSET
    """List of workflow metric summaries"""

    next_page_token: Optional[str] = UNSET
    """Token for retrieving the next page"""


class InsightsWorkflowMetricsDict(TypedDict):
    items: NotRequired[list[Item2Dict]]
    next_page_token: NotRequired[str]
