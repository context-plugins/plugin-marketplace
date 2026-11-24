from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.status import StatusOrStr
from .user_ip_response_data2 import UserIpResponseData2, UserIpResponseData2Dict


class UserIpResponse(SdkBaseModel):
    status: Optional[StatusOrStr] = UNSET
    data: Optional[UserIpResponseData2] = UNSET
    """Current IP configuration."""


class UserIpResponseDict(TypedDict):
    status: NotRequired[StatusOrStr]
    data: NotRequired[UserIpResponseData2Dict]
