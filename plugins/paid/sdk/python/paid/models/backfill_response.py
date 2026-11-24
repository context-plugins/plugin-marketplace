from __future__ import annotations

from uuid import UUID

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel


class BackfillResponse(SdkBaseModel):
    value_model_id: UUID = Field(alias="valueModelId")
    version: int


class BackfillResponseDict(TypedDict):
    value_model_id: UUID
    version: int
