from __future__ import annotations

from typing import Any
from uuid import UUID

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, OptionalNullable, RFC3339DateTime, SdkBaseModel
from .agent_attribute import AgentAttribute, AgentAttributeDict
from .enums.product_type import ProductTypeOrStr


class Product2(SdkBaseModel):
    """The product associated with this plan product"""

    id: UUID
    external_id: OptionalNullable[str] = Field(default=UNSET, alias="externalId")
    display_id: Optional[str] = Field(default=UNSET, alias="displayId")
    """Human-readable display ID"""

    organization_id: UUID = Field(alias="organizationId")
    name: str
    description: OptionalNullable[str] = UNSET
    type_: ProductTypeOrStr = Field(alias="type")
    """The type of product"""

    active: bool
    product_code: OptionalNullable[str] = Field(default=UNSET, alias="productCode")
    product_attribute: Optional[list[AgentAttribute]] = Field(default=UNSET, alias="ProductAttribute")
    """Pricing attributes for this product"""

    metadata: OptionalNullable[dict[str, Any]] = UNSET
    created_at: Optional[RFC3339DateTime] = Field(default=UNSET, alias="createdAt")
    updated_at: Optional[RFC3339DateTime] = Field(default=UNSET, alias="updatedAt")


class Product2Dict(TypedDict):
    id: UUID
    external_id: NotRequired[str | None]
    display_id: NotRequired[str]
    organization_id: UUID
    name: str
    description: NotRequired[str | None]
    type_: ProductTypeOrStr
    active: bool
    product_code: NotRequired[str | None]
    product_attribute: NotRequired[list[AgentAttributeDict]]
    metadata: NotRequired[dict[str, Any] | None]
    created_at: NotRequired[RFC3339DateTime]
    updated_at: NotRequired[RFC3339DateTime]
