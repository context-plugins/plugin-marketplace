from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .session_info import SessionInfo, SessionInfoDict


class SessionListResponse(SdkBaseModel):
    """One entry per session (the session's most recent run), most-recent first.

    A V4 session is a conversation: every follow-up run reuses the same public_session_id. GET /api/v4/runs returns one
    row per RUN, so callers that want a list of distinct *sessions* (e.g. the recent-sessions panel) should use this
    instead of de-duplicating runs client-side."""

    sessions: list[SessionInfo]
    next_cursor: Optional[str] = Field(default=UNSET, alias="nextCursor")
    has_more: bool = Field(default=False, alias="hasMore")


class SessionListResponseDict(TypedDict):
    sessions: list[SessionInfoDict]
    next_cursor: NotRequired[str]
    has_more: NotRequired[bool]
