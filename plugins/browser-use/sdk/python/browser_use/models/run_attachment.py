from __future__ import annotations

from uuid import UUID

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .enums.status3 import Status3OrStr


class RunAttachment(SdkBaseModel):
    id: UUID
    name: str
    """Filename shown to the user, e.g. "data.csv"."""

    content_type: str = Field(alias="contentType")
    size_bytes: int = Field(alias="sizeBytes")
    status: Status3OrStr
    """"pending" | "uploaded"."""


class RunAttachmentDict(TypedDict):
    id: UUID
    name: str
    content_type: str
    size_bytes: int
    status: Status3OrStr
