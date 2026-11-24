from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .mac_sec_key import MacSecKey, MacSecKeyDict


class AssociateMacSecKeyResponse(SdkBaseModel):
    connection_id: Optional[str] = Field(default=UNSET, alias="connectionId")
    """The ID of the dedicated connection (dxcon-xxxx), interconnect (dxcon-xxxx), or LAG (dxlag-xxxx)."""

    mac_sec_keys: Optional[list[MacSecKey]] = Field(default=UNSET, alias="macSecKeys")
    """The MAC Security (MACsec) security keys associated with the connection."""


class AssociateMacSecKeyResponseDict(TypedDict):
    connection_id: NotRequired[str]
    mac_sec_keys: NotRequired[list[MacSecKeyDict]]
