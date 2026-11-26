from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class SubscriptionStatusDto(SdkBaseModel):
    """Subscription status information."""

    enabled: Optional[bool] = UNSET
    """Set as ``true`` if the subscription is enabled. When you create a new subscription, this value is set as ``true``
    by default."""

    reason: Optional[str] = UNSET
    """Reason for changing the subscription status. This field is used by BILL for informing you when the ``enabled``
    field is set as ``false``."""


class SubscriptionStatusDtoDict(TypedDict):
    enabled: NotRequired[bool]
    reason: NotRequired[str]
