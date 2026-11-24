from __future__ import annotations

from pydantic import EmailStr, Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class V3SignalScoreContactItem(SdkBaseModel):
    """Must contain id, linkedinUrl, email, or firstName + lastName + (companyName | companyDomain)."""

    client_reference_id: Optional[str] = Field(default=UNSET, alias="clientReferenceId")
    id: Optional[str] = UNSET
    """Encrypted Lusha contact ID (vN.…)."""

    linkedin_url: Optional[str] = Field(default=UNSET, alias="linkedinUrl")
    email: Optional[EmailStr] = UNSET
    first_name: Optional[str] = Field(default=UNSET, alias="firstName")
    last_name: Optional[str] = Field(default=UNSET, alias="lastName")
    company_name: Optional[str] = Field(default=UNSET, alias="companyName")
    company_domain: Optional[str] = Field(default=UNSET, alias="companyDomain")


class V3SignalScoreContactItemDict(TypedDict):
    client_reference_id: NotRequired[str]
    id: NotRequired[str]
    linkedin_url: NotRequired[str]
    email: NotRequired[EmailStr]
    first_name: NotRequired[str]
    last_name: NotRequired[str]
    company_name: NotRequired[str]
    company_domain: NotRequired[str]
