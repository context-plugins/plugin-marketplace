from __future__ import annotations

from uuid import UUID

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, RFC3339DateTime, SdkBaseModel
from .enums.mode import ModeOrStr
from .enums.status_browser_use_public_api_v4_sessions_api import StatusBrowserUsePublicApiV4SessionsApiOrStr


class QueuedMessage(SdkBaseModel):
    """One message on a session's queue (a v4_session_input row)."""

    id: int
    session_id: UUID = Field(alias="sessionId")
    run_id: UUID = Field(alias="runId")
    mode: ModeOrStr
    status: StatusBrowserUsePublicApiV4SessionsApiOrStr
    text: str
    attached_file_ids: Optional[list[UUID]] = Field(default=UNSET, alias="attachedFileIds")
    created_at: RFC3339DateTime = Field(alias="createdAt")


class QueuedMessageDict(TypedDict):
    id: int
    session_id: UUID
    run_id: UUID
    mode: ModeOrStr
    status: StatusBrowserUsePublicApiV4SessionsApiOrStr
    text: str
    attached_file_ids: NotRequired[list[UUID]]
    created_at: RFC3339DateTime
