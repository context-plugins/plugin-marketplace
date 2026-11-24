from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .filter_group import FilterGroup, FilterGroupDict
from .order_by_clause import OrderByClause, OrderByClauseDict


class EntityQueryRequest(SdkBaseModel):
    """Advanced query request with structured filter conditions"""

    filter_group: Optional[FilterGroup] = Field(default=UNSET, alias="filterGroup")
    """A group of filter conditions joined by a logical operator"""

    selected_fields: Optional[list[str]] = Field(default=UNSET, alias="selectedFields")
    """List of field names to include in the response"""

    order_by: Optional[list[OrderByClause]] = Field(default=UNSET, alias="orderBy")
    start: Optional[int] = UNSET
    """Zero-based offset for pagination"""

    limit: Optional[int] = UNSET
    """Maximum number of records to return"""


class EntityQueryRequestDict(TypedDict):
    filter_group: NotRequired[FilterGroupDict]
    selected_fields: NotRequired[list[str]]
    order_by: NotRequired[list[OrderByClauseDict]]
    start: NotRequired[int]
    limit: NotRequired[int]
