from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel


class UntagResourceRequest(SdkBaseModel):
    resource_arn: str = Field(alias="ResourceARN")
    """The Amazon Resource Number (ARN) of an X-Ray group or sampling rule."""

    tag_keys: list[str] = Field(alias="TagKeys")
    """Keys for one or more tags that you want to remove from an X-Ray group or sampling rule."""


class UntagResourceRequestDict(TypedDict):
    resource_arn: str
    tag_keys: list[str]
