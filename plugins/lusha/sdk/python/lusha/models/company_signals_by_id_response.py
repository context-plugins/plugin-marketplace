from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Date, Optional, SdkBaseModel
from .company_signal_data import CompanySignalData, CompanySignalDataDict


class CompanySignalsByIdResponse(SdkBaseModel):
    companies: Optional[dict[str, CompanySignalData]] = UNSET
    end_date: Optional[Date] = Field(default=UNSET, alias="endDate")
    start_date: Optional[Date] = Field(default=UNSET, alias="startDate")
    credit_charged: Optional[int] = Field(default=UNSET, alias="creditCharged")


class CompanySignalsByIdResponseDict(TypedDict):
    companies: NotRequired[dict[str, CompanySignalDataDict]]
    end_date: NotRequired[Date]
    start_date: NotRequired[Date]
    credit_charged: NotRequired[int]
