from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class ErrorResponse(SdkBaseModel):
    code: Optional[str] = UNSET
    message: Optional[str] = UNSET


class ErrorResponseDict(TypedDict):
    code: NotRequired[str]
    message: NotRequired[str]
