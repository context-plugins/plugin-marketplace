from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .data3 import Data3, Data3Dict


class UsersConsents403Error(SdkBaseModel):
    type_: str = Field(alias="type")
    """Always "list"."""

    correlation_id: str = Field(alias="correlationId")
    """Unique identifier for this particular occurrence of the problem."""

    data: list[Data3]
    """Error data."""


class UsersConsents403ErrorDict(TypedDict):
    type_: str
    correlation_id: str
    data: list[Data3Dict]
