from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class DisputeOrderItem(SdkBaseModel):
    reference_id: str
    """Reference id from payment."""

    title: str
    """Order item title."""

    unit_price: str
    """Order item unit price."""


class DisputeOrderItemDict(TypedDict):
    reference_id: str
    title: str
    unit_price: str
