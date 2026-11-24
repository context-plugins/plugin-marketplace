from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class Error2Error(SdkBaseModel):
    error: Optional[str] = UNSET
    """A human-readable error message describing what went wrong."""

    status: Optional[int] = UNSET
    """The HTTP status code of the error response."""


class Error2ErrorDict(TypedDict):
    error: NotRequired[str]
    status: NotRequired[int]
