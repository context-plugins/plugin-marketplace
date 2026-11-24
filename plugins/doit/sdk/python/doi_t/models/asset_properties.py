from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .subscription import Subscription, SubscriptionDict


class AssetProperties(SdkBaseModel):
    """Additional properties associated with an asset, such as subscription and customer details."""

    customer_domain: Optional[str] = Field(default=UNSET, alias="customerDomain")
    """The primary domain of the customer associated with this asset."""

    customer_id: Optional[str] = Field(default=UNSET, alias="customerID")
    """The unique identifier of the customer in the reseller or partner portal."""

    reseller: Optional[str] = UNSET
    """The reseller domain through which this asset was provisioned."""

    subscription: Optional[Subscription] = UNSET
    """Subscription details for a G Suite or Office 365 asset."""


class AssetPropertiesDict(TypedDict):
    customer_domain: NotRequired[str]
    customer_id: NotRequired[str]
    reseller: NotRequired[str]
    subscription: NotRequired[SubscriptionDict]
