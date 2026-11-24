from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class InvalidArgsExceptionError(SdkBaseModel):
    message: Optional[str] = UNSET


class InvalidArgsExceptionErrorDict(TypedDict):
    message: NotRequired[str]
