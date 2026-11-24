from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .connection import Connection, ConnectionDict


class Connections(SdkBaseModel):
    connections: Optional[list[Connection]] = UNSET
    """The connections."""

    next_token: Optional[str] = Field(default=UNSET, alias="nextToken")
    """The token to use to retrieve the next page of results. This value is null when there are no more results to
    return."""


class ConnectionsDict(TypedDict):
    connections: NotRequired[list[ConnectionDict]]
    next_token: NotRequired[str]
