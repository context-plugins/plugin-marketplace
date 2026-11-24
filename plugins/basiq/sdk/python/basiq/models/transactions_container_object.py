from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .data9 import Data9, Data9Dict


class TransactionsContainerObject(SdkBaseModel):
    """A transaction object is created whenever money is debited or credited from a particular account."""

    type_: str = Field(alias="type")
    """Value is "list"."""

    count: int
    """Count of the transactions in the response."""

    size: int
    """Size of the transactions in the response."""

    data: list[Data9]


class TransactionsContainerObjectDict(TypedDict):
    type_: str
    count: int
    size: int
    data: list[Data9Dict]
