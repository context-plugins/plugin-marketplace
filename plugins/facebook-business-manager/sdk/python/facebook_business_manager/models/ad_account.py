from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, RFC3339DateTime, SdkBaseModel
from .business import Business, BusinessDict


class AdAccount(SdkBaseModel):
    id: Optional[str] = UNSET
    """The ID of the ad account (prefixed with act_)"""

    account_id: Optional[str] = UNSET
    """The numeric account ID"""

    name: Optional[str] = UNSET
    """The name of the ad account"""

    account_status: Optional[int] = UNSET
    """Status of the account. 1 = ACTIVE, 2 = DISABLED, 3 = UNSETTLED, 7 = PENDING_RISK_REVIEW, 8 = PENDING_SETTLEMENT,
    9 = IN_GRACE_PERIOD, 100 = PENDING_CLOSURE, 101 = CLOSED."""

    currency: Optional[str] = UNSET
    """Currency code used by the account (ISO 4217)"""

    timezone_name: Optional[str] = UNSET
    """Timezone name for the ad account"""

    amount_spent: Optional[str] = UNSET
    """Total amount spent by the account in account currency"""

    balance: Optional[str] = UNSET
    """Current remaining account balance"""

    spend_cap: Optional[str] = UNSET
    """Spend cap for the account"""

    business: Optional[Business] = UNSET
    """The business associated with this ad account"""

    created_time: Optional[RFC3339DateTime] = UNSET


class AdAccountDict(TypedDict):
    id: NotRequired[str]
    account_id: NotRequired[str]
    name: NotRequired[str]
    account_status: NotRequired[int]
    currency: NotRequired[str]
    timezone_name: NotRequired[str]
    amount_spent: NotRequired[str]
    balance: NotRequired[str]
    spend_cap: NotRequired[str]
    business: NotRequired[BusinessDict]
    created_time: NotRequired[RFC3339DateTime]
