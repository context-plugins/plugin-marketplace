from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .whois_historical_item import WhoisHistoricalItem, WhoisHistoricalItemDict


class WhoisHistoricalResponse(SdkBaseModel):
    status: Optional[bool] = UNSET
    whois: Optional[str] = UNSET
    total_records: Optional[str] = UNSET
    whois_domains_historical: Optional[list[WhoisHistoricalItem]] = UNSET


class WhoisHistoricalResponseDict(TypedDict):
    status: NotRequired[bool]
    whois: NotRequired[str]
    total_records: NotRequired[str]
    whois_domains_historical: NotRequired[list[WhoisHistoricalItemDict]]
