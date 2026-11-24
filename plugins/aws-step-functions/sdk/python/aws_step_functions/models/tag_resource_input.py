from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .tag_model import TagModel, TagModelDict


class TagResourceInput(SdkBaseModel):
    resource_arn: str = Field(alias="resourceArn")
    """The Amazon Resource Name (ARN) for the Step Functions state machine or activity."""

    tags: list[TagModel]
    """The list of tags to add to a resource. Tags may only contain Unicode letters, digits, white space, or these
    symbols: _ . : / = + - @."""


class TagResourceInputDict(TypedDict):
    resource_arn: str
    tags: list[TagModelDict]
