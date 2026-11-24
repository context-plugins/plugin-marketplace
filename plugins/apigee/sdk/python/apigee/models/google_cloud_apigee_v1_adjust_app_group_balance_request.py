from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .google_type_money9 import GoogleTypeMoney9, GoogleTypeMoney9Dict


class GoogleCloudApigeeV1AdjustAppGroupBalanceRequest(SdkBaseModel):
    """Request for AdjustAppGroupBalance."""

    adjustment: Optional[GoogleTypeMoney9] = UNSET
    """Required. * A positive value of ``adjustment`` means that that the API provider wants to adjust the balance for
    an under-charged AppGroup i.e. the balance of the AppGroup will decrease. * A negative value of ``adjustment`` is
    not supported. Use credit balance API instead."""


class GoogleCloudApigeeV1AdjustAppGroupBalanceRequestDict(TypedDict):
    adjustment: NotRequired[GoogleTypeMoney9Dict]
