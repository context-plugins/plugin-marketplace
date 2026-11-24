from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, OptionalNullable, SdkBaseModel


class RateLimit(SdkBaseModel):
    action: Optional[str] = UNSET
    """The credit action being rate limited"""

    duration: Optional[str] = UNSET
    """The duration of the rate limit window"""

    limit: OptionalNullable[int] = UNSET
    """The maximum number of requests allowed"""

    used: Optional[int] = UNSET
    """The number of requests used in the current window"""

    remaining: OptionalNullable[int] = UNSET
    """The number of requests remaining in the current window"""


class RateLimitDict(TypedDict):
    action: NotRequired[str]
    duration: NotRequired[str]
    limit: NotRequired[int | None]
    used: NotRequired[int]
    remaining: NotRequired[int | None]
