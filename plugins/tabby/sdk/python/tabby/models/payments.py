from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, OptionalNullable, SdkBaseModel
from .pagination import Pagination, PaginationDict
from .payment_response import PaymentResponse, PaymentResponseDict


class Payments(SdkBaseModel):
    payments: OptionalNullable[list[PaymentResponse]] = UNSET
    pagination: Optional[Pagination] = UNSET


class PaymentsDict(TypedDict):
    payments: NotRequired[list[PaymentResponseDict] | None]
    pagination: NotRequired[PaginationDict]
