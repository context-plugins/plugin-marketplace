from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class Group(SdkBaseModel):
    id: Optional[str] = UNSET
    label: Optional[str] = UNSET
    email: Optional[str] = UNSET


class GroupDict(TypedDict):
    id: NotRequired[str]
    label: NotRequired[str]
    email: NotRequired[str]
