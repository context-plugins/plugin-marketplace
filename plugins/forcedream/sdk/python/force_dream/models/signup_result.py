from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class SignupResult(SdkBaseModel):
    api_key: Optional[str] = UNSET
    user_id: Optional[str] = UNSET
    live_key: Optional[str] = UNSET
    trial_balance_pence: Optional[int] = UNSET
    trial_balance_gbp: Optional[str] = UNSET
    referral_code: Optional[str] = UNSET
    message: Optional[str] = UNSET


class SignupResultDict(TypedDict):
    api_key: NotRequired[str]
    user_id: NotRequired[str]
    live_key: NotRequired[str]
    trial_balance_pence: NotRequired[int]
    trial_balance_gbp: NotRequired[str]
    referral_code: NotRequired[str]
    message: NotRequired[str]
