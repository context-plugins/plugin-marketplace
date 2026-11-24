from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.billing_mode2 import BillingMode2OrStr
from .tag_model import TagModel, TagModelDict


class CreateConnectionRequest(SdkBaseModel):
    location: str
    """The location of the connection."""

    bandwidth: str
    """The bandwidth of the connection."""

    connection_name: str = Field(alias="connectionName")
    """The name of the connection."""

    lag_id: Optional[str] = Field(default=UNSET, alias="lagId")
    """The ID of the LAG."""

    tags: Optional[list[TagModel]] = UNSET
    """The tags to associate with the lag."""

    provider_name: Optional[str] = Field(default=UNSET, alias="providerName")
    """The name of the service provider associated with the requested connection."""

    request_mac_sec: Optional[bool] = Field(default=UNSET, alias="requestMACSec")
    """Indicates whether you want the connection to support MAC Security (MACsec). MAC Security (MACsec) is unavailable
    on hosted connections. For information about MAC Security (MACsec) prerequisites, see MAC Security in Direct Connect
    in the Direct Connect User Guide."""

    billing_mode: Optional[BillingMode2OrStr] = Field(default=UNSET, alias="billingMode")
    """The billing mode for the connection."""


class CreateConnectionRequestDict(TypedDict):
    location: str
    bandwidth: str
    connection_name: str
    lag_id: NotRequired[str]
    tags: NotRequired[list[TagModelDict]]
    provider_name: NotRequired[str]
    request_mac_sec: NotRequired[bool]
    billing_mode: NotRequired[BillingMode2OrStr]
