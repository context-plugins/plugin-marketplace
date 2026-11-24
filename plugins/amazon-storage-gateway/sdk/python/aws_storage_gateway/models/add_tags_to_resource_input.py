from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .tag_model import TagModel, TagModelDict


class AddTagsToResourceInput(SdkBaseModel):
    resource_arn: str = Field(alias="ResourceARN")
    """The Amazon Resource Name (ARN) of the resource you want to add tags to."""

    tags: list[TagModel] = Field(alias="Tags")
    """The key-value pair that represents the tag you want to add to the resource. The value can be an empty string.
    Valid characters for key and value are letters, spaces, and numbers representable in UTF-8 format, and the following
    special characters: + - = . _ : / @. The maximum length of a tag's key is 128 characters, and the maximum length for
    a tag's value is 256."""


class AddTagsToResourceInputDict(TypedDict):
    resource_arn: str
    tags: list[TagModelDict]
