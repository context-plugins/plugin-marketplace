from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel


class DescribeFileSystemAssociationsInput(SdkBaseModel):
    file_system_association_arn_list: list[str] = Field(alias="FileSystemAssociationARNList")
    """An array containing the Amazon Resource Name (ARN) of each file system association to be described."""


class DescribeFileSystemAssociationsInputDict(TypedDict):
    file_system_association_arn_list: list[str]
