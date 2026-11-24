from __future__ import annotations

from pydantic import ConfigDict, Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .enums.sync_sequence_request_status import SyncSequenceRequestStatusOrStr
from .sync_run import SyncRun, SyncRunDict


class SyncSequenceStatusOutput(SdkBaseModel):
    """The status of a given sync sequence run at both a high level and the individual sync-run level."""

    model_config = ConfigDict(extra="forbid")

    id: str
    status: SyncSequenceRequestStatusOrStr
    sync_runs: list[SyncRun] = Field(alias="syncRuns")


class SyncSequenceStatusOutputDict(TypedDict):
    id: str
    status: SyncSequenceRequestStatusOrStr
    sync_runs: list[SyncRunDict]
