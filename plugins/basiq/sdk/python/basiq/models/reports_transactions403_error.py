from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .data10 import Data10, Data10Dict


class ReportsTransactions403Error(SdkBaseModel):
    type_: str = Field(alias="type")
    """Always "list"."""

    correlation_id: str = Field(alias="correlationId")
    """Unique identifier for this particular occurrence of the problem."""

    data: list[Data10]


class ReportsTransactions403ErrorDict(TypedDict):
    type_: str
    correlation_id: str
    data: list[Data10Dict]
