from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel


class ApiV1ReportsDataResponse1(SdkBaseModel):
    name: str
    size_bytes: float = Field(alias="sizeBytes")
    updated_at: str = Field(alias="updatedAt")


class ApiV1ReportsDataResponse1Dict(TypedDict):
    name: str
    size_bytes: float
    updated_at: str
