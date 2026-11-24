from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel


class AssociateConnectionWithLagRequest(SdkBaseModel):
    connection_id: str = Field(alias="connectionId")
    """The ID of the connection."""

    lag_id: str = Field(alias="lagId")
    """The ID of the LAG with which to associate the connection."""


class AssociateConnectionWithLagRequestDict(TypedDict):
    connection_id: str
    lag_id: str
