from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class JoinDomainInput(SdkBaseModel):
    gateway_arn: str = Field(alias="GatewayARN")
    """The Amazon Resource Name (ARN) of the gateway. Use the ListGateways operation to return a list of gateways for
    your account and Amazon Web Services Region."""

    domain_name: str = Field(alias="DomainName")
    """The name of the domain that you want the gateway to join."""

    organizational_unit: Optional[str] = Field(default=UNSET, alias="OrganizationalUnit")
    """The organizational unit (OU) is a container in an Active Directory that can hold users, groups, computers, and
    other OUs and this parameter specifies the OU that the gateway will join within the AD domain."""

    domain_controllers: Optional[list[str]] = Field(default=UNSET, alias="DomainControllers")
    """List of IP addresses, NetBIOS names, or host names of your domain server. If you need to specify the port number
    include it after the colon (“:”). For example, mydc.mydomain.com:389. S3 File Gateway supports IPv6 addresses in
    addition to IPv4 and other existing formats. FSx File Gateway does not support IPv6."""

    timeout_in_seconds: Optional[int] = Field(default=UNSET, alias="TimeoutInSeconds")
    """Specifies the time in seconds, in which the JoinDomain operation must complete. The default is 20 seconds."""

    user_name: str = Field(alias="UserName")
    """Sets the user name of user who has permission to add the gateway to the Active Directory domain. The domain user
    account should be enabled to join computers to the domain. For example, you can use the domain administrator account
    or an account with delegated permissions to join computers to the domain."""

    password: str = Field(alias="Password")
    """Sets the password of the user who has permission to add the gateway to the Active Directory domain."""


class JoinDomainInputDict(TypedDict):
    gateway_arn: str
    domain_name: str
    organizational_unit: NotRequired[str]
    domain_controllers: NotRequired[list[str]]
    timeout_in_seconds: NotRequired[int]
    user_name: str
    password: str
