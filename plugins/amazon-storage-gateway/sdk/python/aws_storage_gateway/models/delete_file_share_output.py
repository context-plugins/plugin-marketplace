from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class DeleteFileShareOutput(SdkBaseModel):
    file_share_arn: Optional[str] = Field(default=UNSET, alias="FileShareARN")
    """The Amazon Resource Name (ARN) of the deleted file share."""


class DeleteFileShareOutputDict(TypedDict):
    file_share_arn: NotRequired[str]
