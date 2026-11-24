from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class Unauthenticated1(SdkBaseModel):
    message: Optional[str] = UNSET


class Unauthenticated1Dict(TypedDict):
    message: NotRequired[str]
