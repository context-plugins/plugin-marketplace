from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Date, Optional, SdkBaseModel
from .contact_signal_data import ContactSignalData, ContactSignalDataDict


class ContactSignalsByIdResponse(SdkBaseModel):
    contacts: Optional[dict[str, ContactSignalData]] = UNSET
    end_date: Optional[Date] = Field(default=UNSET, alias="endDate")
    start_date: Optional[Date] = Field(default=UNSET, alias="startDate")
    credit_charged: Optional[int] = Field(default=UNSET, alias="creditCharged")


class ContactSignalsByIdResponseDict(TypedDict):
    contacts: NotRequired[dict[str, ContactSignalDataDict]]
    end_date: NotRequired[Date]
    start_date: NotRequired[Date]
    credit_charged: NotRequired[int]
