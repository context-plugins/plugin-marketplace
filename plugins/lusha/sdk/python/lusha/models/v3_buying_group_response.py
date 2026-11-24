from __future__ import annotations

from uuid import UUID

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .v3_billing import V3Billing, V3BillingDict
from .v3_buying_group_company_result import V3BuyingGroupCompanyResult, V3BuyingGroupCompanyResultDict
from .v3_pagination_response import V3PaginationResponse, V3PaginationResponseDict


class V3BuyingGroupResponse(SdkBaseModel):
    request_id: Optional[UUID] = Field(default=UNSET, alias="requestId")
    results: Optional[list[V3BuyingGroupCompanyResult]] = UNSET
    pagination: Optional[V3PaginationResponse] = UNSET
    billing: Optional[V3Billing] = UNSET
    """Credit usage summary for a V3 API request"""


class V3BuyingGroupResponseDict(TypedDict):
    request_id: NotRequired[UUID]
    results: NotRequired[list[V3BuyingGroupCompanyResultDict]]
    pagination: NotRequired[V3PaginationResponseDict]
    billing: NotRequired[V3BillingDict]
