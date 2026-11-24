from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class DescribeDirectConnectGatewayAttachmentsRequest(SdkBaseModel):
    direct_connect_gateway_id: Optional[str] = Field(default=UNSET, alias="directConnectGatewayId")
    """The ID of the Direct Connect gateway."""

    virtual_interface_id: Optional[str] = Field(default=UNSET, alias="virtualInterfaceId")
    """The ID of the virtual interface."""

    max_results: Optional[int] = Field(default=UNSET, alias="maxResults")
    """The maximum number of results to return with a single call. To retrieve the remaining results, make another call
    with the returned nextToken value. If MaxResults is given a value larger than 100, only 100 results are returned."""

    next_token: Optional[str] = Field(default=UNSET, alias="nextToken")
    """The token provided in the previous call to retrieve the next page."""


class DescribeDirectConnectGatewayAttachmentsRequestDict(TypedDict):
    direct_connect_gateway_id: NotRequired[str]
    virtual_interface_id: NotRequired[str]
    max_results: NotRequired[int]
    next_token: NotRequired[str]
