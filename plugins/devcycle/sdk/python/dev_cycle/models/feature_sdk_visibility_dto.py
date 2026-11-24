from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class FeatureSdkVisibilityDto(SdkBaseModel):
    mobile: bool
    client: bool
    server: bool


class FeatureSdkVisibilityDtoDict(TypedDict):
    mobile: bool
    client: bool
    server: bool
