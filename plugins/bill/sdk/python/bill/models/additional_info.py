from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class AdditionalInfo(SdkBaseModel):
    """Vendor additional information."""

    tax_id: Optional[str] = Field(default=UNSET, alias="taxId")
    tax_id_type: Optional[str] = Field(default=UNSET, alias="taxIdType")
    track1099: Optional[bool] = UNSET
    lead_time_in_days: Optional[int] = Field(default=UNSET, alias="leadTimeInDays")
    combine_payments: Optional[bool] = Field(default=UNSET, alias="combinePayments")
    company_name: Optional[str] = Field(default=UNSET, alias="companyName")
    payment_term_id: Optional[str] = Field(default=UNSET, alias="paymentTermId")


class AdditionalInfoDict(TypedDict):
    tax_id: NotRequired[str]
    tax_id_type: NotRequired[str]
    track1099: NotRequired[bool]
    lead_time_in_days: NotRequired[int]
    combine_payments: NotRequired[bool]
    company_name: NotRequired[str]
    payment_term_id: NotRequired[str]
