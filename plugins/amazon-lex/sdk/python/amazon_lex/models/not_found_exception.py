from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class NotFoundException(SdkBaseModel):
    message: Optional[str] = UNSET


class NotFoundExceptionDict(TypedDict):
    message: NotRequired[str]
