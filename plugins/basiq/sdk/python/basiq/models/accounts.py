from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .datum10 import Datum10, Datum10Dict


class Accounts(SdkBaseModel):
    type_: str = Field(alias="type")
    """Type always "list"."""

    data: list[Datum10]
    """Accounts details"""


class AccountsDict(TypedDict):
    type_: str
    data: list[Datum10Dict]
