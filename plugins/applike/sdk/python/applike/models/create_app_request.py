from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .enums.required_platform import RequiredPlatformOrStr


class CreateAppRequest(SdkBaseModel):
    bundle_id: str = Field(alias="bundleId")
    icon_url: str = Field(alias="iconUrl")
    name: str
    """the name given to this app"""

    platform: RequiredPlatformOrStr
    """identifier of the platform"""

    store_id: str = Field(alias="storeId")


class CreateAppRequestDict(TypedDict):
    bundle_id: str
    icon_url: str
    name: str
    platform: RequiredPlatformOrStr
    store_id: str
