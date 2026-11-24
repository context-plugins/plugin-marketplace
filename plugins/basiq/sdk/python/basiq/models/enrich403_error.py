from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .data2_enrich_api import Data2EnrichApi, Data2EnrichApiDict


class Enrich403Error(SdkBaseModel):
    type_: str = Field(alias="type")
    """Always "list"."""

    correlation_id: str = Field(alias="correlationId")
    """Unique identifier for this particular occurrence of the problem."""

    data: list[Data2EnrichApi]
    """Error data."""


class Enrich403ErrorDict(TypedDict):
    type_: str
    correlation_id: str
    data: list[Data2EnrichApiDict]
