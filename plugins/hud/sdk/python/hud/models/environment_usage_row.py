from __future__ import annotations

from uuid import UUID

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, RFC3339DateTime, SdkBaseModel


class EnvironmentUsageRow(SdkBaseModel):
    id: UUID
    created_at: RFC3339DateTime
    terminated_at: Optional[RFC3339DateTime] = UNSET
    status: str
    hourly_rate: Optional[float] = UNSET
    user_id: Optional[UUID] = UNSET
    user_name: Optional[str] = UNSET
    api_key_id: Optional[UUID] = UNSET
    api_key_name: Optional[str] = UNSET
    duration_hours: float = 0.0
    cost: float = 0.0


class EnvironmentUsageRowDict(TypedDict):
    id: UUID
    created_at: RFC3339DateTime
    terminated_at: NotRequired[RFC3339DateTime]
    status: str
    hourly_rate: NotRequired[float]
    user_id: NotRequired[UUID]
    user_name: NotRequired[str]
    api_key_id: NotRequired[UUID]
    api_key_name: NotRequired[str]
    duration_hours: NotRequired[float]
    cost: NotRequired[float]
