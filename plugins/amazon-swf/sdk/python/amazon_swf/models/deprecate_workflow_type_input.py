from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .workflow_type import WorkflowType, WorkflowTypeDict


class DeprecateWorkflowTypeInput(SdkBaseModel):
    domain: str
    """The name of the domain in which the workflow type is registered."""

    workflow_type: WorkflowType = Field(alias="workflowType")


class DeprecateWorkflowTypeInputDict(TypedDict):
    domain: str
    workflow_type: WorkflowTypeDict
