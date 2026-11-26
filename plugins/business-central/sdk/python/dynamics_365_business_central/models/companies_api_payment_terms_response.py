from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .payment_term import PaymentTerm, PaymentTermDict


class CompaniesApiPaymentTermsResponse(SdkBaseModel):
    value: Optional[list[PaymentTerm]] = UNSET


class CompaniesApiPaymentTermsResponseDict(TypedDict):
    value: NotRequired[list[PaymentTermDict]]
