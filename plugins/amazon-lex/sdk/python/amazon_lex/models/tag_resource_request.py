from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel


class TagResourceRequest(SdkBaseModel):
    resource_arn: str = Field(alias="resourceARN")
    """The Amazon Resource Name (ARN) of the bot, bot alias, or bot channel to tag."""

    tags: dict[str, str]
    """A list of tag keys to add to the resource. If a tag key already exists, the existing value is replaced with the
    new value."""


class TagResourceRequestDict(TypedDict):
    resource_arn: str
    tags: dict[str, str]
