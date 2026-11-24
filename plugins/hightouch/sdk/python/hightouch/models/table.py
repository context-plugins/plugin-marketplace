from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class Table(SdkBaseModel):
    """Table-based query that fetches on a table instead of SQL"""

    name: str


class TableDict(TypedDict):
    name: str
