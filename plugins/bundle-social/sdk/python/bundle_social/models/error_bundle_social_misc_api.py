from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class ErrorBundleSocialMiscApi(SdkBaseModel):
    code: float
    message: str
    subcode: Optional[float] = UNSET


class ErrorBundleSocialMiscApiDict(TypedDict):
    code: float
    message: str
    subcode: NotRequired[float]
