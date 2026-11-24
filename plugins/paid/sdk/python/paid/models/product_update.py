from __future__ import annotations

from typing import Any

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .agent_attribute import AgentAttribute, AgentAttributeDict
from .enums.product_update_type import ProductUpdateTypeOrStr


class ProductUpdate(SdkBaseModel):
    name: Optional[str] = UNSET
    description: Optional[str] = UNSET
    external_id: Optional[str] = Field(default=UNSET, alias="externalId")
    type_: Optional[ProductUpdateTypeOrStr] = Field(default=UNSET, alias="type")
    active: Optional[bool] = UNSET
    product_code: Optional[str] = Field(default=UNSET, alias="productCode")
    product_attribute: Optional[list[AgentAttribute]] = Field(default=UNSET, alias="ProductAttribute")
    """Pricing attributes for this product"""

    metadata: Optional[dict[str, Any]] = UNSET


class ProductUpdateDict(TypedDict):
    name: NotRequired[str]
    description: NotRequired[str]
    external_id: NotRequired[str]
    type_: NotRequired[ProductUpdateTypeOrStr]
    active: NotRequired[bool]
    product_code: NotRequired[str]
    product_attribute: NotRequired[list[AgentAttributeDict]]
    metadata: NotRequired[dict[str, Any]]
