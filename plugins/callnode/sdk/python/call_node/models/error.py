from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class Error(SdkBaseModel):
    error: str
    """Stable machine-readable code, e.g. ``invalid_from_number``."""

    message: str
    """Human-readable explanation."""

    retryable: Optional[bool] = UNSET
    """Whether retrying the identical request could succeed."""


class ErrorDict(TypedDict):
    error: str
    message: str
    retryable: NotRequired[bool]
