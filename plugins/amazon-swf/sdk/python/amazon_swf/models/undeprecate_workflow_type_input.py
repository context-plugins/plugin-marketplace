from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .workflow_type import WorkflowType, WorkflowTypeDict


class UndeprecateWorkflowTypeInput(SdkBaseModel):
    domain: str
    """The name of the domain of the deprecated workflow type."""

    workflow_type: WorkflowType = Field(alias="workflowType")


class UndeprecateWorkflowTypeInputDict(TypedDict):
    domain: str
    workflow_type: WorkflowTypeDict
