from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class OrganizationSubscription(SdkBaseModel):
    """Config to enabled subscribing to events from other projects in the org."""

    enabled: Optional[bool] = UNSET
    """Required. Enable org level subscription."""


class OrganizationSubscriptionDict(TypedDict):
    enabled: NotRequired[bool]
