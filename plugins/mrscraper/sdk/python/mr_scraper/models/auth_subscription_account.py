from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .auth_user import AuthUser, AuthUserDict


class AuthSubscriptionAccount(SdkBaseModel):
    api_token_name: Optional[str] = Field(default=UNSET, alias="apiTokenName")
    ends_at: Optional[str] = Field(default=UNSET, alias="endsAt")
    id: Optional[str] = UNSET
    is_enterprise: Optional[bool] = Field(default=UNSET, alias="isEnterprise")
    max_concurrency: Optional[int] = Field(default=UNSET, alias="maxConcurrency")
    quantity: Optional[int] = UNSET
    rate_limit: Optional[int] = Field(default=UNSET, alias="rateLimit")
    rate_ttl: Optional[int] = Field(default=UNSET, alias="rateTtl")
    stripe_status: Optional[str] = Field(default=UNSET, alias="stripeStatus")
    stripe_subscription_id: Optional[str] = Field(default=UNSET, alias="stripeSubscriptionId")
    subscription_item_id: Optional[str] = Field(default=UNSET, alias="subscriptionItemId")
    token_limit: Optional[int] = Field(default=UNSET, alias="tokenLimit")
    token_usage: Optional[int] = Field(default=UNSET, alias="tokenUsage")
    trial_ends_at: Optional[str] = Field(default=UNSET, alias="trialEndsAt")
    user: Optional[AuthUser] = UNSET
    user_id: Optional[str] = Field(default=UNSET, alias="userId")


class AuthSubscriptionAccountDict(TypedDict):
    api_token_name: NotRequired[str]
    ends_at: NotRequired[str]
    id: NotRequired[str]
    is_enterprise: NotRequired[bool]
    max_concurrency: NotRequired[int]
    quantity: NotRequired[int]
    rate_limit: NotRequired[int]
    rate_ttl: NotRequired[int]
    stripe_status: NotRequired[str]
    stripe_subscription_id: NotRequired[str]
    subscription_item_id: NotRequired[str]
    token_limit: NotRequired[int]
    token_usage: NotRequired[int]
    trial_ends_at: NotRequired[str]
    user: NotRequired[AuthUserDict]
    user_id: NotRequired[str]
