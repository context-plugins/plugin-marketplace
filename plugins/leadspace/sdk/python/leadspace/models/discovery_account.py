from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class DiscoveryAccount(SdkBaseModel):
    """Either companyName or companyWebsite is mandatory"""

    company_name: Optional[str] = Field(default=UNSET, alias="companyName")
    company_website: Optional[str] = Field(default=UNSET, alias="companyWebsite")
    companylinkedin_url: Optional[str] = Field(default=UNSET, alias="companylinkedinUrl")


class DiscoveryAccountDict(TypedDict):
    company_name: NotRequired[str]
    company_website: NotRequired[str]
    companylinkedin_url: NotRequired[str]
