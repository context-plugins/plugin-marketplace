from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class InvalidArnExceptionError(SdkBaseModel):
    message: Optional[str] = UNSET


class InvalidArnExceptionErrorDict(TypedDict):
    message: NotRequired[str]
