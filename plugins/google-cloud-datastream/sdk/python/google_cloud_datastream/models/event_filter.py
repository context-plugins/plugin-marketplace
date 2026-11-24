from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class EventFilter(SdkBaseModel):
    """Represents a filter for included data on a stream object."""

    sql_where_clause: Optional[str] = Field(default=UNSET, alias="sqlWhereClause")
    """An SQL-query Where clause selecting which data should be included, not including the "WHERE" keyword. e.g.,
    ``t.key1 = 'value1' AND t.key2 = 'value2'``"""


class EventFilterDict(TypedDict):
    sql_where_clause: NotRequired[str]
