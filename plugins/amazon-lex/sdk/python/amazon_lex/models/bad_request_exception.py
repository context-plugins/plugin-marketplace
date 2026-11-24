from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class BadRequestException(SdkBaseModel):
    message: Optional[str] = UNSET


class BadRequestExceptionDict(TypedDict):
    message: NotRequired[str]
