from __future__ import annotations

from typing import Literal

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.usage import UsageOrStr


class PaymentsQrCodesRequest(SdkBaseModel):
    type_: Literal["upi_qr"] = Field(default="upi_qr", alias="type")
    """QR code type. Only upi_qr is supported (on-demand feature requiring merchant activation)."""

    name: str
    """Label for the QR code."""

    usage: UsageOrStr
    """single_use: auto-closes after first successful payment (requires fixed_amount=true). multiple_use: stays open for
    multiple payments."""

    fixed_amount: bool
    """true: fixed amount QR (required for single_use). false: customer enters amount at scan time."""

    payment_amount: Optional[int] = UNSET
    """Fixed payment amount in paise. Required when fixed_amount=true."""

    description: Optional[str] = UNSET
    customer_id: Optional[str] = UNSET
    """Associate QR code with a customer (cust_*)."""

    close_by: Optional[int] = UNSET
    """Unix timestamp for auto-close. Maximum 45 days from creation for single_use."""

    notes: Optional[dict[str, str]] = UNSET
    """Key-value pairs for storing custom metadata. Maximum 15 pairs. Each key and value must not exceed 256
    characters."""


class PaymentsQrCodesRequestDict(TypedDict):
    type_: Literal["upi_qr"]
    name: str
    usage: UsageOrStr
    fixed_amount: bool
    payment_amount: NotRequired[int]
    description: NotRequired[str]
    customer_id: NotRequired[str]
    close_by: NotRequired[int]
    notes: NotRequired[dict[str, str]]
