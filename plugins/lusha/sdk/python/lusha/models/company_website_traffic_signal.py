from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Date, Optional, SdkBaseModel


class CompanyWebsiteTrafficSignal(SdkBaseModel):
    company_id: Optional[str] = Field(default=UNSET, alias="companyId")
    signal_id: Optional[str] = Field(default=UNSET, alias="signalId")
    signal_date: Optional[Date] = Field(default=UNSET, alias="signalDate")
    historical_avg: Optional[float] = Field(default=UNSET, alias="historicalAvg")
    last_month_visits: Optional[float] = Field(default=UNSET, alias="lastMonthVisits")
    change_rate_percent: Optional[float] = Field(default=UNSET, alias="changeRatePercent")
    company_name: Optional[str] = Field(default=UNSET, alias="companyName")
    domain: Optional[str] = UNSET


class CompanyWebsiteTrafficSignalDict(TypedDict):
    company_id: NotRequired[str]
    signal_id: NotRequired[str]
    signal_date: NotRequired[Date]
    historical_avg: NotRequired[float]
    last_month_visits: NotRequired[float]
    change_rate_percent: NotRequired[float]
    company_name: NotRequired[str]
    domain: NotRequired[str]
