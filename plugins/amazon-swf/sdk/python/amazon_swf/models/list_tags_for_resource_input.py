from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel


class ListTagsForResourceInput(SdkBaseModel):
    resource_arn: str = Field(alias="resourceArn")
    """The Amazon Resource Name (ARN) for the Amazon SWF domain."""


class ListTagsForResourceInputDict(TypedDict):
    resource_arn: str
