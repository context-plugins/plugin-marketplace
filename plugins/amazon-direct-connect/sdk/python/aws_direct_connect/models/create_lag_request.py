from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.billing_mode3 import BillingMode3OrStr
from .tag_model import TagModel, TagModelDict


class CreateLagRequest(SdkBaseModel):
    number_of_connections: int = Field(alias="numberOfConnections")
    """The number of physical dedicated connections initially provisioned and bundled by the LAG. You can have a maximum
    of four connections when the port speed is 1Gbps or 10Gbps, or two when the port speed is 100Gbps or 400Gbps."""

    location: str
    """The location for the LAG."""

    connections_bandwidth: str = Field(alias="connectionsBandwidth")
    """The bandwidth of the individual physical dedicated connections bundled by the LAG. The possible values are
    1Gbps,10Gbps, 100Gbps, and 400Gbps."""

    lag_name: str = Field(alias="lagName")
    """The name of the LAG."""

    connection_id: Optional[str] = Field(default=UNSET, alias="connectionId")
    """The ID of an existing dedicated connection to migrate to the LAG."""

    tags: Optional[list[TagModel]] = UNSET
    """The tags to associate with the LAG."""

    child_connection_tags: Optional[list[TagModel]] = Field(default=UNSET, alias="childConnectionTags")
    """The tags to associate with the automtically created LAGs."""

    provider_name: Optional[str] = Field(default=UNSET, alias="providerName")
    """The name of the service provider associated with the LAG."""

    request_mac_sec: Optional[bool] = Field(default=UNSET, alias="requestMACSec")
    """Indicates whether the connection will support MAC Security (MACsec). All connections in the LAG must be capable
    of supporting MAC Security (MACsec). For information about MAC Security (MACsec) prerequisties, see MACsec
    prerequisties in the Direct Connect User Guide."""

    billing_mode: Optional[BillingMode3OrStr] = Field(default=UNSET, alias="billingMode")
    """The billing mode for the LAG."""


class CreateLagRequestDict(TypedDict):
    number_of_connections: int
    location: str
    connections_bandwidth: str
    lag_name: str
    connection_id: NotRequired[str]
    tags: NotRequired[list[TagModelDict]]
    child_connection_tags: NotRequired[list[TagModelDict]]
    provider_name: NotRequired[str]
    request_mac_sec: NotRequired[bool]
    billing_mode: NotRequired[BillingMode3OrStr]
