from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .acquirer_data_razorpay_refunds_api import AcquirerDataRazorpayRefundsApi, AcquirerDataRazorpayRefundsApiDict
from .enums.entity_razorpay_refunds_api import EntityRazorpayRefundsApiOrStr
from .enums.speed_processed import SpeedProcessedOrStr
from .enums.speed_requested import SpeedRequestedOrStr
from .enums.status_razorpay_refunds_api import StatusRazorpayRefundsApiOrStr


class RefundRazorpayRefundsApi(SdkBaseModel):
    id: Optional[str] = UNSET
    """Unique refund identifier. Prefix: rfnd_"""

    entity: Optional[EntityRazorpayRefundsApiOrStr] = UNSET
    amount: Optional[int] = UNSET
    """Refund amount in paise."""

    currency: Optional[str] = UNSET
    payment_id: Optional[str] = UNSET
    """The original payment ID (pay_*)."""

    notes: Optional[dict[str, str]] = UNSET
    """Key-value pairs for storing custom metadata. Maximum 15 pairs. Each key and value must not exceed 256
    characters."""

    receipt: Optional[str] = UNSET
    """Your internal reference identifier."""

    acquirer_data: Optional[AcquirerDataRazorpayRefundsApi] = UNSET
    """Bank reference numbers for tracking: RRN (UPI/netbanking), ARN (cards), UTR (NEFT/RTGS)."""

    created_at: Optional[int] = UNSET
    batch_id: Optional[str] = UNSET
    """Set if refund was part of a batch upload."""

    status: Optional[StatusRazorpayRefundsApiOrStr] = UNSET
    """pending: being processed. processed: credited to customer. failed: refund failed."""

    speed_requested: Optional[SpeedRequestedOrStr] = UNSET
    """normal: 5-7 business days. optimum: instant if available, falls back to normal."""

    speed_processed: Optional[SpeedProcessedOrStr] = UNSET
    """Actual processing mode used."""


class RefundRazorpayRefundsApiDict(TypedDict):
    id: NotRequired[str]
    entity: NotRequired[EntityRazorpayRefundsApiOrStr]
    amount: NotRequired[int]
    currency: NotRequired[str]
    payment_id: NotRequired[str]
    notes: NotRequired[dict[str, str]]
    receipt: NotRequired[str]
    acquirer_data: NotRequired[AcquirerDataRazorpayRefundsApiDict]
    created_at: NotRequired[int]
    batch_id: NotRequired[str]
    status: NotRequired[StatusRazorpayRefundsApiOrStr]
    speed_requested: NotRequired[SpeedRequestedOrStr]
    speed_processed: NotRequired[SpeedProcessedOrStr]
