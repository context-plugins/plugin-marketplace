from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .filters import Filters, FiltersDict
from .options1 import Options1, Options1Dict
from .v3_pagination_request import V3PaginationRequest, V3PaginationRequestDict


class V3ProspectingCompaniesRequest(SdkBaseModel):
    pagination: V3PaginationRequest
    filters: Filters
    """``filters.contacts`` cannot be combined with company ``searchText``, ``signals``, ``intent``, or ``technologies``
    on the same request — doing so returns ``400`` (contact filters are never silently ignored)."""

    table_id: Optional[str] = Field(default=UNSET, alias="tableId")
    """Optional. If provided, results are also persisted to this table. See the Tables API."""

    options: Optional[Options1] = UNSET


class V3ProspectingCompaniesRequestDict(TypedDict):
    pagination: V3PaginationRequestDict
    filters: FiltersDict
    table_id: NotRequired[str]
    options: NotRequired[Options1Dict]
