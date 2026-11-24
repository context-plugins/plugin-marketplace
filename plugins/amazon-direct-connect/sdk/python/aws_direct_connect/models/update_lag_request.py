from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class UpdateLagRequest(SdkBaseModel):
    lag_id: str = Field(alias="lagId")
    """The ID of the LAG."""

    lag_name: Optional[str] = Field(default=UNSET, alias="lagName")
    """The name of the LAG."""

    minimum_links: Optional[int] = Field(default=UNSET, alias="minimumLinks")
    """The minimum number of physical connections that must be operational for the LAG itself to be operational."""

    encryption_mode: Optional[str] = Field(default=UNSET, alias="encryptionMode")
    """The LAG MAC Security (MACsec) encryption mode. Amazon Web Services applies the value to all connections which are
    part of the LAG."""


class UpdateLagRequestDict(TypedDict):
    lag_id: str
    lag_name: NotRequired[str]
    minimum_links: NotRequired[int]
    encryption_mode: NotRequired[str]
