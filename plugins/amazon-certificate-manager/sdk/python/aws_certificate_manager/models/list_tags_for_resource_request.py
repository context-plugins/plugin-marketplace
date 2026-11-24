from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel


class ListTagsForResourceRequest(SdkBaseModel):
    resource_arn: str = Field(alias="ResourceArn")
    """The ARN of the ACM resource for which to list tags."""


class ListTagsForResourceRequestDict(TypedDict):
    resource_arn: str
