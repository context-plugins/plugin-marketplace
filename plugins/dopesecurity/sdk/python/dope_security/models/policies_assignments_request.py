from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class PoliciesAssignmentsRequest(SdkBaseModel):
    users: Optional[list[str]] = UNSET
    """User emails to assign. Omit to leave unchanged, send [] to unassign all."""

    groups: Optional[list[str]] = UNSET
    """Group emails to assign. Omit to leave unchanged, send [] to unassign all."""


class PoliciesAssignmentsRequestDict(TypedDict):
    users: NotRequired[list[str]]
    groups: NotRequired[list[str]]
