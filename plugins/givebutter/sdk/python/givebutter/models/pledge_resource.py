from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel


class PledgeResource(SdkBaseModel):
    id: str
    contact_id: str
    campaign_id: str
    fund_id: str
    type_: str = Field(alias="type")
    status: str
    status_friendly: str
    amount: str
    amount_fulfilled: str
    amount_remaining: str
    allow_custom_amount: str
    installment_frequency: str
    first_installment_date: str
    next_installment_date: str
    expected_fulfillment_date: str
    memo: str
    auto_remind: str
    last_reminded_at: str
    fee_coverage_type: str
    fee_coverage_visibility: str
    include_in_campaign_goal: str
    tips_enabled: str
    canceled_at: str
    pledged_at: str
    created_at: str
    updated_at: str


class PledgeResourceDict(TypedDict):
    id: str
    contact_id: str
    campaign_id: str
    fund_id: str
    type_: str
    status: str
    status_friendly: str
    amount: str
    amount_fulfilled: str
    amount_remaining: str
    allow_custom_amount: str
    installment_frequency: str
    first_installment_date: str
    next_installment_date: str
    expected_fulfillment_date: str
    memo: str
    auto_remind: str
    last_reminded_at: str
    fee_coverage_type: str
    fee_coverage_visibility: str
    include_in_campaign_goal: str
    tips_enabled: str
    canceled_at: str
    pledged_at: str
    created_at: str
    updated_at: str
