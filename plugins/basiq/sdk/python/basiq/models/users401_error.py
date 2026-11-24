from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .datum1_platform_auth_links_api import Datum1PlatformAuthLinksApi, Datum1PlatformAuthLinksApiDict


class Users401Error(SdkBaseModel):
    correlation_id: str = Field(alias="correlationId")
    """Unique identifier for this particular occurrence of the problem."""

    data: list[Datum1PlatformAuthLinksApi]
    """Error data."""

    type_: str = Field(alias="type")
    """Always "list"."""


class Users401ErrorDict(TypedDict):
    correlation_id: str
    data: list[Datum1PlatformAuthLinksApiDict]
    type_: str
