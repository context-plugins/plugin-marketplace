from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class UnsupportedMediaTypeException(SdkBaseModel):
    message: Optional[str] = UNSET


class UnsupportedMediaTypeExceptionDict(TypedDict):
    message: NotRequired[str]
