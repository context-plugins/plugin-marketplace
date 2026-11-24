from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.status import StatusOrStr


class CampaignUpdate(SdkBaseModel):
    name: Optional[str] = UNSET
    """Updated campaign name"""

    status: Optional[StatusOrStr] = UNSET
    daily_budget: Optional[str] = UNSET
    """Updated daily budget"""

    lifetime_budget: Optional[str] = UNSET
    """Updated lifetime budget"""


class CampaignUpdateDict(TypedDict):
    name: NotRequired[str]
    status: NotRequired[StatusOrStr]
    daily_budget: NotRequired[str]
    lifetime_budget: NotRequired[str]
