from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class FeatureSdkVisibility(SdkBaseModel):
    mobile: bool
    client: bool
    server: bool


class FeatureSdkVisibilityDict(TypedDict):
    mobile: bool
    client: bool
    server: bool
