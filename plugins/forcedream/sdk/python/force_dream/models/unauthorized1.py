from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class Unauthorized1(SdkBaseModel):
    error: Optional[str] = UNSET


class Unauthorized1Dict(TypedDict):
    error: NotRequired[str]
