from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .custom_field_response_resource import CustomFieldResponseResource, CustomFieldResponseResourceDict


class TicketResource(SdkBaseModel):
    id: str
    id_suffix: str
    transaction_id: str
    name: str
    first_name: str
    last_name: str
    email: str
    phone: str
    title: str
    description: str
    price: float
    pdf: str
    checked_in_at: str
    custom_fields: list[CustomFieldResponseResource]
    created_at: str
    updated_at: str
    retail_price: str | None


class TicketResourceDict(TypedDict):
    id: str
    id_suffix: str
    transaction_id: str
    name: str
    first_name: str
    last_name: str
    email: str
    phone: str
    title: str
    description: str
    price: float
    pdf: str
    checked_in_at: str
    custom_fields: list[CustomFieldResponseResourceDict]
    created_at: str
    updated_at: str
    retail_price: str | None
