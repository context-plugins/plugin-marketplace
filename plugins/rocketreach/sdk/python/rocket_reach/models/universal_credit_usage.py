from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, RFC3339DateTime, SdkBaseModel


class UniversalCreditUsage(SdkBaseModel):
    credits_allocated: Optional[int] = UNSET
    """Total credits allocated to the user"""

    credits_used: Optional[int] = UNSET
    """Total credits used by the user"""

    credits_remaining: Optional[int] = UNSET
    """Total credits remaining for the user"""

    last_synced: Optional[RFC3339DateTime] = UNSET
    """Timestamp of the last sync of the user credit usage data"""


class UniversalCreditUsageDict(TypedDict):
    credits_allocated: NotRequired[int]
    credits_used: NotRequired[int]
    credits_remaining: NotRequired[int]
    last_synced: NotRequired[RFC3339DateTime]
