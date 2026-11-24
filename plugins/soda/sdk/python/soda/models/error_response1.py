from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class ErrorResponse1(SdkBaseModel):
    code: Optional[str] = UNSET
    message: Optional[str] = UNSET


class ErrorResponse1Dict(TypedDict):
    code: NotRequired[str]
    message: NotRequired[str]
