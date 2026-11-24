from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .enums.sync_run_status import SyncRunStatusOrStr


class SyncRun(SdkBaseModel):
    finished_at: str = Field(alias="finishedAt")
    sync_id: float = Field(alias="syncId")
    status: SyncRunStatusOrStr
    """The status of sync runs"""

    sync_run_id: float = Field(alias="syncRunId")


class SyncRunDict(TypedDict):
    finished_at: str
    sync_id: float
    status: SyncRunStatusOrStr
    sync_run_id: float
