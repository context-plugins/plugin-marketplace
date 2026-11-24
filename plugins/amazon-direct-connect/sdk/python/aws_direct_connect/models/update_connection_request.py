from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class UpdateConnectionRequest(SdkBaseModel):
    connection_id: str = Field(alias="connectionId")
    """The ID of the connection. You can use DescribeConnections to retrieve the connection ID."""

    connection_name: Optional[str] = Field(default=UNSET, alias="connectionName")
    """The name of the connection."""

    encryption_mode: Optional[str] = Field(default=UNSET, alias="encryptionMode")
    """The connection MAC Security (MACsec) encryption mode. The valid values are no_encrypt, should_encrypt, and
    must_encrypt."""


class UpdateConnectionRequestDict(TypedDict):
    connection_id: str
    connection_name: NotRequired[str]
    encryption_mode: NotRequired[str]
