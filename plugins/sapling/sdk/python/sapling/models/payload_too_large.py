from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class PayloadTooLarge(SdkBaseModel):
    message: Optional[str] = UNSET
    result: Optional[str] = UNSET


class PayloadTooLargeDict(TypedDict):
    message: NotRequired[str]
    result: NotRequired[str]
