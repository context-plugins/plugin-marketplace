from __future__ import annotations

from uuid import UUID

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, RFC3339DateTime, SdkBaseModel


class JobChartDataPoint(SdkBaseModel):
    id: UUID
    reward: Optional[float] = UNSET
    status: str
    is_valid: bool = True
    created_at: Optional[RFC3339DateTime] = UNSET
    end_time: Optional[RFC3339DateTime] = UNSET
    task_version_id: Optional[UUID] = UNSET


class JobChartDataPointDict(TypedDict):
    id: UUID
    reward: NotRequired[float]
    status: str
    is_valid: NotRequired[bool]
    created_at: NotRequired[RFC3339DateTime]
    end_time: NotRequired[RFC3339DateTime]
    task_version_id: NotRequired[UUID]
