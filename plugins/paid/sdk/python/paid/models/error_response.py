from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class ErrorResponse(SdkBaseModel):
    error: str
    code: Optional[str] = UNSET
    details: Optional[str] = UNSET


class ErrorResponseDict(TypedDict):
    error: str
    code: NotRequired[str]
    details: NotRequired[str]
