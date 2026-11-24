from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .datum import Datum, DatumDict


class UsersStatements400Error(SdkBaseModel):
    type_: str = Field(alias="type")
    """Always "list"."""

    correlation_id: str = Field(alias="correlationId")
    """Unique identifier for this particular occurrence of the problem."""

    data: list[Datum]
    """Error data."""


class UsersStatements400ErrorDict(TypedDict):
    type_: str
    correlation_id: str
    data: list[DatumDict]
