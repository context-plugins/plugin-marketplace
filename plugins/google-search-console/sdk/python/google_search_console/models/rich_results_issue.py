from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.severity1 import Severity1OrStr


class RichResultsIssue(SdkBaseModel):
    """Severity and status of a single issue affecting a single rich result instance on a page."""

    issue_message: Optional[str] = Field(default=UNSET, alias="issueMessage")
    """Rich Results issue type."""

    severity: Optional[Severity1OrStr] = UNSET
    """Severity of this issue: WARNING, or ERROR. Items with an issue of status ERROR cannot appear with rich result
    features in Google Search results."""


class RichResultsIssueDict(TypedDict):
    issue_message: NotRequired[str]
    severity: NotRequired[Severity1OrStr]
