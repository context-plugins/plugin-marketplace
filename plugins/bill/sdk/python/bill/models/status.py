from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.subscription_actor_dto import SubscriptionActorDtoOrStr


class Status(SdkBaseModel):
    enabled: Optional[bool] = UNSET
    """Set as ``true`` if the subscription is enabled. When you create a new subscription, this value is set as ``true``
    by default."""

    reason: Optional[str] = UNSET
    """Reason for changing the subscription status. This field is used by BILL for informing you when the ``enabled``
    field is set as ``false``."""

    actor: Optional[SubscriptionActorDtoOrStr] = UNSET


class StatusDict(TypedDict):
    enabled: NotRequired[bool]
    reason: NotRequired[str]
    actor: NotRequired[SubscriptionActorDtoOrStr]
