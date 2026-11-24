from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class ErrorError(SdkBaseModel):
    error: Optional[str] = UNSET
    """A human-readable error message."""

    status: Optional[int] = UNSET
    """The HTTP status code."""


class ErrorErrorDict(TypedDict):
    error: NotRequired[str]
    status: NotRequired[int]
