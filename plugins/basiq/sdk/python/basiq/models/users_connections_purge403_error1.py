from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .datum2_connections_api import Datum2ConnectionsApi, Datum2ConnectionsApiDict


class UsersConnectionsPurge403Error1(SdkBaseModel):
    correlation_id: str = Field(alias="correlationId")
    """Unique identifier for this particular occurrence of the problem."""

    data: list[Datum2ConnectionsApi]
    """Error data."""

    type_: str = Field(alias="type")
    """Always "list"."""


class UsersConnectionsPurge403Error1Dict(TypedDict):
    correlation_id: str
    data: list[Datum2ConnectionsApiDict]
    type_: str
