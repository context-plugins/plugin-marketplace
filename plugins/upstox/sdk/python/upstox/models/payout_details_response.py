from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.status import StatusOrStr
from .payout_details2 import PayoutDetails2, PayoutDetails2Dict


class PayoutDetailsResponse(SdkBaseModel):
    status: Optional[StatusOrStr] = UNSET
    data: Optional[PayoutDetails2] = UNSET
    """Response data for initiate payout request"""


class PayoutDetailsResponseDict(TypedDict):
    status: NotRequired[StatusOrStr]
    data: NotRequired[PayoutDetails2Dict]
