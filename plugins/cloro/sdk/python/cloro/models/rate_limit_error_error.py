from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .error6 import Error6, Error6Dict


class RateLimitErrorError(SdkBaseModel):
    success: Optional[bool] = UNSET
    error: Optional[Error6] = UNSET


class RateLimitErrorErrorDict(TypedDict):
    success: NotRequired[bool]
    error: NotRequired[Error6Dict]
