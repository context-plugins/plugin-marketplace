from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class PaymentLinksRequest1(SdkBaseModel):
    reference_id: Optional[str] = UNSET
    """Add or update unique reference number. Max 40 characters."""

    expire_by: Optional[int] = UNSET
    """Updated expiry Unix timestamp."""

    reminder_enable: Optional[bool] = UNSET
    accept_partial: Optional[bool] = UNSET
    notes: Optional[dict[str, str]] = UNSET
    """Key-value pairs for storing custom metadata. Maximum 15 pairs. Each key and value must not exceed 256
    characters."""


class PaymentLinksRequest1Dict(TypedDict):
    reference_id: NotRequired[str]
    expire_by: NotRequired[int]
    reminder_enable: NotRequired[bool]
    accept_partial: NotRequired[bool]
    notes: NotRequired[dict[str, str]]
