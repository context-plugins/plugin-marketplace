from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .data3_enrich_api import Data3EnrichApi, Data3EnrichApiDict


class ReportsTypes500Error(SdkBaseModel):
    correlation_id: str = Field(alias="correlationId")
    """Unique identifier for this particular occurrence of the problem."""

    data: list[Data3EnrichApi]
    """Error data."""


class ReportsTypes500ErrorDict(TypedDict):
    correlation_id: str
    data: list[Data3EnrichApiDict]
