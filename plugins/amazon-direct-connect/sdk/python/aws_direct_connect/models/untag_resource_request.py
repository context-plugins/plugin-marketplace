from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel


class UntagResourceRequest(SdkBaseModel):
    resource_arn: str = Field(alias="resourceArn")
    """The Amazon Resource Name (ARN) of the resource."""

    tag_keys: list[str] = Field(alias="tagKeys")
    """The tag keys of the tags to remove."""


class UntagResourceRequestDict(TypedDict):
    resource_arn: str
    tag_keys: list[str]
