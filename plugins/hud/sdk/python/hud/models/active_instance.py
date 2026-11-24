from __future__ import annotations

from typing import Any
from uuid import UUID

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, RFC3339DateTime, SdkBaseModel
from .active_instance_trace import ActiveInstanceTrace, ActiveInstanceTraceDict


class ActiveInstance(SdkBaseModel):
    id: UUID
    registry_id: Optional[UUID] = UNSET
    build_id: Optional[UUID] = UNSET
    status: str
    created_at: RFC3339DateTime
    terminated_at: Optional[RFC3339DateTime] = UNSET
    public_ip: Optional[str] = UNSET
    ec2_instance_type: Optional[str] = UNSET
    max_runtime_seconds: Optional[int] = UNSET
    user_name: Optional[str] = UNSET
    user_avatar_url: Optional[str] = UNSET
    actual_cost: Optional[float] = UNSET
    hourly_rate: Optional[float] = UNSET
    tier: Optional[str] = UNSET
    cpu_millicores: Optional[int] = UNSET
    memory_gb: Optional[float] = UNSET
    timeout_seconds: Optional[int] = UNSET
    max_session_seconds: Optional[int] = UNSET
    file_tracking_enabled: Optional[bool] = UNSET
    no_external_access: Optional[bool] = UNSET
    protocol_version: Optional[str] = UNSET
    vnc_url: Optional[str] = UNSET
    metadata: Optional[Any] = UNSET
    trace: Optional[ActiveInstanceTrace] = UNSET


class ActiveInstanceDict(TypedDict):
    id: UUID
    registry_id: NotRequired[UUID]
    build_id: NotRequired[UUID]
    status: str
    created_at: RFC3339DateTime
    terminated_at: NotRequired[RFC3339DateTime]
    public_ip: NotRequired[str]
    ec2_instance_type: NotRequired[str]
    max_runtime_seconds: NotRequired[int]
    user_name: NotRequired[str]
    user_avatar_url: NotRequired[str]
    actual_cost: NotRequired[float]
    hourly_rate: NotRequired[float]
    tier: NotRequired[str]
    cpu_millicores: NotRequired[int]
    memory_gb: NotRequired[float]
    timeout_seconds: NotRequired[int]
    max_session_seconds: NotRequired[int]
    file_tracking_enabled: NotRequired[bool]
    no_external_access: NotRequired[bool]
    protocol_version: NotRequired[str]
    vnc_url: NotRequired[str]
    metadata: NotRequired[Any]
    trace: NotRequired[ActiveInstanceTraceDict]
