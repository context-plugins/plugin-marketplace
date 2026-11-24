from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .data1 import Data1, Data1Dict
from .v3_billing import V3Billing, V3BillingDict


class EntitiesRemoveResponse(SdkBaseModel):
    data: Optional[Data1] = UNSET
    billing: Optional[V3Billing] = UNSET
    """Credit usage summary for a V3 API request"""


class EntitiesRemoveResponseDict(TypedDict):
    data: NotRequired[Data1Dict]
    billing: NotRequired[V3BillingDict]
