from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .enums.partner_price_plan_type import PartnerPricePlanTypeOrStr


class UpdateOrgPricePlanRequest(SdkBaseModel):
    """Update an organization price plan"""

    price_plan_type: PartnerPricePlanTypeOrStr = Field(alias="pricePlanType")


class UpdateOrgPricePlanRequestDict(TypedDict):
    price_plan_type: PartnerPricePlanTypeOrStr
