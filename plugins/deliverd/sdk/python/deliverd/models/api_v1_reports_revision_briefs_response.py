from __future__ import annotations

from uuid import UUID

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .thread1 import Thread1, Thread1Dict


class ApiV1ReportsRevisionBriefsResponse(SdkBaseModel):
    id: UUID
    report_id: UUID = Field(alias="reportId")
    from_version: int | None = Field(alias="fromVersion")
    prompt: str
    threads: list[Thread1]
    created_at: str = Field(alias="createdAt")


class ApiV1ReportsRevisionBriefsResponseDict(TypedDict):
    id: UUID
    report_id: UUID
    from_version: int | None
    prompt: str
    threads: list[Thread1Dict]
    created_at: str
