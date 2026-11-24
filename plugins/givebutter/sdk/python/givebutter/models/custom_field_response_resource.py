from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel


class CustomFieldResponseResource(SdkBaseModel):
    id: int
    field_id: int
    title: str
    description: str | None
    type_: str = Field(alias="type")
    value: str
    created_at: str
    updated_at: str


class CustomFieldResponseResourceDict(TypedDict):
    id: int
    field_id: int
    title: str
    description: str | None
    type_: str
    value: str
    created_at: str
    updated_at: str
