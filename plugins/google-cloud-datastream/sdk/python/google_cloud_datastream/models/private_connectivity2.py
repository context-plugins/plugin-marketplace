from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class PrivateConnectivity2(SdkBaseModel):
    """Private connectivity."""

    private_connection: Optional[str] = Field(default=UNSET, alias="privateConnection")
    """Required. A reference to a private connection resource. Format:
    ``projects/{project}/locations/{location}/privateConnections/{name}``"""


class PrivateConnectivity2Dict(TypedDict):
    private_connection: NotRequired[str]
