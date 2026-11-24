from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class V1TotpgeneratorRequest(SdkBaseModel):
    secret: str
    """Base32-encoded shared secret"""

    digits: Optional[int] = UNSET
    """Number of digits in token"""

    period: Optional[int] = UNSET
    """Time period in seconds"""


class V1TotpgeneratorRequestDict(TypedDict):
    secret: str
    digits: NotRequired[int]
    period: NotRequired[int]
