from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .contact_point_api_dto import ContactPointApiDto, ContactPointApiDtoDict


class ContactPointResult(SdkBaseModel):
    """Single contact point response."""

    data: ContactPointApiDto
    """Contact point used to deliver monitor notifications."""


class ContactPointResultDict(TypedDict):
    data: ContactPointApiDtoDict
