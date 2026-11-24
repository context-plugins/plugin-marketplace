from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class Error1(SdkBaseModel):
    index: Optional[int] = UNSET
    """The index of the record with the error."""

    message: Optional[str] = UNSET
    """The error message describing the issue."""


class Error1Dict(TypedDict):
    index: NotRequired[int]
    message: NotRequired[str]
