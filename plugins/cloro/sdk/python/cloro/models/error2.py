from __future__ import annotations

from typing import Any

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, RFC3339DateTime, SdkBaseModel
from .enums.code2 import Code2OrStr


class Error2(SdkBaseModel):
    code: Code2OrStr
    """Error code identifying the failure reason."""

    message: str
    """Human-readable error message."""

    details: Optional[Any] = UNSET
    """Additional context about the error, such as field-level validation failures."""

    timestamp: RFC3339DateTime
    """Timestamp when the error occurred."""


class Error2Dict(TypedDict):
    code: Code2OrStr
    message: str
    details: NotRequired[Any]
    timestamp: RFC3339DateTime
