from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class Member(SdkBaseModel):
    value: Optional[str] = UNSET
    """The SCIM user ID of the group member."""

    display: Optional[str] = UNSET
    """The display name of the group member."""


class MemberDict(TypedDict):
    value: NotRequired[str]
    display: NotRequired[str]
