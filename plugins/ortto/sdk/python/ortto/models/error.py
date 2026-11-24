from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class Error(SdkBaseModel):
    status: Optional[str] = UNSET
    error: Optional[str] = UNSET


class ErrorDict(TypedDict):
    status: NotRequired[str]
    error: NotRequired[str]
