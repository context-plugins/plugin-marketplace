from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .data3_enrich_api import Data3EnrichApi, Data3EnrichApiDict


class Enrich500Error1(SdkBaseModel):
    type_: str = Field(alias="type")
    """Always "list"."""

    correlation_id: str = Field(alias="correlationId")
    """Unique identifier for this particular occurrence of the problem."""

    data: list[Data3EnrichApi]
    """Error data."""


class Enrich500Error1Dict(TypedDict):
    type_: str
    correlation_id: str
    data: list[Data3EnrichApiDict]
