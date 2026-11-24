from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .data2 import Data2, Data2Dict


class UsersConsents401Error(SdkBaseModel):
    correlation_id: str = Field(alias="correlationId")
    """Unique identifier for this particular occurrence of the problem."""

    data: list[Data2]
    """Error data."""

    type_: str = Field(alias="type")
    """Always "list"."""


class UsersConsents401ErrorDict(TypedDict):
    correlation_id: str
    data: list[Data2Dict]
    type_: str
