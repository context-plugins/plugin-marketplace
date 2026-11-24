from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .data4 import Data4, Data4Dict


class UsersConsents500Error1(SdkBaseModel):
    type_: str = Field(alias="type")
    """Always "list"."""

    correlation_id: str = Field(alias="correlationId")
    """Unique identifier for this particular occurrence of the problem."""

    data: list[Data4]
    """Error data."""


class UsersConsents500Error1Dict(TypedDict):
    type_: str
    correlation_id: str
    data: list[Data4Dict]
