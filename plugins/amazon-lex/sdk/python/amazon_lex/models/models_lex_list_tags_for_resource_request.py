from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel


class ModelsLexListTagsForResourceRequest(SdkBaseModel):
    resource_arn: str = Field(alias="resourceArn")
    """The Amazon Resource Name (ARN) of the resource to get a list of tags for."""


class ModelsLexListTagsForResourceRequestDict(TypedDict):
    resource_arn: str
