from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .datum2 import Datum2, Datum2Dict


class UsersConnectionsRefresh404Error1(SdkBaseModel):
    correlation_id: str = Field(alias="correlationId")
    """Unique identifier for this particular occurrence of the problem."""

    data: list[Datum2]
    """Error data."""

    type_: str = Field(alias="type")
    """Always "list"."""


class UsersConnectionsRefresh404Error1Dict(TypedDict):
    correlation_id: str
    data: list[Datum2Dict]
    type_: str
