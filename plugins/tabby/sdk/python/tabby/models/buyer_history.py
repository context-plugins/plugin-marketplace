from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, RFC3339DateTime, SdkBaseModel


class BuyerHistory(SdkBaseModel):
    """Customer information. ``registered_since`` (as a date of the customer's registration in the App),
    ``loyalty_level`` (as a number of successful orders) and ``wishlist_count`` (paid amount by a customer previously,
    e.g. 500) must be sent for Monthly Billing. ``is_social_networks_connected`` is also required for Monthly
    Billing."""

    registered_since: RFC3339DateTime
    """Date and time the customer got registred with you, in UTC, and displayed in ISO 8601 datetime format."""

    loyalty_level: float = 0.0
    """Customer's loyalty level within your store, should be sent as a number of successfully placed orders in the store
    with any payment methods."""

    wishlist_count: float = 0.0
    """Number of items in Customer's wishlist."""

    is_social_networks_connected: Optional[bool] = UNSET
    """Is social network connected"""

    is_phone_number_verified: Optional[bool] = UNSET
    """Is phone number verified"""

    is_email_verified: Optional[bool] = UNSET
    """Is email verified"""


class BuyerHistoryDict(TypedDict):
    registered_since: RFC3339DateTime
    loyalty_level: float
    wishlist_count: NotRequired[float]
    is_social_networks_connected: NotRequired[bool]
    is_phone_number_verified: NotRequired[bool]
    is_email_verified: NotRequired[bool]
