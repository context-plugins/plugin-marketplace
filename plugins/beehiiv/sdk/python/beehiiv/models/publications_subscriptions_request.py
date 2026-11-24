from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class PublicationsSubscriptionsRequest(SdkBaseModel):
    subscription_ids: list[str]
    """An array of subscription IDs to be updated"""

    new_status: str
    """The new status to set for the subscriptions"""


class PublicationsSubscriptionsRequestDict(TypedDict):
    subscription_ids: list[str]
    new_status: str
