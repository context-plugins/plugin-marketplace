from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class ApiSqlRequest(SdkBaseModel):
    sql: str
    """A single read-only SELECT (or WITH ... SELECT) statement."""


class ApiSqlRequestDict(TypedDict):
    sql: str
