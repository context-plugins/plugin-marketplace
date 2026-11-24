from __future__ import annotations

from uuid import UUID

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel


class Target(SdkBaseModel):
    ai_system_id: UUID = Field(alias="aiSystemId")
    name: str
    approved_classification: str | None = Field(alias="approvedClassification")
    personal_data: bool = Field(alias="personalData")


class TargetDict(TypedDict):
    ai_system_id: UUID
    name: str
    approved_classification: str | None
    personal_data: bool
