from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .table_entity import TableEntity, TableEntityDict
from .v3_billing import V3Billing, V3BillingDict
from .v3_pagination_response import V3PaginationResponse, V3PaginationResponseDict


class EntitiesGetResponse(SdkBaseModel):
    data: Optional[list[TableEntity]] = UNSET
    pagination: Optional[V3PaginationResponse] = UNSET
    billing: Optional[V3Billing] = UNSET
    """Credit usage summary for a V3 API request"""


class EntitiesGetResponseDict(TypedDict):
    data: NotRequired[list[TableEntityDict]]
    pagination: NotRequired[V3PaginationResponseDict]
    billing: NotRequired[V3BillingDict]
