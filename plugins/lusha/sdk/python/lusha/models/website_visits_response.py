from __future__ import annotations

from uuid import UUID

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .v3_billing import V3Billing, V3BillingDict
from .website_visits_company_result import WebsiteVisitsCompanyResult, WebsiteVisitsCompanyResultDict
from .website_visits_pagination import WebsiteVisitsPagination, WebsiteVisitsPaginationDict


class WebsiteVisitsResponse(SdkBaseModel):
    request_id: Optional[UUID] = Field(default=UNSET, alias="requestId")
    results: Optional[list[WebsiteVisitsCompanyResult]] = UNSET
    pagination: Optional[WebsiteVisitsPagination] = UNSET
    billing: Optional[V3Billing] = UNSET
    """Credit usage summary for a V3 API request"""


class WebsiteVisitsResponseDict(TypedDict):
    request_id: NotRequired[UUID]
    results: NotRequired[list[WebsiteVisitsCompanyResultDict]]
    pagination: NotRequired[WebsiteVisitsPaginationDict]
    billing: NotRequired[V3BillingDict]
