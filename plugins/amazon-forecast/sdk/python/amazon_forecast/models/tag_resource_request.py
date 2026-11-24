from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .tag_model import TagModel, TagModelDict


class TagResourceRequest(SdkBaseModel):
    resource_arn: str = Field(alias="ResourceArn")
    """The Amazon Resource Name (ARN) that identifies the resource for which to list the tags."""

    tags: list[TagModel] = Field(alias="Tags")
    """The tags to add to the resource. A tag is an array of key-value pairs. The following basic restrictions apply to
    tags: Maximum number of tags per resource - 50. For each resource, each tag key must be unique, and each tag key can
    have only one value. Maximum key length - 128 Unicode characters in UTF-8. Maximum value length - 256 Unicode
    characters in UTF-8. If your tagging schema is used across multiple services and resources, remember that other
    services may have restrictions on allowed characters. Generally allowed characters are: letters, numbers, and spaces
    representable in UTF-8, and the"""


class TagResourceRequestDict(TypedDict):
    resource_arn: str
    tags: list[TagModelDict]
