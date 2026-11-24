from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel


class TagResourceRequest(SdkBaseModel):
    resource_arn: str = Field(alias="ResourceArn")
    """Amazon Resource Name (ARN) of the model, collection, or stream processor that you want to assign the tags to."""

    tags: dict[str, str] = Field(alias="Tags")
    """The key-value tags to assign to the resource."""


class TagResourceRequestDict(TypedDict):
    resource_arn: str
    tags: dict[str, str]
