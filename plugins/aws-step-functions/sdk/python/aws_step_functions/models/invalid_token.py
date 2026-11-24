from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class InvalidToken(SdkBaseModel):
    message: Optional[str] = UNSET


class InvalidTokenDict(TypedDict):
    message: NotRequired[str]
