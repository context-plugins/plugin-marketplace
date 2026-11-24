from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, RFC3339DateTime, SdkBaseModel


class Error2CloroDevCreditsApi(SdkBaseModel):
    code: Optional[str] = UNSET
    message: Optional[str] = UNSET
    timestamp: Optional[RFC3339DateTime] = UNSET


class Error2CloroDevCreditsApiDict(TypedDict):
    code: NotRequired[str]
    message: NotRequired[str]
    timestamp: NotRequired[RFC3339DateTime]
