from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class ErrorContentstackPersonalizeManagementAttributesApi(SdkBaseModel):
    """Standard error response."""

    message: Optional[str] = UNSET
    """Human-readable description of the error."""

    status: Optional[int] = UNSET
    """HTTP status code."""


class ErrorContentstackPersonalizeManagementAttributesApiDict(TypedDict):
    message: NotRequired[str]
    status: NotRequired[int]
