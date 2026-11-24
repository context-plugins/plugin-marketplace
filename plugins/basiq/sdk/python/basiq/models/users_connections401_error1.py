from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .datum12 import Datum12, Datum12Dict


class UsersConnections401Error1(SdkBaseModel):
    correlation_id: str = Field(alias="correlationId")
    """Unique identifier for this particular occurrence of the problem."""

    data: list[Datum12]
    """Error data."""

    type_: str = Field(alias="type")
    """Always "list"."""


class UsersConnections401Error1Dict(TypedDict):
    correlation_id: str
    data: list[Datum12Dict]
    type_: str
