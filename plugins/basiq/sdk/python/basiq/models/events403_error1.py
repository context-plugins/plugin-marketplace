from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .datum3 import Datum3, Datum3Dict


class Events403Error1(SdkBaseModel):
    type_: str = Field(alias="type")
    """Always "list"."""

    correlation_id: str = Field(alias="correlationId")
    """Unique identifier for this particular occurrence of the problem."""

    data: list[Datum3]
    """Error data."""


class Events403Error1Dict(TypedDict):
    type_: str
    correlation_id: str
    data: list[Datum3Dict]
