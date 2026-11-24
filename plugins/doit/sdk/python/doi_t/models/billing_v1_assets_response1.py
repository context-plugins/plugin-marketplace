from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .asset_properties import AssetProperties, AssetPropertiesDict


class BillingV1AssetsResponse1(SdkBaseModel):
    id: Optional[str] = UNSET
    properties: Optional[AssetProperties] = UNSET
    """Additional properties associated with an asset, such as subscription and customer details."""

    type_: Optional[str] = Field(default=UNSET, alias="type")


class BillingV1AssetsResponse1Dict(TypedDict):
    id: NotRequired[str]
    properties: NotRequired[AssetPropertiesDict]
    type_: NotRequired[str]
