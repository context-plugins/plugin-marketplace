from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, RFC3339DateTime, SdkBaseModel


class AdminSetState(SdkBaseModel):
    enabled: Optional[bool] = UNSET
    """Indicates if endpoint is set to enabled or not by the admin"""

    timestamp: Optional[RFC3339DateTime] = UNSET
    """The timestamp when the admin last set the state of the endpoint"""


class AdminSetStateDict(TypedDict):
    enabled: NotRequired[bool]
    timestamp: NotRequired[RFC3339DateTime]
