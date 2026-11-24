from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, RFC3339DateTime, SdkBaseModel
from .contact import Contact, ContactDict


class HouseholdResource(SdkBaseModel):
    id: int
    name: str
    head_contact_id: int | None
    account_id: int
    envelope_name: str | None
    note: str | None
    created_at: RFC3339DateTime | None
    updated_at: RFC3339DateTime | None
    contacts: Optional[list[Contact]] = UNSET


class HouseholdResourceDict(TypedDict):
    id: int
    name: str
    head_contact_id: int | None
    account_id: int
    envelope_name: str | None
    note: str | None
    created_at: RFC3339DateTime | None
    updated_at: RFC3339DateTime | None
    contacts: NotRequired[list[ContactDict]]
