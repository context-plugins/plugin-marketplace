from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, RFC3339DateTime, SdkBaseModel
from .enums.status_hightouch_idr_api import StatusHightouchIdrApiOrStr
from .idr_run_stats_by_threshold2 import IdrRunStatsByThreshold2, IdrRunStatsByThreshold2Dict


class IdrRun(SdkBaseModel):
    full_rerun: bool = Field(alias="fullRerun")
    stats: Optional[IdrRunStatsByThreshold2] = UNSET
    """If available, the stats at the end of a successful run."""

    finished_at: Optional[RFC3339DateTime] = Field(default=UNSET, alias="finishedAt")
    """Timestamp of the run's completion. Only set for successful or failed runs."""

    started_at: Optional[RFC3339DateTime] = Field(default=UNSET, alias="startedAt")
    """Timestamp of the run's start. Not set for queued runs."""

    created_at: RFC3339DateTime = Field(alias="createdAt")
    error: Optional[str] = UNSET
    """If available, the error associated with a failed status."""

    status: StatusHightouchIdrApiOrStr
    graph_id: str = Field(alias="graphId")
    id: str


class IdrRunDict(TypedDict):
    full_rerun: bool
    stats: NotRequired[IdrRunStatsByThreshold2Dict]
    finished_at: NotRequired[RFC3339DateTime]
    started_at: NotRequired[RFC3339DateTime]
    created_at: RFC3339DateTime
    error: NotRequired[str]
    status: StatusHightouchIdrApiOrStr
    graph_id: str
    id: str
