from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.issue_type import IssueTypeOrStr
from .enums.severity import SeverityOrStr


class MobileUsabilityIssue(SdkBaseModel):
    """Mobile-usability issue."""

    issue_type: Optional[IssueTypeOrStr] = Field(default=UNSET, alias="issueType")
    """Mobile-usability issue type."""

    severity: Optional[SeverityOrStr] = UNSET
    """Not returned; reserved for future use."""

    message: Optional[str] = UNSET
    """Additional information regarding the issue."""


class MobileUsabilityIssueDict(TypedDict):
    issue_type: NotRequired[IssueTypeOrStr]
    severity: NotRequired[SeverityOrStr]
    message: NotRequired[str]
