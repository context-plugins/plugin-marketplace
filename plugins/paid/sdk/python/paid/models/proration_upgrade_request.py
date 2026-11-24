from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import RFC3339DateTime, SdkBaseModel
from .proration_attribute_update import ProrationAttributeUpdate, ProrationAttributeUpdateDict


class ProrationUpgradeRequest(SdkBaseModel):
    """Request to schedule a plan change with proration"""

    order_version: int = Field(alias="orderVersion")
    """The current version of the order (for optimistic locking)"""

    effective_date: RFC3339DateTime = Field(alias="effectiveDate")
    """The date when the plan change should take effect (ISO 8601 format)"""

    updated_order_line_attributes: list[ProrationAttributeUpdate] = Field(alias="updatedOrderLineAttributes")
    """The list of order line attributes to update"""


class ProrationUpgradeRequestDict(TypedDict):
    order_version: int
    effective_date: RFC3339DateTime
    updated_order_line_attributes: list[ProrationAttributeUpdateDict]
