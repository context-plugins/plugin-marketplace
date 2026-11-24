from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class PartialPayment(SdkBaseModel):
    """Rename partial payment labels (for localisation)."""

    min_amount_label: Optional[str] = UNSET
    partial_amount_label: Optional[str] = UNSET
    partial_amount_description: Optional[str] = UNSET
    full_amount_label: Optional[str] = UNSET


class PartialPaymentDict(TypedDict):
    min_amount_label: NotRequired[str]
    partial_amount_label: NotRequired[str]
    partial_amount_description: NotRequired[str]
    full_amount_label: NotRequired[str]
