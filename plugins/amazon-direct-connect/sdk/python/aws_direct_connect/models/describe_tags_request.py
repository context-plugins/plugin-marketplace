from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel


class DescribeTagsRequest(SdkBaseModel):
    resource_arns: list[str] = Field(alias="resourceArns")
    """The Amazon Resource Names (ARNs) of the resources."""


class DescribeTagsRequestDict(TypedDict):
    resource_arns: list[str]
