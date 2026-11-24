from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .error import Error, ErrorDict


class Data(SdkBaseModel):
    """Domain error payload set by the handler."""

    message: Optional[str] = UNSET
    """Human-readable message (used by 401 responses)."""

    error: Optional[Error] = UNSET
    """Structured domain error (used by 400/404/429 responses)."""


class DataDict(TypedDict):
    message: NotRequired[str]
    error: NotRequired[ErrorDict]
