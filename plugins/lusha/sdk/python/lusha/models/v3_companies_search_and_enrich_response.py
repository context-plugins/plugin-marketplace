from __future__ import annotations

from uuid import UUID

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .v3_billing import V3Billing, V3BillingDict
from .v3_search_and_enrich_company_result import V3SearchAndEnrichCompanyResult, V3SearchAndEnrichCompanyResultDict


class V3CompaniesSearchAndEnrichResponse(SdkBaseModel):
    request_id: Optional[UUID] = Field(default=UNSET, alias="requestId")
    results: Optional[list[V3SearchAndEnrichCompanyResult]] = UNSET
    billing: Optional[V3Billing] = UNSET
    """Credit usage summary for a V3 API request"""


class V3CompaniesSearchAndEnrichResponseDict(TypedDict):
    request_id: NotRequired[UUID]
    results: NotRequired[list[V3SearchAndEnrichCompanyResultDict]]
    billing: NotRequired[V3BillingDict]
