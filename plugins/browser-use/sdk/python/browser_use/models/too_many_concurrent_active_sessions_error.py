from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import SdkBaseModel


class TooManyConcurrentActiveSessionsError(SdkBaseModel):
    """Error response when user has too many concurrent active sessions"""

    detail: str = "Too many concurrent active sessions. Please wait for one to finish, kill one, or upgrade your plan."


class TooManyConcurrentActiveSessionsErrorDict(TypedDict):
    detail: NotRequired[str]
