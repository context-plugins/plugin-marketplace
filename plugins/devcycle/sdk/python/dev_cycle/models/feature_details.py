from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class FeatureDetails(SdkBaseModel):
    key: str
    name: str
    id: str


class FeatureDetailsDict(TypedDict):
    key: str
    name: str
    id: str
