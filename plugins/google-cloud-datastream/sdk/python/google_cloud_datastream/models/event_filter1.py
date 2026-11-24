from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class EventFilter1(SdkBaseModel):
    """Optional. Optional event filter. If not set, or empty, the backfill will be performed on the entire object. This
    is currently used for partial backfill and only supported for SQL sources."""

    sql_where_clause: Optional[str] = Field(default=UNSET, alias="sqlWhereClause")
    """An SQL-query Where clause selecting which data should be included, not including the "WHERE" keyword. e.g.,
    ``t.key1 = 'value1' AND t.key2 = 'value2'``"""


class EventFilter1Dict(TypedDict):
    sql_where_clause: NotRequired[str]
