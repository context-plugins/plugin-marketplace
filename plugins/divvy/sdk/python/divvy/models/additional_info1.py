from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.tax_id_type_response import TaxIdTypeResponseOrStr


class AdditionalInfo1(SdkBaseModel):
    tax_id: Optional[str] = Field(default=UNSET, alias="taxId")
    """Vendor tax ID. This value is required by the IRS for tax purposes."""

    tax_id_type: Optional[TaxIdTypeResponseOrStr] = Field(default=UNSET, alias="taxIdType")
    track1099: Optional[bool] = UNSET
    """Set as ``true`` if the vendor is eligible to receive an IRS form 1099 from the payer"""

    lead_time_in_days: Optional[int] = Field(default=UNSET, alias="leadTimeInDays")
    """Vendor payment lead time in days"""

    combine_payments: Optional[bool] = Field(default=UNSET, alias="combinePayments")
    """Set as ``true`` to combine a bulk payment made to the vendor with ``POST /v3/payments/bulk``. The default value
    is ``true``."""

    payment_term_id: Optional[str] = Field(default=UNSET, alias="paymentTermId")
    """BILL-generated ID of the payment term. Use payment terms to set the number of days that customers have to pay a
    vendor bill."""

    company_name: Optional[str] = Field(default=UNSET, alias="companyName")
    """Vendor business name. This value is required by the IRS for tax purposes."""


class AdditionalInfo1Dict(TypedDict):
    tax_id: NotRequired[str]
    tax_id_type: NotRequired[TaxIdTypeResponseOrStr]
    track1099: NotRequired[bool]
    lead_time_in_days: NotRequired[int]
    combine_payments: NotRequired[bool]
    payment_term_id: NotRequired[str]
    company_name: NotRequired[str]
