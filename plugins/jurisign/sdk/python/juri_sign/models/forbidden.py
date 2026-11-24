from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class Forbidden(SdkBaseModel):
    message: Optional[str] = UNSET


class ForbiddenDict(TypedDict):
    message: NotRequired[str]
