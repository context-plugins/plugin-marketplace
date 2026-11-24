from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class AdvertisementOpportunity(SdkBaseModel):
    id: str
    """The ID of the opportunity."""

    advertiser_name: str
    """The name of the advertiser."""

    payout_rate: str
    """The amount you'll earn."""

    advertisement_kind: str
    """What kind of an ad it is. With or without logo."""

    send_by_window_start_at: int
    """The earliest this ad can be sent. Measured in seconds since the Unix epoch."""

    send_by_window_end_at: int
    """When this ad needs to be sent by. Measured in seconds since the Unix epoch."""


class AdvertisementOpportunityDict(TypedDict):
    id: str
    advertiser_name: str
    payout_rate: str
    advertisement_kind: str
    send_by_window_start_at: int
    send_by_window_end_at: int
