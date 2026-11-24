from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .connection import Connection, ConnectionDict


class ConnectionList(SdkBaseModel):
    data: list[Connection]
    next_cursor: str | None
    """Always ``null``: not paginated."""


class ConnectionListDict(TypedDict):
    data: list[ConnectionDict]
    next_cursor: str | None
