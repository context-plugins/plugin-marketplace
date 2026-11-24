from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel


class DescribeConnectionsOnInterconnectRequest(SdkBaseModel):
    interconnect_id: str = Field(alias="interconnectId")
    """The ID of the interconnect."""


class DescribeConnectionsOnInterconnectRequestDict(TypedDict):
    interconnect_id: str
