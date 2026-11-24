from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.platform import PlatformOrStr
from .enums.reason import ReasonOrStr
from .enums.status_staying_data_api import StatusStayingDataApiOrStr
from .platform_failure_error import PlatformFailureError, PlatformFailureErrorDict


class PlatformResult(SdkBaseModel):
    platform: Optional[PlatformOrStr] = UNSET
    status: Optional[StatusStayingDataApiOrStr] = UNSET
    reason: Optional[ReasonOrStr] = UNSET
    """Present on skipped platform results; explains why a requested platform was not called."""

    credits_charged: Optional[int] = Field(default=UNSET, alias="creditsCharged")
    cached: Optional[bool] = UNSET
    count: Optional[int] = UNSET
    error: Optional[PlatformFailureError] = UNSET
    message: Optional[str] = UNSET
    """Human-readable reason for skipped platform results."""


class PlatformResultDict(TypedDict):
    platform: NotRequired[PlatformOrStr]
    status: NotRequired[StatusStayingDataApiOrStr]
    reason: NotRequired[ReasonOrStr]
    credits_charged: NotRequired[int]
    cached: NotRequired[bool]
    count: NotRequired[int]
    error: NotRequired[PlatformFailureErrorDict]
    message: NotRequired[str]
