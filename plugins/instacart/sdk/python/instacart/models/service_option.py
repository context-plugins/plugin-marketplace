from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Date, Optional, RFC3339DateTime, SdkBaseModel
from .enums.fulfillment_type import FulfillmentTypeOrStr


class ServiceOption(SdkBaseModel):
    id: Optional[str] = UNSET
    """The unique identifier for the service option."""

    date: Optional[Date] = UNSET
    """The date of the service option."""

    window_starts_at: Optional[RFC3339DateTime] = UNSET
    """The start time of the delivery or pickup window."""

    window_ends_at: Optional[RFC3339DateTime] = UNSET
    """The end time of the delivery or pickup window."""

    fulfillment_type: Optional[FulfillmentTypeOrStr] = UNSET
    """The type of fulfillment for this service option."""


class ServiceOptionDict(TypedDict):
    id: NotRequired[str]
    date: NotRequired[Date]
    window_starts_at: NotRequired[RFC3339DateTime]
    window_ends_at: NotRequired[RFC3339DateTime]
    fulfillment_type: NotRequired[FulfillmentTypeOrStr]
