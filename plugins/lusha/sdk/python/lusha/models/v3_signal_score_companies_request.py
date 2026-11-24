from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .v3_signal_score_company_item import V3SignalScoreCompanyItem, V3SignalScoreCompanyItemDict


class V3SignalScoreCompaniesRequest(SdkBaseModel):
    companies: list[V3SignalScoreCompanyItem]


class V3SignalScoreCompaniesRequestDict(TypedDict):
    companies: list[V3SignalScoreCompanyItemDict]
