from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel


class NotifyWhenUploadedInput(SdkBaseModel):
    file_share_arn: str = Field(alias="FileShareARN")


class NotifyWhenUploadedInputDict(TypedDict):
    file_share_arn: str
