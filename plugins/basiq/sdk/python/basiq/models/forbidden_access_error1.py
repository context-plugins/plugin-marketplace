from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .datum3_platform_payees_api import Datum3PlatformPayeesApi, Datum3PlatformPayeesApiDict


class ForbiddenAccessError1(SdkBaseModel):
    type_: str = Field(alias="type")
    """Always "list"."""

    correlation_id: str = Field(alias="correlationId")
    """Unique identifier for this particular occurrence of the problem."""

    data: list[Datum3PlatformPayeesApi]
    """Error data."""


class ForbiddenAccessError1Dict(TypedDict):
    type_: str
    correlation_id: str
    data: list[Datum3PlatformPayeesApiDict]
