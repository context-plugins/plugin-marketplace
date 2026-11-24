from __future__ import annotations

from uuid import UUID

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class BulkStageRequest(SdkBaseModel):
    """Bulk lifecycle-stage move.

    Advance tasks one stage forward or send them back to an earlier stage of their taskset's pipeline."""

    ids: list[UUID]
    stage: str


class BulkStageRequestDict(TypedDict):
    ids: list[UUID]
    stage: str
