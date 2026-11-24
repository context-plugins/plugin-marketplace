from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class Error(SdkBaseModel):
    code: Optional[int] = UNSET
    message: Optional[str] = UNSET


class ErrorDict(TypedDict):
    code: NotRequired[int]
    message: NotRequired[str]
