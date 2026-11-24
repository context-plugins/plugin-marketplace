from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class InvalidInputExceptionError(SdkBaseModel):
    message: Optional[str] = UNSET


class InvalidInputExceptionErrorDict(TypedDict):
    message: NotRequired[str]
