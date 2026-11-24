from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .options import Options, OptionsDict
from .v3_pagination_request import V3PaginationRequest, V3PaginationRequestDict
from .v3_prospecting_contact_filters import V3ProspectingContactFilters, V3ProspectingContactFiltersDict


class V3ProspectingContactsRequest(SdkBaseModel):
    pagination: V3PaginationRequest
    filters: V3ProspectingContactFilters
    table_id: Optional[str] = Field(default=UNSET, alias="tableId")
    """Optional. If provided, results are also persisted to this table. See the Tables API."""

    options: Optional[Options] = UNSET


class V3ProspectingContactsRequestDict(TypedDict):
    pagination: V3PaginationRequestDict
    filters: V3ProspectingContactFiltersDict
    table_id: NotRequired[str]
    options: NotRequired[OptionsDict]
