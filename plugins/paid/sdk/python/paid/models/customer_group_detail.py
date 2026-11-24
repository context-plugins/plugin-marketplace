from __future__ import annotations

from uuid import UUID

from pydantic import Field
from typing_extensions import TypedDict

from ..core import RFC3339DateTime, SdkBaseModel
from .customer_group_member import CustomerGroupMember, CustomerGroupMemberDict


class CustomerGroupDetail(SdkBaseModel):
    id: UUID
    name: str
    description: str | None
    customer_count: int = Field(alias="customerCount")
    created_at: RFC3339DateTime = Field(alias="createdAt")
    updated_at: RFC3339DateTime = Field(alias="updatedAt")
    customers: list[CustomerGroupMember]


class CustomerGroupDetailDict(TypedDict):
    id: UUID
    name: str
    description: str | None
    customer_count: int
    created_at: RFC3339DateTime
    updated_at: RFC3339DateTime
    customers: list[CustomerGroupMemberDict]
