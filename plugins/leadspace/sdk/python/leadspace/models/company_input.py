from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .address_input import AddressInput, AddressInputDict


class CompanyInput(SdkBaseModel):
    lsid: Optional[str] = UNSET
    """Leadspace company identifier; when supplied it is matched on first"""

    ug_lsid: Optional[str] = Field(default=UNSET, alias="ugLsid")
    """Universal Graph company identifier"""

    name: Optional[str] = UNSET
    website: Optional[str] = UNSET
    company_linkedin_url: Optional[str] = Field(default=UNSET, alias="companyLinkedinUrl")
    address: Optional[AddressInput] = UNSET


class CompanyInputDict(TypedDict):
    lsid: NotRequired[str]
    ug_lsid: NotRequired[str]
    name: NotRequired[str]
    website: NotRequired[str]
    company_linkedin_url: NotRequired[str]
    address: NotRequired[AddressInputDict]
