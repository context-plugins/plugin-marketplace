from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class RecurringPlanResource(SdkBaseModel):
    id: str
    contact_id: str
    first_name: str
    last_name: str
    email: str
    phone: str
    frequency: str
    status: str
    method: str
    amount: str
    fee_covered: str
    created_at: str
    updated_at: str
    start_at: str
    canceled_at: str
    next_bill_date: str


class RecurringPlanResourceDict(TypedDict):
    id: str
    contact_id: str
    first_name: str
    last_name: str
    email: str
    phone: str
    frequency: str
    status: str
    method: str
    amount: str
    fee_covered: str
    created_at: str
    updated_at: str
    start_at: str
    canceled_at: str
    next_bill_date: str
