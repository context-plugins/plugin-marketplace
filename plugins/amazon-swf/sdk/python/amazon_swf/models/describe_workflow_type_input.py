from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .workflow_type import WorkflowType, WorkflowTypeDict


class DescribeWorkflowTypeInput(SdkBaseModel):
    domain: str
    """The name of the domain in which this workflow type is registered."""

    workflow_type: WorkflowType = Field(alias="workflowType")


class DescribeWorkflowTypeInputDict(TypedDict):
    domain: str
    workflow_type: WorkflowTypeDict
