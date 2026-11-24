from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import SdkBaseModel


class SessionTimeoutLimitExceededError(SdkBaseModel):
    """Error response when session timeout exceeds the maximum allowed limit"""

    detail: str = "Maximum session timeout is 4 hours (240 minutes)."


class SessionTimeoutLimitExceededErrorDict(TypedDict):
    detail: NotRequired[str]
