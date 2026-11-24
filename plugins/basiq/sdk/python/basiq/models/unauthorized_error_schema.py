from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .datum2_platform_payees_api import Datum2PlatformPayeesApi, Datum2PlatformPayeesApiDict


class UnauthorizedErrorSchema(SdkBaseModel):
    type_: str = Field(alias="type")
    """Always "list"."""

    correlation_id: str = Field(alias="correlationId")
    """Unique identifier for this particular occurrence of the problem."""

    data: list[Datum2PlatformPayeesApi]
    """Error data."""


class UnauthorizedErrorSchemaDict(TypedDict):
    type_: str
    correlation_id: str
    data: list[Datum2PlatformPayeesApiDict]
