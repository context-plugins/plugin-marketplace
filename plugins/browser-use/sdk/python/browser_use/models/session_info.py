from __future__ import annotations

from uuid import UUID

from pydantic import Field
from typing_extensions import TypedDict

from ..core import RFC3339DateTime, SdkBaseModel
from .enums.status import StatusOrStr


class SessionInfo(SdkBaseModel):
    """Lightweight metadata for one V4 session (its most recent run).

    Deliberately slim — just what a session list needs (open the conversation, show a label + status + time). The heavy
    per-run fields (result, error, token/cost totals) live on RunSummary and aren't repeated here."""

    session_id: UUID = Field(alias="sessionId")
    workspace_id: UUID = Field(alias="workspaceId")
    latest_run_id: UUID = Field(alias="latestRunId")
    task: str
    title: str
    status: StatusOrStr
    created_at: RFC3339DateTime = Field(alias="createdAt")
    updated_at: RFC3339DateTime = Field(alias="updatedAt")


class SessionInfoDict(TypedDict):
    session_id: UUID
    workspace_id: UUID
    latest_run_id: UUID
    task: str
    title: str
    status: StatusOrStr
    created_at: RFC3339DateTime
    updated_at: RFC3339DateTime
