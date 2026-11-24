from __future__ import annotations

from typing import Any
from uuid import UUID

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .child import Child, ChildDict
from .enums.status_deliverd_dev_flows_api import StatusDeliverdDevFlowsApiOrStr
from .member import Member, MemberDict
from .timeline import Timeline, TimelineDict


class ApiV1FlowsResponse(SdkBaseModel):
    id: UUID
    status: StatusDeliverdDevFlowsApiOrStr
    url: str
    title: str
    description: str | None
    external_id: str | None = Field(alias="externalId")
    metadata: dict[str, Any]
    started_by: str = Field(alias="startedBy")
    members: list[Member]
    member_count: float = Field(alias="memberCount")
    open_count: float = Field(alias="openCount")
    all_settled: bool = Field(alias="allSettled")
    timeline: Optional[list[Timeline]] = UNSET
    children: Optional[list[Child]] = UNSET
    settled_at: str | None = Field(alias="settledAt")
    created_at: str = Field(alias="createdAt")
    parent_flow_id: UUID | None = Field(alias="parentFlowId")
    provider_execution_id: str | None = Field(alias="providerExecutionId")


class ApiV1FlowsResponseDict(TypedDict):
    id: UUID
    status: StatusDeliverdDevFlowsApiOrStr
    url: str
    title: str
    description: str | None
    external_id: str | None
    metadata: dict[str, Any]
    started_by: str
    members: list[MemberDict]
    member_count: float
    open_count: float
    all_settled: bool
    timeline: NotRequired[list[TimelineDict]]
    children: NotRequired[list[ChildDict]]
    settled_at: str | None
    created_at: str
    parent_flow_id: UUID | None
    provider_execution_id: str | None
