from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class ErrorResponseError(SdkBaseModel):
    """Standard error response."""

    message: Optional[str] = UNSET
    code: Optional[str] = UNSET


class ErrorResponseErrorDict(TypedDict):
    message: NotRequired[str]
    code: NotRequired[str]
