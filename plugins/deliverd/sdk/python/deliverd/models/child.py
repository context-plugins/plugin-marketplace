from __future__ import annotations

from typing import Any
from uuid import UUID

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .enums.status_deliverd_dev_flows_api import StatusDeliverdDevFlowsApiOrStr


class Child(SdkBaseModel):
    id: UUID
    title: str
    status: StatusDeliverdDevFlowsApiOrStr
    url: str
    external_id: str | None = Field(alias="externalId")
    metadata: dict[str, Any]
    started_by: str = Field(alias="startedBy")
    created_at: str = Field(alias="createdAt")
    settled_at: str | None = Field(alias="settledAt")


class ChildDict(TypedDict):
    id: UUID
    title: str
    status: StatusDeliverdDevFlowsApiOrStr
    url: str
    external_id: str | None
    metadata: dict[str, Any]
    started_by: str
    created_at: str
    settled_at: str | None
