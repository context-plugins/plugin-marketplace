from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .datum1 import Datum1, Datum1Dict


class UsersExpenses403Error(SdkBaseModel):
    correlation_id: str = Field(alias="correlationId")
    """Unique identifier for this particular occurrence of the problem."""

    data: list[Datum1]
    """Error data."""

    type_: str = Field(alias="type")
    """Always "list"."""


class UsersExpenses403ErrorDict(TypedDict):
    correlation_id: str
    data: list[Datum1Dict]
    type_: str
