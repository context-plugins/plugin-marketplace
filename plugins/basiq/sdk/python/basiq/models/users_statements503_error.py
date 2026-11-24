from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .datum11 import Datum11, Datum11Dict


class UsersStatements503Error(SdkBaseModel):
    type_: str = Field(alias="type")
    """Always "list"."""

    correlation_id: str = Field(alias="correlationId")
    """Unique identifier for this particular occurrence of the problem."""

    data: list[Datum11]
    """Error data."""


class UsersStatements503ErrorDict(TypedDict):
    type_: str
    correlation_id: str
    data: list[Datum11Dict]
