from __future__ import annotations

from typing import Any

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class ErrorResponseError(SdkBaseModel):
    """Error response. ``status`` may be an integer (e.g. 401), boolean, or string depending on the endpoint, so it is
    intentionally untyped to avoid deserialization failures."""

    timestamp: Optional[str] = UNSET
    path: Optional[str] = UNSET
    status: Optional[Any] = UNSET
    error: Optional[str] = UNSET
    message: Optional[str] = UNSET
    code: Optional[int] = UNSET


class ErrorResponseErrorDict(TypedDict):
    timestamp: NotRequired[str]
    path: NotRequired[str]
    status: NotRequired[Any]
    error: NotRequired[str]
    message: NotRequired[str]
    code: NotRequired[int]
