from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class InvalidInputException(SdkBaseModel):
    message: Optional[str] = UNSET


class InvalidInputExceptionDict(TypedDict):
    message: NotRequired[str]
