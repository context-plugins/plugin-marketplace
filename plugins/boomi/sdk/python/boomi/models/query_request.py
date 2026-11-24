from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .query_filter import QueryFilter, QueryFilterDict


class QueryRequest(SdkBaseModel):
    """Request body for querying platform objects with filter criteria."""

    query_filter: Optional[QueryFilter] = Field(default=UNSET, alias="QueryFilter")
    """Filter expression for narrowing query results."""


class QueryRequestDict(TypedDict):
    query_filter: NotRequired[QueryFilterDict]
