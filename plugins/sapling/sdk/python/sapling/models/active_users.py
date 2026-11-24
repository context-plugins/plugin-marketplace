from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class ActiveUsers(SdkBaseModel):
    anonymous: Optional[int] = UNSET
    logged_in: Optional[int] = UNSET


class ActiveUsersDict(TypedDict):
    anonymous: NotRequired[int]
    logged_in: NotRequired[int]
