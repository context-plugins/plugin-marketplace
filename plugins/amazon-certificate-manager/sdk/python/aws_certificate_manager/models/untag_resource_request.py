from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel


class UntagResourceRequest(SdkBaseModel):
    resource_arn: str = Field(alias="ResourceArn")
    """The ARN of the ACM resource from which the tag is to be removed."""

    tag_keys: list[str] = Field(alias="TagKeys")
    """The key of each tag to remove."""


class UntagResourceRequestDict(TypedDict):
    resource_arn: str
    tag_keys: list[str]
