from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .datum6 import Datum6, Datum6Dict


class Reports500Error21(SdkBaseModel):
    type_: str = Field(alias="type")
    """Always "list"."""

    correlation_id: str = Field(alias="correlationId")
    """Unique identifier for this particular occurrence of the problem."""

    data: list[Datum6]


class Reports500Error21Dict(TypedDict):
    type_: str
    correlation_id: str
    data: list[Datum6Dict]
