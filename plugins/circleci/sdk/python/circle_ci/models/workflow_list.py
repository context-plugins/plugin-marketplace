from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .workflow import Workflow, WorkflowDict


class WorkflowList(SdkBaseModel):
    items: Optional[list[Workflow]] = UNSET
    """List of workflows"""

    next_page_token: Optional[str] = UNSET
    """Token for retrieving the next page"""


class WorkflowListDict(TypedDict):
    items: NotRequired[list[WorkflowDict]]
    next_page_token: NotRequired[str]
