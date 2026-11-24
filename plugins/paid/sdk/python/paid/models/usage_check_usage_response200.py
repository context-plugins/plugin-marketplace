from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class UsageCheckUsageResponse200(SdkBaseModel):
    allowed: Optional[bool] = UNSET
    """Whether usage is allowed"""

    message: Optional[str] = UNSET
    """Human-readable message about the usage check result"""

    event_name: Optional[str] = Field(default=UNSET, alias="eventName")
    """Event name (only present when usage is not allowed)"""

    available: Optional[float] = UNSET
    """Available credits (only present for PrepaidCredits when insufficient)"""

    events_quantity: Optional[float] = Field(default=UNSET, alias="eventsQuantity")
    """Current events quantity (only present when usage exceeds limit)"""

    limit: Optional[float] = UNSET
    """Usage limit (only present when usage exceeds limit)"""


class UsageCheckUsageResponse200Dict(TypedDict):
    allowed: NotRequired[bool]
    message: NotRequired[str]
    event_name: NotRequired[str]
    available: NotRequired[float]
    events_quantity: NotRequired[float]
    limit: NotRequired[float]
