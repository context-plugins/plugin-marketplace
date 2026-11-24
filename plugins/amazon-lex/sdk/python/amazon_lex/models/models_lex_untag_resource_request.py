from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel


class ModelsLexUntagResourceRequest(SdkBaseModel):
    resource_arn: str = Field(alias="resourceArn")
    """The Amazon Resource Name (ARN) of the resource to remove the tags from."""

    tag_keys: list[str] = Field(alias="tagKeys")
    """A list of tag keys to remove from the resource. If a tag key does not exist on the resource, it is ignored."""


class ModelsLexUntagResourceRequestDict(TypedDict):
    resource_arn: str
    tag_keys: list[str]
