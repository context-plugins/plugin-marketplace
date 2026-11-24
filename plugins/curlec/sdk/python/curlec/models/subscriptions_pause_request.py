from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.pause_at import PauseAtOrStr


class SubscriptionsPauseRequest(SdkBaseModel):
    pause_at: Optional[PauseAtOrStr] = UNSET
    """When to pause. 'now' = immediately; 'cycle_end' = after current cycle."""


class SubscriptionsPauseRequestDict(TypedDict):
    pause_at: NotRequired[PauseAtOrStr]
