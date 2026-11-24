from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .delivery import Delivery, DeliveryDict
from .destination import Destination, DestinationDict


class DeliveryHealth(SdkBaseModel):
    """Epoch-millisecond timestamps throughout, matching the dashboard's Activity data."""

    window_days: int = Field(alias="windowDays")
    """The telemetry retention window the counts cover. They are not all-time totals."""

    destinations: list[Destination]
    deliveries: list[Delivery]
    """The bounded recent-delivery list, newest first — the same rows the form's Activity page shows."""

    has_more: bool = Field(alias="hasMore")


class DeliveryHealthDict(TypedDict):
    window_days: int
    destinations: list[DestinationDict]
    deliveries: list[DeliveryDict]
    has_more: bool
