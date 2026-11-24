from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, OptionalNullable, SdkBaseModel
from .credit_usage import CreditUsage, CreditUsageDict
from .enums.state_enum import StateEnumOrStr
from .rate_limit import RateLimit, RateLimitDict


class UserModel(SdkBaseModel):
    id: Optional[int] = UNSET
    """RocketReach internal unique user ID"""

    first_name: OptionalNullable[str] = UNSET
    """First name of the user"""

    last_name: OptionalNullable[str] = UNSET
    """Last name of the user"""

    email: OptionalNullable[str] = UNSET
    """Email for the user"""

    state: Optional[StateEnumOrStr] = UNSET
    credit_usage: Optional[list[CreditUsage]] = UNSET
    rate_limits: Optional[list[RateLimit]] = UNSET


class UserModelDict(TypedDict):
    id: NotRequired[int]
    first_name: NotRequired[str | None]
    last_name: NotRequired[str | None]
    email: NotRequired[str | None]
    state: NotRequired[StateEnumOrStr]
    credit_usage: NotRequired[list[CreditUsageDict]]
    rate_limits: NotRequired[list[RateLimitDict]]
