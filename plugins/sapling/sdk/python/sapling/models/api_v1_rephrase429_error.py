from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class ApiV1Rephrase429Error(SdkBaseModel):
    msg: str
    """Human-readable error message."""

    retry_after: Optional[float] = UNSET
    """Seconds until the request would fit the bucket. Absent when it never can."""


class ApiV1Rephrase429ErrorDict(TypedDict):
    msg: str
    retry_after: NotRequired[float]
