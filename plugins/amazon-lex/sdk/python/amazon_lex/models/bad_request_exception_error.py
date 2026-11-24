from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class BadRequestExceptionError(SdkBaseModel):
    message: Optional[str] = UNSET


class BadRequestExceptionErrorDict(TypedDict):
    message: NotRequired[str]
