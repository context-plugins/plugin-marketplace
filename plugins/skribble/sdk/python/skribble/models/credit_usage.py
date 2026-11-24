from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class CreditUsage(SdkBaseModel):
    endpoint: Optional[str] = UNSET
    """The API endpoint being consumed"""

    requests: Optional[int] = UNSET
    """Number of credits consumed by the endpoint call"""

    credits: Optional[int] = UNSET
    """The number of credits consumed through the corresponding endpoint"""


class CreditUsageDict(TypedDict):
    endpoint: NotRequired[str]
    requests: NotRequired[int]
    credits: NotRequired[int]
