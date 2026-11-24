from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel


class UntagResourceRequest(SdkBaseModel):
    resource_arn: str = Field(alias="ResourceArn")
    """The Amazon Resource Name (ARN) that identifies the resource for which to list the tags."""

    tag_keys: list[str] = Field(alias="TagKeys")
    """The keys of the tags to be removed."""


class UntagResourceRequestDict(TypedDict):
    resource_arn: str
    tag_keys: list[str]
