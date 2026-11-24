from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .contact_point_api_dto import ContactPointApiDto, ContactPointApiDtoDict


class ContactPointListResult(SdkBaseModel):
    """Paginated list of contact points."""

    total: int
    """Total number of matching contact points across all pages."""

    data: list[ContactPointApiDto]
    """Contact points returned for the requested page."""


class ContactPointListResultDict(TypedDict):
    total: int
    data: list[ContactPointApiDtoDict]
