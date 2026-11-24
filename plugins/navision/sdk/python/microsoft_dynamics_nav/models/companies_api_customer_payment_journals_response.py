from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .customer_payment_journal import CustomerPaymentJournal, CustomerPaymentJournalDict


class CompaniesApiCustomerPaymentJournalsResponse(SdkBaseModel):
    value: Optional[list[CustomerPaymentJournal]] = UNSET


class CompaniesApiCustomerPaymentJournalsResponseDict(TypedDict):
    value: NotRequired[list[CustomerPaymentJournalDict]]
