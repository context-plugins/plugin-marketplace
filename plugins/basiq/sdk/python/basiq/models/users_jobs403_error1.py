from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .datum2_platform_auth_links_api import Datum2PlatformAuthLinksApi, Datum2PlatformAuthLinksApiDict


class UsersJobs403Error1(SdkBaseModel):
    type_: str = Field(alias="type")
    """Always "list"."""

    correlation_id: str = Field(alias="correlationId")
    """Unique identifier for this particular occurrence of the problem."""

    data: list[Datum2PlatformAuthLinksApi]
    """Error data."""


class UsersJobs403Error1Dict(TypedDict):
    type_: str
    correlation_id: str
    data: list[Datum2PlatformAuthLinksApiDict]
