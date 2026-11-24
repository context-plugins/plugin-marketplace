from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .datum5 import Datum5, Datum5Dict


class Jobs400Error1(SdkBaseModel):
    type_: str = Field(alias="type")
    """Always "list"."""

    correlation_id: str = Field(alias="correlationId")
    """Unique identifier for this particular occurrence of the problem."""

    data: list[Datum5]
    """Error data."""


class Jobs400Error1Dict(TypedDict):
    type_: str
    correlation_id: str
    data: list[Datum5Dict]
