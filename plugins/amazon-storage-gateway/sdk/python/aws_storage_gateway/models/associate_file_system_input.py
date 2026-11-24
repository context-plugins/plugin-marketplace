from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .cache_attributes import CacheAttributes, CacheAttributesDict
from .endpoint_network_configuration import EndpointNetworkConfiguration, EndpointNetworkConfigurationDict
from .tag_model import TagModel, TagModelDict


class AssociateFileSystemInput(SdkBaseModel):
    user_name: str = Field(alias="UserName")
    """The user name of the user credential that has permission to access the root share D$ of the Amazon FSx file
    system. The user account must belong to the Amazon FSx delegated admin user group."""

    password: str = Field(alias="Password")
    """The password of the user credential."""

    client_token: str = Field(alias="ClientToken")
    """A unique string value that you supply that is used by the FSx File Gateway to ensure idempotent file system
    association creation."""

    gateway_arn: str = Field(alias="GatewayARN")
    location_arn: str = Field(alias="LocationARN")
    """The Amazon Resource Name (ARN) of the Amazon FSx file system to associate with the FSx File Gateway."""

    tags: Optional[list[TagModel]] = Field(default=UNSET, alias="Tags")
    """A list of up to 50 tags that can be assigned to the file system association. Each tag is a key-value pair."""

    audit_destination_arn: Optional[str] = Field(default=UNSET, alias="AuditDestinationARN")
    """The Amazon Resource Name (ARN) of the storage used for the audit logs."""

    cache_attributes: Optional[CacheAttributes] = Field(default=UNSET, alias="CacheAttributes")
    endpoint_network_configuration: Optional[EndpointNetworkConfiguration] = Field(
        default=UNSET, alias="EndpointNetworkConfiguration"
    )


class AssociateFileSystemInputDict(TypedDict):
    user_name: str
    password: str
    client_token: str
    gateway_arn: str
    location_arn: str
    tags: NotRequired[list[TagModelDict]]
    audit_destination_arn: NotRequired[str]
    cache_attributes: NotRequired[CacheAttributesDict]
    endpoint_network_configuration: NotRequired[EndpointNetworkConfigurationDict]
