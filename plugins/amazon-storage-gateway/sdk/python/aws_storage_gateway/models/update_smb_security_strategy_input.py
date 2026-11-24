from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .enums.smb_security_strategy1 import SmbSecurityStrategy1OrStr


class UpdateSmbSecurityStrategyInput(SdkBaseModel):
    gateway_arn: str = Field(alias="GatewayARN")
    smb_security_strategy: SmbSecurityStrategy1OrStr = Field(alias="SMBSecurityStrategy")
    """Specifies the type of security strategy. ClientSpecified: If you choose this option, requests are established
    based on what is negotiated by the client. This option is recommended when you want to maximize compatibility across
    different clients in your environment. Supported only for S3 File Gateway. MandatorySigning: If you choose this
    option, File Gateway only allows connections from SMBv2 or SMBv3 clients that have signing enabled. This option
    works with SMB clients on Microsoft Windows Vista, Windows Server 2008 or newer. MandatoryEncryption: If you choose
    this option, File Gateway only al"""


class UpdateSmbSecurityStrategyInputDict(TypedDict):
    gateway_arn: str
    smb_security_strategy: SmbSecurityStrategy1OrStr
