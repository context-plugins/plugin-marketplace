from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel


class ListTagsForResourceRequest(SdkBaseModel):
    resource_arn: str = Field(alias="ResourceArn")
    """The Amazon Resource Name (ARN) that identifies the resource for which to list the tags."""


class ListTagsForResourceRequestDict(TypedDict):
    resource_arn: str
