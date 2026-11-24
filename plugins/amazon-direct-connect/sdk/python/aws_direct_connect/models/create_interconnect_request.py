from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .tag_model import TagModel, TagModelDict


class CreateInterconnectRequest(SdkBaseModel):
    interconnect_name: str = Field(alias="interconnectName")
    """The name of the interconnect."""

    bandwidth: str
    """The port bandwidth, in Gbps. The possible values are 1, 10, and 100."""

    location: str
    """The location of the interconnect."""

    lag_id: Optional[str] = Field(default=UNSET, alias="lagId")
    """The ID of the LAG."""

    tags: Optional[list[TagModel]] = UNSET
    """The tags to associate with the interconnect."""

    provider_name: Optional[str] = Field(default=UNSET, alias="providerName")
    """The name of the service provider associated with the interconnect."""

    request_mac_sec: Optional[bool] = Field(default=UNSET, alias="requestMACSec")
    """Indicates whether you want the interconnect to support MAC Security (MACsec)."""


class CreateInterconnectRequestDict(TypedDict):
    interconnect_name: str
    bandwidth: str
    location: str
    lag_id: NotRequired[str]
    tags: NotRequired[list[TagModelDict]]
    provider_name: NotRequired[str]
    request_mac_sec: NotRequired[bool]
