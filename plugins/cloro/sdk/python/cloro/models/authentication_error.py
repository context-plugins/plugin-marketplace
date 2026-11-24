from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .error4 import Error4, Error4Dict


class AuthenticationError(SdkBaseModel):
    success: Optional[bool] = UNSET
    error: Optional[Error4] = UNSET


class AuthenticationErrorDict(TypedDict):
    success: NotRequired[bool]
    error: NotRequired[Error4Dict]
