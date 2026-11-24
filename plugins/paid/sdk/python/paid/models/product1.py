from __future__ import annotations

from typing import Any

from pydantic import Field
from typing_extensions import TypedDict

from ..core import RFC3339DateTime, SdkBaseModel


class Product1(SdkBaseModel):
    id: str
    name: str
    description: str | None
    created_at: RFC3339DateTime = Field(alias="createdAt")
    updated_at: RFC3339DateTime = Field(alias="updatedAt")
    active: bool
    product_code: str | None = Field(alias="productCode")
    external_id: str | None = Field(alias="externalId")
    archived_at: RFC3339DateTime | None = Field(alias="archivedAt")
    metadata: dict[str, Any] | None


class Product1Dict(TypedDict):
    id: str
    name: str
    description: str | None
    created_at: RFC3339DateTime
    updated_at: RFC3339DateTime
    active: bool
    product_code: str | None
    external_id: str | None
    archived_at: RFC3339DateTime | None
    metadata: dict[str, Any] | None
