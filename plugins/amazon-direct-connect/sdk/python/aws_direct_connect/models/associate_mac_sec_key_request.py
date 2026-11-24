from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class AssociateMacSecKeyRequest(SdkBaseModel):
    connection_id: str = Field(alias="connectionId")
    """The ID of the dedicated connection (dxcon-xxxx), interconnect (dxcon-xxxx), or LAG (dxlag-xxxx). You can use
    DescribeConnections, DescribeInterconnects, or DescribeLags to retrieve connection ID."""

    secret_arn: Optional[str] = Field(default=UNSET, alias="secretARN")
    """The Amazon Resource Name (ARN) of the MAC Security (MACsec) secret key to associate with the connection. You can
    use DescribeConnections or DescribeLags to retrieve the MAC Security (MACsec) secret key. If you use this request
    parameter, you do not use the ckn and cak request parameters."""

    ckn: Optional[str] = UNSET
    """The MAC Security (MACsec) CKN to associate with the connection. You can create the CKN/CAK pair using an industry
    standard tool. The valid values are 64 hexadecimal characters (0-9, A-E). If you use this request parameter, you
    must use the cak request parameter and not use the secretARN request parameter."""

    cak: Optional[str] = UNSET
    """The MAC Security (MACsec) CAK to associate with the connection. You can create the CKN/CAK pair using an industry
    standard tool. The valid values are 64 hexadecimal characters (0-9, A-E). If you use this request parameter, you
    must use the ckn request parameter and not use the secretARN request parameter."""


class AssociateMacSecKeyRequestDict(TypedDict):
    connection_id: str
    secret_arn: NotRequired[str]
    ckn: NotRequired[str]
    cak: NotRequired[str]
