from __future__ import annotations

from typing import Any

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class Error(SdkBaseModel):
    """An error message."""

    ref_id: str
    """Reference ID for the error."""

    message: str
    """Human-readable message."""

    detail: Optional[Any] = UNSET
    """Optional detail supporting the error."""


class ErrorDict(TypedDict):
    ref_id: str
    message: str
    detail: NotRequired[Any]
