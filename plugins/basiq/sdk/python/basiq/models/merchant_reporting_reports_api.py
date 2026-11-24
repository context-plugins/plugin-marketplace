from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .phone_number_reporting_reports_api import PhoneNumberReportingReportsApi, PhoneNumberReportingReportsApiDict


class MerchantReportingReportsApi(SdkBaseModel):
    id: str
    """id"""

    business_name: str = Field(alias="businessName")
    """Merchant name"""

    abn: str = Field(alias="ABN")
    """ABN"""

    logo_master: str = Field(alias="logoMaster")
    """full merchant logo"""

    logo_thumb: str = Field(alias="logoThumb")
    """thumbnail merchant logo"""

    phone_number: Optional[PhoneNumberReportingReportsApi] = Field(default=UNSET, alias="phoneNumber")
    website: str
    """Merchant Website"""


class MerchantReportingReportsApiDict(TypedDict):
    id: str
    business_name: str
    abn: str
    logo_master: str
    logo_thumb: str
    phone_number: NotRequired[PhoneNumberReportingReportsApiDict]
    website: str
