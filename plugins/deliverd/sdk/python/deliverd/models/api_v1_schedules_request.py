from __future__ import annotations

from uuid import UUID

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel


class ApiV1SchedulesRequest(SdkBaseModel):
    report_id: UUID = Field(alias="reportId")
    agent_id: UUID = Field(alias="agentId")
    recurrence: str
    """Five-field cron in UTC, e.g. 0 9 * * 5"""


class ApiV1SchedulesRequestDict(TypedDict):
    report_id: UUID
    agent_id: UUID
    recurrence: str
