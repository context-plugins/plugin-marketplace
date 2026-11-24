from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.active_directory_status import ActiveDirectoryStatusOrStr
from .enums.smb_security_strategy import SmbSecurityStrategyOrStr
from .smb_local_groups import SmbLocalGroups, SmbLocalGroupsDict


class DescribeSmbSettingsOutput(SdkBaseModel):
    gateway_arn: Optional[str] = Field(default=UNSET, alias="GatewayARN")
    domain_name: Optional[str] = Field(default=UNSET, alias="DomainName")
    """The name of the domain that the gateway is joined to."""

    active_directory_status: Optional[ActiveDirectoryStatusOrStr] = Field(default=UNSET, alias="ActiveDirectoryStatus")
    """Indicates the status of a gateway that is a member of the Active Directory domain. This field is only used as
    part of a JoinDomain request. It is not affected by Active Directory connectivity changes that occur after the
    JoinDomain request succeeds. ACCESS_DENIED: Indicates that the JoinDomain operation failed due to an authentication
    error. DETACHED: Indicates that gateway is not joined to a domain. JOINED: Indicates that the gateway has
    successfully joined a domain. JOINING: Indicates that a JoinDomain operation is in progress. NETWORK_ERROR:
    Indicates that JoinDomain operation failed due to"""

    smb_guest_password_set: Optional[bool] = Field(default=UNSET, alias="SMBGuestPasswordSet")
    """This value is true if a password for the guest user smbguest is set, otherwise false. Only supported for S3 File
    Gateways. Valid Values: true | false"""

    smb_security_strategy: Optional[SmbSecurityStrategyOrStr] = Field(default=UNSET, alias="SMBSecurityStrategy")
    """The type of security strategy that was specified for file gateway. ClientSpecified: If you choose this option,
    requests are established based on what is negotiated by the client. This option is recommended when you want to
    maximize compatibility across different clients in your environment. Supported only for S3 File Gateway.
    MandatorySigning: If you choose this option, File Gateway only allows connections from SMBv2 or SMBv3 clients that
    have signing turned on. This option works with SMB clients on Microsoft Windows Vista, Windows Server 2008, or
    later. MandatoryEncryption: If you choose this"""

    file_shares_visible: Optional[bool] = Field(default=UNSET, alias="FileSharesVisible")
    """The shares on this gateway appear when listing shares. Only supported for S3 File Gateways."""

    smb_local_groups: Optional[SmbLocalGroups] = Field(default=UNSET, alias="SMBLocalGroups")


class DescribeSmbSettingsOutputDict(TypedDict):
    gateway_arn: NotRequired[str]
    domain_name: NotRequired[str]
    active_directory_status: NotRequired[ActiveDirectoryStatusOrStr]
    smb_guest_password_set: NotRequired[bool]
    smb_security_strategy: NotRequired[SmbSecurityStrategyOrStr]
    file_shares_visible: NotRequired[bool]
    smb_local_groups: NotRequired[SmbLocalGroupsDict]
