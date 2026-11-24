from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel


class UntagResourceRequest(SdkBaseModel):
    resource_arn: str = Field(alias="ResourceArn")
    """Amazon Resource Name (ARN) of the model, collection, or stream processor that you want to remove the tags
    from."""

    tag_keys: list[str] = Field(alias="TagKeys")
    """A list of the tags that you want to remove."""


class UntagResourceRequestDict(TypedDict):
    resource_arn: str
    tag_keys: list[str]
