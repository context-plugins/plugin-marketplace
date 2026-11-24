from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.severity2 import Severity2OrStr


class AmpIssue(SdkBaseModel):
    """AMP issue."""

    severity: Optional[Severity2OrStr] = UNSET
    """Severity of this issue: WARNING or ERROR."""

    issue_message: Optional[str] = Field(default=UNSET, alias="issueMessage")
    """Brief description of this issue."""


class AmpIssueDict(TypedDict):
    severity: NotRequired[Severity2OrStr]
    issue_message: NotRequired[str]
