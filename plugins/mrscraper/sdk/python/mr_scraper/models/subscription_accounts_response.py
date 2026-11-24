from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .auth_subscription_account import AuthSubscriptionAccount, AuthSubscriptionAccountDict


class SubscriptionAccountsResponse(SdkBaseModel):
    data: Optional[AuthSubscriptionAccount] = UNSET
    message: Optional[str] = UNSET


class SubscriptionAccountsResponseDict(TypedDict):
    data: NotRequired[AuthSubscriptionAccountDict]
    message: NotRequired[str]
