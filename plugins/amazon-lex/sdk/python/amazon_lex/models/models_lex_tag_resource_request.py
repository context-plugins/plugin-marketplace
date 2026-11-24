from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .tag_model import TagModel, TagModelDict


class ModelsLexTagResourceRequest(SdkBaseModel):
    resource_arn: str = Field(alias="resourceArn")
    """The Amazon Resource Name (ARN) of the bot, bot alias, or bot channel to tag."""

    tags: list[TagModel]
    """A list of tag keys to add to the resource. If a tag key already exists, the existing value is replaced with the
    new value."""


class ModelsLexTagResourceRequestDict(TypedDict):
    resource_arn: str
    tags: list[TagModelDict]
