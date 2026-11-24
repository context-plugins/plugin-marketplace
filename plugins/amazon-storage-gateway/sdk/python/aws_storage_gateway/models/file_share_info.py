from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.file_share_type import FileShareTypeOrStr


class FileShareInfo(SdkBaseModel):
    file_share_type: Optional[FileShareTypeOrStr] = Field(default=UNSET, alias="FileShareType")
    file_share_arn: Optional[str] = Field(default=UNSET, alias="FileShareARN")
    file_share_id: Optional[str] = Field(default=UNSET, alias="FileShareId")
    file_share_status: Optional[str] = Field(default=UNSET, alias="FileShareStatus")
    gateway_arn: Optional[str] = Field(default=UNSET, alias="GatewayARN")


class FileShareInfoDict(TypedDict):
    file_share_type: NotRequired[FileShareTypeOrStr]
    file_share_arn: NotRequired[str]
    file_share_id: NotRequired[str]
    file_share_status: NotRequired[str]
    gateway_arn: NotRequired[str]
