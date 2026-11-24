from __future__ import annotations

from typing import Any

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, RFC3339DateTime, SdkBaseModel
from .enums.code5 import Code5OrStr


class Error10(SdkBaseModel):
    code: Code5OrStr
    """Error code identifying the failure reason."""

    message: str
    """Human-readable error message."""

    details: Optional[Any] = UNSET
    """Additional context about the error, such as field-level validation failures."""

    timestamp: RFC3339DateTime
    """Timestamp when the error occurred."""


class Error10Dict(TypedDict):
    code: Code5OrStr
    message: str
    details: NotRequired[Any]
    timestamp: RFC3339DateTime
