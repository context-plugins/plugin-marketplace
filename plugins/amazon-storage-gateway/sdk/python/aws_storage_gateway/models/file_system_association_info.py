from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .cache_attributes import CacheAttributes, CacheAttributesDict
from .endpoint_network_configuration import EndpointNetworkConfiguration, EndpointNetworkConfigurationDict
from .file_system_association_status_detail import (
    FileSystemAssociationStatusDetail,
    FileSystemAssociationStatusDetailDict,
)
from .tag_model import TagModel, TagModelDict


class FileSystemAssociationInfo(SdkBaseModel):
    file_system_association_arn: Optional[str] = Field(default=UNSET, alias="FileSystemAssociationARN")
    """The Amazon Resource Name (ARN) of the file system association."""

    location_arn: Optional[str] = Field(default=UNSET, alias="LocationARN")
    """The ARN of the backend Amazon FSx file system used for storing file data. For information, see FileSystem in the
    Amazon FSx API Reference."""

    file_system_association_status: Optional[str] = Field(default=UNSET, alias="FileSystemAssociationStatus")
    """The status of the file system association. Valid Values: AVAILABLE | CREATING | DELETING | FORCE_DELETING |
    UPDATING | ERROR"""

    audit_destination_arn: Optional[str] = Field(default=UNSET, alias="AuditDestinationARN")
    """The Amazon Resource Name (ARN) of the storage used for the audit logs."""

    gateway_arn: Optional[str] = Field(default=UNSET, alias="GatewayARN")
    tags: Optional[list[TagModel]] = Field(default=UNSET, alias="Tags")
    """A list of up to 50 tags assigned to the SMB file share, sorted alphabetically by key name. Each tag is a
    key-value pair."""

    cache_attributes: Optional[CacheAttributes] = Field(default=UNSET, alias="CacheAttributes")
    endpoint_network_configuration: Optional[EndpointNetworkConfiguration] = Field(
        default=UNSET, alias="EndpointNetworkConfiguration"
    )
    file_system_association_status_details: Optional[list[FileSystemAssociationStatusDetail]] = Field(
        default=UNSET, alias="FileSystemAssociationStatusDetails"
    )
    """An array containing the FileSystemAssociationStatusDetail data type, which provides detailed information on file
    system association status."""


class FileSystemAssociationInfoDict(TypedDict):
    file_system_association_arn: NotRequired[str]
    location_arn: NotRequired[str]
    file_system_association_status: NotRequired[str]
    audit_destination_arn: NotRequired[str]
    gateway_arn: NotRequired[str]
    tags: NotRequired[list[TagModelDict]]
    cache_attributes: NotRequired[CacheAttributesDict]
    endpoint_network_configuration: NotRequired[EndpointNetworkConfigurationDict]
    file_system_association_status_details: NotRequired[list[FileSystemAssociationStatusDetailDict]]
