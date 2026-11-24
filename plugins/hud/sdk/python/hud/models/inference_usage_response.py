from __future__ import annotations

from uuid import UUID

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .inference_usage_log import InferenceUsageLog, InferenceUsageLogDict


class InferenceUsageResponse(SdkBaseModel):
    """Raw log listing for the request table.

    Aggregates (totals, group-bys) live on ``GET /v2/usage/inference``."""

    logs: list[InferenceUsageLog]
    total_count: int
    team_id: UUID


class InferenceUsageResponseDict(TypedDict):
    logs: list[InferenceUsageLogDict]
    total_count: int
    team_id: UUID
