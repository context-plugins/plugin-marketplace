from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import RFC3339DateTime, SdkBaseModel


class AnalyticBundleSocialTeamApi(SdkBaseModel):
    id: str
    count: float
    bio_item_id: str = Field(alias="bioItemId")
    device_type: dict[str, float] = Field(alias="deviceType")
    country: dict[str, float]
    created_at: RFC3339DateTime | None = Field(alias="createdAt")
    updated_at: RFC3339DateTime | None = Field(alias="updatedAt")


class AnalyticBundleSocialTeamApiDict(TypedDict):
    id: str
    count: float
    bio_item_id: str
    device_type: dict[str, float]
    country: dict[str, float]
    created_at: RFC3339DateTime | None
    updated_at: RFC3339DateTime | None
