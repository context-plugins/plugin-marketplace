from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .nfs_file_share_info import NfsFileShareInfo, NfsFileShareInfoDict


class DescribeNfsFileSharesOutput(SdkBaseModel):
    nfs_file_share_info_list: Optional[list[NfsFileShareInfo]] = Field(default=UNSET, alias="NFSFileShareInfoList")
    """An array containing a description for each requested file share."""


class DescribeNfsFileSharesOutputDict(TypedDict):
    nfs_file_share_info_list: NotRequired[list[NfsFileShareInfoDict]]
