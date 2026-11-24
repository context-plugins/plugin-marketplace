from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel


class Contact(SdkBaseModel):
    id: str
    account_id: str
    company_name: str
    first_name: str
    first_name_display: str
    last_name: str
    last_name_display: str
    middle_name: str
    name_display: str
    pronouns: str
    primary_email: str
    primary_phone: str
    type_: str = Field(alias="type")


class ContactDict(TypedDict):
    id: str
    account_id: str
    company_name: str
    first_name: str
    first_name_display: str
    last_name: str
    last_name_display: str
    middle_name: str
    name_display: str
    pronouns: str
    primary_email: str
    primary_phone: str
    type_: str
