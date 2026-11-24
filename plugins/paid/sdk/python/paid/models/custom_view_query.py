from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class CustomViewQuery(SdkBaseModel):
    id: str
    """Stable identifier for this query's result set; the render bundle reads ``data[<id>]``."""

    sql: str
    """A single ClickHouse SELECT (or WITH … SELECT). Do NOT add a customer filter — the database scopes every query to
    the viewing customer at run time. Return clearly-named columns; bake any date range into WHERE."""


class CustomViewQueryDict(TypedDict):
    id: str
    sql: str
