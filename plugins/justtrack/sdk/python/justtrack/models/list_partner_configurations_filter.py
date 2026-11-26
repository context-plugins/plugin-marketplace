from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.feature import FeatureOrStr


class ListPartnerConfigurationsFilter(SdkBaseModel):
    partner_id: Optional[int] = Field(default=UNSET, alias="partnerId")
    """justtrack's internal ID for the partner"""

    feature: Optional[FeatureOrStr] = UNSET


class ListPartnerConfigurationsFilterDict(TypedDict):
    partner_id: NotRequired[int]
    feature: NotRequired[FeatureOrStr]
