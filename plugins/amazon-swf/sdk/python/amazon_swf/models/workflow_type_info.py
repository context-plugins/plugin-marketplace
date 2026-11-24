from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, RFC3339DateTime, SdkBaseModel
from .enums.status3 import Status3OrStr
from .workflow_type import WorkflowType, WorkflowTypeDict


class WorkflowTypeInfo(SdkBaseModel):
    workflow_type: WorkflowType = Field(alias="workflowType")
    status: Status3OrStr
    """The current status of the workflow type."""

    description: Optional[str] = UNSET
    """The description of the type registered through RegisterWorkflowType."""

    creation_date: RFC3339DateTime = Field(alias="creationDate")
    """The date when this type was registered."""

    deprecation_date: Optional[RFC3339DateTime] = Field(default=UNSET, alias="deprecationDate")
    """If the type is in deprecated state, then it is set to the date when the type was deprecated."""


class WorkflowTypeInfoDict(TypedDict):
    workflow_type: WorkflowTypeDict
    status: Status3OrStr
    description: NotRequired[str]
    creation_date: RFC3339DateTime
    deprecation_date: NotRequired[RFC3339DateTime]
