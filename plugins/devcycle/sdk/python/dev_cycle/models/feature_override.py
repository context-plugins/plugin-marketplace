from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel


class FeatureOverride(SdkBaseModel):
    environment: str = Field(alias="_environment")
    variation: str = Field(alias="_variation")


class FeatureOverrideDict(TypedDict):
    environment: str
    variation: str
