from __future__ import annotations

from typing import Any

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, OptionalNullable, SdkBaseModel
from .enums.object_relm_crm_contacts_api import ObjectRelmCrmContactsApiOrStr


class Contact(SdkBaseModel):
    id: Optional[str] = UNSET
    object_: Optional[ObjectRelmCrmContactsApiOrStr] = Field(default=UNSET, alias="object")
    first_name: OptionalNullable[str] = UNSET
    last_name: OptionalNullable[str] = UNSET
    email: OptionalNullable[str] = UNSET
    phone: OptionalNullable[str] = UNSET
    linkedin_url: OptionalNullable[str] = UNSET
    type_: OptionalNullable[str] = Field(default=UNSET, alias="type")
    company_id: OptionalNullable[str] = UNSET
    custom_fields: Optional[Any] = UNSET
    version: Optional[int] = UNSET
    mode: Optional[str] = UNSET
    created_at: Optional[str] = UNSET
    updated_at: Optional[str] = UNSET
    deleted: Optional[bool] = UNSET


class ContactDict(TypedDict):
    id: NotRequired[str]
    object_: NotRequired[ObjectRelmCrmContactsApiOrStr]
    first_name: NotRequired[str | None]
    last_name: NotRequired[str | None]
    email: NotRequired[str | None]
    phone: NotRequired[str | None]
    linkedin_url: NotRequired[str | None]
    type_: NotRequired[str | None]
    company_id: NotRequired[str | None]
    custom_fields: NotRequired[Any]
    version: NotRequired[int]
    mode: NotRequired[str]
    created_at: NotRequired[str]
    updated_at: NotRequired[str]
    deleted: NotRequired[bool]
