from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .google_type_money10 import GoogleTypeMoney10, GoogleTypeMoney10Dict


class GoogleCloudApigeeV1AdjustDeveloperBalanceRequest(SdkBaseModel):
    """Request for AdjustDeveloperBalance."""

    adjustment: Optional[GoogleTypeMoney10] = UNSET
    """* A positive value of ``adjustment`` means that that the API provider wants to adjust the balance for an
        under-charged developer i.e. the balance of the developer will decrease. * A negative value of ``adjustment``
        means that that the API provider wants to adjust the balance for an over-charged developer i.e. the balance of
        the developer will increase. NOTE: An adjustment cannot increase the balance of the developer beyond the balance
        as of the most recent credit. For example, if a developer's balance is updated to be $100, and they spend $10, a
        negative adjustment can only increase the balance of the developer to $100."""


class GoogleCloudApigeeV1AdjustDeveloperBalanceRequestDict(TypedDict):
    adjustment: NotRequired[GoogleTypeMoney10Dict]
