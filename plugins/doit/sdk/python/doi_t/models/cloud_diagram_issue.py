from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class CloudDiagramIssue(SdkBaseModel):
    """Issue annotation linked to a component."""

    id: Optional[str] = Field(default=UNSET, alias="_id")
    """Issue reference ID."""

    comment: Optional[str] = UNSET
    """Optional comment on the issue."""

    snoozed: Optional[float] = UNSET
    """Snooze duration in seconds."""

    jira: Optional[str] = UNSET
    """Linked Jira ticket key or URL."""


class CloudDiagramIssueDict(TypedDict):
    id: NotRequired[str]
    comment: NotRequired[str]
    snoozed: NotRequired[float]
    jira: NotRequired[str]
