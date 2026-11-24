from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class UpdateSmbFileShareOutput(SdkBaseModel):
    file_share_arn: Optional[str] = Field(default=UNSET, alias="FileShareARN")
    """The Amazon Resource Name (ARN) of the updated SMB file share."""


class UpdateSmbFileShareOutputDict(TypedDict):
    file_share_arn: NotRequired[str]
