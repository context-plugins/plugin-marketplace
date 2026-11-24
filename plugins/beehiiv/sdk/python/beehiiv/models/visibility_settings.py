from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.condition_set_operator2 import ConditionSetOperator2OrStr
from .enums.referral_condition2 import ReferralCondition2OrStr


class VisibilitySettings(SdkBaseModel):
    show_on_web: Optional[bool] = UNSET
    """Whether to show the block on the web."""

    show_on_email: Optional[bool] = UNSET
    """Whether to show the block on the email."""

    show_to_anonymous_users_web: Optional[bool] = UNSET
    """Whether to show the block to anonymous users on the web."""

    show_to_free_subscribers: Optional[bool] = UNSET
    """Whether to show the block to free subscribers."""

    show_to_paid_subscribers: Optional[bool] = UNSET
    """Whether to show the block to paid subscribers."""

    show_to_subscribers_with_referral_value: Optional[int] = UNSET
    """The exact referral count required to show the block to subscribers."""

    show_to_subscribers_with_referral_condition: Optional[ReferralCondition2OrStr] = UNSET
    """The condition required to show the block to subscribers."""

    condition_set_ids: Optional[list[str]] = UNSET
    """An optional list of condition set UUIDs to gate this block behind dynamic content targeting. When provided, only
    subscribers matching the specified condition sets will see this block. Condition sets must belong to the same
    publication and be active."""

    condition_set_operator: Optional[ConditionSetOperator2OrStr] = UNSET
    """Instructs how to combine multiple condition sets. Defaults to "or" (subscriber can match any condition). Use
    "and" to show the block if the subscriber meets all conditions."""


class VisibilitySettingsDict(TypedDict):
    show_on_web: NotRequired[bool]
    show_on_email: NotRequired[bool]
    show_to_anonymous_users_web: NotRequired[bool]
    show_to_free_subscribers: NotRequired[bool]
    show_to_paid_subscribers: NotRequired[bool]
    show_to_subscribers_with_referral_value: NotRequired[int]
    show_to_subscribers_with_referral_condition: NotRequired[ReferralCondition2OrStr]
    condition_set_ids: NotRequired[list[str]]
    condition_set_operator: NotRequired[ConditionSetOperator2OrStr]
