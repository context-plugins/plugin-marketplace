from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel


class RemoveTagsFromResourceInput(SdkBaseModel):
    resource_arn: str = Field(alias="ResourceARN")
    """The Amazon Resource Name (ARN) of the resource you want to remove the tags from."""

    tag_keys: list[str] = Field(alias="TagKeys")
    """The keys of the tags you want to remove from the specified resource. A tag is composed of a key-value pair."""


class RemoveTagsFromResourceInputDict(TypedDict):
    resource_arn: str
    tag_keys: list[str]
