from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class ApiV2Keywords404Error(SdkBaseModel):
    error_code: int = 0
    error_message: Optional[str] = UNSET
    success: bool = True


class ApiV2Keywords404ErrorDict(TypedDict):
    error_code: NotRequired[int]
    error_message: NotRequired[str]
    success: NotRequired[bool]
