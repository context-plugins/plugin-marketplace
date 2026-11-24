from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .file_system_association_info import FileSystemAssociationInfo, FileSystemAssociationInfoDict


class DescribeFileSystemAssociationsOutput(SdkBaseModel):
    file_system_association_info_list: Optional[list[FileSystemAssociationInfo]] = Field(
        default=UNSET, alias="FileSystemAssociationInfoList"
    )
    """An array containing the FileSystemAssociationInfo data type of each file system association to be described."""


class DescribeFileSystemAssociationsOutputDict(TypedDict):
    file_system_association_info_list: NotRequired[list[FileSystemAssociationInfoDict]]
