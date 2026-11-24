from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .api_credits import ApiCredits, ApiCreditsDict
from .api_subscription import ApiSubscription, ApiSubscriptionDict


class AccountUsageResponse(SdkBaseModel):
    api_key: Optional[str] = Field(default=UNSET, alias="apiKey")
    api_credits: Optional[ApiCredits] = Field(default=UNSET, alias="apiCredits")
    api_subscription: Optional[ApiSubscription] = Field(default=UNSET, alias="apiSubscription")


class AccountUsageResponseDict(TypedDict):
    api_key: NotRequired[str]
    api_credits: NotRequired[ApiCreditsDict]
    api_subscription: NotRequired[ApiSubscriptionDict]
