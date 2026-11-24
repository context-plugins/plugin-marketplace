from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .payment_list_item_response import PaymentListItemResponse, PaymentListItemResponseDict


class PaymentListResponse(SdkBaseModel):
    payment_item_response_list: Optional[list[PaymentListItemResponse]] = Field(
        default=UNSET, alias="paymentItemResponseList"
    )


class PaymentListResponseDict(TypedDict):
    payment_item_response_list: NotRequired[list[PaymentListItemResponseDict]]
