from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .company_enrich_data import CompanyEnrichData, CompanyEnrichDataDict


class CompanyEnrichResponse(SdkBaseModel):
    request_id: Optional[str] = Field(default=UNSET, alias="requestId")
    """The requestId used in the request"""

    companies: Optional[list[CompanyEnrichData]] = UNSET


class CompanyEnrichResponseDict(TypedDict):
    request_id: NotRequired[str]
    companies: NotRequired[list[CompanyEnrichDataDict]]
