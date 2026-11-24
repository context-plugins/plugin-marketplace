from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class Error2(SdkBaseModel):
    error: Optional[str] = UNSET
    """A human-readable error message describing what went wrong."""

    status: Optional[int] = UNSET
    """The HTTP status code of the error response."""


class Error2Dict(TypedDict):
    error: NotRequired[str]
    status: NotRequired[int]
