from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.status import StatusOrStr
from .profile_data2 import ProfileData2, ProfileData2Dict


class GetProfileResponse(SdkBaseModel):
    status: Optional[StatusOrStr] = UNSET
    data: Optional[ProfileData2] = UNSET
    """Response data for user profile"""


class GetProfileResponseDict(TypedDict):
    status: NotRequired[StatusOrStr]
    data: NotRequired[ProfileData2Dict]
