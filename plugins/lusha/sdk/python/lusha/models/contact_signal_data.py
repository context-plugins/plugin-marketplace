from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .contact_signal import ContactSignal, ContactSignalDict


class ContactSignalData(SdkBaseModel):
    person_id: Optional[str] = Field(default=UNSET, alias="personId")
    company_change: Optional[list[ContactSignal]] = Field(default=UNSET, alias="companyChange")
    promotion: Optional[list[ContactSignal]] = UNSET


class ContactSignalDataDict(TypedDict):
    person_id: NotRequired[str]
    company_change: NotRequired[list[ContactSignalDict]]
    promotion: NotRequired[list[ContactSignalDict]]
