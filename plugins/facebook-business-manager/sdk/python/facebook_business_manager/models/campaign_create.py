from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.buying_type1 import BuyingType1OrStr
from .enums.objective import ObjectiveOrStr
from .enums.status2 import Status2OrStr


class CampaignCreate(SdkBaseModel):
    name: str
    """The name of the campaign"""

    objective: ObjectiveOrStr
    """The campaign objective"""

    status: Status2OrStr
    """The initial status of the campaign"""

    special_ad_categories: list[str]
    """Required special ad categories or empty array if none apply"""

    daily_budget: Optional[str] = UNSET
    """Daily budget in smallest currency unit"""

    lifetime_budget: Optional[str] = UNSET
    """Lifetime budget in smallest currency unit"""

    buying_type: Optional[BuyingType1OrStr] = UNSET


class CampaignCreateDict(TypedDict):
    name: str
    objective: ObjectiveOrStr
    status: Status2OrStr
    special_ad_categories: list[str]
    daily_budget: NotRequired[str]
    lifetime_budget: NotRequired[str]
    buying_type: NotRequired[BuyingType1OrStr]
