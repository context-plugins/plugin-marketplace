from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class CompanyBulkRequest(SdkBaseModel):
    id: str
    domain: Optional[str] = UNSET
    fqdn: Optional[str] = UNSET
    name: Optional[str] = UNSET
    company_id: Optional[str] = Field(default=UNSET, alias="companyId")


class CompanyBulkRequestDict(TypedDict):
    id: str
    domain: NotRequired[str]
    fqdn: NotRequired[str]
    name: NotRequired[str]
    company_id: NotRequired[str]
