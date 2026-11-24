from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .get_user_connection_data import GetUserConnectionData, GetUserConnectionDataDict


class UserGetConnection(SdkBaseModel):
    """Container object containing connection data."""

    type_: str = Field(alias="type")
    """Always "list"."""

    count: int
    """Count of accounts."""

    data: list[GetUserConnectionData]
    """Connections data."""


class UserGetConnectionDict(TypedDict):
    type_: str
    count: int
    data: list[GetUserConnectionDataDict]
