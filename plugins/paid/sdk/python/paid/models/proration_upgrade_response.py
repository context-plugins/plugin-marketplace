from __future__ import annotations

from uuid import UUID

from pydantic import Field
from typing_extensions import TypedDict

from ..core import RFC3339DateTime, SdkBaseModel
from .proration_detail import ProrationDetail, ProrationDetailDict


class ProrationUpgradeResponse(SdkBaseModel):
    """Response after successfully scheduling a plan change"""

    order_id: UUID = Field(alias="orderId")
    """The ID of the order"""

    amendment_id: UUID = Field(alias="amendmentId")
    """The ID of the amendment record"""

    version: int
    """The new version of the order after the amendment"""

    effective_date: RFC3339DateTime = Field(alias="effectiveDate")
    """The effective date of the plan change"""

    ended_line_ids: list[UUID] = Field(alias="endedLineIds")
    """IDs of order lines that were ended"""

    created_line_ids: list[UUID] = Field(alias="createdLineIds")
    """IDs of new order lines that were created"""

    credit_line_ids: list[UUID] = Field(alias="creditLineIds")
    """IDs of credit lines that were created"""

    proration_details: list[ProrationDetail] = Field(alias="prorationDetails")
    """Detailed proration calculations for each updated attribute"""


class ProrationUpgradeResponseDict(TypedDict):
    order_id: UUID
    amendment_id: UUID
    version: int
    effective_date: RFC3339DateTime
    ended_line_ids: list[UUID]
    created_line_ids: list[UUID]
    credit_line_ids: list[UUID]
    proration_details: list[ProrationDetailDict]
