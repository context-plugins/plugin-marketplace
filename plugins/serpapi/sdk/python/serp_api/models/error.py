from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class Error(SdkBaseModel):
    error: Optional[str] = UNSET


class ErrorDict(TypedDict):
    error: NotRequired[str]
