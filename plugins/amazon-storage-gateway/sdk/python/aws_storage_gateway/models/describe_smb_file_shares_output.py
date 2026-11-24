from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .smb_file_share_info import SmbFileShareInfo, SmbFileShareInfoDict


class DescribeSmbFileSharesOutput(SdkBaseModel):
    smb_file_share_info_list: Optional[list[SmbFileShareInfo]] = Field(default=UNSET, alias="SMBFileShareInfoList")
    """An array containing a description for each requested file share."""


class DescribeSmbFileSharesOutputDict(TypedDict):
    smb_file_share_info_list: NotRequired[list[SmbFileShareInfoDict]]
