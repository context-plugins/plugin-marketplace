from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class ProfileListApi(SdkBaseModel):
    id: Optional[int] = UNSET
    """RocketReach internal unique profile list ID"""

    name: Optional[str] = UNSET
    """Name of the profile list"""


class ProfileListApiDict(TypedDict):
    id: NotRequired[int]
    name: NotRequired[str]
