from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class InvalidTokenError(SdkBaseModel):
    message: Optional[str] = UNSET


class InvalidTokenErrorDict(TypedDict):
    message: NotRequired[str]
