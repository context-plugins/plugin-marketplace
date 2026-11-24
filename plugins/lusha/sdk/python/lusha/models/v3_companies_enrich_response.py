from __future__ import annotations

from uuid import UUID

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .table_write import TableWrite, TableWriteDict
from .v3_billing import V3Billing, V3BillingDict
from .v3_enriched_company import V3EnrichedCompany, V3EnrichedCompanyDict


class V3CompaniesEnrichResponse(SdkBaseModel):
    request_id: Optional[UUID] = Field(default=UNSET, alias="requestId")
    results: Optional[list[V3EnrichedCompany]] = UNSET
    table_write: Optional[TableWrite] = Field(default=UNSET, alias="tableWrite")
    """Added to a Prospecting, Enrich, Signals, or Lookalike response when ``tableId`` is passed on the request. The
    primary response is unaffected even if the table write fails."""

    billing: Optional[V3Billing] = UNSET
    """Credit usage summary for a V3 API request"""


class V3CompaniesEnrichResponseDict(TypedDict):
    request_id: NotRequired[UUID]
    results: NotRequired[list[V3EnrichedCompanyDict]]
    table_write: NotRequired[TableWriteDict]
    billing: NotRequired[V3BillingDict]
