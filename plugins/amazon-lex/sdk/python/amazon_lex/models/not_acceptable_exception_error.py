from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class NotAcceptableExceptionError(SdkBaseModel):
    message: Optional[str] = UNSET


class NotAcceptableExceptionErrorDict(TypedDict):
    message: NotRequired[str]
