from __future__ import annotations

from pydantic import ConfigDict, Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class ContactItem(SdkBaseModel):
    """At least one of companyDomain or companyName is required."""

    model_config = ConfigDict(extra="forbid")

    first_name: str = Field(alias="firstName")
    last_name: str = Field(alias="lastName")
    company_domain: Optional[str] = Field(default=UNSET, alias="companyDomain")
    company_name: Optional[str] = Field(default=UNSET, alias="companyName")


class ContactItemDict(TypedDict):
    first_name: str
    last_name: str
    company_domain: NotRequired[str]
    company_name: NotRequired[str]
