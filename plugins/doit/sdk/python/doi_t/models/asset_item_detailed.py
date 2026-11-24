from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .asset_properties import AssetProperties, AssetPropertiesDict


class AssetItemDetailed(SdkBaseModel):
    """Detailed information about a single asset, including subscription properties."""

    create_time: Optional[int] = Field(default=UNSET, alias="createTime")
    """The time when the asset was created, in milliseconds since the epoch."""

    id: Optional[str] = UNSET
    """The unique identifier of the asset."""

    name: Optional[str] = UNSET
    """A human-readable label for the asset, typically combining the product name and domain or account ID."""

    quantity: Optional[int] = UNSET
    """The number of licenses or seats currently assigned to this asset."""

    type_: Optional[str] = Field(default=UNSET, alias="type")
    """The asset type, e.g. g-suite, office-365, google-cloud, amazon-web-services, or microsoft-azure."""

    url: Optional[str] = UNSET
    """A link to the asset details page in the DoiT console."""

    properties: Optional[AssetProperties] = UNSET
    """Additional properties associated with an asset, such as subscription and customer details."""


class AssetItemDetailedDict(TypedDict):
    create_time: NotRequired[int]
    id: NotRequired[str]
    name: NotRequired[str]
    quantity: NotRequired[int]
    type_: NotRequired[str]
    url: NotRequired[str]
    properties: NotRequired[AssetPropertiesDict]
