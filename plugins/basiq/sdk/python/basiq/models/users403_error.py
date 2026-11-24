from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .datum2_connect_users_api import Datum2ConnectUsersApi, Datum2ConnectUsersApiDict


class Users403Error(SdkBaseModel):
    type_: str = Field(alias="type")
    """Always "list"."""

    correlation_id: str = Field(alias="correlationId")
    """Unique identifier for this particular occurrence of the problem."""

    data: list[Datum2ConnectUsersApi]
    """Error data."""


class Users403ErrorDict(TypedDict):
    type_: str
    correlation_id: str
    data: list[Datum2ConnectUsersApiDict]
