from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class UserUpdate(SdkBaseModel):
    name: Optional[str] = UNSET
    default_group_guid: Optional[str] = UNSET


class UserUpdateDict(TypedDict):
    name: NotRequired[str]
    default_group_guid: NotRequired[str]
