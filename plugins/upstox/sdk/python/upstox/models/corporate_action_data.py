from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .corporate_action_event_detail import CorporateActionEventDetail, CorporateActionEventDetailDict


class CorporateActionData(SdkBaseModel):
    name: Optional[str] = UNSET
    """Type of corporate action"""

    expiry_date: Optional[str] = UNSET
    """Ex-date or expiry date of the action"""

    amount: Optional[float] = UNSET
    """Amount associated with the action"""

    ratio: Optional[str] = UNSET
    """Ratio for bonus or split actions"""

    event_details: Optional[list[CorporateActionEventDetail]] = UNSET
    """Detailed event fields for the corporate action"""


class CorporateActionDataDict(TypedDict):
    name: NotRequired[str]
    expiry_date: NotRequired[str]
    amount: NotRequired[float]
    ratio: NotRequired[str]
    event_details: NotRequired[list[CorporateActionEventDetailDict]]
