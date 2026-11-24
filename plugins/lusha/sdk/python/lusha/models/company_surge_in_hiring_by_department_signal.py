from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Date, Optional, SdkBaseModel


class CompanySurgeInHiringByDepartmentSignal(SdkBaseModel):
    signal_id: Optional[str] = Field(default=UNSET, alias="signalId")
    company_id: Optional[str] = Field(default=UNSET, alias="companyId")
    department: Optional[str] = UNSET
    signal_date: Optional[Date] = Field(default=UNSET, alias="signalDate")
    new_jobs_posted_last4_weeks: Optional[float] = Field(default=UNSET, alias="newJobsPostedLast4Weeks")
    historical_avg: Optional[float] = Field(default=UNSET, alias="historicalAvg")
    change_rate_percent: Optional[float] = Field(default=UNSET, alias="changeRatePercent")
    company_name: Optional[str] = Field(default=UNSET, alias="companyName")
    domain: Optional[str] = UNSET


class CompanySurgeInHiringByDepartmentSignalDict(TypedDict):
    signal_id: NotRequired[str]
    company_id: NotRequired[str]
    department: NotRequired[str]
    signal_date: NotRequired[Date]
    new_jobs_posted_last4_weeks: NotRequired[float]
    historical_avg: NotRequired[float]
    change_rate_percent: NotRequired[float]
    company_name: NotRequired[str]
    domain: NotRequired[str]
