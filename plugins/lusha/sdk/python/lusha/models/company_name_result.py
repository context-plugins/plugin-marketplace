from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class CompanyNameResult(SdkBaseModel):
    company_id: Optional[float] = Field(default=UNSET, alias="companyId")
    name: Optional[str] = UNSET
    logo_url: Optional[str] = Field(default=UNSET, alias="logoUrl")
    fqdn: Optional[str] = UNSET


class CompanyNameResultDict(TypedDict):
    company_id: NotRequired[float]
    name: NotRequired[str]
    logo_url: NotRequired[str]
    fqdn: NotRequired[str]
