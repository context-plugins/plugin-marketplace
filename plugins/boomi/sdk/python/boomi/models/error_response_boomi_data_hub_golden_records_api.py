from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class ErrorResponseBoomiDataHubGoldenRecordsApi(SdkBaseModel):
    """Standard error response."""

    message: Optional[str] = UNSET
    """Human-readable error message."""

    code: Optional[int] = UNSET
    """Numeric error code."""


class ErrorResponseBoomiDataHubGoldenRecordsApiDict(TypedDict):
    message: NotRequired[str]
    code: NotRequired[int]
