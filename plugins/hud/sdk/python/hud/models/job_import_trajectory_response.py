from __future__ import annotations

from uuid import UUID

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class JobImportTrajectoryResponse(SdkBaseModel):
    trace_id: UUID
    span_count: int
    """Telemetry spans the trajectory became"""

    ingested: bool
    """False when the trace already had a trajectory"""

    warnings: list[str]
    """Trajectory references stored but not fetched"""


class JobImportTrajectoryResponseDict(TypedDict):
    trace_id: UUID
    span_count: int
    ingested: bool
    warnings: list[str]
