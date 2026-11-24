from __future__ import annotations

from uuid import UUID

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .enums.kind_deliverd_dev_flows_api import KindDeliverdDevFlowsApiOrStr


class Member(SdkBaseModel):
    kind: KindDeliverdDevFlowsApiOrStr
    id: UUID
    title: str
    status: str
    open: bool
    created_at: str = Field(alias="createdAt")


class MemberDict(TypedDict):
    kind: KindDeliverdDevFlowsApiOrStr
    id: UUID
    title: str
    status: str
    open: bool
    created_at: str
