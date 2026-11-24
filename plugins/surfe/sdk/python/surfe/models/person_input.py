from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class PersonInput(SdkBaseModel):
    linkedin_url: Optional[str] = Field(default=UNSET, alias="linkedinUrl")
    first_name: Optional[str] = Field(default=UNSET, alias="firstName")
    last_name: Optional[str] = Field(default=UNSET, alias="lastName")
    company_name: Optional[str] = Field(default=UNSET, alias="companyName")
    company_domain: Optional[str] = Field(default=UNSET, alias="companyDomain")
    external_id: Optional[str] = Field(default=UNSET, alias="externalID")


class PersonInputDict(TypedDict):
    linkedin_url: NotRequired[str]
    first_name: NotRequired[str]
    last_name: NotRequired[str]
    company_name: NotRequired[str]
    company_domain: NotRequired[str]
    external_id: NotRequired[str]
