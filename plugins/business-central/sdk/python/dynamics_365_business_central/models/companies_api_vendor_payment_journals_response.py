from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .vendor_payment_journal import VendorPaymentJournal, VendorPaymentJournalDict


class CompaniesApiVendorPaymentJournalsResponse(SdkBaseModel):
    value: Optional[list[VendorPaymentJournal]] = UNSET


class CompaniesApiVendorPaymentJournalsResponseDict(TypedDict):
    value: NotRequired[list[VendorPaymentJournalDict]]
