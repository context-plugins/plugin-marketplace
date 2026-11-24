from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .contact_resource import ContactResource, ContactResourceDict


class AppHttpResourcesApiHouseholdResource(SdkBaseModel):
    id: int
    name: str
    head_contact_id: int | None
    account_id: int
    envelope_name: str | None
    note: str | None
    created_at: str
    updated_at: str
    contacts: Optional[list[ContactResource]] = UNSET


class AppHttpResourcesApiHouseholdResourceDict(TypedDict):
    id: int
    name: str
    head_contact_id: int | None
    account_id: int
    envelope_name: str | None
    note: str | None
    created_at: str
    updated_at: str
    contacts: NotRequired[list[ContactResourceDict]]
