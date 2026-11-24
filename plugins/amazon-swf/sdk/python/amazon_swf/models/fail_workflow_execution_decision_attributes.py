from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class FailWorkflowExecutionDecisionAttributes(SdkBaseModel):
    reason: Optional[str] = UNSET
    """A descriptive reason for the failure that may help in diagnostics."""

    details: Optional[str] = UNSET
    """Details of the failure."""


class FailWorkflowExecutionDecisionAttributesDict(TypedDict):
    reason: NotRequired[str]
    details: NotRequired[str]
