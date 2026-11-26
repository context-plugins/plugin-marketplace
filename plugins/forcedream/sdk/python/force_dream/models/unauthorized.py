from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class Unauthorized(SdkBaseModel):
    error: Optional[str] = UNSET


class UnauthorizedDict(TypedDict):
    error: NotRequired[str]
