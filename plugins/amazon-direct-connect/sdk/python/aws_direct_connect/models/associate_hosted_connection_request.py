from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel


class AssociateHostedConnectionRequest(SdkBaseModel):
    connection_id: str = Field(alias="connectionId")
    """The ID of the hosted connection."""

    parent_connection_id: str = Field(alias="parentConnectionId")
    """The ID of the interconnect or the LAG."""


class AssociateHostedConnectionRequestDict(TypedDict):
    connection_id: str
    parent_connection_id: str
