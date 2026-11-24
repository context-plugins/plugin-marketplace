from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .datum1_connect_authentication_api import Datum1ConnectAuthenticationApi, Datum1ConnectAuthenticationApiDict


class Token404Error1(SdkBaseModel):
    type_: str = Field(alias="type")
    """Always "list"."""

    correlation_id: str = Field(alias="correlationId")
    """Unique identifier for this particular occurrence of the problem."""

    data: list[Datum1ConnectAuthenticationApi]
    """Error data."""


class Token404Error1Dict(TypedDict):
    type_: str
    correlation_id: str
    data: list[Datum1ConnectAuthenticationApiDict]
