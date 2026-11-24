from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .item1 import Item1, Item1Dict


class InsightsWorkflowRuns(SdkBaseModel):
    items: Optional[list[Item1]] = UNSET
    """List of workflow runs"""

    next_page_token: Optional[str] = UNSET
    """Token for retrieving the next page"""


class InsightsWorkflowRunsDict(TypedDict):
    items: NotRequired[list[Item1Dict]]
    next_page_token: NotRequired[str]
