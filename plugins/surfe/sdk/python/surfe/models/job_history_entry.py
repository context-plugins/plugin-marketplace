from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class JobHistoryEntry(SdkBaseModel):
    company_name: Optional[str] = Field(default=UNSET, alias="companyName")
    company_domain: Optional[str] = Field(default=UNSET, alias="companyDomain")
    job_title: Optional[str] = Field(default=UNSET, alias="jobTitle")
    start_date: Optional[str] = Field(default=UNSET, alias="startDate")
    end_date: Optional[str] = Field(default=UNSET, alias="endDate")


class JobHistoryEntryDict(TypedDict):
    company_name: NotRequired[str]
    company_domain: NotRequired[str]
    job_title: NotRequired[str]
    start_date: NotRequired[str]
    end_date: NotRequired[str]
