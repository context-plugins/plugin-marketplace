from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .data11 import Data11, Data11Dict


class EventsTypes503Error(SdkBaseModel):
    type_: str = Field(alias="type")
    """Always "list"."""

    correlation_id: str = Field(alias="correlationId")
    """Unique identifier for this particular occurrence of the problem."""

    data: list[Data11]
    """Error data."""


class EventsTypes503ErrorDict(TypedDict):
    type_: str
    correlation_id: str
    data: list[Data11Dict]
