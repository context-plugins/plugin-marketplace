from __future__ import annotations

from uuid import UUID

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel


class Schedule(SdkBaseModel):
    id: UUID
    report_id: UUID = Field(alias="reportId")
    report_slug: str = Field(alias="reportSlug")
    report_title: str = Field(alias="reportTitle")
    report_url: str = Field(alias="reportUrl")
    agent_id: UUID = Field(alias="agentId")
    agent_name: str = Field(alias="agentName")
    recurrence: str
    enabled: bool
    last_run_at: str | None = Field(alias="lastRunAt")
    next_run_at: str | None = Field(alias="nextRunAt")
    current_version: float | None = Field(alias="currentVersion")
    due: bool
    due_since: str | None = Field(alias="dueSince")


class ScheduleDict(TypedDict):
    id: UUID
    report_id: UUID
    report_slug: str
    report_title: str
    report_url: str
    agent_id: UUID
    agent_name: str
    recurrence: str
    enabled: bool
    last_run_at: str | None
    next_run_at: str | None
    current_version: float | None
    due: bool
    due_since: str | None
