from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class PersonInput(SdkBaseModel):
    first_name: Optional[str] = UNSET
    last_name: Optional[str] = UNSET
    email: Optional[str] = UNSET
    title: Optional[str] = UNSET
    person_phone: Optional[str] = UNSET
    person_country: Optional[str] = UNSET
    linkedin_url: Optional[str] = Field(default=UNSET, alias="linkedinUrl")


class PersonInputDict(TypedDict):
    first_name: NotRequired[str]
    last_name: NotRequired[str]
    email: NotRequired[str]
    title: NotRequired[str]
    person_phone: NotRequired[str]
    person_country: NotRequired[str]
    linkedin_url: NotRequired[str]
