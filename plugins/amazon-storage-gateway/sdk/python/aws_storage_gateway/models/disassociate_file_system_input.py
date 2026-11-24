from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class DisassociateFileSystemInput(SdkBaseModel):
    file_system_association_arn: str = Field(alias="FileSystemAssociationARN")
    """The Amazon Resource Name (ARN) of the file system association to be deleted."""

    force_delete: Optional[bool] = Field(default=UNSET, alias="ForceDelete")
    """If this value is set to true, the operation disassociates an Amazon FSx file system immediately. It ends all data
    uploads to the file system, and the file system association enters the FORCE_DELETING status. If this value is set
    to false, the Amazon FSx file system does not disassociate until all data is uploaded."""


class DisassociateFileSystemInputDict(TypedDict):
    file_system_association_arn: str
    force_delete: NotRequired[bool]
