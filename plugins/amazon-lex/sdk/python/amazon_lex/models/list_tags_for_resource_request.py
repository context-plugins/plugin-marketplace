from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel


class ListTagsForResourceRequest(SdkBaseModel):
    resource_arn: str = Field(alias="resourceARN")
    """The Amazon Resource Name (ARN) of the resource to get a list of tags for."""


class ListTagsForResourceRequestDict(TypedDict):
    resource_arn: str
