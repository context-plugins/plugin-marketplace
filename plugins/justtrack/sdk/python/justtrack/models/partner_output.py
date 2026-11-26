from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import RFC3339DateTime, SdkBaseModel


class PartnerOutput(SdkBaseModel):
    id: int
    name: str
    created_at: RFC3339DateTime = Field(alias="createdAt")
    updated_at: RFC3339DateTime = Field(alias="updatedAt")


class PartnerOutputDict(TypedDict):
    id: int
    name: str
    created_at: RFC3339DateTime
    updated_at: RFC3339DateTime
