from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel


class ListTagsForResourceRequest(SdkBaseModel):
    resource_arn: str = Field(alias="ResourceArn")
    """Amazon Resource Name (ARN) of the model, collection, or stream processor that contains the tags that you want a
    list of."""


class ListTagsForResourceRequestDict(TypedDict):
    resource_arn: str
