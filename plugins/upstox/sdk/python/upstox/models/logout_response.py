from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.status import StatusOrStr


class LogoutResponse(SdkBaseModel):
    status: Optional[StatusOrStr] = UNSET
    data: Optional[bool] = UNSET
    """Logout status"""


class LogoutResponseDict(TypedDict):
    status: NotRequired[StatusOrStr]
    data: NotRequired[bool]
