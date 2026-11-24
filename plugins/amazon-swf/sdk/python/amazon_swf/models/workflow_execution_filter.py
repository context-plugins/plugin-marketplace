from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel


class WorkflowExecutionFilter(SdkBaseModel):
    workflow_id: str = Field(alias="workflowId")
    """The workflowId to pass of match the criteria of this filter."""


class WorkflowExecutionFilterDict(TypedDict):
    workflow_id: str
