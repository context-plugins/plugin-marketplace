from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .datum2_platform_connectors_api import Datum2PlatformConnectorsApi, Datum2PlatformConnectorsApiDict


class Events401Error1(SdkBaseModel):
    correlation_id: str = Field(alias="correlationId")
    """Unique identifier for this particular occurrence of the problem."""

    data: list[Datum2PlatformConnectorsApi]
    """Error data."""

    type_: str = Field(alias="type")
    """Always "list"."""


class Events401Error1Dict(TypedDict):
    correlation_id: str
    data: list[Datum2PlatformConnectorsApiDict]
    type_: str
