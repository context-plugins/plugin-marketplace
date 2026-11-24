from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class FileSystemAssociationSummary(SdkBaseModel):
    file_system_association_id: Optional[str] = Field(default=UNSET, alias="FileSystemAssociationId")
    """The ID of the file system association."""

    file_system_association_arn: Optional[str] = Field(default=UNSET, alias="FileSystemAssociationARN")
    """The Amazon Resource Name (ARN) of the file system association."""

    file_system_association_status: Optional[str] = Field(default=UNSET, alias="FileSystemAssociationStatus")
    """The status of the file share. Valid Values: AVAILABLE | CREATING | DELETING | FORCE_DELETING | UPDATING |
    ERROR"""

    gateway_arn: Optional[str] = Field(default=UNSET, alias="GatewayARN")


class FileSystemAssociationSummaryDict(TypedDict):
    file_system_association_id: NotRequired[str]
    file_system_association_arn: NotRequired[str]
    file_system_association_status: NotRequired[str]
    gateway_arn: NotRequired[str]
