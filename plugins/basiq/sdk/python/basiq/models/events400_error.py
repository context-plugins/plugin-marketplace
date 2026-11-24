from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .datum1_platform_events_api import Datum1PlatformEventsApi, Datum1PlatformEventsApiDict


class Events400Error(SdkBaseModel):
    type_: str = Field(alias="type")
    """Always "list"."""

    correlation_id: str = Field(alias="correlationId")
    """Unique identifier for this particular occurrence of the problem."""

    data: list[Datum1PlatformEventsApi]
    """Error data."""


class Events400ErrorDict(TypedDict):
    type_: str
    correlation_id: str
    data: list[Datum1PlatformEventsApiDict]
