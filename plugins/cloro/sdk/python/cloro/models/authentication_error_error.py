from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .error4 import Error4, Error4Dict


class AuthenticationErrorError(SdkBaseModel):
    success: Optional[bool] = UNSET
    error: Optional[Error4] = UNSET


class AuthenticationErrorErrorDict(TypedDict):
    success: NotRequired[bool]
    error: NotRequired[Error4Dict]
