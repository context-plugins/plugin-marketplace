from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .enums.milestone_reward_type import MilestoneRewardTypeOrStr


class MilestoneReward(SdkBaseModel):
    """The reward object."""

    id: str
    """A unique prefixed id of the reward."""

    name: str
    """The name given to the reward at creation."""

    description: str
    """The description given to the name at creation."""

    image_url: str
    """A URL of an image to be displayed with the reward."""

    type_: MilestoneRewardTypeOrStr = Field(alias="type")
    """What type of reward this is.<br>``physical`` - A product which must be sent to the subscriber.<br>``promo_code``
    - A code that is redeemable for goods or services."""


class MilestoneRewardDict(TypedDict):
    id: str
    name: str
    description: str
    image_url: str
    type_: MilestoneRewardTypeOrStr
