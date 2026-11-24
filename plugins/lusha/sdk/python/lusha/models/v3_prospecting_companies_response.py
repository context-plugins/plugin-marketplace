from __future__ import annotations

from uuid import UUID

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .table_write import TableWrite, TableWriteDict
from .v3_billing import V3Billing, V3BillingDict
from .v3_company_preview import V3CompanyPreview, V3CompanyPreviewDict
from .v3_pagination_response import V3PaginationResponse, V3PaginationResponseDict


class V3ProspectingCompaniesResponse(SdkBaseModel):
    request_id: Optional[UUID] = Field(default=UNSET, alias="requestId")
    results: Optional[list[V3CompanyPreview]] = UNSET
    pagination: Optional[V3PaginationResponse] = UNSET
    table_write: Optional[TableWrite] = Field(default=UNSET, alias="tableWrite")
    """Added to a Prospecting, Enrich, Signals, or Lookalike response when ``tableId`` is passed on the request. The
    primary response is unaffected even if the table write fails."""

    billing: Optional[V3Billing] = UNSET
    """Credit usage summary for a V3 API request"""


class V3ProspectingCompaniesResponseDict(TypedDict):
    request_id: NotRequired[UUID]
    results: NotRequired[list[V3CompanyPreviewDict]]
    pagination: NotRequired[V3PaginationResponseDict]
    table_write: NotRequired[TableWriteDict]
    billing: NotRequired[V3BillingDict]
