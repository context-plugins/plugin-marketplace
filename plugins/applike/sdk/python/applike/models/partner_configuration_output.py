from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .enums.required_feature import RequiredFeatureOrStr


class PartnerConfigurationOutput(SdkBaseModel):
    features: list[RequiredFeatureOrStr]
    key: str
    partner_id: int = Field(alias="partnerId")
    """justtrack's internal ID for the partner"""


class PartnerConfigurationOutputDict(TypedDict):
    features: list[RequiredFeatureOrStr]
    key: str
    partner_id: int
