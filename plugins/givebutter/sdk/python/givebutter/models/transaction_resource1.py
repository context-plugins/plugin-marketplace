from __future__ import annotations

from typing import Any

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .custom_field_response_resource import CustomFieldResponseResource, CustomFieldResponseResourceDict
from .dedication_resource import DedicationResource, DedicationResourceDict
from .external_id_resource import ExternalIdResource, ExternalIdResourceDict
from .giving_space_resource import GivingSpaceResource, GivingSpaceResourceDict


class TransactionResource1(SdkBaseModel):
    id: str
    number: str
    campaign_id: str
    campaign_code: str
    campaign_title: str
    plan_id: str
    pledge_id: str
    team_id: str
    team_name: str
    member_id: str
    member_name: str
    fund_id: str
    fund_code: str
    contact_id: str
    first_name: str
    last_name: str
    company_name: str
    company: str
    email: str
    phone: str
    address: str
    status: str
    payment_method: str
    method: str
    is_offline: str
    check_number: str
    check_deposited_at: str
    internal_note: str
    amount: float
    fee: float
    fee_covered: float
    donated: float
    payout: float
    currency: str
    transacted_at: str
    created_at: str
    updated_at: str
    timezone: str
    giving_space: GivingSpaceResource
    dedication: DedicationResource
    transactions: list[Any]
    custom_fields: list[CustomFieldResponseResource]
    utm_parameters: str
    external_id: ExternalIdResource
    communication_opt_in: str
    session_id: str
    attribution_data: str
    fair_market_value_amount: str | None
    tax_deductible_amount: str | None
    is_recurring: str
    payout_id: str


class TransactionResource1Dict(TypedDict):
    id: str
    number: str
    campaign_id: str
    campaign_code: str
    campaign_title: str
    plan_id: str
    pledge_id: str
    team_id: str
    team_name: str
    member_id: str
    member_name: str
    fund_id: str
    fund_code: str
    contact_id: str
    first_name: str
    last_name: str
    company_name: str
    company: str
    email: str
    phone: str
    address: str
    status: str
    payment_method: str
    method: str
    is_offline: str
    check_number: str
    check_deposited_at: str
    internal_note: str
    amount: float
    fee: float
    fee_covered: float
    donated: float
    payout: float
    currency: str
    transacted_at: str
    created_at: str
    updated_at: str
    timezone: str
    giving_space: GivingSpaceResourceDict
    dedication: DedicationResourceDict
    transactions: list[Any]
    custom_fields: list[CustomFieldResponseResourceDict]
    utm_parameters: str
    external_id: ExternalIdResourceDict
    communication_opt_in: str
    session_id: str
    attribution_data: str
    fair_market_value_amount: str | None
    tax_deductible_amount: str | None
    is_recurring: str
    payout_id: str
