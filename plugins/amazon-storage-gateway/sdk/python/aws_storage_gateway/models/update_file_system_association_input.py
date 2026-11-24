from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .cache_attributes import CacheAttributes, CacheAttributesDict


class UpdateFileSystemAssociationInput(SdkBaseModel):
    file_system_association_arn: str = Field(alias="FileSystemAssociationARN")
    """The Amazon Resource Name (ARN) of the file system association that you want to update."""

    user_name: Optional[str] = Field(default=UNSET, alias="UserName")
    """The user name of the user credential that has permission to access the root share D$ of the Amazon FSx file
    system. The user account must belong to the Amazon FSx delegated admin user group."""

    password: Optional[str] = Field(default=UNSET, alias="Password")
    """The password of the user credential."""

    audit_destination_arn: Optional[str] = Field(default=UNSET, alias="AuditDestinationARN")
    """The Amazon Resource Name (ARN) of the storage used for the audit logs."""

    cache_attributes: Optional[CacheAttributes] = Field(default=UNSET, alias="CacheAttributes")


class UpdateFileSystemAssociationInputDict(TypedDict):
    file_system_association_arn: str
    user_name: NotRequired[str]
    password: NotRequired[str]
    audit_destination_arn: NotRequired[str]
    cache_attributes: NotRequired[CacheAttributesDict]
