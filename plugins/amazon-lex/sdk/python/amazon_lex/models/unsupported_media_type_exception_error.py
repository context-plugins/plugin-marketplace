from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class UnsupportedMediaTypeExceptionError(SdkBaseModel):
    message: Optional[str] = UNSET


class UnsupportedMediaTypeExceptionErrorDict(TypedDict):
    message: NotRequired[str]
