from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import SdkBaseModel


class SessionNotFoundError(SdkBaseModel):
    """Error response when a session is not found"""

    detail: str = "Session not found"


class SessionNotFoundErrorDict(TypedDict):
    detail: NotRequired[str]
