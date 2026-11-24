from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class Raw(SdkBaseModel):
    """Standard raw SQL query"""

    sql: str


class RawDict(TypedDict):
    sql: str
