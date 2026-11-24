from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.check_delivery_type_response import CheckDeliveryTypeResponseOrStr


class ProcessingOptionsResponse(SdkBaseModel):
    """User provided options for processing the payments request."""

    request_pay_faster: Optional[bool] = Field(default=UNSET, alias="requestPayFaster")
    """Set as ``true`` to use BILL Pay Faster. This field is required if ``requestCheckDeliveryType`` is set.

      See `Payments <https://developer.bill.com/docs/ap-payments>`__ in the Guides section for information about BILL
        Pay Faster payments."""

    create_bill: Optional[bool] = Field(default=UNSET, alias="createBill")
    """* Set as ``false`` to create a vendor payment for an existing bill.
    * Set as ``true`` to create a bill for a vendor payment. If ``createBill`` is ``true``, do not set ``billId`` in
        your payment request."""

    request_check_delivery_type: Optional[CheckDeliveryTypeResponseOrStr] = Field(
        default=UNSET, alias="requestCheckDeliveryType"
    )


class ProcessingOptionsResponseDict(TypedDict):
    request_pay_faster: NotRequired[bool]
    create_bill: NotRequired[bool]
    request_check_delivery_type: NotRequired[CheckDeliveryTypeResponseOrStr]
