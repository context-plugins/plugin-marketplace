from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class UnauthorizedException(SdkBaseModel):
    message: Optional[str] = UNSET


class UnauthorizedExceptionDict(TypedDict):
    message: NotRequired[str]
