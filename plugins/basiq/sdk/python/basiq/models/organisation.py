from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class Organisation(SdkBaseModel):
    """Organisation data."""

    agent_first_name: Optional[str] = Field(default=UNSET, alias="agentFirstName")
    """Agent first name."""

    agent_last_name: Optional[str] = Field(default=UNSET, alias="agentLastName")
    """Agent last name."""

    agent_role: Optional[str] = Field(default=UNSET, alias="agentRole")
    """Agent role."""

    business_name: Optional[str] = Field(default=UNSET, alias="businessName")
    """Business name."""

    legal_name: Optional[str] = Field(default=UNSET, alias="legalName")
    """Legal name."""

    short_name: Optional[str] = Field(default=UNSET, alias="shortName")
    """Short name."""

    abn: Optional[str] = UNSET
    """Australian Business Number."""

    acn: Optional[str] = UNSET
    """Australian Company Number."""

    is_acnc_registered: Optional[bool] = Field(default=UNSET, alias="isACNCRegistered")
    """Indicates whether is Australian Company Number registered."""

    industry_code: Optional[str] = Field(default=UNSET, alias="industryCode")
    """Industry Code."""

    industry_code_version: Optional[str] = Field(default=UNSET, alias="industryCodeVersion")
    """Industry Code Version."""

    organisation_type: Optional[str] = Field(default=UNSET, alias="organisationType")
    """Organisation Type."""

    registered_country: Optional[str] = Field(default=UNSET, alias="registeredCountry")
    """Registered Country."""


class OrganisationDict(TypedDict):
    agent_first_name: NotRequired[str]
    agent_last_name: NotRequired[str]
    agent_role: NotRequired[str]
    business_name: NotRequired[str]
    legal_name: NotRequired[str]
    short_name: NotRequired[str]
    abn: NotRequired[str]
    acn: NotRequired[str]
    is_acnc_registered: NotRequired[bool]
    industry_code: NotRequired[str]
    industry_code_version: NotRequired[str]
    organisation_type: NotRequired[str]
    registered_country: NotRequired[str]
