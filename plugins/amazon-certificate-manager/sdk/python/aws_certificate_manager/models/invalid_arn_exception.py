from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class InvalidArnException(SdkBaseModel):
    message: Optional[str] = UNSET


class InvalidArnExceptionDict(TypedDict):
    message: NotRequired[str]
