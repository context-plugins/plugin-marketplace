from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .datum1_platform_payees_api import Datum1PlatformPayeesApi, Datum1PlatformPayeesApiDict


class NotFoundErrorSchemaError(SdkBaseModel):
    type_: str = Field(alias="type")
    """Always "list"."""

    correlation_id: str = Field(alias="correlationId")
    """Unique identifier for this particular occurrence of the problem."""

    data: list[Datum1PlatformPayeesApi]
    """Error data."""


class NotFoundErrorSchemaErrorDict(TypedDict):
    type_: str
    correlation_id: str
    data: list[Datum1PlatformPayeesApiDict]
