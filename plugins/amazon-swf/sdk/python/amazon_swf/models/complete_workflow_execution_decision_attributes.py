from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class CompleteWorkflowExecutionDecisionAttributes(SdkBaseModel):
    result: Optional[str] = UNSET
    """The result of the workflow execution. The form of the result is implementation defined."""


class CompleteWorkflowExecutionDecisionAttributesDict(TypedDict):
    result: NotRequired[str]
