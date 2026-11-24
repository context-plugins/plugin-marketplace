from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class ErrorResponse(SdkBaseModel):
    """Standard error response body"""

    message: Optional[str] = UNSET
    """Human-readable error message"""

    error_code: Optional[int] = Field(default=UNSET, alias="errorCode")
    """Numeric error code"""

    trace_id: Optional[str] = Field(default=UNSET, alias="traceId")
    """Trace identifier for support and debugging"""


class ErrorResponseDict(TypedDict):
    message: NotRequired[str]
    error_code: NotRequired[int]
    trace_id: NotRequired[str]
