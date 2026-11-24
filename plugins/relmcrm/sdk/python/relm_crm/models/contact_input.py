from __future__ import annotations

from typing import Any

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class ContactInput(SdkBaseModel):
    """At least one of name / email / phone / linkedin_url / company_id / a custom field."""

    first_name: Optional[str] = UNSET
    last_name: Optional[str] = UNSET
    email: Optional[str] = UNSET
    phone: Optional[str] = UNSET
    linkedin_url: Optional[str] = UNSET
    type_: Optional[str] = Field(default=UNSET, alias="type")
    company_id: Optional[str] = UNSET
    custom_fields: Optional[Any] = UNSET


class ContactInputDict(TypedDict):
    first_name: NotRequired[str]
    last_name: NotRequired[str]
    email: NotRequired[str]
    phone: NotRequired[str]
    linkedin_url: NotRequired[str]
    type_: NotRequired[str]
    company_id: NotRequired[str]
    custom_fields: NotRequired[Any]
