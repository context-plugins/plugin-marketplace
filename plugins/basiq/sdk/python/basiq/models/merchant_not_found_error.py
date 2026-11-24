from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .datum_enrich_api import DatumEnrichApi, DatumEnrichApiDict


class MerchantNotFoundError(SdkBaseModel):
    type_: str = Field(alias="type")
    """Always "list"."""

    correlation_id: str = Field(alias="correlationId")
    """Unique identifier for this particular occurrence of the problem."""

    data: list[DatumEnrichApi]
    """Error data."""


class MerchantNotFoundErrorDict(TypedDict):
    type_: str
    correlation_id: str
    data: list[DatumEnrichApiDict]
