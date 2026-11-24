from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .direct_connect_gateway_attachment import DirectConnectGatewayAttachment, DirectConnectGatewayAttachmentDict


class DescribeDirectConnectGatewayAttachmentsResult(SdkBaseModel):
    direct_connect_gateway_attachments: Optional[list[DirectConnectGatewayAttachment]] = Field(
        default=UNSET, alias="directConnectGatewayAttachments"
    )
    """The attachments."""

    next_token: Optional[str] = Field(default=UNSET, alias="nextToken")
    """The token to retrieve the next page."""


class DescribeDirectConnectGatewayAttachmentsResultDict(TypedDict):
    direct_connect_gateway_attachments: NotRequired[list[DirectConnectGatewayAttachmentDict]]
    next_token: NotRequired[str]
