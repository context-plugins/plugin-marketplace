from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import RFC3339DateTime, SdkBaseModel


class FormVersion(SdkBaseModel):
    id: str
    version: int
    schema_hash: str = Field(alias="schemaHash")
    created_at: RFC3339DateTime = Field(alias="createdAt")


class FormVersionDict(TypedDict):
    id: str
    version: int
    schema_hash: str
    created_at: RFC3339DateTime
