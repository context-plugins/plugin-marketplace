from __future__ import annotations

from typing import Any

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class Error(SdkBaseModel):
    code: Optional[str] = UNSET
    """Machine-readable error code"""

    message: Optional[str] = UNSET
    """Human-readable error description"""

    details: Optional[Any] = UNSET
    """Additional error context (validation errors, etc.)"""


class ErrorDict(TypedDict):
    code: NotRequired[str]
    message: NotRequired[str]
    details: NotRequired[Any]
