from __future__ import annotations

from uuid import UUID

from pydantic import Field
from typing_extensions import TypedDict

from ..core import RFC3339DateTime, SdkBaseModel


class CustomerGroupSummary(SdkBaseModel):
    id: UUID
    name: str
    description: str | None
    customer_count: int = Field(alias="customerCount")
    created_at: RFC3339DateTime = Field(alias="createdAt")
    updated_at: RFC3339DateTime = Field(alias="updatedAt")


class CustomerGroupSummaryDict(TypedDict):
    id: UUID
    name: str
    description: str | None
    customer_count: int
    created_at: RFC3339DateTime
    updated_at: RFC3339DateTime
