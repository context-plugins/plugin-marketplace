from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .data2 import Data2, Data2Dict
from .v3_billing import V3Billing, V3BillingDict


class EntitiesAddResponse(SdkBaseModel):
    data: Optional[Data2] = UNSET
    billing: Optional[V3Billing] = UNSET
    """Credit usage summary for a V3 API request"""


class EntitiesAddResponseDict(TypedDict):
    data: NotRequired[Data2Dict]
    billing: NotRequired[V3BillingDict]
