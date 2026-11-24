from __future__ import annotations

from uuid import UUID

from pydantic import Field
from typing_extensions import TypedDict

from ..core import RFC3339DateTime, SdkBaseModel


class ExtensionView(SdkBaseModel):
    id: UUID
    name: str
    version: str
    created_at: RFC3339DateTime = Field(alias="createdAt")


class ExtensionViewDict(TypedDict):
    id: UUID
    name: str
    version: str
    created_at: RFC3339DateTime
