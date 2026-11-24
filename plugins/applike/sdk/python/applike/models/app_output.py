from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import RFC3339DateTime, SdkBaseModel
from .enums.required_platform import RequiredPlatformOrStr


class AppOutput(SdkBaseModel):
    created_at: RFC3339DateTime = Field(alias="createdAt")
    bundle_id: str = Field(alias="bundleId")
    id: int
    """justtrack's internal ID for the app"""

    name: str
    """the name given to this app"""

    platform: RequiredPlatformOrStr
    """identifier of the platform"""

    store_id: str = Field(alias="storeId")
    updated_at: RFC3339DateTime = Field(alias="updatedAt")


class AppOutputDict(TypedDict):
    created_at: RFC3339DateTime
    bundle_id: str
    id: int
    name: str
    platform: RequiredPlatformOrStr
    store_id: str
    updated_at: RFC3339DateTime
