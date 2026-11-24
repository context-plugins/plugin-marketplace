from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.close_reason import CloseReasonOrStr
from .enums.entity_razorpay_qr_codes_api import EntityRazorpayQrCodesApiOrStr
from .enums.status_razorpay_qr_codes_api import StatusRazorpayQrCodesApiOrStr
from .enums.usage_type import UsageTypeOrStr


class QrCode(SdkBaseModel):
    id: Optional[str] = UNSET
    """Unique QR code identifier. Prefix: qr_"""

    entity: Optional[EntityRazorpayQrCodesApiOrStr] = UNSET
    name: Optional[str] = UNSET
    """Label for the QR code."""

    description: Optional[str] = UNSET
    image_url: Optional[str] = UNSET
    """Hosted URL of the QR code image."""

    payment_amount: Optional[int] = UNSET
    """Fixed payment amount in paise. Null for variable-amount QR codes."""

    status: Optional[StatusRazorpayQrCodesApiOrStr] = UNSET
    usage_type: Optional[UsageTypeOrStr] = UNSET
    close_by: Optional[int] = UNSET
    """Unix timestamp when the QR code will auto-close."""

    closed_at: Optional[int] = UNSET
    """Unix timestamp when the QR code was closed."""

    close_reason: Optional[CloseReasonOrStr] = UNSET
    """Why the QR code was closed."""

    customer_id: Optional[str] = UNSET
    """Associated customer ID (cust_*)."""

    payments_amount_received: Optional[int] = UNSET
    """Total amount received via this QR code (paise)."""

    payments_count_received: Optional[int] = UNSET
    """Number of payments received."""

    notes: Optional[dict[str, str]] = UNSET
    """Key-value pairs for storing custom metadata. Maximum 15 pairs. Each key and value must not exceed 256
    characters."""

    created_at: Optional[int] = UNSET


class QrCodeDict(TypedDict):
    id: NotRequired[str]
    entity: NotRequired[EntityRazorpayQrCodesApiOrStr]
    name: NotRequired[str]
    description: NotRequired[str]
    image_url: NotRequired[str]
    payment_amount: NotRequired[int]
    status: NotRequired[StatusRazorpayQrCodesApiOrStr]
    usage_type: NotRequired[UsageTypeOrStr]
    close_by: NotRequired[int]
    closed_at: NotRequired[int]
    close_reason: NotRequired[CloseReasonOrStr]
    customer_id: NotRequired[str]
    payments_amount_received: NotRequired[int]
    payments_count_received: NotRequired[int]
    notes: NotRequired[dict[str, str]]
    created_at: NotRequired[int]
