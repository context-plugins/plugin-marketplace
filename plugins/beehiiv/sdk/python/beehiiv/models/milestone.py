from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .milestone_reward import MilestoneReward, MilestoneRewardDict


class Milestone(SdkBaseModel):
    """The milestone object."""

    id: str
    """A unique prefixed id of the milestone."""

    auto_fulfill: bool
    """Only available with a promo code reward type. This indicates that an email will automatically be sent when the
    milestone is reached containing the reward promo code."""

    num_referrals: int
    """The number of referrals needed to reach this milestone."""

    reward: MilestoneReward
    """The reward object."""


class MilestoneDict(TypedDict):
    id: str
    auto_fulfill: bool
    num_referrals: int
    reward: MilestoneRewardDict
