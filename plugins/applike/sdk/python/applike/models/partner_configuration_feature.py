from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class PartnerConfigurationFeature(SdkBaseModel):
    key: str
    value: str


class PartnerConfigurationFeatureDict(TypedDict):
    key: str
    value: str
