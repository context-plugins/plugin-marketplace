from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel


class UserOverride(SdkBaseModel):
    feature: str = Field(alias="_feature")
    feature_name: str = Field(alias="featureName")
    environment: str = Field(alias="_environment")
    environment_name: str = Field(alias="environmentName")
    variation: str = Field(alias="_variation")
    variation_name: str = Field(alias="variationName")


class UserOverrideDict(TypedDict):
    feature: str
    feature_name: str
    environment: str
    environment_name: str
    variation: str
    variation_name: str
