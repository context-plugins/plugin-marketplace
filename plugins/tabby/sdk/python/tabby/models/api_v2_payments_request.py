from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .order_tabby_api_reference_payments_api import (
    OrderTabbyApiReferencePaymentsApi,
    OrderTabbyApiReferencePaymentsApiDict,
)


class ApiV2PaymentsRequest(SdkBaseModel):
    order: Optional[OrderTabbyApiReferencePaymentsApi] = UNSET


class ApiV2PaymentsRequestDict(TypedDict):
    order: NotRequired[OrderTabbyApiReferencePaymentsApiDict]
