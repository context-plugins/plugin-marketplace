from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .datum_platform_payees_api import DatumPlatformPayeesApi, DatumPlatformPayeesApiDict


class BadRequestErrorSchema(SdkBaseModel):
    type_: str = Field(alias="type")
    """Always "list"."""

    correlation_id: str = Field(alias="correlationId")
    """Unique identifier for this particular occurrence of the problem."""

    data: list[DatumPlatformPayeesApi]
    """Error data."""


class BadRequestErrorSchemaDict(TypedDict):
    type_: str
    correlation_id: str
    data: list[DatumPlatformPayeesApiDict]
