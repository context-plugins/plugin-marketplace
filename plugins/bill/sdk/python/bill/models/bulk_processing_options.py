from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.check_delivery_type_request import CheckDeliveryTypeRequestOrStr


class BulkProcessingOptions(SdkBaseModel):
    """User provided options for processing the payments request."""

    request_pay_faster: Optional[bool] = Field(default=UNSET, alias="requestPayFaster")
    """Set as ``true`` to use BILL Pay Faster. This field is required if ``requestCheckDeliveryType`` is set.

      See `Payments <https://developer.bill.com/docs/ap-payments>`__ in the Guides section for information about BILL
        Pay Faster payments."""

    request_check_delivery_type: Optional[CheckDeliveryTypeRequestOrStr] = Field(
        default=UNSET, alias="requestCheckDeliveryType"
    )


class BulkProcessingOptionsDict(TypedDict):
    request_pay_faster: NotRequired[bool]
    request_check_delivery_type: NotRequired[CheckDeliveryTypeRequestOrStr]
