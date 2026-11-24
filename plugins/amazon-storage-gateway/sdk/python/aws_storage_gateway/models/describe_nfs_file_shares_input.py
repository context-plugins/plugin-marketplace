from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel


class DescribeNfsFileSharesInput(SdkBaseModel):
    file_share_arn_list: list[str] = Field(alias="FileShareARNList")
    """An array containing the Amazon Resource Name (ARN) of each file share to be described."""


class DescribeNfsFileSharesInputDict(TypedDict):
    file_share_arn_list: list[str]
