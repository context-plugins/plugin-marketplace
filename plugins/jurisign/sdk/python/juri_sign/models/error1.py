from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class Error1(SdkBaseModel):
    message: Optional[str] = UNSET


class Error1Dict(TypedDict):
    message: NotRequired[str]
