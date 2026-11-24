from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .email_record import EmailRecord, EmailRecordDict
from .job_history_entry import JobHistoryEntry, JobHistoryEntryDict
from .phone_record import PhoneRecord, PhoneRecordDict


class EnrichedPerson(SdkBaseModel):
    first_name: Optional[str] = Field(default=UNSET, alias="firstName")
    last_name: Optional[str] = Field(default=UNSET, alias="lastName")
    job_title: Optional[str] = Field(default=UNSET, alias="jobTitle")
    seniorities: Optional[list[str]] = UNSET
    departments: Optional[list[str]] = UNSET
    company_name: Optional[str] = Field(default=UNSET, alias="companyName")
    company_domain: Optional[str] = Field(default=UNSET, alias="companyDomain")
    country: Optional[str] = UNSET
    linked_in_url: Optional[str] = Field(default=UNSET, alias="linkedInUrl")
    external_id: Optional[str] = Field(default=UNSET, alias="externalID")
    emails: Optional[list[EmailRecord]] = UNSET
    mobile_phones: Optional[list[PhoneRecord]] = Field(default=UNSET, alias="mobilePhones")
    job_history: Optional[list[JobHistoryEntry]] = Field(default=UNSET, alias="jobHistory")
    status: Optional[str] = UNSET


class EnrichedPersonDict(TypedDict):
    first_name: NotRequired[str]
    last_name: NotRequired[str]
    job_title: NotRequired[str]
    seniorities: NotRequired[list[str]]
    departments: NotRequired[list[str]]
    company_name: NotRequired[str]
    company_domain: NotRequired[str]
    country: NotRequired[str]
    linked_in_url: NotRequired[str]
    external_id: NotRequired[str]
    emails: NotRequired[list[EmailRecordDict]]
    mobile_phones: NotRequired[list[PhoneRecordDict]]
    job_history: NotRequired[list[JobHistoryEntryDict]]
    status: NotRequired[str]
