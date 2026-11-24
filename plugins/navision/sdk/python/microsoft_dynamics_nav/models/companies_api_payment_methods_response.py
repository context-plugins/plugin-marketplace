from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .payment_method import PaymentMethod, PaymentMethodDict


class CompaniesApiPaymentMethodsResponse(SdkBaseModel):
    value: Optional[list[PaymentMethod]] = UNSET


class CompaniesApiPaymentMethodsResponseDict(TypedDict):
    value: NotRequired[list[PaymentMethodDict]]
