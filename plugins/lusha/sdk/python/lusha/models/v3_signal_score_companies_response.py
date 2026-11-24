from __future__ import annotations

from uuid import UUID

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .v3_billing import V3Billing, V3BillingDict
from .v3_signal_score_company_result import V3SignalScoreCompanyResult, V3SignalScoreCompanyResultDict


class V3SignalScoreCompaniesResponse(SdkBaseModel):
    request_id: Optional[UUID] = Field(default=UNSET, alias="requestId")
    results: Optional[list[V3SignalScoreCompanyResult]] = UNSET
    billing: Optional[V3Billing] = UNSET
    """Credit usage summary for a V3 API request"""


class V3SignalScoreCompaniesResponseDict(TypedDict):
    request_id: NotRequired[UUID]
    results: NotRequired[list[V3SignalScoreCompanyResultDict]]
    billing: NotRequired[V3BillingDict]
