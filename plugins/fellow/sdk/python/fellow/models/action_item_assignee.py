from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class ActionItemAssignee(SdkBaseModel):
    """Represents an assignee of an action item."""

    id: str
    full_name: str
    email: str


class ActionItemAssigneeDict(TypedDict):
    id: str
    full_name: str
    email: str
