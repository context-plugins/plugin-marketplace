from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .resource_tag import ResourceTag, ResourceTagDict


class TagResourceInput(SdkBaseModel):
    resource_arn: str = Field(alias="resourceArn")
    """The Amazon Resource Name (ARN) for the Amazon SWF domain."""

    tags: list[ResourceTag]
    """The list of tags to add to a domain. Tags may only contain unicode letters, digits, whitespace, or these symbols:
    _ . : / = + - @."""


class TagResourceInputDict(TypedDict):
    resource_arn: str
    tags: list[ResourceTagDict]
