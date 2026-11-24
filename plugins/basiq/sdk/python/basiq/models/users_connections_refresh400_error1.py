from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .datum1_connections_api import Datum1ConnectionsApi, Datum1ConnectionsApiDict


class UsersConnectionsRefresh400Error1(SdkBaseModel):
    type_: str = Field(alias="type")
    """Always "list"."""

    correlation_id: str = Field(alias="correlationId")
    """Unique identifier for this particular occurrence of the problem."""

    data: list[Datum1ConnectionsApi]
    """Error data."""


class UsersConnectionsRefresh400Error1Dict(TypedDict):
    type_: str
    correlation_id: str
    data: list[Datum1ConnectionsApiDict]
