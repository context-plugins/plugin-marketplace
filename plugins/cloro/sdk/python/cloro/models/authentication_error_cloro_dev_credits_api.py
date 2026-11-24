from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .error import Error, ErrorDict


class AuthenticationErrorCloroDevCreditsApi(SdkBaseModel):
    success: Optional[bool] = UNSET
    error: Optional[Error] = UNSET


class AuthenticationErrorCloroDevCreditsApiDict(TypedDict):
    success: NotRequired[bool]
    error: NotRequired[ErrorDict]
