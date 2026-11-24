from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel


class ListPartnerConfigurationFeaturesFilter(SdkBaseModel):
    app_id: int = Field(alias="appId")
    """justtrack's internal ID for the app"""

    partner_id: int = Field(alias="partnerId")
    """justtrack's internal ID for the partner"""


class ListPartnerConfigurationFeaturesFilterDict(TypedDict):
    app_id: int
    partner_id: int
