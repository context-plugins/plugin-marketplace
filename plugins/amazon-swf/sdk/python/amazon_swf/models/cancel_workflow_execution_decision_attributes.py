from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class CancelWorkflowExecutionDecisionAttributes(SdkBaseModel):
    details: Optional[str] = UNSET
    """Details of the cancellation."""


class CancelWorkflowExecutionDecisionAttributesDict(TypedDict):
    details: NotRequired[str]
