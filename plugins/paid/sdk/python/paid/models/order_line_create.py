from __future__ import annotations

from typing import Any

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class OrderLineCreate(SdkBaseModel):
    product_id: Optional[str] = Field(default=UNSET, alias="productId")
    """Paid's internal ID for the product"""

    product_external_id: Optional[str] = Field(default=UNSET, alias="productExternalId")
    """The external ID of the product i.e. the id within your system"""

    agent_id: Optional[str] = Field(default=UNSET, alias="agentId")
    """DEPRECATED: Use productId instead. Paid's internal ID for the agent/product"""

    agent_external_id: Optional[str] = Field(default=UNSET, alias="agentExternalId")
    """DEPRECATED: Use productExternalId instead. The external ID of the agent/product i.e. the id within your system"""

    name: Optional[str] = UNSET
    """Name of the order line"""

    description: Optional[str] = UNSET
    """Description of the order line"""

    product_attribute: Optional[list[Any]] = Field(default=UNSET, alias="ProductAttribute")
    """Optional array of custom product attributes to override default pricing, allowing per customer pricing. If not
    provided, attributes will be auto-generated from the product definition."""

    agent_attributes: Optional[list[Any]] = Field(default=UNSET, alias="agentAttributes")
    """DEPRECATED: Use ProductAttribute instead. Optional array of custom agent attributes to override default pricing,
    allowing per customer pricing. If not provided, attributes will be auto-generated from the product definition."""


class OrderLineCreateDict(TypedDict):
    product_id: NotRequired[str]
    product_external_id: NotRequired[str]
    agent_id: NotRequired[str]
    agent_external_id: NotRequired[str]
    name: NotRequired[str]
    description: NotRequired[str]
    product_attribute: NotRequired[list[Any]]
    agent_attributes: NotRequired[list[Any]]
