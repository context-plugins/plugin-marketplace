from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class GroupInfo(SdkBaseModel):
    """Information about the group observer."""

    id: str
    """Group ID."""

    name: str
    """Group name."""

    version_id: Optional[str] = UNSET
    """Group version identifier."""


class GroupInfoDict(TypedDict):
    id: str
    name: str
    version_id: NotRequired[str]
