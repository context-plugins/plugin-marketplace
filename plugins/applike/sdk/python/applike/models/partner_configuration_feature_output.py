from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel


class PartnerConfigurationFeatureOutput(SdkBaseModel):
    app_id: int = Field(alias="appId")
    """justtrack's internal ID for the app"""

    partner_id: int = Field(alias="partnerId")
    """justtrack's internal ID for the partner"""

    key: str
    value: str


class PartnerConfigurationFeatureOutputDict(TypedDict):
    app_id: int
    partner_id: int
    key: str
    value: str
