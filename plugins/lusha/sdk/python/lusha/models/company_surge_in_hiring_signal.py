from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Date, Optional, SdkBaseModel


class CompanySurgeInHiringSignal(SdkBaseModel):
    company_id: Optional[str] = Field(default=UNSET, alias="companyId")
    signal_id: Optional[str] = Field(default=UNSET, alias="signalId")
    signal_date: Optional[Date] = Field(default=UNSET, alias="signalDate")
    new_jobs_posted_last_week: Optional[float] = Field(default=UNSET, alias="newJobsPostedLastWeek")
    historical_avg: Optional[float] = Field(default=UNSET, alias="historicalAvg")
    change_rate_percent: Optional[float] = Field(default=UNSET, alias="changeRatePercent")
    company_name: Optional[str] = Field(default=UNSET, alias="companyName")
    domain: Optional[str] = UNSET


class CompanySurgeInHiringSignalDict(TypedDict):
    company_id: NotRequired[str]
    signal_id: NotRequired[str]
    signal_date: NotRequired[Date]
    new_jobs_posted_last_week: NotRequired[float]
    historical_avg: NotRequired[float]
    change_rate_percent: NotRequired[float]
    company_name: NotRequired[str]
    domain: NotRequired[str]
