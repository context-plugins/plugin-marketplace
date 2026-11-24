from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel


class UntagResourceInput(SdkBaseModel):
    resource_arn: str = Field(alias="resourceArn")
    """The Amazon Resource Name (ARN) for the Amazon SWF domain."""

    tag_keys: list[str] = Field(alias="tagKeys")
    """The list of tags to remove from the Amazon SWF domain."""


class UntagResourceInputDict(TypedDict):
    resource_arn: str
    tag_keys: list[str]
