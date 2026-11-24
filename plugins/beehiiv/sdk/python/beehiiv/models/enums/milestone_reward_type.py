from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class MilestoneRewardType(str, Enum):
    """What type of reward this is.<br>``physical`` - A product which must be sent to the subscriber.<br>``promo_code``
    - A code that is redeemable for goods or services."""

    PHYSICAL = "physical"
    PROMO_CODE = "promo_code"
    DIGITAL = "digital"
    PREMIUM_GIFT = "premium_gift"

    __str__ = str.__str__


MilestoneRewardTypeOrStr: TypeAlias = Annotated[MilestoneRewardType | str, open_enum_validator(MilestoneRewardType)]
