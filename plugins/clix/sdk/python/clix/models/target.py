from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class Target(SdkBaseModel):
    project_user_id: Optional[str] = UNSET
    """Target user by project user ID"""

    device_id: Optional[str] = UNSET
    """Target specific device"""


class TargetDict(TypedDict):
    project_user_id: NotRequired[str]
    device_id: NotRequired[str]
