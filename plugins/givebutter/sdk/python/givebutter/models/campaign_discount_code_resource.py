from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class CampaignDiscountCodeResource(SdkBaseModel):
    id: str
    campaign_id: str
    items: Optional[str] = UNSET
    code: str
    type_: str = Field(alias="type")
    amount: float
    used: str
    uses: str
    active: str
    all_items: Optional[str] = UNSET
    total_discount: str
    starts_at: str
    expires_at: str
    created_at: str
    updated_at: str


class CampaignDiscountCodeResourceDict(TypedDict):
    id: str
    campaign_id: str
    items: NotRequired[str]
    code: str
    type_: str
    amount: float
    used: str
    uses: str
    active: str
    all_items: NotRequired[str]
    total_discount: str
    starts_at: str
    expires_at: str
    created_at: str
    updated_at: str
