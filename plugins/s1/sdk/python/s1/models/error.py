from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class Error(SdkBaseModel):
    field: Optional[str] = UNSET
    message: Optional[str] = UNSET
    code: Optional[str] = UNSET


class ErrorDict(TypedDict):
    field: NotRequired[str]
    message: NotRequired[str]
    code: NotRequired[str]
