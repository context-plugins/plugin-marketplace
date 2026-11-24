from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class UpdateNfsFileShareOutput(SdkBaseModel):
    file_share_arn: Optional[str] = Field(default=UNSET, alias="FileShareARN")
    """The Amazon Resource Name (ARN) of the updated file share."""


class UpdateNfsFileShareOutputDict(TypedDict):
    file_share_arn: NotRequired[str]
