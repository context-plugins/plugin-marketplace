from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class Subscription(SdkBaseModel):
    """available subscription"""

    id: Optional[int] = UNSET
    """Subscription ID"""

    name: Optional[str] = UNSET
    """Subscription name"""

    description: Optional[str] = UNSET
    """Subscription description"""


class SubscriptionDict(TypedDict):
    id: NotRequired[int]
    name: NotRequired[str]
    description: NotRequired[str]
