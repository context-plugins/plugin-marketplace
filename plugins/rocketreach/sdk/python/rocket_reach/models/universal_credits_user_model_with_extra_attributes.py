from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, OptionalNullable, SdkBaseModel
from .enums.state_enum import StateEnumOrStr
from .plan2 import Plan2, Plan2Dict
from .rate_limit import RateLimit, RateLimitDict
from .universal_credit_usage import UniversalCreditUsage, UniversalCreditUsageDict
from .universal_credit_usage_by_action import UniversalCreditUsageByAction, UniversalCreditUsageByActionDict


class UniversalCreditsUserModelWithExtraAttributes(SdkBaseModel):
    id: Optional[int] = UNSET
    """RocketReach internal unique user ID"""

    first_name: OptionalNullable[str] = UNSET
    """First name of the user"""

    last_name: OptionalNullable[str] = UNSET
    """Last name of the user"""

    email: OptionalNullable[str] = UNSET
    """Email for the user"""

    state: Optional[StateEnumOrStr] = UNSET
    plan: Optional[Plan2] = UNSET
    """Object representing the user's plan"""

    api_key: Optional[str] = UNSET
    """API Key for the user"""

    api_key_domain: OptionalNullable[str] = UNSET
    daily_api_num_calls: OptionalNullable[int] = UNSET
    """Number of API calls made today by the user"""

    daily_api_limit: Optional[str] = UNSET
    """Maximum number of daily API calls for the user"""

    credit_usage: Optional[UniversalCreditUsage] = UNSET
    """Objects representing the user's credit usage"""

    credit_usage_by_action: Optional[list[UniversalCreditUsageByAction]] = UNSET
    """Objects representing the user's credit usage by credit_action type"""

    rate_limits: Optional[list[RateLimit]] = UNSET
    """Objects representing the user's rate limits by request type"""


class UniversalCreditsUserModelWithExtraAttributesDict(TypedDict):
    id: NotRequired[int]
    first_name: NotRequired[str | None]
    last_name: NotRequired[str | None]
    email: NotRequired[str | None]
    state: NotRequired[StateEnumOrStr]
    plan: NotRequired[Plan2Dict]
    api_key: NotRequired[str]
    api_key_domain: NotRequired[str | None]
    daily_api_num_calls: NotRequired[int | None]
    daily_api_limit: NotRequired[str]
    credit_usage: NotRequired[UniversalCreditUsageDict]
    credit_usage_by_action: NotRequired[list[UniversalCreditUsageByActionDict]]
    rate_limits: NotRequired[list[RateLimitDict]]
