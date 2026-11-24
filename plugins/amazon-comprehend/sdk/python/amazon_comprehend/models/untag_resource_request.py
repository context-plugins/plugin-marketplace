from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel


class UntagResourceRequest(SdkBaseModel):
    resource_arn: str = Field(alias="ResourceArn")
    """The Amazon Resource Name (ARN) of the given Amazon Comprehend resource from which you want to remove the tags."""

    tag_keys: list[str] = Field(alias="TagKeys")
    """The initial part of a key-value pair that forms a tag being removed from a given resource. For example, a tag
    with "Sales" as the key might be added to a resource to indicate its use by the sales department. Keys must be
    unique and cannot be duplicated for a particular resource."""


class UntagResourceRequestDict(TypedDict):
    resource_arn: str
    tag_keys: list[str]
