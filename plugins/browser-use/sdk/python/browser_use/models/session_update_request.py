from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class SessionUpdateRequest(SdkBaseModel):
    """Rename a session. Null clears the user-set name, so the UI falls back to the session's opening task."""

    title: Optional[str] = UNSET


class SessionUpdateRequestDict(TypedDict):
    title: NotRequired[str]
