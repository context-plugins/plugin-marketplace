from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel


class DisassociateMacSecKeyRequest(SdkBaseModel):
    connection_id: str = Field(alias="connectionId")
    """The ID of the dedicated connection (dxcon-xxxx), interconnect (dxcon-xxxx), or LAG (dxlag-xxxx). You can use
    DescribeConnections, DescribeInterconnects, or DescribeLags to retrieve connection ID."""

    secret_arn: str = Field(alias="secretARN")
    """The Amazon Resource Name (ARN) of the MAC Security (MACsec) secret key. You can use DescribeConnections to
    retrieve the ARN of the MAC Security (MACsec) secret key."""


class DisassociateMacSecKeyRequestDict(TypedDict):
    connection_id: str
    secret_arn: str
