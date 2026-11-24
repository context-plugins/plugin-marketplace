from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .workflow_job import WorkflowJob, WorkflowJobDict


class WorkflowJobList(SdkBaseModel):
    items: Optional[list[WorkflowJob]] = UNSET
    """List of workflow jobs"""

    next_page_token: Optional[str] = UNSET
    """Token for retrieving the next page"""


class WorkflowJobListDict(TypedDict):
    items: NotRequired[list[WorkflowJobDict]]
    next_page_token: NotRequired[str]
