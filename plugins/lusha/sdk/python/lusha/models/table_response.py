from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .table_status_data import TableStatusData, TableStatusDataDict
from .v3_billing import V3Billing, V3BillingDict


class TableResponse(SdkBaseModel):
    data: Optional[TableStatusData] = UNSET
    """Response payload for Get Table — TableDto fields plus live entity/column counts."""

    billing: Optional[V3Billing] = UNSET
    """Credit usage summary for a V3 API request"""


class TableResponseDict(TypedDict):
    data: NotRequired[TableStatusDataDict]
    billing: NotRequired[V3BillingDict]
