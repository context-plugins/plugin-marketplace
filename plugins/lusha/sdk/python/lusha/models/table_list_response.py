from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .table_metadata import TableMetadata, TableMetadataDict
from .v3_billing import V3Billing, V3BillingDict
from .v3_pagination_response import V3PaginationResponse, V3PaginationResponseDict


class TableListResponse(SdkBaseModel):
    data: Optional[list[TableMetadata]] = UNSET
    pagination: Optional[V3PaginationResponse] = UNSET
    billing: Optional[V3Billing] = UNSET
    """Credit usage summary for a V3 API request"""


class TableListResponseDict(TypedDict):
    data: NotRequired[list[TableMetadataDict]]
    pagination: NotRequired[V3PaginationResponseDict]
    billing: NotRequired[V3BillingDict]
