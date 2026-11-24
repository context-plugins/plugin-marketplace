from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class ClientInfo(SdkBaseModel):
    """Client connection information for an audit event"""

    ip_address: Optional[str] = Field(default=UNSET, alias="ipAddress")
    """IP address from which the action was performed"""

    country: Optional[str] = UNSET
    """Country resolved from the IP address"""


class ClientInfoDict(TypedDict):
    ip_address: NotRequired[str]
    country: NotRequired[str]
